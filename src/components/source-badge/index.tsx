import { FunctionalComponent } from "preact";
import { Link, route } from "preact-router";

import { FilterableUnit } from "@/types/DB/Unit.Filterable";

import { CurrentEvent, CurrentDate } from "@/libs/Const";
import EntitySource from "@/libs/EntitySource";

import Loader, { StaticDB, GetJson } from "@/components/loader";
import Locale, { LocaleExists } from "@/components/locale";
import Icon from "@/components/bootstrap-icon";

interface SourceBadgeProps {
	class?: string;
	source: EntitySource | string;
	minimum?: boolean;
	detail?: boolean;
	linked?: boolean;
}

const SourceBadge: FunctionalComponent<SourceBadgeProps> = (props) => {
	const Source = typeof props.source === "string"
		? new EntitySource(props.source)
		: props.source;

	const variant = ((): string => {
		if (Source.IsUninstalled) return props.minimum ? "black" : "light text-dark";
		if (Source.IsRoguelike) return "warning text-dark";
		if (Source.IsChallenge) return "primary";
		if (Source.IsPrivateItem) return "stat-acc text-dark";
		if (Source.IsLimited) return "secondary";

		if (Source.IsEternalWarExchange || Source.IsNewEternalWarExchange || Source.IsNewEternalWar)
			return props.minimum ? "light text-dark" : "dark";

		if (Source.IsSideMap) return "success";
		if (Source.IsExMap) return "danger";
		if (Source.IsMap) return "warning text-dark";
		if (Source.IsSubStory) return "substory";
		if (Source.IsExchange) {
			return Source.IsEvent
				? Source.EventId === CurrentEvent
					? "event-exchange"
					: "event-exchange-old"
				: Source.ExchangeDate === CurrentDate
					? "exchange"
					: "exchange-old";
		}
		return "info";
	})();

	return <Loader json={ StaticDB.FilterableUnit } content={ ((): preact.VNode => {
		const FilterableUnitDB = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);

		const content = ((): preact.VNode => {
			if (Source.IsUninstalled)
				return <Locale k="COMMON_SOURCE_NOT_IMPLEMENTED" />;
			else if (Source.IsRoguelike)
				return <Locale k="COMMON_SOURCE_ROGUELIKE" />;
			else if (Source.IsPrivateItem) {
				const unit = FilterableUnitDB.find(x => x.uid === Source.PrivateId);
				if (unit) return <Locale plain k={ `UNIT_${unit.uid}` } />;
				return <>{ Source.PrivateId }</>;
			} else if (Source.IsLimited)
				return <Locale k="COMMON_SOURCE_LIMITED" />;
			else if (Source.IsChallenge) {
				const key = `COMMON_CHALLENGE_${Source.ChallengeId}`;
				const name = LocaleExists(key)
					? <Locale k={ `COMMON_CHALLENGE_${Source.ChallengeId}` } />
					: <>{ Source.ChallengeId }</>;

				const text = Source.IsReward
					? <Locale k="COMMON_SOURCE_FINISH_REWARD" />
					: <Locale k="COMMON_SOURCE_CLEAR_REWARD" />;
				// const ChallengeName: Record<string, string> = {
				// 	1: "밀고, 당기고, 불질러!",
				// 	2: "피조물과 설계자",
				// 	3: "실패작의 폭주",
				// 	4: "레모네이드 VR",
				// 	5: "바다의 소녀들",
				// };

				if (props.minimum)
					return <Locale k="COMMON_SOURCE_CHALLENGE" />;
				else if (props.detail) {
					return <>{
						[
							<Locale k="COMMON_SOURCE_CHALLENGE" />,
							<>({ name }&nbsp;{ Source.ChallengeDifficulty })</>,
							text,
						].filter(x => x).gap(<>&nbsp;</>)
					}</>;
				}
				return <>{
					[name, Source.ChallengeDifficulty]
						.filter(x => x)
						.gap(<>&nbsp;</>)
				}</>;
			} else if (Source.IsEternalWarExchange) {
				if (props.detail)
					return <Locale k="COMMON_SOURCE_EW_RESOURCES" p={ [Source.EternalWarPrice] } />;
				return <Locale k="COMMON_SOURCE_EW" />;
			} else if (Source.IsNewEternalWarExchange) {
				if (props.detail)
					return <Locale k="COMMON_SOURCE_NEW_RESOURCES" p={ [Source.EternalWarPrice] } />;
				return <Locale k="COMMON_SOURCE_NEW" />;
			} else if (Source.IsNewEternalWar) {
				return <Locale k={ `EW_${Source.NewEternalWar}` } />;
			} else if (Source.IsSubStory) {
				const text = Source.IsReward
					? <Locale k="COMMON_SOURCE_CLEAR_REWARD" />
					: <></>;
				if (!props.minimum) {
					return <>
						<Locale
							k="COMMON_SOURCE_SUBSTORY"
							p={ [<Locale plain k={ `UNIT_${Source.SubStoryUnit}` } fallback={ Source.Map } />] }
						/>
						&nbsp;{ text }
					</>;
				}
				return <Locale k="COMMON_SOURCE_SUBSTORY_SINGLE" />;
			} else if (Source.IsExchange) {
				if (Source.IsEvent) {
					const event = Source.FullEventName;
					const data = Source.ExchangePrice || { item: "?", value: 0 };
					const item = Source.ExchangeItemName;

					if (props.detail) {
						return <>{
							[
								<Locale k={ event } />,
								`'${item}'`, // 아이템 아이콘 컴포넌트
								<Locale k="COMMON_SOURCE_EXCHANGE_COUNT" p={ [data.value] } />,
							].filter(x => x).gap(<>&nbsp;</>)
						}</>;
					} else if (props.minimum)
						return <Locale k="COMMON_SOURCE_EXCHANGE_EVENT" />;
					return <>
						<Locale k={ event } />&nbsp;
						<Locale k="COMMON_SOURCE_EXCHANGE" />
					</>;
				}
				const data = Source.MonthlyData || { year: "?", month: "?" };
				if (!props.minimum)
					return <Locale k="COMMON_SOURCE_EXCHANGE_DATE" p={ [data.year, data.month] } />;
				return <Locale k="COMMON_SOURCE_EXCHANGE" />;
			}
			const text = Source.IsReward
				? <Locale k="COMMON_SOURCE_CLEAR_REWARD" />
				: <></>;

			if (Source.IsEvent) {
				const event = Source.FullEventName;

				if (props.detail) {
					return <>{
						[
							<Locale k={ event } />,
							Source.Map,
							text,
						]
							.filter(x => x)
							.gap("&nbsp;")
					}</>;
				}
				// else if (minimum && Source.IsExMap)
				// 	return "이벤트 Ex";
				// else if (minimum && Source.IsSideMap)
				// 	return "이벤트 B";
				else if (props.minimum)
					return <Locale k="COMMON_SOURCE_EVENT" />;

				return <>{
					[
						Source.Map,
						text,
					].filter(x => x).gap(<>&nbsp;</>)
				}</>;
			}
			return <>{
				(!props.minimum ? [Source.Map, text] : [Source.Map])
					.filter(x => x)
					.gap(<>&nbsp;</>)
			}</>;
		})();

		if (props.linked && (Source.IsMap || Source.IsChallenge || Source.IsSubStory)) {
			const link = Source.IsChallenge
				? `/worlds/Cha/${Source.ChallengeId}/${Source.Map}`
				: Source.IsSubStory
					? `/worlds/Sub/1/${Source.Map}`
					: `/worlds/${Source.EventId}/${((x): string => {
						if (!x.includes("-")) return x;

						let ls = x.substring(0, x.indexOf("-"));
						if (!/^[A-Za-z]+[0-9]+/.test(ls)) {
							if (/^[A-Za-z]+\-/.test(x)) return "1";
							return ls;
						}
						ls = ls.replace(/^[A-Za-z]+([0-9]+)/, "$1");

						if (!ls) return "1";
						return ls;
					})(Source.Map)}/${Source.Map}`;

			return <Link href={ link }>
				<span
					class={ `badge bg-${variant} source-badge mx-1 ${props.class || ""}` }
					data-source={ Source.toString() }
				>
					{ content }
					<Icon icon="link-45deg" class="ms-1" />
				</span>
			</Link>;
		}
		if (props.linked && Source.IsNewEternalWar) {
			const link = `/eternalwar/${Source.NewEternalWar}`;
			return <Link href={ link }>
				<span
					class={ `badge bg-${variant} source-badge mx-1 ${props.class || ""}` }
					data-source={ Source.toString() }
				>
					{ content }
					<Icon icon="link-45deg" class="ms-1" />
				</span>
			</Link>;
		}
		return <span
			class={ `badge bg-${variant} source-badge mx-1 ${props.class || ""}` }
			data-source={ Source.toString() }
		>{ content }</span>;
	}) } />;
};
export default SourceBadge;
