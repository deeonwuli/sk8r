import { useState } from "react";
import Bottoms from "./Bottoms";
import Shirts from "./Shirts";
import Shoes from "./Shoes";
import Gear from "./Gear";

export default function AssetSelector() {
  const [shirt, setShirt] = useState(true);
  const [bottom, setBottom] = useState(false);
  const [shoe, setShoe] = useState(false);
  const [gear, setGear] = useState(false);

  const showShirts = () => {
    setShirt(true);
    setBottom(false);
    setShoe(false);
    setGear(false);
  };
  const showBottoms = () => {
    setBottom(true);
    setShirt(false);
    setShoe(false);
    setGear(false);
  };
  const showShoes = () => {
    setShoe(true);
    setBottom(false);
    setShirt(false);
    setGear(false);
  };
  const showGear = () => {
    setGear(true);
    setBottom(false);
    setShirt(false);
    setShoe(false);
  };

  return (
    <div className="overflow-x-scroll w-11/12 md:w-full">
      <div className="flex flex-row justify-center items-center">
        <button
          className="bg-black px-5 ml-16 mr-5 rounded-md focus:bg-snow focus:text-black"
          onClick={showShirts}
        >
          shirts
        </button>
        <button
          className="bg-black px-5 mx-5 rounded-md focus:bg-snow focus:text-black"
          onClick={showBottoms}
        >
          bottoms
        </button>
        <button
          className="bg-black px-5 mx-5 rounded-md focus:bg-snow focus:text-black"
          onClick={showShoes}
        >
          shoes
        </button>
        <button
          className="bg-black px-5 mx-5 rounded-md focus:bg-snow focus:text-black"
          onClick={showGear}
        >
          gear
        </button>
      </div>
      {shirt ? <Shirts /> : null}
      {bottom ? <Bottoms /> : null}
      {shoe ? <Shoes /> : null}
      {gear ? <Gear /> : null}
    </div>
  );
}
