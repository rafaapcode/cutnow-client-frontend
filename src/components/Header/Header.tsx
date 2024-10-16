import Search from "./search";

const Header = () => {
  return (
    <div className="border-b-2 border-neutral-800 h-28 flex items-center justify-between text-white">
      <div className="w-[87px] h-[72px] md:w-[101px] md:h-[83px]">
        <img src="/logo.png" alt="logo of cutnow" className="object-cover" />
      </div>
      <div className="w-[45%]">
        <Search />
      </div>
      <div className="flex items-center gap-5">
        <div>agenda</div>
        <div className="hidden lg:block w-[73px] h-[73px] rounded-full shadow-md">
          <img src="/logo.png" alt="photo of the user" className="object-cover"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
