/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
import Cupcake from "@components/Cupcake";
import { useState } from "react";
import React from "react";

export default function CupcakeList() {
  // Step 1: get all cupcakes

  const [allCupcakes, setAllCupcakes] = useState([]);

  const getAllCupcakes = () => {
    fetch("http://localhost:4000/cupcakes")
      .then((reponse) => reponse.json())
      .then((result) => setAllCupcakes(result))
      .catch((err) => console(err));
  };
  // Step 3: get all accessories

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select id="cupcake-select">
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>

      <button onClick={() => getAllCupcakes()}>Search Cupcakes</button>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        <li className="cupcake-item">
          {allCupcakes.map((elem) => (
            <Cupcake cupcake={elem} />
          ))}
        </li>
        {/* end of block */}
      </ul>
    </>
  );
}
