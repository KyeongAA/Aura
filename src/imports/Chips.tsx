function Chip() {
  return (
    <div className="absolute bg-[#b0c0dd] box-border content-stretch flex gap-[10px] items-center justify-center left-0 px-[20px] py-[12px] rounded-[999px] top-0" data-name="chip">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap tracking-[0.8px] whitespace-pre">고요한</p>
    </div>
  );
}

function Chip1() {
  return (
    <div className="absolute bg-[#d9d4ec] box-border content-stretch flex gap-[10px] items-center justify-center left-[112px] px-[20px] py-[12px] rounded-[999px] top-px" data-name="chip">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap tracking-[0.8px] whitespace-pre">포근한</p>
    </div>
  );
}

function Chip2() {
  return (
    <div className="absolute bg-[#f1c9d4] box-border content-stretch flex gap-[10px] items-center justify-center left-[224px] px-[20px] py-[12px] rounded-[999px] top-px" data-name="chip">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap tracking-[0.8px] whitespace-pre">정겨운</p>
    </div>
  );
}

function Chip3() {
  return (
    <div className="absolute bg-[#bcd3e4] box-border content-stretch flex gap-[10px] items-center justify-center left-[336px] px-[20px] py-[12px] rounded-[999px] top-0" data-name="chip">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap tracking-[0.8px] whitespace-pre">차분한</p>
    </div>
  );
}

function Chip4() {
  return (
    <div className="absolute bg-[#c5e1d1] box-border content-stretch flex gap-[10px] items-center justify-center left-[448px] px-[20px] py-[12px] rounded-[999px] top-0" data-name="chip">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap tracking-[0.8px] whitespace-pre">산뜻한</p>
    </div>
  );
}

function Chip5() {
  return (
    <div className="absolute bg-[#dce9b9] box-border content-stretch flex gap-[10px] items-center justify-center left-[560px] px-[20px] py-[12px] rounded-[999px] top-0" data-name="chip">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap tracking-[0.8px] whitespace-pre">생기있는</p>
    </div>
  );
}

function Chip6() {
  return (
    <div className="absolute bg-[#f7da96] box-border content-stretch flex gap-[10px] items-center justify-center left-[690px] px-[20px] py-[12px] rounded-[999px] top-0" data-name="chip">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap tracking-[0.8px] whitespace-pre">반짝이는</p>
    </div>
  );
}

function Chip7() {
  return (
    <div className="absolute bg-[#f3988c] box-border content-stretch flex gap-[10px] items-center justify-center left-[813px] px-[20px] py-[12px] rounded-[999px] top-0" data-name="chip">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap tracking-[0.8px] whitespace-pre">열정적인</p>
    </div>
  );
}

function Chip8() {
  return (
    <div className="absolute bg-[#ebedf0] box-border content-stretch flex gap-[10px] items-center justify-center left-0 px-[20px] py-[12px] rounded-[999px] top-[69px]" data-name="chip">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#313132] text-[20px] text-nowrap tracking-[0.8px] whitespace-pre">Keyword</p>
    </div>
  );
}

export default function Chips() {
  return (
    <div className="relative size-full" data-name="chips">
      <Chip />
      <Chip1 />
      <Chip2 />
      <Chip3 />
      <Chip4 />
      <Chip5 />
      <Chip6 />
      <Chip7 />
      <Chip8 />
    </div>
  );
}