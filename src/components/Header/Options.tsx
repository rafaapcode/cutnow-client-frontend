import { CiCalendar } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

type IOptions = {
  handleLogout: () => void;
  className?: string;
};

const Options = ({ handleLogout, className }: IOptions) => {
  return (
    <>
      <div className={className}>
        <Link to="/schedules">
          <CiCalendar className="size-6 md:size-8 text-white" />
        </Link>
        <button onClick={handleLogout}>
          <IoIosLogOut className="size-6 md:size-8 text-white" />
        </button>
      </div>
    </>
  );
};

export default Options;
