function Chip() {
  return (
    <div className="bg-[#f7da96] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[999px] shrink-0" data-name="chip">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap tracking-[0.8px] whitespace-pre">반짝이는</p>
    </div>
  );
}

function Chip1() {
  return (
    <div className="bg-[#c5e1d1] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[999px] shrink-0" data-name="chip">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap tracking-[0.8px] whitespace-pre">산뜻한</p>
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
      <p className="font-['Pretendard:Light',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">사용자닉네임</p>
      <p className="font-['Pretendard:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">•</p>
      <Keywords />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="header">
      <NameKeyword />
      <p className="font-['Pretendard:Light',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap tracking-[0.8px] whitespace-pre">2025.11.28</p>
    </div>
  );
}

function Place() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.2] not-italic relative shrink-0 text-[#494a4b] w-[246px]" data-name="Place">
      <p className="font-['Pretendard:SemiBold',sans-serif] relative shrink-0 text-[32px] w-full">카페 소소</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[20px] w-full">서울 마포구 연남동 동교로 211</p>
    </div>
  );
}

function Text() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Pretendard:SemiBold',sans-serif] gap-[10px] items-center justify-center leading-[1.2] not-italic px-0 py-[12px] relative rounded-[20px] shrink-0 text-[20px] text-black tracking-[0.8px] w-full" data-name="text">
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

export default function Feed() {
  return (
    <div className="bg-[#fefbf4] relative rounded-[20px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)] size-full" data-name="feed">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[40px] relative size-full">
          <Header />
          <Content />
        </div>
      </div>
    </div>
  );
}