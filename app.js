const $=(s,r=document)=>r.querySelector(s); const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const STORAGE='thecustom-reading-manual-v1';
const rule=(n,t,d)=>`<div class="rule"><div class="rule-no">${n}</div><div><h3>${t}</h3><p>${d}</p></div></div>`;
const callout=(type,icon,title,body)=>`<div class="callout ${type}"><div class="ico">${icon}</div><div><b>${title}</b><div>${body}</div></div></div>`;
const image=(src,title,caption,boxes=[])=>`<figure class="image-card"><div class="image-frame"><img src="${src}" alt="${title}">${boxes.map(b=>`<span class="focus" style="left:${b[0]}%;top:${b[1]}%;width:${b[2]}%;height:${b[3]}%"><em>${b[4]}</em></span>`).join('')}</div><figcaption class="image-caption"><span><b>${title}</b> · ${caption}</span><button class="zoom" data-img="${src}" type="button">확대</button></figcaption></figure>`;
const table=(headers,rows)=>`<div class="table-wrap"><table class="data-table"><thead><tr>${headers.map(x=>`<th>${x}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const flow=(steps)=>`<div class="flow">${steps.map((x,i)=>`${i?'<div class="flow-arrow">→</div>':''}<div class="flow-step"><b>${String(i+1).padStart(2,'0')}</b><span>${x}</span></div>`).join('')}</div>`;
const sec=(id,title,body)=>`<section class="section" id="${id}"><h2>${title}</h2>${body}</section>`;

const pages=[
{
 group:'안내', title:'매뉴얼 안내', short:'전체 구성과 읽는 방법', kicker:'THE CUSTOM · OPERATIONS HANDBOOK',
 html:`<div class="cover"><div class="cover-copy"><div class="page-kicker">THE CUSTOM · OPERATIONS HANDBOOK</div><h1>더커스텀<br>운영 매뉴얼</h1><p>운영 기준, 경고 체계, 실무 절차, 인턴 교육, 인트라넷 보고서, 물품 제작, 출동 시스템과 디스코드 설정을 읽기 중심으로 정리한 문서입니다.</p></div><div class="cover-side"><div class="cover-chip">읽기용 · 업무 숙지 문서</div></div></div>
${sec('scope','구성',`<p>내용은 업무 전 반드시 숙지해야 하는 기준과 실제 처리 절차를 단원별로 나누어 확인할 수 있도록 구성되어 있습니다. 필요한 항목을 왼쪽 목차나 검색 기능으로 바로 찾을 수 있습니다.</p><div class="quick-index">
<a class="quick-link" href="#p=1"><small>01–08</small><b>기본 수칙 1</b></a><a class="quick-link" href="#p=2"><small>09–16</small><b>기본 수칙 2</b></a><a class="quick-link" href="#p=3"><small>17–26</small><b>기본 수칙 3</b></a>
<a class="quick-link" href="#p=4"><small>경고</small><b>경고 시스템</b></a><a class="quick-link" href="#p=5"><small>보상</small><b>실적·교육 인센티브</b></a><a class="quick-link" href="#p=6"><small>견인</small><b>견인·상황별 멘트</b></a>
<a class="quick-link" href="#p=7"><small>인턴</small><b>인턴 교육</b></a><a class="quick-link" href="#p=8"><small>인트라넷</small><b>보고서 작성</b></a><a class="quick-link" href="#p=9"><small>제작</small><b>물품 제작</b></a>
<a class="quick-link" href="#p=10"><small>출동</small><b>출동 태블릿</b></a><a class="quick-link" href="#p=11"><small>설정</small><b>디스코드 설정</b></a><a class="quick-link" href="#p=12"><small>점검</small><b>자기점검</b></a></div>`)}
${sec('principle','업무 적용 원칙',`${callout('purple','◆','확인 후 행동','매뉴얼에 명시되지 않은 상황이나 해석이 필요한 상황은 임의로 판단하지 말고 고위직 또는 간부직에게 확인합니다. 내부공지는 수시로 확인하여 변경된 운영 기준을 반영합니다.')}`)}`
},
{
 group:'기본 수칙', title:'기본 수칙 1', short:'사유지·닉네임·인턴·업무 참여', kicker:'BASIC RULES · 01–08',
 html:`<div class="page-kicker">BASIC RULES · 01–08</div><h1 class="page-title">기본 수칙 1</h1><p class="page-lead">사유지 이용, 닉네임 양식, 인턴 적응 기간, 견인 공지, 사건 처리, 무전, 영상 녹화와 외부 콜 처리 기준입니다.</p>
${sec('r01','01–04 · 사유지와 기본 업무 조건',`<div class="rule-list">
${rule('01','더커스텀 사유지','지속적으로 소음을 유발하는 행위, 총기를 사용하는 등 피해를 주는 유저가 있다면 <span class="danger-text">간부/고위직에게 보고</span>합니다. 사유지 내에서 더커스텀 직원 또한 총기 또는 무기를 사용하여 사살하는 행위는 절대 금지합니다.')}
${rule('02','인게임 및 디스코드 닉네임 양식','더커스텀 사설 디스코드에도 동일하게 변경합니다. 닉네임은 <span class="purple-text">고유번호 | 🔧 닉네임 | 더커스텀 직급</span> 형식을 사용합니다.')}
${rule('03','인턴 교육 이수 및 적응 기간','인턴은 교육을 이수하여야 혼자 필드 업무 처리가 가능합니다. 교육 종료 후 인턴 직급으로 <strong>3일의 적응 기간</strong>이 적용됩니다. 교육 종료일은 제외하고 그 다음 날부터 3일을 계산합니다. 예를 들어 6월 1일 인턴 교육이 끝난 경우 6월 1일을 제외하고 2일, 3일, 4일이 인턴 기간이며 6월 4일에 인턴 기간이 종료됩니다. 인턴 기간 중 상식적으로 납득이 불가능한 일이 발생할 경우 즉각 해임될 수 있습니다.')}
${rule('04','견인 공지 2분(120초) 준수','일반 견인은 <strong>2분, 120초</strong> 공지를 지켜야 합니다. 공지 없이 가능한 구역은 <strong>메인광장, 메인차고, 뉴비존, 더커스텀 사유지</strong>이며, 신고 콜이 온 경우 <strong>타 팩션 사유지</strong>도 공지 없이 처리할 수 있습니다.')}
</div>${image('assets/site-map.png','더커스텀 사유지 위치','사유지 경계와 건물 위치를 확인할 때 활용합니다.')}`)}
${sec('r05','05–08 · 사건 처리·무전·녹화·외부 콜',`<div class="rule-list">
${rule('05','모든 더커스텀 사건 처리는 고위직 담당','사건 처리에 대한 문의는 DM을 통해 연락합니다. 개인적인 사건인 경우 본인이 처리하고, 더커스텀 관련된 일에 대해서 보고합니다. 타 팩션에 대한 개인의 문제가 생길 경우 해당 팩션 민원실을 이용하여 최대한 정중하게 해결합니다.')}
${rule('06','무전기 / 디스코드 참여','업무 처리할 때 무전기와 디스코드 채널 참여는 필수입니다. 업무 처리 중 팅김, 침수, 실수로 받은 콜 등 출동이 어려운 상황이 생길 경우 무전기 참여 인원을 확인하여 팩션원에게 부탁하고 상황을 전달하여 업무를 해결합니다. 무전방 채널 상태 설정에는 출입 불가능하다는 언급을 하지 않습니다. 출입금지, 진지한 대화 등 다른 인원을 소외시키는 표현은 사용하지 않습니다. 단, 인사팀의 면접, 매뉴얼 교육, 인턴 교육은 단독 사용이 가능합니다.')}
${rule('07','영상 녹화는 선택이 아닌 필수','출근 중 녹화된 영상은 <strong>최소 4일 보관</strong>합니다. 영상 녹화본이 없을 경우 발생하는 내부경고 등 불이익은 본인 책임입니다.')}
${rule('08','사유지 내부에서 외부 콜 진행','더커스텀 사유지 내부에서 판매 업무를 제외한 외부 콜 업무를 진행할 때는 <strong>팩션 차량을 꺼낸 후 처리</strong>합니다.')}
</div>${callout('blue','i','업무 증빙','무전 참여와 영상 보관은 사건 확인과 업무 인수인계에 필요한 기본 증빙입니다.')}`)}`
},
{
 group:'기본 수칙', title:'기본 수칙 2', short:'외부 콜·차량·콜 사유·견인 권한', kicker:'BASIC RULES · 09–16',
 html:`<div class="page-kicker">BASIC RULES · 09–16</div><h1 class="page-title">기본 수칙 2</h1><p class="page-lead">사유지 외부 콜, 팩션 차량 관리, 사고 대응, 콜 사유 확인과 견인 권한 기준입니다.</p>
${sec('r09','09–12 · 외부 콜과 팩션 차량',`<div class="rule-list">
${rule('09','더커스텀 사유지 외부에서 콜을 받는 행위','사유지 외부에서 콜을 받는 행위는 <span class="danger-text">구두경고 대상</span>이며 절대적으로 금지합니다. 팩션 차량 없이 외부 콜 업무를 진행할 경우 권력남용 또는 매뉴얼상 금지 행위로 관리자 처벌 대상이 될 수 있습니다.')}
${rule('10','팩션 차량 탑승 시 잠금 상태 유지','팩션 차량 탑승 시 무조건 <span class="key">T</span> 기능으로 잠금 상태를 유지합니다. 차량 도난 시 고위직/간부직에게 보고하며 <strong>영상 녹화는 필수</strong>입니다. 차량 도난으로 업무가 불가능하면 새 차량을 뽑아 업무를 진행할 수 있습니다. 차량을 도난당하는 것은 관리 소홀에 해당할 수 있으므로 내부경고 사유가 될 수 있습니다.')}
${rule('11','본인 부주의로 사고 발생 시','팩션 차량 탑승 중 출동 및 복귀 등 본인의 부주의로 사고가 발생한 경우 피해자에게 꼭 정중한 사과 후 마무리합니다.')}
${rule('12','가급적 역주행 금지','팩션 차량 탑승 중 콜이 밀려 급하더라도 가급적 역주행을 피합니다. 경고 대상은 아니지만 가급적 정주행합니다.')}
</div>`)}
${sec('r13','13–16 · 콜 사유 확인과 견인 권한',`<div class="rule-list">
${rule('13','콜 사유가 정확하지 않은 경우','“ㅋㅋㅋ”, “살려주세요” 등 콜 사유가 정확하지 않은 경우에는 반드시 태블릿 빠른 답변으로 사유에 대한 정정 요청을 하고, 재콜을 받아 출동합니다.')}
${rule('14','콜 사유 확인 의무','콜 사유는 반드시 확인해야 합니다. 사유를 보지 않고 수락하여 출동하는 경우 <span class="danger-text">구두경고 처리</span>될 수 있습니다.')}
${rule('15','업무 외 차량 견인 절대 금지','업무 외 차량 견인은 권력남용에 해당하므로 절대 금지합니다. 출근 상태가 아니거나 팩션 차량이 없을 경우 차량 견인 및 업무 처리를 하지 않습니다. 개인 차량이 침수, 파손, 수리 불가 상태인 경우 더커스텀 직원 콜을 통해 정상 절차로 처리합니다.')}
${rule('16','공지 없이 즉시 견인','공지 없이 즉시 견인 가능한 대상은 <strong>보호 구역(메인광장, 메인차고, 뉴비존)</strong>, <strong>경찰 집행 차량</strong>, <strong>더커스텀 사유지</strong>, <strong>신고가 들어온 타 팩션 사유지</strong>입니다.')}
</div>${callout('red','!','권한 사용 기준','콜 사유를 확인하지 않거나 업무 외 견인을 진행하는 것은 경고 또는 권력남용 판단으로 이어질 수 있습니다.')}`)}`
},
{
 group:'기본 수칙', title:'기본 수칙 3', short:'RP·응대·휴가·공지·장부', kicker:'BASIC RULES · 17–26',
 html:`<div class="page-kicker">BASIC RULES · 17–26</div><h1 class="page-title">기본 수칙 3</h1><p class="page-lead">RP 현장 대응, 조직 문화, 문의와 휴가, 내부공지, 인트라넷 판매 장부, 잠수 기능 의자 사용 기준입니다.</p>
${sec('r17','17–21 · RP 현장과 조직 문화',`<div class="rule-list">
${rule('17','RP 진행 가능성이 높은 현장','주변에 차량이 많고 유저들이 죽어 있다면 RP 중일 확률이 높습니다. 대기하거나 가로질러 가지 말고 피해 갑니다. 스토리 RP 주변 순찰은 가능하나 차량을 견인하기 위한 대기는 금지합니다. 공무원이 집행 업무를 진행하는 것을 보게 될 경우 공무원에게 먼저 집행 견인을 묻지 않습니다. 집행 견인은 공무원 또는 스태프의 요청이 있을 때만 가능합니다.')}
${rule('18','반말 금지','서로 간의 합의가 없다면 반말은 금지합니다.')}
${rule('19','비방 및 불필요한 분쟁 자제','인게임 채팅 및 디스코드 자유 채팅에서 타인을 비방하거나, 타인의 실수 등 분쟁이 생길 만한 일은 자제합니다.')}
${rule('20','직급에 의한 상명하복 없음','더커스텀에는 직급에 의한 상명하복이 없습니다. 서로 예의 바른 행동을 하고 내부에서 명령 및 강요, 선동을 삼갑니다. 불편한 일이 있으면 고위직 또는 간부직에게 DM으로 전달합니다. 선동으로 조직을 이탈한 경우 재입사가 불가능할 수 있습니다.')}
${rule('21','장난의 선 준수','상대가 싫다는 의사를 분명히 밝혔는데도 지속되는 장난은 괴롭힘으로 판단될 수 있으며, 내부경고 또는 해임으로 처리될 수 있습니다.')}
</div>`)}
${sec('r22','22–26 · 문의·휴가·공지·장부·잠수',`<div class="rule-list">
${rule('22','건의사항·질문 전달','더커스텀 관련 건의사항과 질문은 관리자 및 스태프가 아니라 <strong>우선적으로 고위직에게 개인 DM</strong>을 통해 전달합니다.')}
${rule('23','휴가 작성 없이 3일 이상 미접속','휴가 작성 없이 3일 이상 미접속인 경우 해임 처리될 수 있습니다. 개인적인 사정이 있으면 무조건 휴가를 작성합니다. 휴가는 <strong>최대 한 번에 10일</strong>까지 작성할 수 있으며 고위직에게 사유를 설명합니다. <strong>한 달에 20일 초과</strong> 휴가를 사용하는 경우 해임될 수 있습니다. 실적이 미비한 경우에도 팩션 활동 의지가 없는 것으로 간주되어 해임될 수 있습니다.')}
${rule('24','내부공지 확인 및 반응','내부공지는 무조건 확인하고 공지를 읽었다는 반응을 남깁니다. 내부공지는 수시로 작성되므로 새로운 직원뿐 아니라 기존 내부공지도 꼭 확인하고 반응을 남깁니다. 내부공지 또한 매뉴얼의 일부이며, 내부공지 미숙지로 인한 피해는 책임지지 않습니다.')}
${rule('25','인트라넷 판매 장부 필수 작성','인트라넷 판매 장부를 반드시 작성합니다. 장부를 작성하지 않으면 공통계좌 입금과 매칭할 수 없습니다. 업무 흐름은 <span class="good-text">콜 수락 또는 사유지 방문 손님 확인 → 인트라넷 장부 작성 → 결제 요청 → 물품 전달</span> 순서로 처리합니다.')}
${rule('26','출근 중 잠수 기능 의자 사용 금지','출근 중 잠수 기능 의자 사용은 금지합니다.')}
</div>${callout('purple','◆','항상 확인','내부공지와 판매 장부는 계속 갱신되는 업무 정보이므로 출근 전후로 확인합니다.')}`)}`
},
{
 group:'규정', title:'경고 시스템', short:'누적 기준과 경고 사유 14개', kicker:'DISCIPLINARY SYSTEM',
 html:`<div class="page-kicker">DISCIPLINARY SYSTEM</div><h1 class="page-title">경고 시스템</h1><p class="page-lead">경고 누적 기준과 각 사유별 처리 기준입니다.</p>
${sec('ladder','누적 기준',`<div class="metric-grid"><div class="metric"><small>누적 1단계</small><strong>구두경고 3회</strong><span>내부경고 1회로 전환</span></div><div class="metric"><small>누적 2단계</small><strong>내부경고 2회</strong><span>해임</span></div></div>`)}
${sec('w1','경고 사유 01–07',`${table(['번호','사유','처리'],[
['01','민원 및 모든 사건에 관련하여 영상 4일 미보유 시','<span class="status red">내부경고</span>'],
['02','인트라넷 판매보고서 장부 미작성','<span class="status red">구두경고</span> · 악용 시 해임'],
['03','지나친 언행, 욕설, 성드립, 선 넘는 장난','수위에 따라 구두경고 → 해임'],
['04','사이렌 권력 남용','<span class="status red">내부경고</span>'],
['05','부정확한 사유의 콜 수락 또는 콜 내용을 확인하지 않고 수락','<span class="status red">구두경고</span>'],
['06','내부적인 분열 및 언쟁','내부경고 또는 해임'],
['07','더커스텀 매뉴얼 미숙지로 인하여 피해 발생','강도에 따라 구두경고 → 해임']
])}`)}
${sec('w2','경고 사유 08–14',`${table(['번호','사유','처리'],[
['08','고의적으로 지인 차량 견인 시 서버 시스템 악용으로 간주','관리자처벌 + 해임'],
['09','배드RP, 지속적 괴롭힘 등으로 인한 스태프 구금 또는 업무 중 비상식적인 행위로 고위직에게 문의가 접수된 경우','내부경고 또는 해임'],
['10','더커스텀 업무와 관련되어 본인 과실로 인한 스태프 구금','강도에 따라 내부경고 또는 해임'],
['11','휴가신청 미작성','구두경고 또는 내부경고'],
['12','월 10일 이하로 접속','해임'],
['13','팩션 차량 키 분실','벌금 50억'],
['14','콜 / 방문 수리 탈취 신고','영상 녹화 필수 · 익명 보장']
])}${callout('red','!','추가 판단 기준','이 외 문제들은 고위직 및 간부직이 판단하여 처리합니다. 인턴 기간 동안 문제 발생 시 고위직 및 간부 판단 아래 즉각 해임될 수 있습니다. 상식적으로 이해가 불가능한 행동을 하고 “매뉴얼에 없다”는 핑계는 인정되지 않습니다. 행동 전 의문이 있으면 간부 또는 고위직에게 DM으로 동의를 구합니다.')}`)}`
},
{
 group:'규정', title:'보상 및 교육 인센티브', short:'주간 실적·밀착 교육 보상', kicker:'REWARD & TRAINING INCENTIVE',
 html:`<div class="page-kicker">REWARD & TRAINING INCENTIVE</div><h1 class="page-title">보상 및 교육 인센티브</h1><p class="page-lead">주간 실적 보상과 인턴 밀착 교육 인센티브 기준입니다.</p>
${sec('reward','주간 실적 보상',`<div class="metric-grid"><div class="metric"><small>인센티브 지급</small><strong>7 : 3</strong><span>지급 기준</span></div><div class="metric"><small>2주간 실적</small><strong>룰렛 티켓</strong><span>보고서 작성 실적 / 판매 실적 각 1등</span></div><div class="metric"><small>장부 누적 200건</small><strong>5억 또는 경고 삭감</strong><span>구두경고 1회 삭감 중 선택</span></div><div class="metric"><small>매주 토요일 저녁</small><strong>정기 지급</strong><span>스테이크 · 델바 · 진통제</span></div></div>${callout('amber','i','2주 실적 보상 세부 기준','한 달에 1번 참여 가능하며 중복 참여는 불가능합니다. 동일인이 중복 1등이 되더라도 룰렛 한 개 상품만 지급 가능합니다.')}`)}
${sec('edu','교육 인센티브',`<p>더커스텀은 인턴들의 빠른 적응 및 경고 삭감을 위한 밀착교육 시스템이 있습니다. 중간에 다른 사원에게 교육을 넘길 수 없으며 본인이 끝까지 마무리해야 1건으로 누적됩니다. <strong>인턴 교육은 주임 이상의 직급부터 가능</strong>합니다.</p>${table(['조건','선택 가능한 보상'],[['인턴 교육 2건','구두경고 1회 삭감'],['인턴 교육 2건','30억']])}<p class="subtle">경고 삭감 또는 교육 인센티브 중 하나를 선택할 수 있습니다.</p>`)}`
},
{
 group:'실무', title:'견인 매뉴얼과 상황별 멘트', short:'견인 5개 기준·표준 문구 6종', kicker:'TOWING OPERATIONS',
 html:`<div class="page-kicker">TOWING OPERATIONS</div><h1 class="page-title">견인 매뉴얼과 상황별 멘트</h1><p class="page-lead">견인 업무의 필수 참여 기준, RP 구역 판단, 즉시 견인 대상, 실수 처리와 표준 안내 문구입니다.</p>
${sec('tow','견인 매뉴얼',`<div class="rule-list">
${rule('01','업무 처리 끝날 때까지 참여','견인 업무 처리 끝날 때까지 무전기와 디스코드 참여는 필수입니다. 견인 업무를 할 때는 팩션 차량이 필수입니다.')}
${rule('02','RP 구역 확인 후 견인','모든 RP 구역 내부 및 입구 주변에서 RP 대기 및 진행 중인지 확인하고 견인합니다. 필드 RP(게릴라 및 죽음)와 스토리 RP에 참여한 차량은 견인할 수 없습니다. 게릴라 RP 범위를 확인하고 죽음 시작 시점부터 끝나기 전까지 인근 주변 차량을 견인하지 않습니다.')}
${rule('03','공무원·스태프 집행 콜','공무원 및 스태프 집행 콜은 공지 없이 즉시 견인 처리할 수 있습니다.')}
${rule('04','실수로 견인한 경우','실수로 견인을 진행한 경우 차주에게 <strong>500만원을 지급</strong>합니다.')}
${rule('05','공지 없이 즉시 견인 가능한 구역','메인광장, 메인차고, 뉴비존, 콜 받은 타 팩션 사유지는 공지 없이 즉시 견인할 수 있습니다.')}
</div>`)}
${sec('phrases','상황별 표준 멘트',`<p>상황별 멘트는 더커스텀 사설 디스코드의 광고지에서 복사하여 사용합니다.</p>
<div class="phrase-title">견인 2분 대기 전</div><div class="quote-code">[ &5 🚧 견인안내 🚧 - 🔧 ^1[차량번호] ^0^5님의 차량이 2분뒤 견인됩니다.^0 🔧 ]</div>
<div class="phrase-title">견인 2분 대기 후</div><div class="quote-code">[ &5 🚧 견인안내 🚧 - 🔧 ^1[차량번호] ^0^5님의 차량이 견인 되었습니다.^0 🔧 ]</div>
<div class="phrase-title">전퇴 5분전</div><div class="quote-code">[ &7 🔧 더 커스텀 5분후 전퇴 합니다 🔨 ^1서둘러 키트구매 수리 받으시길바랍니다.^6 🔧 ]</div>
<div class="phrase-title">운영중 멘트</div><div class="quote-code">[ &7 🔧 더 커스텀 운영중 🔨 ^1긴급수리키트 ^4방탄타이어 ^2견인 ^9출장 🔨 ~5사유지 방문 🚗 ^0또는 ^4F1 정비소 🔧 ]</div>
<div class="phrase-title">골든벨 멘트 · 공개용</div><div class="quote-code">[ &7 🔧 000님께서 골든벨 울렸습니다 ^1 🧰 수리키트10 개 받아가세요 ^2 0/25 명 제한 ]</div>
<div class="phrase-title">골든벨 멘트 · 비공개 익명용</div><div class="quote-code">[ &7 🔧 &lt;더 커스텀&gt; 골든벨 울렸습니다 ^1 🧰 수리키트10 개 받아가세요 ^2 0/25 명 제한 ]</div>`)}`
},
{
 group:'실무', title:'인턴 교육', short:'설치·콜·차량·판매·무전·공지', kicker:'INTERN ONBOARDING',
 html:`<div class="page-kicker">INTERN ONBOARDING</div><h1 class="page-title">인턴 교육</h1><p class="page-lead">인트라넷 설치부터 출근 차량 배치, 콜 처리, 판매와 결제, 무전, 공지, 전퇴까지 인턴 단계에서 확인해야 하는 전 항목입니다.</p>
${sec('install','설치 및 기본 설정',`${table(['구분','주소'],[['인트라넷 설치','<code>https://calvin-config-hybrid-advent.trycloudflare.com/</code>'],['인트라넷 전용앱','<code>https://www.dropbox.com/scl/fi/rx2cxa6f539blw79ndfhv/TheCustom_Intranet_Setup.exe?rlkey=k9q6qu5kkraoxushalhsjbx6n&st=wsumcknu&dl=1</code>']])}`)}
${sec('intern1','01–03 · 콜 수락·자동 퇴근·차량 위치',`<div class="rule-list">
${rule('01','콜 수락 기본 키','콜 수락 기본 키는 <span class="key">[</span> 입니다. 변경이 필요하면 <strong>설정 → 키설정 → FiveM → 알림키 변경</strong> 순서로 이동합니다.')}
${rule('02','10분 무활동 자동 퇴근','출근 상태에서 10분 동안 아무 활동이 없으면 자동 퇴근 처리됩니다.')}
${rule('03','출근 차량 위치','출근 차량은 초록선, 퇴근 차량은 빨간선, 헬기는 보라선, 바이크는 분홍선으로 구분하여 배치합니다.')}
</div>`)}
${sec('intern2','04–10 · 콜 처리·판매·결제·출동',`<div class="rule-list">
${rule('04','콜 처리 완료 후 닫기','콜 처리가 완료되면 태블릿에 들어가 닫기 처리를 하여 중복 콜을 방지합니다.')}
${rule('05','수리키트 판매 제한','수리키트는 하루 판매 <strong>최대 10개</strong>입니다. 물품 기한이 <strong>4일 이하</strong>이면 판매할 수 없습니다.')}
${rule('06','더커스텀 사용 물품 미리 제작','더커스텀 사용 물품은 미리 제작해 둡니다. 제작대에서는 한 번에 <strong>최대 2개까지</strong> 제작할 수 있습니다.')}
${rule('07','단체 주문','단체 주문은 반드시 <strong>고위직에게 전달</strong>합니다.')}
${rule('08','결제 조건','결제는 꼭 <strong>출근 상태에서만</strong> 가능합니다.')}
${rule('09','콜 출동 이동수단','콜 출동 시 필히 팩션 이동수단으로만 출동하며 <span class="danger-text">개인 차량은 절대 금지</span>합니다.')}
${rule('10','콜 내용 확인 후 출동','콜 내용을 확인한 뒤 출동합니다. “ㅋㅋㅋ” 등 의미가 없거나 업무 내용이 특정되지 않는 경우 빠른 답변을 이용해 <strong>“[닉네임]님 올바른 콜 사유로 재작성 바랍니다.”</strong>처럼 사유 재작성을 요청한 뒤 출동합니다.')}
</div>`)}
${sec('intern3','11, 13–16 · 무전·공지·전퇴·알림',`<div class="rule-list">
${rule('11','무전기 사용 방법','<span class="key">L</span> 키 → <strong>77.77 채널</strong> → 비밀번호 <strong>7777</strong> 순서로 접속합니다. <span class="key">Caps Lock</span>으로 말하기를 사용하며, 출근 시 디스코드 무전방과 무전기 모두 참여합니다.')}
${rule('13','내부공지 확인 후 이모지','내부공지 확인 후 이모지 반응을 남깁니다.')}
${rule('14','영입 금지','영입은 금지합니다.')}
${rule('15','출근 인원이 없어 퇴근할 때','출근 인원이 없어 퇴근할 때는 <strong>5분 전 전퇴 공지</strong>를 합니다. 표준 전퇴 멘트를 사용합니다.')}
${rule('16','알림 수락 불가 시','알림 수락이 불가능한 경우 태블릿 <strong>퀵알림 사용 상태</strong>를 확인합니다.')}
</div>${callout('amber','i','항목 번호','교육 항목 번호는 11번 다음에 13번으로 이어지며 12번 항목은 별도로 지정되어 있지 않습니다.')}`)}`
},
{
 group:'시스템', title:'인트라넷 보고서 작성', short:'작성 절차·판매 장부·교육용 예시', kicker:'INTRANET · SALES LEDGER',
 html:`<div class="page-kicker">INTRANET · SALES LEDGER</div><h1 class="page-title">인트라넷 보고서 작성</h1><p class="page-lead">상대방 정보와 판매 물품을 정확히 입력하고 결제 및 물품 전달 전에 장부를 완성합니다.</p>
${sec('report-ui','거래 보고서 작성 화면',`${image('assets/report-ui.png','더커스텀 인트라넷 거래 보고서','상대방 정보, 판매 물품, 보고서 작성 버튼의 위치를 확인합니다.',[[6.2,24.4,89.5,8.2,'1 · 고유번호 / 닉네임'],[6.2,47.5,89.5,18.7,'2 · 판매 물품 / 수량'],[63.5,18.0,21.5,5.2,'3 · 보고서 작성']])}`)}
${sec('report-steps','작성 절차',`${flow(['상대방 고유번호 / 닉네임 작성','판매한 물품 확인 후 제품 종류 / 수량 작성','판매 제한 조건 확인','보고서 작성 버튼으로 입력 완료'])}${callout('green','✓','판매 제한 확인','긴급 수리도구는 1일 최대 10개까지 판매할 수 있으며, 기한 4일 이하인 물품은 판매할 수 없습니다.')}${flow(['콜 수락 또는 사유지 방문 손님 확인','인트라넷 장부 작성','결제 요청','물품 전달'])}`)}
${sec('practice-example','교육용 가상 예시',`<p>야간 출동 중 고객 장비의 긴급 점검이 필요하여 긴급 수리 도구 1개를 제공했다고 가정합니다. 거래 보고서에는 아래 정보가 정확히 입력되어야 합니다.</p>${table(['항목','입력 내용'],[['고유번호','1070-P'],['닉네임','엔진 헌터'],['제품 종류','긴급 수리 도구'],['수량','1개'],['조건','판매 가능 기간 충족']])}`)}`
},
{
 group:'시스템', title:'물품 제작 방법', short:'재료 구매·제작대·필요 재료', kicker:'CRAFTING GUIDE',
 html:`<div class="page-kicker">CRAFTING GUIDE</div><h1 class="page-title">물품 제작 방법</h1><p class="page-lead">정비소 거래상에서 재료를 구매한 뒤 제작대에서 필요한 물품을 제작합니다.</p>
${sec('craft-flow','제작 순서',`${flow(['사유지 건물 내부 정비소 거래상에서 재료 구매','제작대에서 필요한 물품 선택','한 번에 최대 2개까지 제작'])}<div class="two-col">${image('assets/material-vendor.png','정비소 거래상','사유지 건물 내부에서 제작 재료를 구매합니다.')}${image('assets/workbench.png','정비소 제작대','구매한 재료로 물품을 제작합니다.')}</div>`)}
${sec('materials','거래상 판매 재료와 제작 화면',`<div class="two-col">${image('assets/material-shop.png','정비소 거래상 판매 품목','공업용 철판, 산업용 윤활유, 특수 고무, 강화 철가루 등 제작 재료를 확인합니다.')}${image('assets/crafting-ui.png','정비소 용품 제작 화면','제작 품목과 필요 재료, 제작 대기열을 확인합니다.',[[2.6,25.7,42.6,17.4,'제작 품목'],[78.6,10.2,19.2,29.0,'제작 대기열']])}</div>`)}
${sec('recipe','제작 기준표',`${table(['품목','필요 재료','판매 기준'],[
['긴급 수리 도구','공업용 철판 40개 · 산업용 윤활유 20개','<span class="status green">판매 전용</span>'],
['전문 수리 도구','공업용 철판 20개 · 산업용 윤활유 20개','<span class="status red">판매 절대 금지</span>'],
['방탄타이어(12시간)','철가루 40개 · 특수 고무 80개','<span class="status purple">제작 품목</span>'],
['방탄타이어(6시간)','특수 고무 40개 · 철가루 20개','<span class="status purple">제작 품목</span>']
])}${callout('red','!','전문 수리 도구','제작은 가능하지만 판매는 절대 금지되는 품목입니다.')}`)}`
},
{
 group:'시스템', title:'출동 태블릿', short:'콜 확인·수락·완료·퀵알림', kicker:'DISPATCH TABLET',
 html:`<div class="page-kicker">DISPATCH TABLET</div><h1 class="page-title">출동 태블릿</h1><p class="page-lead">콜 내용 확인부터 수락, 위치 확인, 출동, 업무 완료 후 닫기까지의 처리 흐름입니다.</p>
${sec('tablet-view','화면 확인',`<div class="two-col">${image('assets/tablet-call.png','출동 태블릿 알림 화면','위치, 요청자, 콜 사유를 확인하고 콜을 수락합니다.',[[4.8,13.0,62.5,36.5,'콜 내용 확인']])}${image('assets/tablet-settings.png','출동 태블릿 설정 화면','알림 수락이 되지 않을 경우 퀵알림 사용 상태와 관련 설정을 확인합니다.',[[3.2,49.0,64.5,22.5,'퀵 알림 설정']])}</div>`)}
${sec('tablet-flow','표준 처리 흐름',`${flow(['콜 내용과 사유 확인','콜 수락','위치와 경로 확인','팩션 이동수단으로 출동','업무 완료 후 콜 닫기'])}${callout('red','!','부정확한 콜 사유','업무 내용이 특정되지 않는 콜 사유는 빠른 답변으로 올바른 사유 재작성을 요청한 뒤 출동합니다.')}${callout('blue','i','알림 수락이 되지 않는 경우','태블릿의 퀵알림 사용 상태를 확인합니다.')}`)}`
},
{
 group:'시스템', title:'디스코드 설정', short:'눌러서 말하기·단축키 충돌 방지', kicker:'DISCORD · VOICE SETTINGS',
 html:`<div class="page-kicker">DISCORD · VOICE SETTINGS</div><h1 class="page-title">디스코드 설정</h1><p class="page-lead">디스코드에서 눌러서 말하기를 활성화하고 인게임 무전 키와 충돌하지 않는 단축키를 지정합니다.</p>
${sec('discord-img','음성 및 비디오 설정',`${image('assets/discord-settings.png','디스코드 음성 및 비디오 설정','사용자 지정 입력 방식과 눌러서 말하기 단축키 설정 위치를 확인합니다.',[[34.2,5.5,50,8.9,'입력 방식'],[62.5,54.8,22,6.4,'단축키 설정']])}`)}
${sec('discord-path','설정 경로',`${flow(['디스코드 설정','음성 및 비디오','눌러서 말하기 활성화','원하는 키 지정'])}${callout('red','!','단축키 충돌 주의','인게임과 디스코드의 눌러서 말하기 키를 동일하게 설정하면 오류가 발생하는 경우가 있습니다. 서로 다른 키를 지정합니다.')}`)}`
},
{
 group:'점검', title:'자기점검', short:'핵심 기준 10문항', kicker:'KNOWLEDGE CHECK',
 html:`<div class="page-kicker">KNOWLEDGE CHECK</div><h1 class="page-title">자기점검</h1><p class="page-lead">업무 전 핵심 기준을 다시 확인할 수 있는 10문항입니다. 답은 각 문항 아래의 ‘정답 확인’을 펼쳐 확인할 수 있습니다.</p>
${sec('quiz','10문항',`
${['더커스텀 사유지 내부에서 직원에게 금지된 행동은 무엇입니까?|총기·무기를 사용하여 이용자를 사살하는 행위','일반 견인 공지의 기본 대기 시간은 얼마입니까?|2분, 120초','업무 영상 녹화본의 최소 보관 기간은 얼마입니까?|4일','구두경고 3회가 누적되면 어떻게 됩니까?|내부경고 1회로 전환','실수로 차량을 견인한 경우 어떤 조치를 해야 합니까?|차주에게 500만원 지급','수리키트 판매 제한은 어떻게 됩니까?|하루 최대 10개이며 기한 4일 이하 물품은 판매 불가','단체 주문은 누구에게 전달해야 합니까?|고위직','전문 수리 도구의 판매 기준은 무엇입니까?|판매 절대 금지','출동 태블릿 업무의 올바른 마무리는 무엇입니까?|업무 완료 후 콜 닫기','디스코드 눌러서 말하기 키 설정 시 주의사항은 무엇입니까?|인게임과 동일 키 사용 시 오류가 발생할 수 있으므로 서로 다른 키 지정'].map((x,i)=>{const [q,a]=x.split('|');return `<details class="panel" style="margin:10px 0"><summary><b>Q${i+1}.</b> ${q}</summary><p class="good-text" style="margin:12px 0 0">${a}</p></details>`}).join('')}`)}
${sec('finish','업무 적용',`${callout('purple','◆','교육 후에도 계속 확인','실제 업무에서 해석이 필요한 상황이 발생하면 임의로 판단하지 말고 고위직 또는 간부직에게 확인합니다. 내부공지는 수시로 확인하고 변경된 운영 기준을 반영합니다.')}`)}`
}
];

let state={page:0,font:16,read:new Set()};
try{const s=JSON.parse(localStorage.getItem(STORAGE)||'{}'); if(Number.isInteger(s.page))state.page=Math.max(0,Math.min(pages.length-1,s.page)); if(Number.isFinite(s.font))state.font=Math.max(14,Math.min(20,s.font)); if(Array.isArray(s.read))state.read=new Set(s.read)}catch(e){}
function save(){localStorage.setItem(STORAGE,JSON.stringify({page:state.page,font:state.font,read:[...state.read]}))}
function nav(){let last='';$('#chapterNav').innerHTML=pages.map((p,i)=>{let g='';if(p.group!==last){last=p.group;g=`<div class="nav-group">${p.group}</div>`}return `${g}<button class="nav-item ${i===state.page?'active':''}" data-p="${i}"><span class="nav-num">${String(i+1).padStart(2,'0')}</span><span><b>${p.title}</b><small>${p.short}</small></span></button>`}).join(''); $$('.nav-item').forEach(b=>b.onclick=()=>go(+b.dataset.p));}
function render(){const p=pages[state.page];state.read.add(state.page);document.documentElement.style.setProperty('--reader-size',state.font+'px');$('#reader').innerHTML=p.html;$('#crumbTitle').textContent=p.title;$('#pageIndicator').textContent=`${state.page+1} / ${pages.length}`;$('#pageLabel').textContent=p.short;$('#prevBtn').disabled=state.page===0;$('#nextBtn').disabled=state.page===pages.length-1;nav();makeToc();bindPage();const pct=Math.round(state.read.size/pages.length*100);$('#readPercent').textContent=pct+'%';$('#progressLine').style.width=pct+'%';save();window.scrollTo({top:0,behavior:'instant'});}
function makeToc(){const hs=$$('#reader .section h2');$('#toc').innerHTML=hs.length?`<div class="toc-title">이 페이지</div>${hs.map(h=>`<a href="#${h.parentElement.id}">${h.textContent}</a>`).join('')}`:'';}
function go(i){state.page=Math.max(0,Math.min(pages.length-1,i));location.hash='p='+state.page;render();$('#sidebar').classList.remove('open')}
function bindPage(){$$('.zoom').forEach(b=>b.onclick=()=>{$('#imageModalImg').src=b.dataset.img;$('#imageModal').classList.add('show')});}
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('show');clearTimeout(e._x);e._x=setTimeout(()=>e.classList.remove('show'),1800)}
function searchIndex(){return pages.map((p,i)=>({i,title:p.title,short:p.short,text:(p.html.replace(/<[^>]+>/g,' ').replace(/\s+/g,' '))}))}
const idx=searchIndex();
function openSearch(){const m=$('#searchModal');m.classList.add('show');m.setAttribute('aria-hidden','false');$('#searchInput').value='';$('#searchInput').focus();drawSearch('')}
function closeSearch(){const m=$('#searchModal');m.classList.remove('show');m.setAttribute('aria-hidden','true')}
function drawSearch(q){q=q.trim().toLowerCase();const list=q?idx.filter(x=>(x.title+' '+x.short+' '+x.text).toLowerCase().includes(q)):idx.slice(0,7);$('#searchResults').innerHTML=list.length?list.map(x=>{const pos=q?x.text.toLowerCase().indexOf(q):-1;const snip=pos>=0?x.text.slice(Math.max(0,pos-45),pos+95):x.short;return `<div class="search-result" data-p="${x.i}"><b>${x.title}</b><p>${snip}</p></div>`}).join(''):'<div class="search-empty">검색 결과가 없습니다.</div>';$$('.search-result').forEach(x=>x.onclick=()=>{closeSearch();go(+x.dataset.p)})}
$('#prevBtn').onclick=()=>go(state.page-1);$('#nextBtn').onclick=()=>go(state.page+1);$('#searchTrigger').onclick=openSearch;$('#closeSearch').onclick=closeSearch;$('#searchInput').oninput=e=>drawSearch(e.target.value);$('#searchModal').onclick=e=>{if(e.target.id==='searchModal')closeSearch()};$('#imageClose').onclick=()=>$('#imageModal').classList.remove('show');$('#imageModal').onclick=e=>{if(e.target.id==='imageModal')$('#imageModal').classList.remove('show')};$('#printBtn').onclick=()=>window.print();$('#fontMinus').onclick=()=>{state.font=Math.max(14,state.font-1);render();toast('글자 크기를 줄였습니다.')};$('#fontPlus').onclick=()=>{state.font=Math.min(20,state.font+1);render();toast('글자 크기를 키웠습니다.')};$('#mobileMenu').onclick=()=>$('#sidebar').classList.toggle('open');
window.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openSearch()}if(e.key==='Escape'){closeSearch();$('#imageModal').classList.remove('show')}if(!e.target.matches('input,textarea,select')){if(e.key==='ArrowRight')go(state.page+1);if(e.key==='ArrowLeft')go(state.page-1)}});
window.addEventListener('hashchange',()=>{const m=location.hash.match(/p=(\d+)/);if(m){state.page=Math.max(0,Math.min(pages.length-1,+m[1]));render()}});
const first=location.hash.match(/p=(\d+)/);if(first)state.page=Math.max(0,Math.min(pages.length-1,+first[1]));render();
