import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Options from "./Options";
import UserPhoto from "./UserPhoto";
type ISettings = {
  avatar: string;
  handleLogout: () => void;
};

const Settings = ({ avatar, handleLogout }: ISettings) => {
  return (
    <div className="lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger className="border-none outline-none">
          <UserPhoto avatar={avatar} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-fit border-none p-2 bg-neutral-800">
          <Options
            handleLogout={handleLogout}
            className="flex flex-col gap-5 mx-auto w-fit"
          />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Settings;
