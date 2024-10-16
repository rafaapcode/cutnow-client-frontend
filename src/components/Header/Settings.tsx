import { useCallback, useState } from "react";
import UserPhoto from "./UserPhoto";
type ISettings = {
  avatar: string;
};

const Settings = ({ avatar }: ISettings) => {
  const [openSettings, setOpenSettings] = useState(false);

  const handleClick = useCallback(() => {
    setOpenSettings(!openSettings);
  }, [openSettings]);

  return (
    <div className="relative h-full">
      <button onClick={handleClick} className="lg:hidden">
        <UserPhoto avatar={avatar} />
      </button>
      {openSettings && <div className="bg-neutral-400 absolute -bottom-7 w-full">teste</div>}
    </div>
  );
};

export default Settings;
