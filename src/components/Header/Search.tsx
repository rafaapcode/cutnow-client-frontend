import { memo } from "react";
import { IoSearchOutline } from "react-icons/io5";

type ISearchProps = {
  value: string;
  onChange: (e: any) => void;
  onClick: () => void;
}

const Search = ({ value,  onChange, onClick}: ISearchProps) => {
  return (
    <div className="flex items-center gap-2 justify-between">
      <input value={value} onChange={onChange} type="text" className="w-[95%] bg-neutral-800 p-1 md:p-2 rounded-md transition-all duration-100 outline-none" />
      <button onClick={onClick} className="bg-neutral-800 cursor-pointer transition-all duration-100 hover:bg-neutral-700 rounded-md p-1.5">
        <IoSearchOutline className="size-4 md:size-6" />
      </button>
    </div>
  );
};

export default memo(Search);
