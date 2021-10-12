import { useState } from "react";

export default function Bottoms() {
  const [show, setShow] = useState(false);
  const [bottomColor, setColor] = useState("");
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

  const bottoms = [
    {
      id: 0,
      name: "pink",
      colour: "#ffd1df",
    },
    {
      id: 1,
      name: "red",
      colour: "#ff0000",
    },
    {
      id: 2,
      name: "yellow",
      colour: "#FDE74C",
    },
    {
      id: 3,
      name: "green",
      colour: "#CAFF8A",
    },
    {
      id: 4,
      name: "blue",
      colour: "#4B4ED0",
    },
  ];

  return (
    <>
      <div className="relative flex flex-row p-10 bg-gray-400 rounded-full w-full md:w-min overflow-scroll">
        {bottoms.map((bottom) => (
          <div key={bottom.id}>
            <button
              className="mx-5 px-5 text-black"
              style={{ backgroundColor: bottom.colour }}
              onClick={() => {
                showBox(bottom.id);
                setColor(bottom.colour);
              }}
            >
              {bottom.name}
            </button>
          </div>
        ))}
      </div>
      <div className="absolute bottom-96 top-52">
        {show ? (
          <div
            className="h-16 w-16 p-5"
            style={{ backgroundColor: `${bottomColor}` }}
          ></div>
        ) : null}
      </div>
    </>
  );
}
