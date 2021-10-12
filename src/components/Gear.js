import { useState } from "react";

export default function Gears() {
  const [show, setShow] = useState(false);
  const [gearColor, setColor] = useState("");
  const [lastButtonId, setLastButtonId] = useState(undefined);

  const showBox = (buttonId) => {
    if (lastButtonId === undefined) {
      setShow(true);
    } else {
      if (lastButtonId === buttonId) {
        setShow(!show);
      } else {
        setShow(true);
      }
    }
    setLastButtonId(buttonId);
  };

  const gears = [
    {
      id: 0,
      name: "green",
      colour: "#CAFF8A",
    },
    {
      id: 1,
      name: "blue",
      colour: "#4B4ED0",
    },
    {
      id: 2,
      name: "yellow",
      colour: "#FDE74C",
    },
    {
      id: 3,
      name: "pink",
      colour: "#ffd1df",
    },
    {
      id: 4,
      name: "red",
      colour: "#ff0000",
    },
  ];

  return (
    <>
      <div className="relative flex flex-row p-10 bg-gray-400 rounded-full w-full md:w-min overflow-scroll">
        {gears.map((gear) => (
          <div key={gear.id}>
            <button
              className="mx-5 px-5 text-black"
              style={{ backgroundColor: gear.colour }}
              onClick={() => {
                showBox(gear.id);
                setColor(gear.colour);
              }}
            >
              {gear.name}
            </button>
          </div>
        ))}
      </div>
      <div className="absolute top-52">
        {show ? (
          <div
            className="h-16 w-16 p-5"
            style={{ backgroundColor: `${gearColor}` }}
          ></div>
        ) : null}
      </div>
    </>
  );
}
