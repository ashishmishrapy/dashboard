import { ChevronDown, ChevronUp, Earth, RotateCcw, Star } from "lucide-react";
import { LuMessageCircleMore } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { icons } from "../data/Icons";

const SideBar = () => {
  return (
    <div className="grid grid-cols-[30%_70%] w-full">
      {/* {Left Sidebar div} */}
      <div className="flex flex-col justify-between">
        <ul className="flex flex-col gap-5">
          <li className="mb-3">
            <span className="flex bg-black items-center justify-center rounded-full text-white font-black w-7 h-7 text-xl">
              C
            </span>
          </li>
          {icons.map((icon, index) => (
            <li
              className={` ${
                index === 1 ? "bg-(--bg-pink)" : "bg-white"
              } rounded-full h-7 w-7 flex items-center justify-center`}
              key={index}
            >
              {icon}
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-5">
          <li className="bg-white rounded-full h-7 w-7 flex items-center justify-center">
            <LuMessageCircleMore />
          </li>
          <li className="bg-white rounded-full h-7 w-7 flex items-center justify-center">
            <CiSettings />
          </li>
        </ul>
      </div>

      {/* {Right SideBar div} */}
      <div className="flex flex-col gap-1.5">
        <h4 className="font-semibold flex items-center gap-1">Codename.com <ChevronDown strokeWidth={1} color="gray" size={15} /></h4>
        <div className="flex mt-2 flex-col">
          <p className="flex items-center gap-1 text-gray-600 text-sm">
            <Star strokeWidth={1} size={13} /> Starred
          </p>
          <p className="flex items-center gap-1 text-gray-600 text-sm">
            {" "}
            <RotateCcw strokeWidth={1} size={13} />
            Recent
          </p>
        </div>
        <p className="font-semibold text-xs">Sales List</p>
        <p className="font-semibold text-xs">Goals</p>
        <div className="font-semibold flex flex-col gap-1 text-xs">
          <p className="flex justify-between mb-1">
            <span>Dashboard</span>
            <span className="bg-white text-gray-400 font-medium h-5 w-5 rounded-full flex justify-center items-center">
              +
            </span>
          </p>
          <div className="border-l pl-4 flex flex-col gap-1 border-l-gray-400">
            <p className="text-gray-900">Codename</p>
            <p className="flex justify-between items-center">
              Shared with me{" "}
              <span className="text-gray-500 text-xs">
                <ChevronUp strokeWidth={1} size={15} />
              </span>{" "}
            </p>
            <div className="border-l text-gray-800 flex flex-col gap-1 pl-4 border-l-gray-400">
              <p>Cargo2go</p>
              <p className="flex items-center justify-between">
                <span>Cloudz3r</span>
                <span className="bg-(--bg-pink) text-white text-[10px] h-4 w-4 rounded-md flex justify-center items-center">
                  2
                </span>
              </p>
              <p>Idioma</p>
              <p>Syllables</p>
              <p>x-0b</p>
            </div>
          </div>

          <p className="flex mb-1 mt-1 justify-between">
            <span>Reports</span>
            <span className="bg-white text-gray-400 h-5 w-5 rounded-full flex font-medium justify-center items-center">
              +
            </span>
          </p>
          <div className="border-l pl-4 flex flex-col gap-1 border-l-gray-400">
            <p className="flex justify-between items-center">
              Shared with me{" "}
              <span className="text-gray-500 text-xs">
                <ChevronUp strokeWidth={1} size={15} />
              </span>{" "}
            </p>
            <div className="border-l text-gray-800 flex flex-col gap-1 pl-4 border-l-gray-400">
              <p>Deals by user</p>
              <p>Deal duration</p>
            </div>
            <p>My Reports</p>
            <div className="border-l flex text-gray-800 flex-col gap-1 pl-4 border-l-gray-400">
              <p>Emails received</p>
              <p>Deal duration</p>
              <p>New Reports</p>
              <p className="flex items-center justify-between">
                <span>Cloudz3r</span>
                <span className="bg-(--bg-pink) text-white text-[10px] h-4 w-4 rounded-md flex justify-center items-center">
                  2
                </span>
              </p>
            </div>
          </div>

          <p className="flex items-center gap-1 text-gray-600 text-sm mt-3">
            Manage folders
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
