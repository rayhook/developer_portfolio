import { useState } from "react";
import nobelprizes from "../data/nobel.json";

function Filter() {
  const [nobel, setNobel] = useState(nobelprizes);
  console.log("nobel", nobel.nobelPrizes[0].laureates[0]);

  const sorted = [...nobel.nobelPrizes].sort(
    (a, b) => a.laureates[0].fullName.en - b.laureates[0].fullName.en
  );
  return (
    <div className="flex flex-col w-full">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 bg-yellow-500"></div>
          <div className="px-4 py-2 bg-green-400">
            <button className="py-4 px-2 mx-2 rounded-md bg-slate-400">
              name
            </button>
            <button className="py-4 px-2 mx-2 rounded-md bg-slate-400">
              year
            </button>
            <button className="py-4 px-2 mx-2 rounded-md bg-slate-400">
              prize
            </button>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Year
                </th>
                <th className="px-6 py-3 text left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prize
                </th>
                <th className="px-6 py-3 text left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
              </tr>
            </thead>
            <tbody className="bg-amber-500 divide-y divide-gray-200">
              {sorted?.map((winner, index) => {
                return (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {winner["laureates"]?.[0]?.["fullName"]?.["en"]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {winner.awardYear}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {winner.prizeAmountAdjusted}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {winner.category.en}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Filter;
