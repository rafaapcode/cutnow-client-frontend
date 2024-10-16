import { Suspense, useCallback, useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import UserPhoto from "./UserPhoto";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleChange = useCallback((e: any) => {
    setSearchValue(e.target.value);
  }, []);

  const handleClick = useCallback(() => {
    navigate(`/search?barbershop=${searchValue}`);
  }, [searchValue]);

  return (
    <div className="border-b-2 border-neutral-800 h-28 flex items-center justify-between text-white">
      <div className="w-[87px] h-[72px] md:w-[101px] md:h-[83px]">
        <Link to="/">
          <img src="/logo.png" alt="logo of cutnow" className="object-cover" />
        </Link>
      </div>
      <div className="w-[45%]">
        <Search
          value={searchValue}
          onChange={handleChange}
          onClick={handleClick}
        />
      </div>
      <div className="flex items-center gap-5">
        <Link to="/schedules">
          <CiCalendar className="size-6" />
        </Link>
        <div className="hidden lg:block">
          <Suspense fallback={<h1>loading ...</h1>}>
            <UserPhoto />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Header;
