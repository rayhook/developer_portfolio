import { useState } from "react";
import nobelprizes from "../data/nobel.json";

function Filter() {
  const [nobel, setNobel] = useState(nobelprizes);
  return (
    <div className="min-h-screen h-screen">
      {nobel?.nobelPrizes?.map((winner, index) => {
        return (
          <div className="">
            <table key={index}>
              <thead>
                <tr>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{winner["laureates"]?.[0]?.["fullName"]?.["en"]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default Filter;
