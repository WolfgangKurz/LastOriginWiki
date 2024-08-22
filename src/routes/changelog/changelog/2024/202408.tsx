import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12628" date="2024-08-22"
		bugfix={ <>
			<li>전투원의 누락된 타이틀 콜이 추가되었습니다.</li>
			<li>일부 스킨이 상세 보기에서 로비 애니메이션 여부를 변경할 수 없던 점을 수정했습니다.</li>
		</> }
		knownissue={ <>
			<li>
				다음 타이틀 콜은 명확하게 공개된 전투원 정보가 없어 추가되지 않았습니다.
				<ul>
					<li>
						<div>Title-2</div>
						<audio src={ `${AssetsRoot}/audio/titlecall/Title-2.mp3` } type="audio/mp3" controls preload="none" volume="0.5" />
					</li>
					<li>
						<div>Title-4</div>
						<audio src={ `${AssetsRoot}/audio/titlecall/Title-4.mp3` } type="audio/mp3" controls preload="none" volume="0.5" />
					</li>
					<li>
						<div>Title-6</div>
						<audio src={ `${AssetsRoot}/audio/titlecall/Title-6.mp3` } type="audio/mp3" controls preload="none" volume="0.5" />
					</li>
					<li>
						<div>Title-8</div>
						<audio src={ `${AssetsRoot}/audio/titlecall/Title-8.mp3` } type="audio/mp3" controls preload="none" volume="0.5" />
					</li>
				</ul>
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12626" date="2024-08-21"
		new={ <>
			<li>신규 전투원 <BY>디오네</BY>의 정보가 추가되었습니다.</li>
			<li>전투원 대사 정보에 <BG>타이틀 콜</BG> 정보가 추가되었습니다.</li>
			<li>신규 배경 정보가 추가되었습니다.</li>
			<li>신규 소모품 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>전투원 <BY>니드호그</BY>의 스킬 설명이 입력되어있지 않던 점을 수정했습니다.</li>
			<li><BY>레모네이드 베타</BY>의 스킨 <BR>일상복 : 오피스 레이디</BR>의 소품 가리기가 누락된 점이 수정되었습니다.</li>
			<li>일부 스킨의 출시일 정보가 누락된 점이 수정되었습니다.</li>
		</> }
		skin={ <>
			<li><BY>디오네</BY>의 스킨 <BR>간호사? 디오네​</BR>의 정보가 추가되었습니다.</li>
			<li><BY>스노우페더</BY>의 스킨 <BR>Cool With You : 자애의 깃털 비키니</BR>의 정보가 추가되었습니다.</li>
			<li><BY>에라토</BY>의 스킨 <BR>오르카 바니 : onlyfanz♡</BR>의 중파에 표정 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><BY>쿠노이치 제로</BY>의 스킨 <BR>오르카 바니 : 망사 바니걸</BR>의 대사 정보가 추가되었습니다.</li>
			<li><BY>에라토</BY>의 스킨 <BR>오르카 바니 : onlyfanz♡</BR>의 대사 정보가 추가되었습니다.</li>
			<li><BY>레모네이드 베타</BY>의 스킨 <BR>일상복 : 오피스 레이디</BR>의 대사 정보가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2024-08-21 03:18:23</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12624" date="2024-08-15"
		bugfix={ <>
			<li>
				버프 보기에서 일부 복합 조건이 표시되지 않던 문제를 수정했습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12622" date="2024-08-15"
		bugfix={ <>
			<li>
				버프 보기에서 일부 복합 조건이 표시되지 않던 문제를 수정했습니다. (예: <BY>무적의 용</BY>의 <BR>포격 좌표 송신</BR> 버프)
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12619" date="2024-08-07"
		new={ <>
			<li>신규 장식품 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>
				전투원 <BY>뽀끄루 대마왕</BY>의 스킬 <BR>마의 장막</BR>의 설명에서
				수치가 잘못 표기되던 점을 수정하였고, 더 이해하기 쉽도록 텍스트를 수정했습니다.
			</li>
		</> }
		update={ <>
			<li>이벤트 <BY>제로 베이스</BY>가 종료되었습니다.</li>
			<li>이벤트 <BY>해가 지지 않는 워터파크</BY> 복각이 시작되었습니다.</li>
		</> }
		skin={ <>
			<li><BY>에라토</BY>의 스킨 <BY>오르카 바니 : onlyfanz♡</BY>의 중파 정보가 추가되었습니다.</li>
			<li><BY>레모네이드 베타</BY>의 스킨 <BY>일상복 : 오피스 레이디</BY>의 정보가 추가되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
