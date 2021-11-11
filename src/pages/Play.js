import React, { useState } from "react";
import { ReactComponent as Left } from "../assets/left.svg";
import { ReactComponent as Right } from "../assets/right.svg";
import Footer from "../components/Footer";

export default function Play() {
  const [shirt, setShirt] = useState(false);
  const [bottoms, setBottoms] = useState(false);
  const [gear, setGear] = useState(false);
  const [shoes, setShoes] = useState(false);

  const toggleShirt = () => {
    setShirt(!shirt);
  };

  const toggleBottoms = () => {
    setBottoms(!bottoms);
  };

  const toggleGear = () => {
    setGear(!gear);
  };

  const toggleShoes = () => {
    setShoes(!shoes);
  };

  const Shirt = () => {
    return (
      <div
        className="h-20 w-20 p-5 z-20 absolute bg-red-400"
        style={{ backgroundColor: "red" }}
      ></div>
    );
  };

  const Shoes = () => {
    return (
      <div
        className="h-20 w-20 p-5 z-20 absolute"
        style={{ backgroundColor: "yellow", top: "85%" }}
      ></div>
    );
  };

  const Bottoms = () => {
    return (
      <div
        className="h-20 w-20 p-5 z-20 absolute"
        style={{ backgroundColor: "green", top: "60%" }}
      ></div>
    );
  };

  const Gear = () => {
    return (
      <div
        className="h-20 w-20 p-5 z-20 absolute"
        style={{ backgroundColor: "blue", bottom: "70%" }}
      ></div>
    );
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-l from-purple via-blush to-purple">
      <div className="h-5/6 relative flex justify-center items-center">
        <div
          className="absolute"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            rowGap: "10rem",
            columnGap: "20rem",
          }}
        >
          <div className="flex items-center">
            <button>
              <Left />
            </button>
            <button className="bg-white p-5 rounded-full" onClick={toggleShirt}>
              shirt
            </button>
            <button>
              <Right />
            </button>
          </div>
          <div className="flex items-center">
            <button>
              <Left />
            </button>
            <button
              className="bg-white p-5 rounded-full"
              onClick={toggleBottoms}
            >
              bottoms
            </button>
            <button>
              <Right />
            </button>
          </div>
          <div className="flex items-center">
            <button>
              <Left />
            </button>
            <button className="bg-white p-5 rounded-full" onClick={toggleShoes}>
              shoes
            </button>
            <button>
              <Right />
            </button>
          </div>
          <div className="flex items-center">
            <button>
              <Left />
            </button>
            <button className="bg-white p-5 rounded-full" onClick={toggleGear}>
              gear
            </button>
            <button>
              <Right />
            </button>
          </div>
        </div>
        <img
          src="/images/body.png"
          alt="fashion girl"
          style={{ height: "32rem" }}
        />
        {shirt ? <Shirt /> : null}
        {bottoms ? <Bottoms /> : null}
        {shoes ? <Shoes /> : null}
        {gear ? <Gear /> : null}
      </div>
      <Footer />
    </div>
  );
}
