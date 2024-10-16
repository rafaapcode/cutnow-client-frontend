import { Suspense } from "react";
import Options from "./Options";
import Settings from "./Settings";
import UserPhoto from "./UserPhoto";

type IUserMenu = {
  handleLogout: () => void;
  avatar: string;
};

const UserMenu = ({ avatar, handleLogout }: IUserMenu) => {
  return (
    <div>
      <div className="hidden lg:flex items-center gap-5">
       <Options handleLogout={handleLogout} className="flex gap-4"/>
        <Suspense
          fallback={
            <div className="w-[73px] h-[73px] rounded-full shadow-md overflow-hidden bg-neutral-800 animate-pulse" />
          }
        >
          <UserPhoto avatar={avatar} />
        </Suspense>
      </div>
      <Settings avatar={avatar} handleLogout={handleLogout}/>
    </div>
  );
};

export default UserMenu;
