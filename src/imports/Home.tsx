import svgPaths from "./svg-pfy33p2ohw";

function Map() {
  return (
    <div className="absolute h-[741px] left-[113px] top-[130px] w-[1124px]" data-name="Map">
      <div className="absolute inset-[-0.08%_-0.04%_-0.07%_-0.07%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1126 743">
          <g id="Map">
            <path d={svgPaths.p3e5b2af0} id="Vector 486" stroke="var(--stroke-0, #181819)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="absolute contents left-[60px] top-[130px]" data-name="home">
      <Map />
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[normal] left-[60px] not-italic text-[#181819] text-[24px] text-nowrap top-[130px] whitespace-pre">지도에서 서울의 감정을 확인하세요!</p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 text-[#181819]" data-name="title">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[1.2] relative shrink-0 text-[48px] w-full">Feeds</p>
      <p className="font-['Pretendard:Light',sans-serif] leading-[normal] relative shrink-0 text-[24px] w-full">작성된 Aura들을 확인해보세요!</p>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[7px] relative w-[13.714px]">
      <div className="absolute inset-[-10.71%_-5.47%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 9">
          <g id="Group 7">
            <path d={svgPaths.p3262280} id="Vector 12" stroke="var(--stroke-0, #313132)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconArrow() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon_arrow">
      <div className="absolute flex h-[7px] items-center justify-center left-[calc(50%+0.14px)] top-[calc(50%+0.52px)] translate-x-[-50%] translate-y-[-50%] w-[13.714px]">
        <div className="flex-none rotate-[180deg]">
          <Group />
        </div>
      </div>
    </div>
  );
}

function DroptownKeyword() {
  return (
    <div className="bg-white h-[60px] relative rounded-[20px] shrink-0 w-[184px]" data-name="droptown_keyword">
      <div className="box-border content-stretch flex h-[60px] items-center justify-between overflow-clip px-[20px] py-[12px] relative rounded-[inherit] w-[184px]">
        <p className="font-['Pretendard:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4f4b4b] text-[16px] text-nowrap whitespace-pre">전체 키워드</p>
        <IconArrow />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f68f84] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[7px] relative w-[13.714px]">
      <div className="absolute inset-[-10.71%_-5.47%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 9">
          <g id="Group 7">
            <path d={svgPaths.p3262280} id="Vector 12" stroke="var(--stroke-0, #313132)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconArrow1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon_arrow">
      <div className="absolute flex h-[7px] items-center justify-center left-[calc(50%+0.14px)] top-[calc(50%+0.52px)] translate-x-[-50%] translate-y-[-50%] w-[13.714px]">
        <div className="flex-none rotate-[180deg]">
          <Group1 />
        </div>
      </div>
    </div>
  );
}

function DropdownTown() {
  return (
    <div className="bg-white h-[60px] relative rounded-[20px] shrink-0 w-[184px]" data-name="dropdown_town">
      <div className="box-border content-stretch flex h-[60px] items-center justify-between overflow-clip px-[20px] py-[12px] relative rounded-[inherit] w-[184px]">
        <p className="font-['Pretendard:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4f4b4b] text-[16px] text-nowrap whitespace-pre">전체 동네</p>
        <IconArrow1 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f68f84] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Filter() {
  return (
    <div className="content-stretch flex gap-[36px] items-center relative shrink-0" data-name="filter">
      <DroptownKeyword />
      <DropdownTown />
    </div>
  );
}

function FeedHeader() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Feed Header">
      <Title />
      <Filter />
    </div>
  );
}

function Left() {
  return (
    <div className="absolute h-[26px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[12px]" data-name="Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 26">
        <g id="Left">
          <path d={svgPaths.p20c79000} fill="var(--fill-0, #DCDEE1)" id="Vector 140 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function IconArrow2() {
  return (
    <div className="relative size-[36px]" data-name="icon_arrow">
      <Left />
    </div>
  );
}

function Right() {
  return (
    <div className="h-[26px] relative w-[12px]" data-name="Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 26">
        <g id="Right">
          <path d={svgPaths.p10f02b0} fill="var(--fill-0, #DCDEE1)" id="Vector 140 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function IconArrow3() {
  return (
    <div className="relative size-[36px]" data-name="icon_arrow">
      <div className="absolute flex h-[26px] items-center justify-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[12px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Right />
        </div>
      </div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="pagination">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconArrow2 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconArrow3 />
        </div>
      </div>
    </div>
  );
}

function Feed() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[52px] items-center left-[60px] top-[931px] w-[1320px]" data-name="Feed">
      <FeedHeader />
      <p className="font-['Pretendard:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#181819] text-[32px] text-nowrap whitespace-pre">아직 기록된 Aura가 없어요!</p>
      <Pagination />
    </div>
  );
}

function IconPlus() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="icon_plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="icon_plus">
          <path d={svgPaths.p41be000} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FabPost() {
  return (
    <div className="absolute bg-[#f46964] box-border content-stretch flex gap-[10px] items-center justify-center left-[calc(83.33%+44px)] p-[10px] rounded-[999px] shadow-[1px_2px_10px_0px_rgba(0,0,0,0.2)] size-[78px] top-[118px]" data-name="FAB_post">
      <IconPlus />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[43px] relative shrink-0 w-[243px]" data-name="logo">
      <p className="absolute font-['Fractul_Variable:Semi_Bold',sans-serif] inset-0 leading-[normal] not-italic text-[#f24e4e] text-[36px] text-nowrap whitespace-pre">AURA of Seoul</p>
    </div>
  );
}

function Home1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0 size-[90px]" data-name="home">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f24e4e] text-[24px] text-nowrap whitespace-pre">Home</p>
    </div>
  );
}

function Feed1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0 size-[90px]" data-name="feed">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#313132] text-[24px] text-nowrap whitespace-pre">Feed</p>
    </div>
  );
}

function My() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0 size-[90px]" data-name="my">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#313132] text-[24px] text-nowrap whitespace-pre">My</p>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[140px] items-center justify-center relative shrink-0" data-name="nav">
      <Home1 />
      <Feed1 />
      <My />
    </div>
  );
}

function BtnLogin() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="btn_login">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f68f84] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">로그인/회원가입</p>
    </div>
  );
}

function Login() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[90px] items-end justify-center px-0 py-[12px] relative shrink-0" data-name="login">
      <BtnLogin />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[935px]" data-name="container">
      <Nav />
      <Login />
    </div>
  );
}

function Gnb() {
  return (
    <div className="absolute bg-[#fffce0] box-border content-stretch flex items-center justify-between left-1/2 px-[60px] py-0 top-0 translate-x-[-50%] w-[1440px]" data-name="gnb">
      <div aria-hidden="true" className="absolute border-2 border-[#ebedf0] border-solid inset-0 pointer-events-none" />
      <Logo />
      <Container />
    </div>
  );
}

export default function Home2() {
  return (
    <div className="bg-[#fcfcfc] relative size-full" data-name="home">
      <Gnb />
      <Home />
      <Feed />
      <FabPost />
    </div>
  );
}