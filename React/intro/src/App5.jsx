import React from "react";
import Score from "./Score";

const playerData = [
  {
    id: 1,
    name: "Kushal Bhurtel",
    runs: 30,
  },
  {
    id: 2,
    name: "Sikhar Dhawan",
    runs: 71,
  },
  {
    id: 3,
    name: "Rohit Paudel",
    runs: 50,
  },
  {
    id: 4,
    name: "Rohit Sharma",
    runs: 100,
  },
];
const App5 = () => {
  return (
    <div>
      {playerData.map((item, index, array) => {
        return <Score key={item.id} name={item.name} runs={item.runs} />;
      })}
    </div>
  );
};

export default App5;
