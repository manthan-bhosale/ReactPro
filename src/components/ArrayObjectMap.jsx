import React from "react";

function ArrayObjectMap() {
  const fruits = [
    { name: "apple", price: 14 },
    { name: "banana", price: 20 },
    { name: "orange", price: 12 },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name}>
            {fruit.name}
            {fruit.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayObjectMap;
