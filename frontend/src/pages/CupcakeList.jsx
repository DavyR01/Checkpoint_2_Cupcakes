import Cupcake from "@components/Cupcake";
import { useEffect, useState } from "react";

export default function CupcakeList() {
  // Step 1: get all cupcakes
  const [cupcakes, setCupcakes] = useState([]);
  const getCupcakes = () => {
    fetch("http://localhost:4000/cupcakes")
      .then((result) => result.json())
      .then((cupcakesList) => setCupcakes(cupcakesList))
      .catch((err) => console.error(err));
  };
  useEffect(() => getCupcakes(), []);

  // Step 3: get all accessories
  const [accessories, setAccessories] = useState([]);
  const getAccessories = () => {
    fetch("http://localhost:4000/accessories")
      .then((result) => result.json())
      .then((accessorieList) => setAccessories(accessorieList))
      .catch((err) => console.error(err));
  };
  useEffect(() => getAccessories(), []);

  const [selectedAccessorieId, setSelectedAccessorieId] = useState("");

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select
            id="cupcake-select"
            onChange={(e) => setSelectedAccessorieId(e.target.value)}
          >
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {accessories.map((accessorie) => (
              <option key={accessorie.id} value={accessorie.id}>
                {accessorie.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Si aucun accessoire n'est selectionné ou que l'accessoire selectionné correspond à celui dans le cupcake */}
        {cupcakes
          .filter(
            (cupcake) =>
              selectedAccessorieId.length === 0 ||
              selectedAccessorieId === cupcake.accessory_id
          )
          .map((cupcake) => (
            <li key={cupcake.id} className="cupcake-item">
              <Cupcake cupcake={cupcake} />
            </li>
          ))}
        {/* end of block */}
      </ul>
    </>
  );
}
