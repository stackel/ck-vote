import svgPaths from '../imports/svg-ea6n159oix';
import candyWinner from '../assets/Winner.png';
import candyLoser from '../assets/Loser.png';

export default function Editorial() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-6 px-3 py-6 w-full max-w-[640px]">
        <About />
        <Results candyWinner={candyWinner} candyLoser={candyLoser} />
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="bg-[#eaeaea] rounded-2xl p-6 shadow-lg">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 text-[#8231a7]">
          <p className="font-['Amsi_Pro_Condensed:Black',sans-serif] leading-[0.9]">
            WHAT FLAVOUR DO YOU WANT?
          </p>
          <p className="font-['DM_Sans:SemiBold',sans-serif] leading-[1.25]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra elit ut aliquet rutrum. Proin vitae aliquet lectus.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <p className="font-['DM_Sans:Medium',sans-serif] text-[#480e67]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Tell me more
            </p>
            <div className="rotate-90">
              <p className="font-['DM_Sans:Medium',sans-serif] text-[#480e67]" style={{ fontVariationSettings: "'opsz' 14" }}>
                {`>`}
              </p>
            </div>
          </div>
          
          <div className="font-['DM_Sans:Medium',sans-serif] text-[#757575] text-sm leading-[1.3]" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra elit ut aliquet rutrum. Proin vitae aliquet lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra elit ut aliquet rutrum. Proin vitae aliquet lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra elit ut aliquet rutrum. Proin vitae aliquet lectus.</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra elit ut aliquet rutrum. Proin vitae aliquet lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra elit ut aliquet rutrum. Proin vitae aliquet lectus.</p>
            <p className="mb-0">&nbsp;</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra elit ut aliquet rutrum. Proin vitae aliquet lectus.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Results({ candyWinner, candyLoser }: { candyWinner: string, candyLoser: string }) {
  return (
    <div className="bg-[#eaeaea] rounded-2xl p-6 shadow-lg mb-6">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 text-center">
          <p className="font-['Amsi_Pro_Condensed:Black',sans-serif] leading-[0.9] text-[#8231a7]">
            JANUARY 2026
          </p>
          <p className="font-['DM_Sans:Medium',sans-serif] text-[#6f6f6f] text-xs leading-[1.1]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Semi Finals
          </p>
        </div>
        
        <div className="flex items-start justify-between w-full">
          <WinnerCandy candyWinner={candyWinner} />
          <div className="flex gap-2.5 items-center justify-center px-0 py-12">
            <p className="font-['Amsi_Pro_Condensed:Black',sans-serif] leading-[0.9] text-[#828282]">V.S</p>
          </div>
          <LoserCandy candyLoser={candyLoser} />
        </div>
        
        <div className="font-['DM_Sans:Medium',sans-serif] text-[#878787] text-center leading-[1.2]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="font-['DM_Sans:SemiBold',sans-serif] mb-0 text-xs" style={{ fontVariationSettings: "'opsz' 14" }}>
            840 VOTES
          </p>
          <p className="font-['Amsi_Pro_Condensed:Black',sans-serif] text-[#f67eb4]">520 | 320</p>
        </div>
      </div>
    </div>
  );
}

function WinnerCandy({ candyWinner }: { candyWinner: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2.5 items-center justify-center rounded-full size-32 relative">
        <Donut />
        <div className="absolute flex items-center justify-center" style={{ rotate: '350.743deg' }}>
          <div className="relative w-[90.945px] h-[91.053px]">
            <img 
              alt="" 
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
              src={candyWinner}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center font-['Amsi_Pro_Condensed:Black',sans-serif] leading-[0.9]">
        <p className="text-[#8231a7]">SOUR FIZZ</p>
        <p className="text-[#f67eb4] text-2xl">WINNER!</p>
      </div>
    </div>
  );
}

function LoserCandy({ candyLoser }: { candyLoser: string }) {
  return (
    <div className="flex flex-col items-center self-stretch w-32">
      <div className="flex gap-2.5 h-32 items-center justify-center w-full bg-[rgba(216,183,227,0.25)] rounded-full">
        <div className="flex items-center justify-center" style={{ rotate: '13.657deg' }}>
          <div className="relative size-[80.822px]">
            <img 
              alt="" 
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
              src={candyLoser}
            />
          </div>
        </div>
      </div>
      <p className="font-['Amsi_Pro_Condensed:Black',sans-serif] leading-[0.9] text-[#b7b7b7]">FOAMY FUDGE</p>
    </div>
  );
}

function Donut() {
  return (
    <div className="size-28">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 112">
        <g clipPath="url(#clip0_1_389)" id="Donut">
          <path d={svgPaths.p113d6100} fill="#442769" id="Background" />
          <mask height="112" id="mask0_1_389" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="112" x="0" y="0">
            <path d={svgPaths.p113d6100} fill="#D9D9D9" id="Mask" />
          </mask>
          <g mask="url(#mask0_1_389)">
            <g id="Fizz Large">
              <path d={svgPaths.p3f067000} fill="#F67EB4" />
              <path d={svgPaths.p21268480} fill="#F67EB4" />
              <path d={svgPaths.p2d8937c0} fill="#F67EB4" />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_389">
            <rect fill="white" height="112" width="112" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
