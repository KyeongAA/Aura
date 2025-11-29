function Div() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center leading-[1.2] not-italic relative shrink-0 text-[#181819] w-[232px]" data-name="div">
      <p className="font-['Pretendard:SemiBold',sans-serif] relative shrink-0 text-[36px] text-center w-full">로그인</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[13px] w-full">계정에 로그인하여 서울의 Aura를 기록하세요</p>
    </div>
  );
}

function Label() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-0 relative shrink-0" data-name="Label">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#181819] text-[13px] text-nowrap whitespace-pre">이메일</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#fffce0] relative rounded-[999px] shrink-0 w-full" data-name="input">
      <div aria-hidden="true" className="absolute border border-[#dcdee1] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[28px] py-[20px] relative w-full">
          <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[#abacaf] text-[20px]">name@example.com</p>
        </div>
      </div>
    </div>
  );
}

function InputEmail() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input_email">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-0 relative shrink-0" data-name="Label">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#181819] text-[13px] text-nowrap whitespace-pre">비밀번호</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#fffce0] relative rounded-[999px] shrink-0 w-full" data-name="input">
      <div aria-hidden="true" className="absolute border border-[#dcdee1] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[28px] py-[20px] relative w-full">
          <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[#abacaf] text-[20px]">비밀번호를 입력하세요</p>
        </div>
      </div>
    </div>
  );
}

function InputPassword() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input_password">
      <Label1 />
      <Input1 />
    </div>
  );
}

function BtnCta() {
  return (
    <div className="bg-[#f46964] relative rounded-[999px] shrink-0 w-full" data-name="btn_cta">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[16px] relative w-full">
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">로그인</p>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[517px]" data-name="Form">
      <InputEmail />
      <InputPassword />
      <BtnCta />
    </div>
  );
}

function Div1() {
  return (
    <div className="bg-[#fcfcfc] box-border content-stretch flex flex-col gap-[10px] items-start p-[40px] relative rounded-[20px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="div">
      <Form />
    </div>
  );
}

function Div2() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Regular',sans-serif] gap-[12px] items-center leading-[1.2] not-italic relative shrink-0 text-[13px] text-center w-[159px]" data-name="div">
      <p className="relative shrink-0 text-[#181819] text-[0px] w-full">
        <span>{`계정이 없으신가요? `}</span>
        <span className="text-[#f24e4e]">회원가입</span>
      </p>
      <p className="relative shrink-0 text-[#939496] w-full">← 홈으로 돌아가기</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-center left-[calc(25%+62px)] top-[170px]">
      <Div />
      <Div1 />
      <Div2 />
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

function Home() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0 size-[90px]" data-name="home">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#313132] text-[24px] text-nowrap whitespace-pre">Home</p>
    </div>
  );
}

function Feed() {
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
      <Home />
      <Feed />
      <My />
    </div>
  );
}

function BtnLogin() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="btn_login">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f24e4e] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">로그인/회원가입</p>
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

export default function Login1() {
  return (
    <div className="bg-[#fcfcfc] relative size-full" data-name="login">
      <Frame />
      <Gnb />
    </div>
  );
}