import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className="flex items-center gap-2 justify-between">
      <input type="text" className="w-[95%] bg-neutral-800 p-2 rounded-md transition-all duration-100 outline-none" />
      <button className="bg-neutral-800 cursor-pointer transition-all duration-100 hover:bg-neutral-700 rounded-md p-1.5">
        <IoSearchOutline className="size-6" />
      </button>
    </div>
  );
};

export default Search;
