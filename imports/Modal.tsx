import svgPaths from "./svg-fspzhhsrux";

function Input() {
  return (
    <div className="bg-[#fffce0] box-border content-stretch flex gap-[10px] items-center px-[28px] py-[20px] relative rounded-[999px] shrink-0 w-[742px]" data-name="input">
      <div aria-hidden="true" className="absolute border border-[#dcdee1] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[#abacaf] text-[20px]">공간 이름을 입력하세요</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-0 relative w-full">
          <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-black">주소 자동 생성</p>
        </div>
      </div>
    </div>
  );
}

function InputLarge() {
  return (
    <div className="bg-[#fffce0] box-border content-stretch flex gap-[10px] h-[376px] items-center px-[28px] py-[20px] relative rounded-[20px] shrink-0 w-[1248px]" data-name="input_large">
      <div aria-hidden="true" className="absolute border-2 border-[#dcdee1] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow h-full leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[#abacaf] text-[20px]">공간에서 느낀 감정을 기록하세요</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="content">
      <Input />
      <Frame />
      <InputLarge />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%_8.33%_0.77%_8.33%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 44">
        <g id="Group">
          <g id="Vector"></g>
          <path d={svgPaths.p35b1f980} fill="url(#paint0_linear_10_1381)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_10_1381" x1="36.5002" x2="20.0002" y1="1" y2="40">
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
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap whitespace-pre">키워드 추출하기</p>
    </div>
  );
}

function Chip() {
  return (
    <div className="bg-[#ebedf0] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[999px] shrink-0" data-name="chip">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap tracking-[0.8px] whitespace-pre">Keyword</p>
    </div>
  );
}

function Keywords() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Keywords">
      {[...Array(2).keys()].map((_, i) => (
        <Chip key={i} />
      ))}
    </div>
  );
}

function Keyword() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="keyword">
      <BtnKeyword />
      <Keywords />
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

export default function Modal() {
  return (
    <div className="bg-[#fcfcfc] relative rounded-[20px] size-full" data-name="modal">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[38px] items-start justify-center overflow-clip px-[36px] py-[40px] relative size-full">
          <p className="font-['Pretendard:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#181819] text-[32px] text-center tracking-[1.28px] w-full">새로운 Aura 작성하기</p>
          <Content />
          <Bottom />
        </div>
      </div>
    </div>
  );
}