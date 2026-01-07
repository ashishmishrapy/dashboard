import { Download, Share, SlidersHorizontal, ChevronDown, ChevronRight } from "lucide-react";

const UpperDiv = () => {
  return (
    <div className="text-xs flex flex-col gap-4">
      {/* {first div} */}
      <div className="flex justify-between items-center">
        <ul className="flex items-center gap-2">
          <li className="shadow rounded-full">
            <span className="h-5 w-5 bg-white border p-3 text-xl border-gray-300 text-black flex justify-center items-center rounded-full">
              +
            </span>
          </li>
          <li className="flex bg-white border shadow py-1 px-2 items-center rounded-2xl border-gray-300 text-black gap-2">
            <span>
              <img src="/img/armin.jpg" className="h-5 w-5 bg-black rounded-full" alt="" />
            </span>
            <span className="font-medium">Armin A.</span>
          </li>
          <li className="flex bg-white border shadow p-1 px-2 items-center rounded-2xl border-gray-300 text-black gap-2">
            <span>
              <img src="/img/eren.jpg" className="h-5 w-5 bg-black rounded-full" alt="" />
            </span>
            <span className="font-medium">Eren Y.</span>
          </li>
          <li className="flex bg-white border shadow p-1 px-2 items-center rounded-2xl border-gray-300 text-black gap-2">
            <span>
              <img src="/img/mikasa.jpg" className="h-5 w-5 bg-black rounded-full" alt="" />
            </span>
            <span className="font-medium">Mikasa A.</span>
          </li>

          <li className="border shadow border-gray-300 rounded-full p-1">
            <span className="flex bg-black items-center justify-center rounded-full text-white font-black w-5 h-5">
              C
            </span>
          </li>
        </ul>

        <ul className="flex gap-3 justify-center">
          <li className="flex bg-white border shadow p-1 items-center rounded-full border-gray-300 text-black gap-2">
            <SlidersHorizontal size={15} />
          </li>
          <li className="flex bg-white border shadow p-1 items-center rounded-full border-gray-300 text-black gap-2">
            <Download size={15} />
          </li>
          <li className="flex bg-white border shadow p-1 items-center rounded-full border-gray-300 text-black gap-2">
            <Share size={15} />
          </li>
        </ul>
      </div>

      {/* {Second div} */}

      <div className="flex justify-between">
        <h3 className="text-gray-300 tracking-tighter text-3xl font-semibold">New report</h3>
        <div className="flex gap-2 items-center">
          <span className="flex font-semibold tracking-tight items-center gap-1">
            <span className="h-5 w-10 rounded-2xl relative bg-black">
              <span className="h-4 w-4 top-0.5 bg-white absolute rounded-full right-0.5"></span>
            </span>
            Timeframe
          </span>

          <span className="flex items-center bg-gray-200 px-2 font-medium rounded-2xl p-1">
            Sep 1 - Nov 30, 2023 <ChevronDown size={15} color="gray" />
          </span>
        </div>
      </div>

      {/* {Third div} */}

      <div className="grid items-center grid-cols-[40%_60%]">
        <div>
          <p className="font-semibold pb-1">Revenue</p>
          <p className="flex gap-2 items-center">
            <span className="text-2xl font-semibold">
              $528,976<span className="text-gray-300">.82</span>
            </span>
            <span className="bg-(--bg-pink) rounded-xl text-white px-1 text-[10px]">
                7.9%
            </span>
            <span className="bg-(--bg-pink) rounded-xl text-white px-1 text-[10px]">
                $27,335<span className="text-white font-light">.09</span>
            </span>
          </p>
          <p className="flex font-medium pt-1 gap-1">
            <span>vs prev. $501,641.73</span>
            <span className="flex gap-1">Jun 1 - Aug 31, 2023 <ChevronDown strokeWidth={1} color="gray" size={15} /> </span>
          </p>
        </div>

        <div className="flex gap-1">
            <div className="flex flex-col p-1.5 px-2 w-[150px] shadow-2xl rounded-xl gap-1">
                <span className="text-gray-700 font-medium">Top sales</span>
                <span className="text-lg font-semibold">72</span>
                <span className="flex justify-between items-center">
                    <span className="flex items-center gap-1 font-medium"><img src="/img/mikasa.jpg" className="h-3 w-3 bg-black rounded-full" alt="" /> Mikasa</span>
                    <span className="bg-gray-200 rounded"><ChevronRight size={13} /></span>
                </span>
            </div>
            <div className="flex flex-col text-white bg-black p-1.5 px-2 w-[150px] shadow-2xl rounded-xl gap-1">
                <span className="text-gray-300 font-medium">Best deal</span>
                <span className="text-lg font-semibold">$42,300</span>
                <span className="flex justify-between items-center">
                    <span className="flex items-center gap-1 font-medium">Ralf Inc.</span>
                    <span className="bg-white text-black rounded"><ChevronRight size={13} /></span>
                </span>
            </div>
            <div className="flex ml-2 flex-col font-medium justify-center items-center bg-white p-1.5 w-[100px] shadow-2xl rounded-xl gap-2">
                Deals
                <span className="bg-gray-400 text-white px-1 rounded-2xl">258</span>
                <span className="font-medium">5</span>
            </div>
            <div className="flex flex-col border border-pink-600 font-medium justify-center items-center bg-pink-50 p-1.5 w-[100px] shadow-2xl rounded-xl gap-2">
                Value
                <span className="bg-(--bg-pink) text-white px-1 rounded-2xl">528k</span>
                <span className="font-medium">7.9%</span>
            </div>
            <div className="flex flex-col font-medium justify-center items-center bg-white p-1.5 w-[100px] shadow-2xl rounded-xl gap-2">
                Win rate
                <span className="bg-gray-400 text-white px-1 rounded-2xl">44%</span>
                <span className="font-medium">1.2%</span>
            </div>
        </div>
      </div>


      {/* {Forth div} */}

      <div className="flex justify-between">
        <div className="grid grid-cols-4 p-1 rounded-full gap-1 w-[90%] bg-(--bg-gray)">
          <p className="flex bg-white items-center rounded-full justify-between py-1 px-2">
            <span className="flex gap-1 items-center">
              <img src="/img/armin.jpg" className="h-5 w-5 rounded-full" alt="" />
              <span className="font-medium">$209,633</span>
            </span>
            <span className="text-gray-500 hidden lg:inline-block">39.63%</span>
          </p>
          <p className="flex bg-white items-center rounded-full justify-between py-1 px-2">
            <span className="flex gap-1 items-center">
              <img src="/img/mikasa.jpg" className="h-5 w-5 rounded-full" alt="" />
              <span className="font-medium">$156,841</span>
            </span>
            <span className="text-gray-500 hidden lg:inline-block">39.63%</span>
          </p>
          <p className="flex bg-white items-center rounded-full justify-between py-1 px-2">
            <span className="flex gap-1 items-center">
              <img src="/img/eren.jpg" className="h-5 w-5 rounded-full" alt="" />
              <span className="font-medium">$117,115</span>
            </span>
            <span className="text-gray-500 hidden lg:inline-block">39.63%</span>
          </p>
          <p className="flex items-center rounded-full justify-between py-1 px-2">
            <span className="flex gap-0.5 items-center">
              <span className="flex bg-black items-center justify-center rounded-full text-white font-black w-5 h-5 text-md">
        C 
            </span>
              <span className="font-medium">$209,633</span>
            </span>
            <span className="text-gray-500 hidden lg:inline-block">39.63%</span>
          </p>

        </div>
        <button className="flex rounded-full bg-black px-5 text-white py-2 items-center">Details</button>
      </div>


    </div>
  );
};

export default UpperDiv;
