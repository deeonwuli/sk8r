import { useState } from "react";
import girl from "../images/girl.png";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function MyHome() {
  const [volume, setVolume] = useState(1);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <header className="px-4 relative bg-gradient-to-l from-purple via-blush to-purple h-5/6 flex flex-col justify-between items-center text-xl text-snow tracking-widest">
        <div className="mt-60 lg:mt-28 flex flex-row items-center">
          <div className="flex flex-col justify-between items-center lg:-mr-48 z-30">
            <p className="text-stroke-2 lg:text-stroke-4 text-stroke-black text-5xl lg:text-9xl">
              Sk8r
            </p>
            <Link to="/play">
              <button className="flex flex-row items-center border-2 w-min px-2 lg:px-5 py-2 rounded-3xl bg-blue border-blue shadow-xl hover:bg-green hover:text-black hover:-translate-y-2 hover:scale-125">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                play
              </button>
            </Link>
          </div>
          <img src={girl} alt="skating-girl" className="-ml-28 lg:-ml-0 z-20" />
          <div className="flex flex-col justify-between items-center -ml-28 lg:-ml-48 z-30">
            <p className="text-stroke-2 lg:text-stroke-4 text-stroke-black text-5xl lg:text-9xl">
              Girl
            </p>
            <button
              onClick={handleClickOpen}
              className="flex flex-row items-center border-2 w-min px-2 lg:px-5 py-2 rounded-3xl bg-blue border-blue shadow-xl hover:bg-green hover:text-black hover:-translate-y-2 hover:scale-125"
            >
              settings
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="settings modal"
              aria-describedby="settings modal"
            >
              <DialogActions className="bg-green">
                <button onClick={handleClose}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </DialogActions>
              <DialogContent
                className="bg-green"
                style={{ fontFamily: "Skater-girl" }}
              >
                <DialogContentText id="settings modal">
                  <label className="flex flex-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#000000"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                      />
                    </svg>
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.02}
                      value={volume}
                      onChange={(event) => {
                        setVolume(event.target.valueAsNumber);
                      }}
                    />
                  </label>
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="w-screen absolute left-0 bottom-0">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </header>
      <Footer />
    </>
  );
}
