import { ChevronDown } from "lucide-react";
import { VscListFlat } from "react-icons/vsc";
import { IoFilter } from "react-icons/io5";
import { SalesRow } from "../../data/Salesrow";
import { FiShoppingBag } from "react-icons/fi";

const LowerDiv = () => {
  const platformSummary = [
    {
      label: "Revenue",
      value: "$18,552",
    },
    {
      label: "Leads",
      value: "373",
      meta: "97 / 276",
    },
    {
      label: "Win / lose",
      value: "16%",
      meta: "51 / 318",
    },
  ];

  const arminData = {
    id: "armin",
    name: "Armin A.",
    avatar: "/img/armin.jpg",
    revenue: "$209,633",
    leads: {
      primary: 41,
      secondary: 118,
    },
    kpi: 0.84,
    winLoss: {
      win: 12,
      loss: 29,
    },
    percentage: "31%",
  };

  const mikasaData = {
    id: "mikasa",
    name: "Mikasa A.",
    avatar: "/img/mikasa.jpg",
    revenue: "$156,841",
    leads: {
      primary: 54,
      secondary: 103,
    },
    kpi: 0.89,
    winLoss: {
      win: 21,
      loss: 33,
    },
    percentage: "39%",
  };

  const erenData = {
    id: "eren",
    name: "Eren Y.",
    avatar: "/img/eren.jpg",
    revenue: "$117,115",
    leads: {
      primary: 22,
      secondary: 84,
    },
    kpi: 0.79,
    winLoss: {
      win: 7,
      loss: 15,
    },
    percentage: "32%",
  };

  return (
    <div className="grid mt-3 gap-2 grid-cols-2">
      {/* {first column} */}
      <div>
        {/* first row  */}
        <div className="grid gap-2 grid-cols-2">
          {/* first div */}
          <div className="p-2 rounded-xl bg-(--bg-gray)">
            <p className="flex items-center mb-5 justify-between">
              <span className="flex items-center gap-0.5">
                <VscListFlat />
                <ChevronDown size={13} color="gray" />
              </span>
              <span className="flex items-center gap-1 p-1 rounded-xl border border-gray-400 text-xs">
                Filters
                <IoFilter />
              </span>
            </p>

            <div className="flex flex-col gap-1">
              {[
                ["/icons/dribble.svg", "Dribbble", "$227,459", "43%"],
                ["/icons/insta.svg", "Instagram", "$142,823", "27%"],
                ["/icons/behance.svg", "Behance", "$89,935", "11%"],
                ["/icons/google.svg", "Google", "$37,028", "7%"],
              ].map(([img, name, value, percent]) => (
                <div
                  key={name}
                  className="flex items-center justify-between bg-gray-50 rounded-xl px-2 py-1.5"
                >
                  <span className="text-xs flex items-center gap-1 text-gray-600">
                    <img
                      src={img}
                      className="h-5 w-5 p-0.5 rounded-full"
                      alt=""
                    />
                    {name}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-xs tracking-tight">
                      {value}
                    </span>
                    <span className="text-[10px] bg-gray-200 px-2 py-1 rounded-full">
                      {percent}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* {Second div} */}
          <div className="p-2 rounded-xl bg-(--bg-gray)">
            <p className="flex items-center mb-5 justify-between">
              <span className="flex items-center gap-0.5">
                <VscListFlat className="rotate-270" />
                <ChevronDown size={13} color="gray" />
              </span>
              <span className="flex items-center gap-1 p-1 rounded-xl border border-gray-400 text-xs">
                Filters
                <IoFilter />
              </span>
            </p>
            <div className="grid items-end gap-1 mb-2 grid-cols-5">
              <div className="h-20 w-full relative rounded-xl bg-white">
                <img
                  src="/icons/behance.svg"
                  className="h-5 absolute top-2 w-5 p-0.5"
                  alt=""
                />
              </div>
              <div className="h-30 w-full relative rounded-xl bg-white">
                <img
                  src="/icons/dribble.svg"
                  className="h-5 absolute top-2 w-5 p-0.5"
                  alt=""
                />
              </div>
              <div className="h-15 w-full relative rounded-xl bg-white">
                <img
                  src="/icons/google.svg"
                  className="h-5 absolute top-2 w-5 p-0.5"
                  alt=""
                />
              </div>
              <div className="h-10 w-full relative rounded-xl bg-white">
                <img
                  src="/icons/insta.svg"
                  className="h-5 absolute top-2 w-5 p-0.5"
                  alt=""
                />
              </div>
              <div className="h-25 w-full relative rounded-xl striped-bar">
                <FiShoppingBag className="h-5 absolute top-2 w-5 p-0.5" />
              </div>
            </div>
            <p className="text-gray-600 text-xs">Deals amount</p>
            <p className="flex items-center text-xs font-medium">
              by referrer category
              <ChevronDown size={13} color="gray" />
            </p>
          </div>
        </div>

        {/* second row  */}

        <div className="w-full p-2 bg-(--bg-gray) mt-2 rounded-xl">
          {/* first div  */}
          <div className="flex mb-6 justify-between">
            <div className="flex items-center gap-1">
              <img src="/icons/dribble.svg" className="h-8 w-8 p-0.5 rounded-full" alt="" />
              <p className="flex flex-col">
                <span className="text-gray-600 text-sm">Platform value</span>
                <span className="flex items-center tracking-tight text-sm font-medium">
                  Dribbble
                  <ChevronDown size={13} color="gray" />
                </span>
              </p>
            </div>
            <div className="bg-white rounded-xl flex gap-1 items-center">
              {["Revenue", "Leads", "W/L"].map((title, index) => (
                <button
                  key={index}
                  className={`${
                    index == 0 ? "bg-black text-gray-200" : "bg-(--bg-gray)"
                  } text-xs rounded-xl px-2 py-2 font-medium`}
                >
                  {title}
                </button>
              ))}
            </div>
          </div>

          {/* second div  */}

          <div className="grid grid-cols-[30%_50%_20%] gap-2">
            <div className="flex items-center gap-4 rounded-bl-xl rounded-tr-xl p-4 relative bg-(--bg-pink)">
              {/* <span className="text-sm text-gray-200/80">Average monthly</span> */}
              <span className="text-sm text-gray-200/80 tracking-wide rotate-180 [writing-mode:vertical-rl]">
                Average monthly
              </span>
              <div className="flex flex-col gap-2">
                {platformSummary.map((title, index) => (
                  <span key={index} className="flex flex-col">
                    <span className="text-gray-200/80 text-xs">
                      {title.label}
                    </span>
                    <span className="text-white">{title.value}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 pb-10 gap-2">
              <div className="grid grid-cols-3 gap-1 relative items-end">
                <span className="h-20 relative rounded-xl striped-bar ">
                  <span className="absolute left-0 -top-7 p-1 bg-(--bg-pink) text-white rounded-md text-xs">
                    $6,901
                  </span>
                  <img
                    src="/img/armin.jpg"
                    className="h-4 w-4 absolute left-2 -bottom-3 bg-black rounded-full"
                    alt=""
                  />
                </span>
                <span className="h-15 relative rounded-xl bg-[#D6D6D6]">
                  <span className="absolute left-2 -bottom-9 text-gray-400/80 text-xs">
                    Sep
                  </span>
                  <img
                    src="/img/mikasa.jpg"
                    className="h-4 w-4 absolute left-2 -bottom-3 rounded-full"
                    alt=""
                  />
                </span>
                <span className="h-10 relative rounded-xl bg-[#D6D6D6] ">
                  <img
                    src="/img/eren.jpg"
                    className="h-4 w-4 absolute left-2 -bottom-3 rounded-full"
                    alt=""
                  />
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1 relative items-end">
                <span className="h-30 relative rounded-xl striped-bar ">
                  <span className="absolute left-0 -top-7 p-1 bg-(--bg-pink) text-white rounded-md text-xs">
                    $11,035
                  </span>
                  <img
                    src="/img/armin.jpg"
                    className="h-4 w-4 absolute left-2 -bottom-3 bg-black rounded-full"
                    alt=""
                  />
                </span>
                <span className="h-20 relative rounded-xl bg-[#D6D6D6]">
                  <span className="absolute left-2 -bottom-9 text-gray-400/80 text-xs">
                    Oct
                  </span>
                  <img
                    src="/img/mikasa.jpg"
                    className="h-4 w-4 absolute left-2 -bottom-3 bg-black rounded-full"
                    alt=""
                  />
                </span>
                <span className="h-10 relative rounded-xl bg-[#D6D6D6]">
                  <img
                    src="/img/eren.jpg"
                    className="h-4 w-4 absolute left-2 -bottom-3 bg-black rounded-full"
                    alt=""
                  />
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-xs text-gray-400/80 items-center">
              <span>$14,500</span>
              <span>$11,000</span>
              <span>$7,500</span>
              <span>$4,000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Second column  */}

      <div>
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] text-sm text-gray-400 px-4">
          <span>Sales</span>
          <span>Revenue</span>
          <span>Leads</span>
          <span>KPI</span>
          <span>W/L</span>
        </div>

        <SalesRow data={arminData} highlight={false} />
        <SalesRow data={mikasaData} highlight={true} />
        <SalesRow data={erenData} highlight={false} />
      </div>
    </div>
  );
};

export default LowerDiv;
