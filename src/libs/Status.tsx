import { Status } from "@/libs/Types";
import { UnitData } from "@/libs/DB";

export interface StatusTextType {
	unknown: boolean;
	display: Array<JSX.Element | JSX.Element[]>;
}

const actName: Record<string, string> = {
	acc: "적중",
	armorpierce: "방어 관통",
	atk: "공격력",
	ap: "AP",
	chance: "효과 발동",
	crit: "치명타",
	def: "방어력",
	dmg: "피해량",
	dp: "방어막/피해감소 무시",
	eva: "회피",
	exp: "획득 경험치",
	dr: "받는 피해",
	barrier: "방어막",
	hit: "지속피해",
	hp: "체력",
	"hp-atk": "공격력 비례 체력 감소",
	mindmg: "피해 최소화",
	off: "특정 효과 해제",
	range: "사거리",
	revive: "전투 속행",
	scout: "정찰 활성화",
	skill: "n번 스킬",
	spd: "행동력",
	stun: "행동 불가",
};

function prefixNum (data: string) {
	if (data[0] === "-") return data;
	return "+" + data;
}
function isNumeric (data: string) {
	return /^[0-9]+\.?[0-9]*%?$/.test(data);
}
function elemName (elem: string) {
	switch (elem) {
		case "fire": return "화염";
		case "chill": return "냉기";
		case "thunder": return "전기";
		default: return elem;
	}
}
function effectName (data: string) {
	const pmTable: Record<string, string> = {
		acc: "적중",
		armorpierce: "방어 관통",
		atk: "공격력",
		ap: "AP",
		chance: "효과 발동",
		crit: "치명타",
		def: "방어력",
		dmg: "피해량",
		eva: "회피",
		exp: "획득 경험치",
		hp: "체력",
		range: "사거리",
		resist1: "효과 저항",
		resist2: "속성 저항",
		spd: "행동력",
	};
	const cTable: Record<string, string> = {
		barrier: "방어막",
		dp: "방어막/피해감소 무시",
		hit: "지속피해",
		mindmg: "피해 최소화",
		resist3: "효과 무효",
		revive: "전투 속행",
		scout: "정찰",
		stun: "행동 불가",
	};

	if (data.startsWith("-")) {
		const t = data.substr(1);
		if (t in pmTable)
			return pmTable[t] + " 감소";
		else if (t in cTable)
			return cTable[t];
	} else {
		if (data in pmTable)
			return pmTable[data] + " 증가";
		else if (data in cTable)
			return cTable[data];
	}
	return "???";
}
function posName (pos: string) {
	switch (pos) {
		case "back": return "후열";
		case "mid": return "중열";
		case "front": return "전열";
	}
	return "???열";
}
export function StatusText (context: Vue, status: Status): StatusTextType {
	const h = context.$createElement;

	let unknown = false;
	const display = status.actions
		.map(x => {
			unknown = unknown || x.params.some(y => y.includes("?"));

			const p = x.params.map(x => x.replace(/\?/g, ""));
			const p0 = p.length > 0 ? p[0] : "";
			const p1 = p.length > 1 ? p[1] : "";
			const p2 = p.length > 2 ? p[2] : "";

			let disp: JSX.Element = <span />;
			const name = actName[x.act];

			switch (x.act) {
				case "atk":
				case "armorpierce":
				case "ap":
				case "chance":
				case "crit":
				case "def":
				case "dp":
				case "eva":
				case "exp":
				case "barrier":
				case "hp":
				case "range":
				case "spd":
					disp = <span>{name} {prefixNum(p0)}</span>;
					break;

				case "dr":
					if (p0[0] === "-")
						disp = <span>받는 피해 {p0.substr(1)} 증가</span>;
					else
						disp = <span>받는 피해 {p0} 감소</span>;
					break;

				case "acc":
					disp = <span>{name} {
						p.length === 1
							? prefixNum(p0)
							: <span>{prefixNum(p1)} ({p0} 확률)</span>
					}</span>;
					break;

				case "counter":
					disp = <span>{p0} 확률로 반격 ({p1} 위력)</span>;
					break;

				case "dmg":
					disp = <span>
						<unit-badge type={p0} />
						<span>{actName[x.act]} {prefixNum(p1)}</span>
					</span>;
					break;

				case "hp-atk":
					disp = <span>공격력 {p0} 만큼 자신의 HP 감소</span>;
					break;

				case "hit":
					if (p.length === 2)
						disp = <span>{p0} 지속 <elem-icon elem={p0} /> {elemName(p1)} 피해</span>;
					else
						disp = <span>{p0} 지속 고정 피해</span>;
					break;

				case "resist":
					if (p.length === 1) {
						if (isNumeric(p0))
							disp = <span>효과 저항 {prefixNum(p0)}</span>;
						else
							disp = <span>{effectName(p0)} 무효</span>;
					} else {
						if (p0 === "all")
							disp = <span>모든 속성 저항 {prefixNum(p1)}</span>;
						else {
							disp = <span>
								<elem-icon elem={p0} />
								{elemName(p0)} 저항 {prefixNum(p1)}
							</span>;
						}
					}
					break;

				case "revive":
					disp = <span>{p0} HP로 전투 속행</span>;
					break;

				case "off":
					if (p.length === 2)
						disp = <span>{effectName(p0)} 해제 ({p1} 확률)</span>;
					else if (isNumeric(p0))
						disp = <span>해로운 효과 해제 ({p0} 확률)</span>;
					else if (p.length >= 1)
						disp = <span>{effectName(p0)} 해제</span>;
					else
						disp = <span>해로운 효과 해제</span>;
					break;

				case "scout":
					disp = <span>{name}</span>;
					break;

				case "stun":
					disp = <span>스킬 사용 불가 ({p0})</span>;
					break;

				case "skill":
					disp = <span>{p0}번 스킬 강화</span>;
					break;

				default:
					disp = <span>{name || x.act} {p.join(", ")}</span>;
					break;
			}

			const randTip = x.rand ? <b-badge variant="info" class="float-right ml-1">랜덤</b-badge> : "";

			if (status.on.length > 0) {
				const triggers: Array<string | JSX.Element> = [];
				status.on.forEach(x => {
					let text: string = x.type;
					switch (x.type) {
						case "attack":
							text = "공격 시";
							break;
						case "flood":
							text = "침수 시";
							break;
						case "kill":
							text = "적 처치 시";
							break;
						case "pos":
							if (x.inv)
								text = `${posName(x.params[0] as string)}이 아닐 때`;
							else
								text = `${posName(x.params[0] as string)}일 때`;
							break;
						case "round":
							text = "매 라운드";
							break;
						case "wave":
							text = "전투 개시 시";
							break;
						case "scout":
							text = "정찰 발동 시";
							break;
						case "barrier":
							if (x.inv)
								text = "방어막 없을 때";
							else
								text = "방어막 존재 시";
							break;
						case "unit":
							if (x.params[0] === "bio")
								text = "바이오로이드";
							else if (x.params[0] === "ags")
								text = "로봇";
							else {
								const iid = typeof x.params[0] === "string" ? parseInt(x.params[0], 10) : x.params[0];
								text = `<${UnitData[iid].name}>가 장착 시`;
							}
							break;
						case "hdmg":
							if (x.inv)
								text = "HP 25% 이상일 때";
							else
								text = "HP 25% 이하일 때";
							break;
						case "mdmg":
							if (x.inv)
								text = "HP 50% 이상일 때";
							else
								text = "HP 50% 이하일 때";
							break;
					}
					triggers.push(<div class="badge badge-warning float-right ml-1">{text}</div>);
				});

				if (x.repeats > 0) {
					disp = <span>
						{disp}
						{randTip}
						<b-badge variant="danger" class="float-right ml-1">{x.repeats}회</b-badge>
						{triggers}
					</span>;
				} else
					disp = <span>{disp}{randTip}{triggers}</span>;
			}

			return disp;
		});
	return { unknown, display };
}
