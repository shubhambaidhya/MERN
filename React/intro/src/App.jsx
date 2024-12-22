import React from "react";
import Car from "./Car";

const carData = [
  {
    id: 1,
    image:
      "https://www.motortrend.com/uploads/2023/11/003-Driving-the-Mercedes-Benz-300SL-Gullwing.jpg",
    name: "Mercedes Benz",
    price: " $1.3 million",
    type: "Supercar",
  },
  {
    id: 2,
    image:
      "https://c.cdn.autotraderspecialty.com/1974-BMW-2002-import_classics--Car-102062365-3dcdbb3d92850ba86400a0a1e172666d.jpg?w=360",
    name: "1974 BMW 2002",
    price: " $28,500",
    type: "Compact sedan",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlrhRYT3crfMyfivtDni2ekYgGLKk4M5YL0Q&s",
    name: "Lamborgini Huracan",
    price: " $249,865",
    type: "Supercar",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5UVxofjsDNOid8Xr_wz2lIsFxcEwebrwM0A&s",
    name: "Rolls Royce Phantom",
    price: " $505,750",
    type: "Ultra-luxury sedan",
  },
];

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {carData.map((item, index, array) => {
        return (
          <Car
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            type={item.type}
          />
        );
      })}
    </div>
  );
}

export default App;
