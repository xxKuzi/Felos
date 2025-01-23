import React, { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Compare() {
  const [rating, setRating] = useState([]);
  const [inProgress, setInProgress] = useState(true);
  const [counter, setCounter] = useState(0);
  const data = [
    { name: "Petra Marková", age: 18, schoolClass: "4.E", image: "petra.jpg" },
    { name: "Tvoje Mamka", age: 18, schoolClass: "4.E", image: "petra.jpg" },
    { name: "Aldyho mamka", age: 18, schoolClass: "4.E", image: "petra.jpg" },
  ];

  useEffect(() => {
    console.log("counter ", counter);
  }, [counter]);

  const next = (bool) => {
    let newArr = [...rating];
    newArr[counter] = bool;
    setRating(newArr);
    localStorage.setItem("rating", JSON.stringify(newArr));
    if (counter === data.length - 1) {
      setInProgress(false);
    } else setCounter((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {inProgress && (
        <div>
          <p className="mt-16 text-3xl text-center">Lets do it!</p>

          <div className="mt-10">
            <Card data={data[counter]} />
          </div>
          <div className="flex items-center justify-center gap-8">
            <button
              className={`border-2 rounded-lg px-2 py-1 "bg-white"`}
              onClick={() => next(false)}
            >
              Pass
            </button>
            <button
              className={`border-2 rounded-lg px-2 py-1 "bg-white"`}
              onClick={() => next(true)}
            >
              Smash
            </button>
          </div>
          <div className="flex items-center justify-center gap-8">
            <button
              disabled={counter === 0}
              className={`border-2 rounded-lg px-2 py-1 ${
                counter === 0 ? "bg-gray-200 text-gray-400" : "bg-white"
              }`}
              onClick={() => setCounter((prev) => prev - 1)}
            >
              zpět
            </button>
            <button
              disabled={counter === data.length - 1}
              className={`border-2 rounded-lg px-2 py-1 ${
                counter === data.length - 1
                  ? "bg-gray-200 text-gray-400"
                  : "bg-white"
              }`}
              onClick={() => setCounter((prev) => prev + 1)}
            >
              dále
            </button>
          </div>
        </div>
      )}

      {!inProgress && (
        <div className="mt-16 flex flex-col items-center justify-center px-6 py-4 border-2 rounded-lg">
          <p className="text-3xl text-bold">Your opinions</p>
          <div className="mt-8">
            {data.map((human, i) => (
              <div className="mt-4 flex gap-2 items-center justify-center">
                <p>{human.name}</p>

                <p>{rating[i] === true ? "Smash" : "Pass"}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

{
}
