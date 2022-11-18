/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
import Cupcake from "@components/Cupcake";
import { useState } from "react";
import React from "react";

export default function CupcakeList() {
  // Step 1: get all cupcakes

  const [allCupcakes, setAllCupcakes] = useState([]);
  const [selectedCupcakes, setSelectedCupcakes] = useState([]);
  // const [filterCupCakes, setFilterCupcakes] = useState("");

  // I didn't use a useEffect but a button to display cupcakes

  // useEffect(() => {
  const getAllCupcakes = () => {
    fetch("http://localhost:4000/cupcakes")
      .then((reponse) => reponse.json())
      .then((result) => setAllCupcakes(result))
      .catch((err) => console(err));
    console.log("API de tous les cupCakes");
  };
  // });

  // Step 3: get all accessories

  const getFilterCupcakes = () => {
    fetch("http://localhost:4000/accessories")
      .then((response) => response.json())
      .then((result) => setSelectedCupcakes(result))
      .catch((err) => console(err));
    console.log("API de tous les accessoires");
  };

  // useEffect(() => {
  //   const getFilterCupcakes = () => {
  //     fetch("http://localhost:4000/accessories")
  //       .then((response) => response.json())
  //       .then((result) => setSelectedCupcakes(result))
  //       .catch((err) => console(err));
  //     console.log("API de tous les accessoires");
  //   };
  // });

  // const handleSelectedCupcakes = (cake) => setSelectedCupcakes(cake);

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select onClick={() => getFilterCupcakes()} id="cupcake-select">
            {/* Step 4: add an option for each accessory */}

            {selectedCupcakes
              // .filter((item) => item.includes({item.url}))
              .map((item, index) => (
                <option
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  value={`${item.name}`}
                  // onChange={() => setFilterCupcakes(item.url)}
                >
                  {item.name}
                </option>
              ))}

            {/* <option value="Cherry">Cherry</option>
            <option value="Donut">Donut</option>
            <option value="chocolate">Chocolate</option>
            <option value="Wild">Wild</option>
            <option value="Christmas-Candy">Christmas Candy</option> */}
          </select>
        </label>
      </form>

      <button onClick={() => getAllCupcakes()}>Search Cupcakes</button>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        <li className="cupcake-item">
          {allCupcakes.map((elem, index) => (
            <Cupcake
              cupcake={elem}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              // handleSelectedCupcakes={handleSelectedCupcakes}
            />
          ))}
        </li>
        {/* end of block */}
      </ul>
    </>
  );
}
