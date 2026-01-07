import { Menu, Search } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="relative">
        <Search strokeWidth={1} color="gray" size={17} className="absolute left-2 top-2.5" />
        <input
          className="pl-10 p-2 w-[400px] text-sm bg-white outline-none rounded-2xl"
          placeholder='Try searching "insights"'
          type="text"
        />
      </div>
      <div className="flex items-center gap-3">
        <p className="flex items-center p-1 rounded-2xl gap-2 bg-white">
          <span><Menu size={20} /></span>
          <span className="h-7 w-7 bg-linear-180 to-yellow-400 via-orange-800 from-red-200 rounded-full"></span>
        </p>
        <span className="h-7 w-7 bg-(--bg-pink) text-white flex justify-center items-center rounded-full">+</span>
      </div>
    </div>
  );
};

export default Header;
