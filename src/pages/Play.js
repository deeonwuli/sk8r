import React, { useState } from "react";
import { ReactComponent as Left } from "../assets/left.svg";
import { ReactComponent as Right } from "../assets/right.svg";
import { Shirt1, Shirt2, Shirt3 } from "../components/Shirts";
import { Bottoms1, Bottoms2, Bottoms3 } from "../components/Bottoms";
import { Gear1, Gear2, Gear3 } from "../components/Gear";
import { Shoes1, Shoes2, Shoes3 } from "../components/Shoes";
import Footer from "../components/Footer";

export default function Play() {
  const [shirt, setShirt] = useState(false);
  const [bottoms, setBottoms] = useState(false);
  const [gear, setGear] = useState(false);
  const [shoes, setShoes] = useState(false);

  const [countShirt, setCountShirt] = useState(0);
  const [countBottoms, setCountBottoms] = useState(0);
  const [countGear, setCountGear] = useState(0);
  const [countShoes, setCountShoes] = useState(0);

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

  const prevShirt = () => {
    setCountShirt(countShirt - 1);
  };

  const nextShirt = () => {
    setCountShirt(countShirt + 1);
  };

  const prevShoes = () => {
    setCountShoes(countShoes - 1);
    console.log(countShoes)
  };

  const nextShoes = () => {
    setCountShoes(countShoes + 1);
  };

  const prevBottoms = () => {
    setCountBottoms(countBottoms - 1);
  };

  const nextBottoms = () => {
    setCountBottoms(countBottoms + 1);
  };

  const prevGear = () => {
    setCountGear(countGear - 1);
  };

  const nextGear = () => {
    setCountGear(countGear + 1);
  };

  const Shirt = () => {
    if (countShirt % 3 === 0) {
      return <Shirt1 />;
    } else if (countShirt % 3 === 1 || countShirt % 3 === -2) {
      return <Shirt2 />;
    } else if (countShirt % 3 === 2 || countShirt % 3 === -1) {
      return <Shirt3 />;
    }
  };

  const Shoes = () => {
    if (countShoes % 3 === 0) {
      return <Shoes1 />;
    } else if (countShoes % 3 === 1 || countShoes % 3 === -2) {
      return <Shoes2 />;
    } else if (countShoes % 3 === 2 || countShoes % 3 === -1) {
      return <Shoes3 />;
    }
  };

  const Bottoms = () => {
    if (countBottoms % 3 === 0) {
      return <Bottoms1 />;
    } else if (countBottoms % 3 === 1 || countBottoms % 3 === -2) {
      return <Bottoms2 />;
    } else if (countBottoms % 3 === 2 || countBottoms % 3 === -1) {
      return <Bottoms3 />;
    }
  };

  const Gear = () => {
    if (countGear % 3 === 0) {
      return <Gear1 />;
    } else if (countGear % 3 === 1 || countGear % 3 === -2) {
      return <Gear2 />;
    } else if (countGear % 3 === 2 || countGear % 3 === -1) {
      return <Gear3 />;
    }
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
            columnGap: "6.5rem",
          }}
        >
          <div className="flex items-center">
            <button onClick={prevShirt}>
              <Left />
            </button>
            <button className="bg-white p-5 rounded-full" onClick={toggleShirt}>
              shirt
            </button>
            <button onClick={nextShirt}>
              <Right />
            </button>
          </div>
          <div className="flex items-center">
            <button onClick={prevBottoms}>
              <Left />
            </button>
            <button
              className="bg-white p-5 rounded-full"
              onClick={toggleBottoms}
            >
              bottoms
            </button>
            <button onClick={nextBottoms}>
              <Right />
            </button>
          </div>
          <div className="flex items-center">
            <button onClick={prevShoes}>
              <Left />
            </button>
            <button className="bg-white p-5 rounded-full" onClick={toggleShoes}>
              shoes
            </button>
            <button onClick={nextShoes}>
              <Right />
            </button>
          </div>
          <div className="flex items-center">
            <button onClick={prevGear}>
              <Left />
            </button>
            <button className="bg-white p-5 rounded-full" onClick={toggleGear}>
              gear
            </button>
            <button onClick={nextGear}>
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
