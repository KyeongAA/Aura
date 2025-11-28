import svgPaths from "./svg-ntgimokv2m";

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
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[normal] relative shrink-0 text-[#181819] w-[288px]" data-name="title">
      <p className="font-['Fractul_Variable:Medium',sans-serif] font-medium relative shrink-0 text-[48px] w-full">Feeds</p>
      <p className="font-['Pretendard:Light',sans-serif] not-italic relative shrink-0 text-[24px] w-full">작성된 기록들을 확인해보세요!</p>
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

function IconArrow() {
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

function Group2() {
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
          <Group2 />
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

function Chip() {
  return (
    <div className="bg-[#f7da96] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[999px] shrink-0" data-name="chip">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap whitespace-pre">반짝이는</p>
    </div>
  );
}

function Chip1() {
  return (
    <div className="bg-[#c5e1d1] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[999px] shrink-0" data-name="chip">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap whitespace-pre">산뜻한</p>
    </div>
  );
}

function Keywords() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Keywords">
      <Chip />
      <Chip1 />
    </div>
  );
}

function NameKeyword() {
  return (
    <div className="basis-0 content-stretch flex gap-[28px] grow items-center min-h-px min-w-px relative shrink-0" data-name="name+keyword">
      <p className="font-['Pretendard:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#181819] text-[24px] text-nowrap whitespace-pre">사용자닉네임</p>
      <p className="font-['Pretendard:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#181819] text-[24px] text-nowrap whitespace-pre">•</p>
      <Keywords />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="header">
      <NameKeyword />
      <p className="font-['Pretendard:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap tracking-[0.8px] whitespace-pre">2025.11.28</p>
    </div>
  );
}

function Place() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[normal] not-italic relative shrink-0 text-[#494a4b] w-[246px]" data-name="Place">
      <p className="font-['Pretendard:SemiBold',sans-serif] relative shrink-0 text-[32px] w-full">카페 소소</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[20px] w-full">서울 마포구 연남동 동교로 211</p>
    </div>
  );
}

function Text() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Pretendard:SemiBold',sans-serif] gap-[10px] items-center justify-center leading-[normal] not-italic px-0 py-[12px] relative rounded-[20px] shrink-0 text-[#181819] text-[20px] tracking-[0.8px] w-full" data-name="text">
      <p className="relative shrink-0 w-full">햇살 들어오는 자리가 너무 좋아서 시간을 잃어버렸다.</p>
      <p className="relative shrink-0 w-full">햇살 들어오는 자리가 너무 좋아서 시간을 잃어버렸다.</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="content">
      <Place />
      <Text />
    </div>
  );
}

function Feed() {
  return (
    <div className="bg-[#fefbf4] relative rounded-[20px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="feed">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[40px] relative w-full">
          <Header />
          <Content />
        </div>
      </div>
    </div>
  );
}

function Chip2() {
  return (
    <div className="bg-[#f3988c] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[999px] shrink-0" data-name="chip">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap whitespace-pre">열정적인</p>
    </div>
  );
}

function Chip3() {
  return (
    <div className="bg-[#dce9b9] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[999px] shrink-0" data-name="chip">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap whitespace-pre">생기있는</p>
    </div>
  );
}

function Keywords1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Keywords">
      <Chip2 />
      <Chip3 />
    </div>
  );
}

function NameKeyword1() {
  return (
    <div className="basis-0 content-stretch flex gap-[28px] grow items-center min-h-px min-w-px relative shrink-0" data-name="name+keyword">
      <p className="font-['Pretendard:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#181819] text-[24px] text-nowrap whitespace-pre">사용자닉네임</p>
      <p className="font-['Pretendard:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#181819] text-[24px] text-nowrap whitespace-pre">•</p>
      <Keywords1 />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="header">
      <NameKeyword1 />
      <p className="font-['Pretendard:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap tracking-[0.8px] whitespace-pre">2025.11.28</p>
    </div>
  );
}

function Place1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[normal] not-italic relative shrink-0 text-[#494a4b] w-[246px]" data-name="Place">
      <p className="font-['Pretendard:SemiBold',sans-serif] relative shrink-0 text-[32px] w-full">카페 소소</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[20px] w-full">서울 마포구 연남동 동교로 211</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Pretendard:SemiBold',sans-serif] gap-[10px] items-center justify-center leading-[normal] not-italic px-0 py-[12px] relative rounded-[20px] shrink-0 text-[#181819] text-[20px] tracking-[0.8px] w-full" data-name="text">
      <p className="relative shrink-0 w-full">햇살 들어오는 자리가 너무 좋아서 시간을 잃어버렸다.</p>
      <p className="relative shrink-0 w-full">햇살 들어오는 자리가 너무 좋아서 시간을 잃어버렸다.</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="content">
      <Place1 />
      <Text1 />
    </div>
  );
}

function Feed1() {
  return (
    <div className="bg-[#fefbf4] relative rounded-[20px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="feed">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[40px] relative w-full">
          <Header1 />
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Chip4() {
  return (
    <div className="bg-[#b0c0dd] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[999px] shrink-0" data-name="chip">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap whitespace-pre">고요한</p>
    </div>
  );
}

function Chip5() {
  return (
    <div className="bg-[#d9d4ec] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[999px] shrink-0" data-name="chip">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap whitespace-pre">포근한</p>
    </div>
  );
}

function Keywords2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Keywords">
      <Chip4 />
      <Chip5 />
    </div>
  );
}

function NameKeyword2() {
  return (
    <div className="basis-0 content-stretch flex gap-[28px] grow items-center min-h-px min-w-px relative shrink-0" data-name="name+keyword">
      <p className="font-['Pretendard:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#181819] text-[24px] text-nowrap whitespace-pre">사용자닉네임</p>
      <p className="font-['Pretendard:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#181819] text-[24px] text-nowrap whitespace-pre">•</p>
      <Keywords2 />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="header">
      <NameKeyword2 />
      <p className="font-['Pretendard:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap tracking-[0.8px] whitespace-pre">2025.11.28</p>
    </div>
  );
}

function Place2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[normal] not-italic relative shrink-0 text-[#494a4b] w-[246px]" data-name="Place">
      <p className="font-['Pretendard:SemiBold',sans-serif] relative shrink-0 text-[32px] w-full">카페 소소</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[20px] w-full">서울 마포구 연남동 동교로 211</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Pretendard:SemiBold',sans-serif] gap-[10px] items-center justify-center leading-[normal] not-italic px-0 py-[12px] relative rounded-[20px] shrink-0 text-[#181819] text-[20px] tracking-[0.8px] w-full" data-name="text">
      <p className="relative shrink-0 w-full">햇살 들어오는 자리가 너무 좋아서 시간을 잃어버렸다.</p>
      <p className="relative shrink-0 w-full">햇살 들어오는 자리가 너무 좋아서 시간을 잃어버렸다.</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="content">
      <Place2 />
      <Text2 />
    </div>
  );
}

function Feed2() {
  return (
    <div className="bg-[#fefbf4] relative rounded-[20px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="feed">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[40px] relative w-full">
          <Header2 />
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Chip6() {
  return (
    <div className="bg-[#bcd3e4] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[999px] shrink-0" data-name="chip">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap whitespace-pre">차분한</p>
    </div>
  );
}

function Chip7() {
  return (
    <div className="bg-[#c5e1d1] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[999px] shrink-0" data-name="chip">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap whitespace-pre">산뜻한</p>
    </div>
  );
}

function Keywords3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Keywords">
      <Chip6 />
      <Chip7 />
    </div>
  );
}

function NameKeyword3() {
  return (
    <div className="basis-0 content-stretch flex gap-[28px] grow items-center min-h-px min-w-px relative shrink-0" data-name="name+keyword">
      <p className="font-['Pretendard:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#181819] text-[24px] text-nowrap whitespace-pre">사용자닉네임</p>
      <p className="font-['Pretendard:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#181819] text-[24px] text-nowrap whitespace-pre">•</p>
      <Keywords3 />
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="header">
      <NameKeyword3 />
      <p className="font-['Pretendard:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap tracking-[0.8px] whitespace-pre">2025.11.28</p>
    </div>
  );
}

function Place3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[normal] not-italic relative shrink-0 text-[#494a4b] w-[246px]" data-name="Place">
      <p className="font-['Pretendard:SemiBold',sans-serif] relative shrink-0 text-[32px] w-full">카페 소소</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[20px] w-full">서울 마포구 연남동 동교로 211</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Pretendard:SemiBold',sans-serif] gap-[10px] items-center justify-center leading-[normal] not-italic px-0 py-[12px] relative rounded-[20px] shrink-0 text-[#181819] text-[20px] tracking-[0.8px] w-full" data-name="text">
      <p className="relative shrink-0 w-full">햇살 들어오는 자리가 너무 좋아서 시간을 잃어버렸다.</p>
      <p className="relative shrink-0 w-full">햇살 들어오는 자리가 너무 좋아서 시간을 잃어버렸다.</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="content">
      <Place3 />
      <Text3 />
    </div>
  );
}

function Feed3() {
  return (
    <div className="bg-[#fefbf4] relative rounded-[20px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="feed">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[40px] relative w-full">
          <Header3 />
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Chip8() {
  return (
    <div className="bg-[#f1c9d4] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[999px] shrink-0" data-name="chip">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap whitespace-pre">정겨운</p>
    </div>
  );
}

function Chip9() {
  return (
    <div className="bg-[#dce9b9] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[999px] shrink-0" data-name="chip">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap whitespace-pre">생기있는</p>
    </div>
  );
}

function Keywords4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Keywords">
      <Chip8 />
      <Chip9 />
    </div>
  );
}

function NameKeyword4() {
  return (
    <div className="basis-0 content-stretch flex gap-[28px] grow items-center min-h-px min-w-px relative shrink-0" data-name="name+keyword">
      <p className="font-['Pretendard:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#181819] text-[24px] text-nowrap whitespace-pre">사용자닉네임</p>
      <p className="font-['Pretendard:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#181819] text-[24px] text-nowrap whitespace-pre">•</p>
      <Keywords4 />
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="header">
      <NameKeyword4 />
      <p className="font-['Pretendard:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap tracking-[0.8px] whitespace-pre">2025.11.28</p>
    </div>
  );
}

function Place4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[normal] not-italic relative shrink-0 text-[#494a4b] w-[246px]" data-name="Place">
      <p className="font-['Pretendard:SemiBold',sans-serif] relative shrink-0 text-[32px] w-full">카페 소소</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[20px] w-full">서울 마포구 연남동 동교로 211</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Pretendard:SemiBold',sans-serif] gap-[10px] items-center justify-center leading-[normal] not-italic px-0 py-[12px] relative rounded-[20px] shrink-0 text-[#181819] text-[20px] tracking-[0.8px] w-full" data-name="text">
      <p className="relative shrink-0 w-full">햇살 들어오는 자리가 너무 좋아서 시간을 잃어버렸다.</p>
      <p className="relative shrink-0 w-full">햇살 들어오는 자리가 너무 좋아서 시간을 잃어버렸다.</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="content">
      <Place4 />
      <Text4 />
    </div>
  );
}

function Feed4() {
  return (
    <div className="bg-[#fefbf4] relative rounded-[20px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="feed">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[40px] relative w-full">
          <Header4 />
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function Chip10() {
  return (
    <div className="bg-[#d9d4ec] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[999px] shrink-0" data-name="chip">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap whitespace-pre">포근한</p>
    </div>
  );
}

function Chip11() {
  return (
    <div className="bg-[#f7da96] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[999px] shrink-0" data-name="chip">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap whitespace-pre">반짝이는</p>
    </div>
  );
}

function Keywords5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Keywords">
      <Chip10 />
      <Chip11 />
    </div>
  );
}

function NameKeyword5() {
  return (
    <div className="basis-0 content-stretch flex gap-[28px] grow items-center min-h-px min-w-px relative shrink-0" data-name="name+keyword">
      <p className="font-['Pretendard:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#181819] text-[24px] text-nowrap whitespace-pre">사용자닉네임</p>
      <p className="font-['Pretendard:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#181819] text-[24px] text-nowrap whitespace-pre">•</p>
      <Keywords5 />
    </div>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="header">
      <NameKeyword5 />
      <p className="font-['Pretendard:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap tracking-[0.8px] whitespace-pre">2025.11.28</p>
    </div>
  );
}

function Place5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[normal] not-italic relative shrink-0 text-[#494a4b] w-[246px]" data-name="Place">
      <p className="font-['Pretendard:SemiBold',sans-serif] relative shrink-0 text-[32px] w-full">카페 소소</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[20px] w-full">서울 마포구 연남동 동교로 211</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Pretendard:SemiBold',sans-serif] gap-[10px] items-center justify-center leading-[normal] not-italic px-0 py-[12px] relative rounded-[20px] shrink-0 text-[#181819] text-[20px] tracking-[0.8px] w-full" data-name="text">
      <p className="relative shrink-0 w-full">햇살 들어오는 자리가 너무 좋아서 시간을 잃어버렸다.</p>
      <p className="relative shrink-0 w-full">햇살 들어오는 자리가 너무 좋아서 시간을 잃어버렸다.</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="content">
      <Place5 />
      <Text5 />
    </div>
  );
}

function Feed5() {
  return (
    <div className="bg-[#fefbf4] relative rounded-[20px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="feed">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[40px] relative w-full">
          <Header5 />
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function Feeds() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="feeds">
      <Feed />
      <Feed1 />
      <Feed2 />
      <Feed3 />
      <Feed4 />
      <Feed5 />
    </div>
  );
}

function Left() {
  return (
    <div className="absolute h-[26px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[12px]" data-name="Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 26">
        <g id="Left">
          <path d={svgPaths.p20c79000} fill="var(--fill-0, #313132)" id="Vector 140 (Stroke)" />
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
          <path d={svgPaths.p10f02b0} fill="var(--fill-0, #313132)" id="Vector 140 (Stroke)" />
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

function Feed6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[52px] items-start left-[60px] top-[931px] w-[1320px]" data-name="Feed">
      <FeedHeader />
      <Feeds />
      <Pagination />
    </div>
  );
}

function ModalBg() {
  return <div className="absolute bg-[rgba(0,0,0,0.2)] h-[1024px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1440px]" data-name="modal_bg" />;
}

function IconPlus() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="icon_plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="icon_plus">
          <path d={svgPaths.p41be000} fill="var(--fill-0, #ABACAF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FabPost() {
  return (
    <div className="absolute bg-[#fffded] box-border content-stretch flex gap-[10px] items-center justify-center left-[calc(83.33%+44px)] p-[10px] rounded-[999px] shadow-[1px_2px_10px_0px_rgba(0,0,0,0.2)] size-[78px] top-[118px]" data-name="FAB_post">
      <IconPlus />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#fffce0] box-border content-stretch flex gap-[10px] items-center px-[28px] py-[20px] relative rounded-[999px] shrink-0 w-[742px]" data-name="input">
      <div aria-hidden="true" className="absolute border-2 border-[#ffcdc1] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#181819] text-[20px]">입력 중</p>
    </div>
  );
}

function Adress() {
  return (
    <div className="relative shrink-0 w-full" data-name="adress">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-0 relative w-full">
          <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-black">장소를 선택하세요</p>
        </div>
      </div>
    </div>
  );
}

function InputLarge() {
  return (
    <div className="bg-[#fffce0] box-border content-stretch flex gap-[10px] h-[376px] items-center px-[28px] py-[20px] relative rounded-[20px] shrink-0 w-[1248px]" data-name="input_large">
      <div aria-hidden="true" className="absolute border-2 border-[#dcdee1] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow h-full leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#abacaf] text-[20px]">공간에서 느낀 감정을 기록하세요</p>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="content">
      <Input />
      <Adress />
      <InputLarge />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%_8.33%_0.78%_8.33%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 44">
        <g id="Group">
          <g id="Vector"></g>
          <path d={svgPaths.p35b1f980} fill="url(#paint0_linear_10_1955)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_10_1955" x1="36.5002" x2="20.0002" y1="1" y2="40">
            <stop stopColor="#B0C0DD" />
            <stop offset="0.14" stopColor="#D9D4EC" />
            <stop offset="0.28" stopColor="#F1C9D4" />
            <stop offset="0.42" stopColor="#BCD3E4" />
            <stop offset="0.56" stopColor="#C5E1D1" />
            <stop offset="0.7" stopColor="#DCE9B9" />
            <stop offset="0.84" stopColor="#F7DA96" />
            <stop offset="1" stopColor="#F3988C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function IconAi() {
  return (
    <div className="overflow-clip relative shrink-0 size-[48px]" data-name="icon_ai">
      <Group />
    </div>
  );
}

function BtnKeyword() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative rounded-[999px] shrink-0" data-name="btn_keyword">
      <div aria-hidden="true" className="absolute border-2 border-[#939496] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <IconAi />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap whitespace-pre">키워드 추출하기</p>
    </div>
  );
}

function Chip12() {
  return (
    <div className="bg-[#ebedf0] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[999px] shrink-0" data-name="chip">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap whitespace-pre">Keyword</p>
    </div>
  );
}

function Keywords6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Keywords">
      {[...Array(2).keys()].map((_, i) => (
        <Chip12 key={i} />
      ))}
    </div>
  );
}

function Keyword() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="keyword">
      <BtnKeyword />
      <Keywords6 />
    </div>
  );
}

function BtnCta() {
  return (
    <div className="bg-[#fffded] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[16px] relative rounded-[999px] shrink-0" data-name="btn_cta">
      <div aria-hidden="true" className="absolute border-2 border-[#c4c5c8] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c4c5c8] text-[24px] text-nowrap whitespace-pre">등록하기</p>
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="bottom">
      <Keyword />
      <BtnCta />
    </div>
  );
}

function Modal() {
  return (
    <div className="absolute bg-[#fcfcfc] box-border content-stretch flex flex-col gap-[38px] items-start justify-center left-1/2 overflow-clip px-[36px] py-[40px] rounded-[20px] top-[168px] translate-x-[-50%] w-[1320px]" data-name="modal">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#181819] text-[32px] text-center tracking-[1.28px] w-full">새로운 Aura 작성하기</p>
      <Content6 />
      <Bottom />
    </div>
  );
}

function ListPlace() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[12px] items-start px-0 py-[12px] relative shrink-0 w-full" data-name="list_place">
      <div aria-hidden="true" className="absolute border-[#c4c5c8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#181819] text-[20px] tracking-[0.8px] w-full">공간 이름</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#181819] text-[20px] w-full">상세주소</p>
    </div>
  );
}

function ListPlace1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[12px] items-start px-0 py-[12px] relative shrink-0 w-full" data-name="list_place">
      <div aria-hidden="true" className="absolute border-[#c4c5c8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#181819] text-[20px] w-full">공간 이름</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#181819] text-[20px] w-full">상세주소</p>
    </div>
  );
}

function Lists() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="lists">
      <ListPlace />
      {[...Array(3).keys()].map((_, i) => (
        <ListPlace1 key={i} />
      ))}
    </div>
  );
}

function Indicator() {
  return (
    <div className="h-[120px] relative shrink-0 w-[8px]" data-name="indicator">
      <div className="absolute bg-[#ebedf0] inset-0 rounded-[999px]" data-name="indicator" />
    </div>
  );
}

function Searchdown() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[12px] items-start left-[124px] overflow-clip pl-[28px] pr-[8px] py-[20px] rounded-[12px] shadow-[0px_2px_15px_0px_rgba(0,0,0,0.15)] top-[348px] w-[686px]" data-name="searchdown">
      <Lists />
      <Indicator />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[43px] relative shrink-0 w-[243px]" data-name="logo">
      <p className="absolute font-['Fractul_Variable:Semi_Bold',sans-serif] font-semibold inset-0 leading-[normal] text-[#f24e4e] text-[36px] text-nowrap whitespace-pre">AURA of Seoul</p>
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

function Feed7() {
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
      <Feed7 />
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

export default function PostModalIng() {
  return (
    <div className="bg-[#fcfcfc] relative size-full" data-name="post_modal_ing">
      <Modal />
      <Searchdown />
      <Gnb />
      <Home />
      <Feed6 />
      <ModalBg />
      <FabPost />
    </div>
  );
}