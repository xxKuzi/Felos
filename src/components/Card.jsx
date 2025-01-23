import React from "react";

export default function Card({ data }) {
  const { name, schoolClass, age, image } = data;
  return (
    <div className="px-4 py-2 border-2 rounded-xl">
      <img src={image} />
      <p className="text-xl font-semibold">{name}</p>

      <div className="flex gap-4 items-center justify-center">
        <p>{age} let</p>
        <p>{schoolClass}</p>
      </div>
    </div>
  );
}
