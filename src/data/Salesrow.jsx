import { FiShoppingBag } from "react-icons/fi";
import SalesDynamicChart from "../components/SalesDynamicChart";

export function SalesRow({ data, highlight }) {
  return (
    <div
      className={`shadow rounded-xl px-4 ${
        highlight ? "bg-gradient-to-r from-[#FEF6F4] via-[#F7F2F8] to-[#F4E8F2]" : "bg-white"
      }`}
    >
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] text-sm mt-2 items-center ">
        <div className="flex py-1 px-2 items-center rounded-2xl  text-black gap-2">
          <span>
            <img
              src={data.avatar}
              className="h-5 w-5 rounded-full"
              alt=""
            />
          </span>
          <span className="font-medium">{data.name}</span>
        </div>
        <span className="text-sm font-semibold">{data.revenue}</span>
        <div className="flex gap-1 text-xs">
          <span className="bg-black text-gray-300 py-0.5 px-2 rounded-xl">
            {data.leads.primary}
          </span>
          <span className="bg-gray-300 text-black py-0.5 px-2 rounded-xl">
            {data.leads.secondary}
          </span>
        </div>
        <span className="font-medium">{data.kpi}</span>
        <span className="flex gap-1 items-center text-xs">
          <span>{data.percentage}</span>
          <span className="bg-black text-gray-300 py-0.5 px-2 rounded-xl">
            {data.winLoss.win}
          </span>
          <span className="bg-gray-300 text-black py-0.5 px-2 rounded-xl">
            {data.winLoss.loss}
          </span>
        </span>
      </div>
      {highlight && (
        <div className="py-2 flex flex-col gap-2">
          <div className="flex gap-3 items-center">
            <span className="bg-white shadow px-2 py-1 rounded-xl text-sm font-medium">
              Top Sales 💪
            </span>
            <span className="bg-white shadow px-2 py-1 rounded-xl text-sm font-medium">
              Sales streak 🔥
            </span>
            <span className="bg-white shadow px-2 py-1 rounded-xl text-sm font-medium">
              Top review 👍
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-semibold text-sm">Work with platforms</span>
            <span className="flex gap-2 items-center">
              <span className="bg-(--bg-pink) text-sm p-1 px-2 text-gray-200 rounded-xl">
                3
              </span>
              <span className="bg-(--bg-pink) text-sm p-1 px-2 text-gray-200 rounded-xl">
                $156,841
              </span>
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1">
            <div className="bg-white shadow rounded-xl flex flex-col justify-between p-2">
              <span className="flex gap-1 items-center">
                <img src="/icons/dribble.svg" className="h-5 w-5 p-0.5 rounded-full" alt="" />
                <span className="font-semibold text-sm">Dribbble</span>
              </span>
              <p className="flex gap-2 items-center">
                <span className="font-semibold text-2xl">45.3%</span>
                <span className="font-semibold text-2xl text-gray-300">
                  $71,048
                </span>
              </p>
            </div>

            <div className="grid grid-cols-2 grid-rows-[80%_20%] gap-2">
              <div className="bg-white shadow rounded-xl flex flex-col justify-between p-2">
                <span className="flex gap-1 items-center">
                  <img
                    src="/icons/insta.svg"
                    className="h-5 w-5 p-0.5 rounded-full"
                    alt=""
                  />
                  <span className="font-semibold text-sm">Instagram</span>
                </span>
                <p className="flex gap-2 items-center">
                  <span className="font-semibold text-sm">28.1%</span>
                  <span className="font-semibold text-sm text-gray-300">
                    $44,072
                  </span>
                </p>
              </div>

              <div className="grid grid-rows-[70%_30%] gap-1">
                <div className="bg-white shadow rounded-xl flex flex-col justify-between p-2">
                  <span className="flex gap-1 items-center">
                    <img
                      src="/icons/google.svg"
                      className="h-5 w-5 p-0.5 rounded-full"
                      alt=""
                    />
                    <span className="font-semibold text-sm">Google</span>
                  </span>
                  <p className="flex gap-2 items-center">
                    <span className="font-semibold text-xs">45.3%</span>
                    <span className="font-semibold text-xs text-gray-300">
                      $71,048
                    </span>
                  </p>
                </div>
                <div className="bg-white shadow flex items-center gap-2 rounded-xl p-2">
                  <img src="#" className="h-5 w-5 bg-black rounded-full" alt="" />
                  <p className="flex gap-2 items-center">
                    <span className="font-semibold text-xs">5.4%</span>
                    <span className="font-semibold text-xs text-gray-300">
                      $8,400
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex bg-white col-span-2 p-2 rounded-xl justify-between items-center">
                <span className="flex items-center">
                  <FiShoppingBag />
                  <span className="text-sm font-semibold">Other</span>
                </span>
                <span className="flex gap-2 items-center">
                  <span className="font-semibold text-xs">7.1%</span>
                  <span className="font-semibold text-xs text-gray-300">
                    $11,135
                  </span>
                </span>
              </div>
            </div>
          </div>


          <SalesDynamicChart />
        </div>
      )}
    </div>
  );
}
