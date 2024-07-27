"use client";
import { useState } from "react";

export default function List() {
  let Products = ["토마토", "파스타", "코코넛"];
  let [counts, setCounts] = useState(Array(Products.length).fill(0));

  const incrementCount = (index) => {
    let newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

  return (
    <div>
      <h4 className="title">Products</h4>
      {Products.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" alt={`${a}`} />
            <h4>{a} $40</h4>
            <span> {counts[i]} </span>
            <button
              onClick={() => {
                incrementCount(i);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
