import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Header = () => {
  const { logout, user } = useAuth();
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleChange = useCallback((e: any) => {
    setSearchValue(e.target.value);
  }, []);

  const handleClick = useCallback(() => {
    navigate(`/search?barbershop=${searchValue}`);
    setSearchValue("");
  }, [searchValue]);

  const handleLogout = useCallback(() => {
    logout();
  }, []);

  return (
    <div className="px-3 lg:px-0 border-b-2 border-neutral-800 bg-black h-28 flex items-center justify-between text-white overflow-hidden">
      <div className="w-[60px] md:w-[90px] md:h-[80px]">
        <Link to="/">
          <img src="/logo.png" alt="logo of cutnow" className="object-cover" />
        </Link>
      </div>
      <div className="w-[60%] md:w-[45%]">
        <Search
          value={searchValue}
          onChange={handleChange}
          onClick={handleClick}
        />
      </div>
      <UserMenu avatar={user.avatar} handleLogout={handleLogout}/>
    </div>
  );
};

export default Header;
