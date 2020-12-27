let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

import Unit from "../src/json/unit";
import Equip from "../src/json/equip";
import Enemy from "../src/json/enemy";
import Facility from "../src/json/facility";
import MapData from "../src/json/map";
// const { WorldNames } = require("../src/libs/Const");

const WorldNames: Record<string, string> = {
	Story: "메인스토리",
	Ev1: "지고의 저녁식사",
	Ev2: "리오보로스의 유산",
	Ev3: "만월의 야상곡",
	Ev4: "할로윈 파크 패닉",
	Ev5: "세인트 오르카의 비밀작전",
	Ev6: "이상한 나라의 초코 여왕",
	EvA0: "오르카호를 수복하라!",
	Ev7: "요정 마을의 아리아",
	Ev8: "흐린 기억 속의 나라",
};
const skin = [
	"3P_Alexandra_0_O.png", "3P_Alexandra_0_O_D.png", "3P_Alexandra_1_G.png", "3P_Alexandra_1_G_D.png", "3P_Alexandra_1_O.png", "3P_Alice_0_G.png", "3P_Alice_0_O.png", "3P_Alice_1_G.png", "3P_Alice_1_G_D.png", "3P_Alice_1_O.png", "3P_Alice_1_O_D.png", "3P_Annie_0_O.png", "3P_Aqua_0_O.png", "3P_Aurora_0_G.png", "3P_Aurora_0_O.png", "3P_Aurora_1_O.png", "3P_BlackLilith_0_O.png", "3P_BlackLilith_0_O_S.png", "3P_BlackLilith_1_G.png", "3P_BlackLilith_1_O.png", "3P_BlackLilith_2_G.png", "3P_BlackLilith_2_G_S.png", "3P_BlackLilith_2_O.png", "3P_BlackLilith_2_O_S.png", "3P_BlackWyrm_0_G.png", "3P_BlackWyrm_0_G_D.png", "3P_BlackWyrm_0_O.png", "3P_BlackWyrm_0_O_D.png", "3P_BlackWyrm_1_G.png", "3P_BlackWyrm_1_G_D.png", "3P_BlackWyrm_1_G_DS.png", "3P_BlackWyrm_1_G_S.png", "3P_BlackWyrm_1_O.png", "3P_BlackWyrm_1_O_D.png", "3P_BlackWyrm_1_O_DS.png", "3P_BlackWyrm_1_O_S.png", "3P_ConstantiaS2_0_G_D.png", "3P_ConstantiaS2_0_O.png", "3P_ConstantiaS2_0_O_D.png", "3P_ConstantiaS2_1_O.png", "3P_ConstantiaS2_21_G_D.png", "3P_ConstantiaS2_21_O_D.png", "3P_ConstantiaS2_2_O.png", "3P_CSPerrault_0_G.png", "3P_CSPerrault_0_G_D.png", "3P_CSPerrault_0_O.png", "3P_CSPerrault_0_O_D.png", "3P_CSPerrault_1_O.png", "3P_CSPerrault_20_O.png", "3P_CSPerrault_2_O.png", "3P_Daphne_0_O.png", "3P_Daphne_1_O.png", "3P_Daphne_2_G.png", "3P_Daphne_2_G_S.png", "3P_Daphne_2_O.png", "3P_Daphne_2_O_S.png", "3P_Dryad_0_G.png", "3P_Dryad_0_O.png", "3P_Eternity_0_G.png", "3P_Eternity_0_O.png", "3P_Fenrir_0_O.png", "3P_Fenrir_1_G.png", "3P_Fenrir_1_O.png", "3P_Fotia_0_G.png", "3P_Fotia_0_O.png", "3P_Fotia_1_O.png", "3P_Hachiko_0_O.png", "3P_Hachiko_1_O.png", "3P_Hachiko_2_O.png", "3P_Labiata_0_O.png", "3P_Labiata_1_G.png", "3P_Labiata_1_G_S.png", "3P_Labiata_1_O.png", "3P_Labiata_1_O_S.png", "3P_Labiata_21_O.png", "3P_Labiata_2_G.png", "3P_Labiata_2_G_D.png", "3P_Labiata_2_G_S.png", "3P_Labiata_2_O.png", "3P_Labiata_2_O_D.png", "3P_Labiata_2_O_S.png", "3P_Labiata_3_G.png", "3P_Labiata_3_G_D.png", "3P_Labiata_3_G_S.png", "3P_Labiata_3_O.png", "3P_Labiata_3_O_D.png", "3P_Labiata_3_O_S.png", "3P_Maria_0_G.png", "3P_Maria_0_O.png", "3P_Maria_1_G.png", "3P_Maria_1_O.png", "3P_Poi_0_G.png", "3P_Poi_0_G_D.png", "3P_Poi_0_O.png", "3P_Poi_0_O_D.png", "3P_Ran_0_O.png", "3P_Ran_1_O.png", "3P_Rhea_0_O.png", "3P_Rhea_1_G.png", "3P_Rhea_1_O.png", "3P_Rhea_2_G.png", "3P_Rhea_2_O.png", "3P_ScissorsLise_0_O.png", "3P_ScissorsLise_1_O.png", "3P_ScissorsLise_2_G.png", "3P_ScissorsLise_2_O.png", "3P_SnowFeather_0_G.png", "3P_SnowFeather_0_O.png", "3P_Sowan_0_O.png", "3P_Sowan_1_G_D.png", "3P_Sowan_1_O.png", "3P_Sowan_1_O_D.png", "3P_Sowan_2_G.png", "3P_Sowan_2_O.png", "3P_Vanilla_0_O.png", "3P_Vanilla_0_O_D.png", "3P_Vanilla_1_G.png", "3P_Vanilla_1_G_D.png", "3P_Vanilla_1_O.png", "3P_Vanilla_1_O_D.png", "AGS_Aeda_0_O.png", "AGS_Albatross_0_O.png", "AGS_Albatross_1_O.png", "AGS_Fallen_0_O.png", "AGS_Fortress_0_O.png", "AGS_Gigantes_0_O.png", "AGS_Gigantes_1_O.png", "AGS_Goltarion_0_O.png", "AGS_MrAlfred2_0_G.png", "AGS_MrAlfred2_0_O.png", "AGS_MrAlfred2_1_G.png", "AGS_MrAlfred2_1_O.png", "AGS_Rampart_0_O.png", "AGS_Rampart_1_O.png", "AGS_Rampart_21_O.png", "AGS_RheinRitter_0_O.png", "AGS_Roc_0_O.png", "AGS_Seljuq_0_O.png", "AGS_Seljuq_1_O_S.png", "AGS_Shade_0_O.png", "AGS_SpartanA_0_O.png", "AGS_SpartanB_0_O.png", "AGS_SpartanC_0_O.png", "AGS_Tyrant_0_O.png", "AGS_Watcher_0_O.png", "BR_Alvis_0_O.png", "BR_Alvis_1_O.png", "BR_Alvis_1_O_S.png", "BR_ALWraith_0_O.png", "BR_Amy_0_O.png", "BR_Amy_0_O_D.png", "BR_Amy_0_O_S.png", "BR_Amy_1_O.png", "BR_Andvari_0_G.png", "BR_Andvari_0_G_S.png", "BR_Andvari_0_O.png", "BR_Andvari_0_O_S.png", "BR_Andvari_1_O.png", "BR_AS12TurtleDragon_0_O.png", "BR_AS12TurtleDragon_1_O.png", "BR_Banshee_0_O.png", "BR_Banshee_1_G.png", "BR_Banshee_1_O.png", "BR_BeastHunter_0_O.png", "BR_BeastHunter_1_O.png", "BR_Bheur_0_O.png", "BR_Bheur_1_G.png", "BR_Bheur_1_G_S.png", "BR_Bheur_1_O.png", "BR_Bheur_1_O_S.png", "BR_Blackhound_0_O.png", "BR_Blackhound_1_O.png", "BR_BloodyPanther_0_O.png", "BR_BloodyPanther_1_G.png", "BR_BloodyPanther_1_G_D.png", "BR_BloodyPanther_1_G_DS.png", "BR_BloodyPanther_1_G_S.png", "BR_BloodyPanther_1_O.png", "BR_BloodyPanther_1_O_D.png", "BR_BloodyPanther_1_O_DS.png", "BR_BloodyPanther_1_O_S.png", "BR_Brownie_0_O.png", "BR_Brownie_1_O.png", "BR_Bulgasari_0_O.png", "BR_Bulgasari_1_O.png", "BR_Bulgasari_1_O_D.png", "BR_Calista_0_O.png", "BR_Calista_1_G.png", "BR_Calista_1_O.png", "BR_Daika_0_O.png", "BR_Daika_1_O.png", "BR_Daika_1_O_D.png", "BR_Daika_1_O_DS.png", "BR_Djinnia_0_O.png", "BR_DrM_0_O.png", "BR_DrM_0_O_S.png", "BR_DrM_1_O.png", "BR_Echidna_0_O.png", "BR_Echidna_1_O.png", "BR_Echidna_2_G.png", "BR_Echidna_2_G_S.png", "BR_Echidna_2_O.png", "BR_Echidna_2_O_S.png", "BR_Efreeti_0_O.png", "BR_Emily_0_O.png", "BR_Emily_1_O.png", "BR_Gnome_0_G.png", "BR_Gnome_0_G_D.png", "BR_Gnome_0_O.png", "BR_Gnome_0_O_D.png", "BR_Gnome_1_G_D.png", "BR_Gnome_1_O.png", "BR_Gnome_1_O_D.png", "BR_Gremlin_0_O.png", "BR_Gremlin_1_G.png", "BR_Gremlin_1_G_S.png", "BR_Gremlin_1_O.png", "BR_Gremlin_1_O_S.png", "BR_Harpy_0_O.png", "BR_Harpy_1_G.png", "BR_Harpy_1_G_S.png", "BR_Harpy_1_O.png", "BR_Harpy_1_O_S.png", "BR_HongRyun_0_G.png", "BR_HongRyun_0_G_D.png", "BR_HongRyun_0_O.png", "BR_HongRyun_0_O_D.png", "BR_HongRyun_1_G.png", "BR_HongRyun_1_G_D.png", "BR_HongRyun_1_O.png", "BR_HongRyun_1_O_D.png", "BR_Hraesvelgr_0_O.png", "BR_Impet_0_O.png", "BR_Impet_1_G.png", "BR_Impet_1_O.png", "BR_InvDragon_0_O.png", "BR_InvDragon_1_G.png", "BR_InvDragon_1_O.png", "BR_Io_0_O.png", "BR_Khan_0_O.png", "BR_Khan_1_O.png", "BR_Khan_1_O_D.png", "BR_Khan_2_G.png", "BR_Khan_2_O.png", "BR_Leona_0_O.png", "BR_Leona_1_G_D.png", "BR_Leona_1_O.png", "BR_Leona_1_O_D.png", "BR_Leona_2_G.png", "BR_Leona_2_O.png", "BR_Leprechaun_0_O.png", "BR_Leprechaun_1_O.png", "BR_Lindwurm_0_O.png", "BR_Lindwurm_1_O.png", "BR_Marie_0_O.png", "BR_Marie_1_O.png", "BR_Marie_2_O.png", "BR_May_0_O.png", "BR_May_1_O.png", "BR_May_1_O_D.png", "BR_May_2_O.png", "BR_May_3_O.png", "BR_May_3_O_D.png", "BR_Miho_0_O.png", "BR_Miho_1_O.png", "BR_Miho_2_O.png", "BR_Neodym_0_O.png", "BR_Neodym_1_O.png", "BR_Neodym_2_O.png", "BR_Nereid_0_O.png", "BR_Nereid_1_G.png", "BR_Nereid_1_O.png", "BR_NightAngel_0_O.png", "BR_NightAngel_1_O.png", "BR_NightAngel_2_O.png", "BR_Nymph_0_O.png", "BR_Nymph_1_O.png", "BR_PA00EL_0_O.png", "BR_PA00EL_0_O_D.png", "BR_PA00EL_1_O.png", "BR_PA00EL_21_O.png", "BR_PA00EL_21_O_D.png", "BR_Pani_0_O.png", "BR_Phantom_0_O.png", "BR_Phantom_20_O.png", "BR_Phoenix_0_G.png", "BR_Phoenix_0_G_D.png", "BR_Phoenix_0_O.png", "BR_Phoenix_0_O_D.png", "BR_Phoenix_1_G.png", "BR_Phoenix_1_G_D.png", "BR_Phoenix_1_G_DS.png", "BR_Phoenix_1_O.png", "BR_Phoenix_1_O_D.png", "BR_Phoenix_1_O_DS.png", "BR_PoniesAnger_0_O.png", "BR_PoniesAnger_1_O.png", "BR_PoniesAnger_20_O.png", "BR_PXSilky_0_O.png", "BR_PXSilky_1_G.png", "BR_PXSilky_1_O.png", "BR_QuickCamel_0_O.png", "BR_QuickCamel_1_G.png", "BR_QuickCamel_1_O.png", "BR_Raven_0_O.png", "BR_RedHood_0_O.png", "BR_RoyalArsenal_0_O.png", "BR_RoyalArsenal_0_O_S.png", "BR_RoyalArsenal_1_O.png", "BR_SandMan_0_O.png", "BR_SandMan_1_G.png", "BR_SandMan_1_O.png", "BR_Scathy_0_O.png", "BR_Scathy_1_O.png", "BR_Shirayuri_0_O.png", "BR_Sirene_0_O.png", "BR_Sirene_0_O_S.png", "BR_Sirene_1_O.png", "BR_Sleipnir_0_O.png", "BR_Sleipnir_1_O.png", "BR_Sleipnir_2_O.png", "BR_Spriggan_0_O.png", "BR_Spriggan_1_O.png", "BR_Sylphid_0_O.png", "BR_TalonFeather_0_O.png", "BR_TalonFeather_1_O.png", "BR_TalonFeather_1_O_D.png", "BR_TalonFeather_1_O_DS.png", "BR_TalonFeather_1_O_S.png", "BR_Thetis_0_G.png", "BR_Thetis_0_O.png", "BR_Thetis_1_G.png", "BR_Thetis_1_O.png", "BR_Tomoe_0_O.png", "BR_Tomoe_1_O.png", "BR_Tomoe_21_O.png", "BR_Undine_0_O.png", "BR_Undine_1_O.png", "BR_Valkyrie_0_O.png", "BR_Valkyrie_1_O.png", "BR_Valkyrie_2_O.png", "BR_Valkyrie_3_G.png", "BR_Valkyrie_3_O.png", "BR_WarWolf_0_O.png", "BR_WarWolf_1_O.png", "BR_Wraithy_0_O.png", "DS_Arman_0_O.png", "DS_Arman_1_O.png", "DS_Arman_1_O_S.png", "DS_Atalanta_0_O.png", "DS_Atalanta_1_O.png", "DS_Azazel_0_O.png", "DS_Azazel_1_O.png", "DS_Azazel_1_O_D.png", "DS_Baekto_0_O.png", "DS_Baekto_1_G_D.png", "DS_Baekto_1_O.png", "DS_Baekto_1_O_D.png", "DS_Charlotte_0_O.png", "DS_Charlotte_1_G.png", "DS_Charlotte_1_O.png", "DS_Charlotte_2_G.png", "DS_Charlotte_2_O.png", "DS_Faucre_0_O.png", "DS_Faucre_1_O.png", "DS_Faucre_2_G.png", "DS_Faucre_2_G_S.png", "DS_Faucre_2_O.png", "DS_Faucre_2_O_S.png", "DS_Johanna_0_O.png", "DS_Johanna_0_O_D.png", "DS_KunoichiKaen_0_O.png", "DS_KunoichiZero_0_G.png", "DS_KunoichiZero_0_G_S.png", "DS_KunoichiZero_0_O.png", "DS_KunoichiZero_0_O_S.png", "DS_KunoichiZero_1_G.png", "DS_KunoichiZero_1_G_S.png", "DS_KunoichiZero_1_O.png", "DS_KunoichiZero_1_O_S.png", "DS_MoMo_0_O.png", "DS_MoMo_1_O.png", "PECS_Audrey_0_O.png", "PECS_Audrey_1_O.png", "PECS_Babariana_0_O.png", "PECS_Babariana_0_O_D.png", "PECS_Babariana_1_O.png", "PECS_Babariana_1_O_D.png", "PECS_BS_0_O.png", "PECS_BS_1_O.png", "PECS_BS_1_O_S.png", "PECS_Carolina_0_O.png", "PECS_Carolina_1_O.png", "PECS_Cerberus_0_O.png", "PECS_Cerberus_1_O.png", "PECS_Cerberus_1_O_D.png", "PECS_Cerberus_2_O.png", "PECS_Cerberus_3_O.png", "PECS_Circe_0_O.png", "PECS_Circe_1_G.png", "PECS_Circe_1_G_S.png", "PECS_Circe_1_O.png", "PECS_Circe_1_O_S.png", "PECS_CoCoWhiteShell_0_O.png", "PECS_CoCoWhiteShell_0_O_S.png", "PECS_DarkElf_0_O.png", "PECS_DarkElf_1_G.png", "PECS_DarkElf_1_G_S.png", "PECS_DarkElf_1_O.png", "PECS_DarkElf_1_O_S.png", "PECS_Drone_0_O.png", "PECS_DutchGirl_0_O.png", "PECS_DutchGirl_1_O.png", "PECS_ElvenForestmaker_0_O.png", "PECS_ElvenForestmaker_1_O.png", "PECS_ElvenForestmaker_1_O_D.png", "PECS_Empress_0_O.png", "PECS_Express76_0_O.png", "PECS_Express76_1_O.png", "PECS_Fortune_0_O_D.png", "PECS_Fortune_1_O.png", "PECS_Fortune_99_O.png", "PECS_Fortune_99_O_D.png", "PECS_HighElven_0_G.png", "PECS_HighElven_0_O.png", "PECS_HighElven_1_G.png", "PECS_HighElven_1_G_D.png", "PECS_HighElven_1_G_S.png", "PECS_HighElven_1_O.png", "PECS_HighElven_1_O_D.png", "PECS_HighElven_1_O_S.png", "PECS_Ignis_0_O.png", "PECS_Ignis_1_O.png", "PECS_Leanne_0_O.png", "PECS_LRL_0_O.png", "PECS_LRL_1_O.png", "PECS_Lumberjane_0_O.png", "PECS_Lumberjane_1_G.png", "PECS_Lumberjane_1_G_D.png", "PECS_Lumberjane_1_G_DS.png", "PECS_Lumberjane_1_G_S.png", "PECS_Lumberjane_1_O.png", "PECS_Lumberjane_1_O_D.png", "PECS_Lumberjane_1_O_DS.png", "PECS_Lumberjane_1_O_S.png", "PECS_MightyR_0_O.png", "PECS_MightyR_20_G.png", "PECS_MightyR_20_O.png", "PECS_MissSafety_0_O.png", "PECS_MissSafety_0_O_D.png", "PECS_PuppHead_0_O.png", "PECS_Sadius_0_O.png", "PECS_Sadius_0_O_S.png", "PECS_Saetti_0_O.png", "PECS_Saetti_1_O.png", "PECS_Saetti_1_O_S.png", "PECS_Serpent_0_O.png", "PECS_Serpent_1_O.png", "PECS_Spartoia_0_O.png", "PECS_Stinger_0_O.png", "PECS_Sunny_0_O.png", "PECS_Sunny_1_G.png", "PECS_Sunny_1_G_S.png", "PECS_Sunny_1_O.png", "PECS_Sunny_1_O_S.png", "PECS_Tiequan_0_O.png", "PECS_Tiequan_1_O.png", "PECS_TommyWalker_0_O.png", "PECS_Triaina_0_O.png", "PECS_Triaina_0_O_S.png", "PECS_Triaina_1_O.png", "PECS_Triaina_1_O_D.png", "PECS_Veronica_0_O.png", "PECS_Veronica_1_G.png", "PECS_Veronica_1_O.png", "ST_Lancer_0_O.png", "ST_Tiamat_0_O.png", "ST_Tiamat_1_O.png",
];

const AssetsRoot = "https://lastorigin-wiki-assets.s3.ap-northeast-2.amazonaws.com";
const ext = "png";

xml += "<url><loc>http://lo.swaytwig.com/units</loc></url>";
Unit.forEach((x: any) => {
	const content = [
		`<loc>http://lo.swaytwig.com/units/${x.uid}</loc>`,
	];

	skin
		.filter((y: string) => y.startsWith(x.uid))
		.forEach((y: string) => {
			content.push(`<image:image><image:loc>${AssetsRoot}/${ext}/full/${y}</image:loc></image:image>`);
		});

	xml += `<url>${content.join("")}</url>`;
});

xml += "<url><loc>http://lo.swaytwig.com/equips</loc></url>";
Equip.forEach((x: any) => {
	xml += `<url><loc>http://lo.swaytwig.com/equips/${x.fullKey}</loc><image:image><image:loc>${AssetsRoot}/${ext}/item/UI_Icon_Equip_${x.fullKey}.${ext}</image:loc></image:image></url>`;
});

xml += "<url><loc>http://lo.swaytwig.com/enemy</loc></url>";
Enemy.forEach((x: any) => {
	xml += `<url><loc>http://lo.swaytwig.com/enemy/${x.id}</loc><image:image><image:loc>${AssetsRoot}/${ext}/tbar/TbarIcon_${x.id}.${ext}</image:loc></image:image></url>`;
});

xml += "<url><loc>http://lo.swaytwig.com/facilities</loc></url>";
Object.keys(Facility)
	.forEach(key => {
		xml += `<url><loc>http://lo.swaytwig.com/facilities/${key}</loc></url>`;
	});

xml += "<url><loc>http://lo.swaytwig.com/worlds</loc></url>";
Object.keys(WorldNames)
	.filter(x => !x.startsWith("EvA"))
	.forEach(key => {
		xml += `<url><loc>http://lo.swaytwig.com/worlds/${key}</loc></url>`;

		const map = (MapData as any)[key];
		Object.keys(map).forEach(y => {
			xml += `<url><loc>http://lo.swaytwig.com/worlds/${key}/${y}</loc></url>`;
			xml += `<url><loc>http://lo.swaytwig.com/story/${key}/${y}</loc></url>`;
		});
	});

xml += `<url><loc>http://lo.swaytwig.com/changelog</loc></url>
<url><loc>http://lo.swaytwig.com/exp</loc></url>
<url><loc>http://lo.swaytwig.com/bgm</loc></url>
<url><loc>http://lo.swaytwig.com/eapi</loc></url>
</urlset>`;

console.log(xml);
