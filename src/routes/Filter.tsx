import { useEffect, useState } from "react";
import nobelprizes from "../data/nobel.json";

function Filter() {
  const [nobel, setNobel] = useState(nobelprizes);
  console.log("nobel", nobel);
  return (
    <div className="min-h-screen h-screen">
      {nobel?.nobelPrizes?.map((winner) => {
        return <div>{winner["prizeAmount"]}</div>;
      })}
    </div>
  );
}

export default Filter;
