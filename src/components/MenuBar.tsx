import logo from '../assets/Logo.png';

export default function MenuBar() {
  return (
    <div className="h-[70px] relative shrink-0 w-full bg-white z-50">
      <div className="flex flex-row items-center size-full">
        <div className="box-border flex h-[70px] items-center justify-between px-3 py-0 w-full">
          <div className="h-[46px] relative shrink-0 w-[70px]">
            <img 
              alt="Candy King Logo" 
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
              src={logo}
            />
          </div>
          <MenuIcon />
        </div>
      </div>
    </div>
  );
}

function MenuIcon() {
  return (
    <div className="flex flex-col gap-[3px] items-center justify-center size-12">
      <div className="bg-[#454545] h-1 rounded w-5" />
      <div className="bg-[#454545] h-1 rounded w-5" />
      <div className="bg-[#454545] h-1 rounded w-5" />
    </div>
  );
}
