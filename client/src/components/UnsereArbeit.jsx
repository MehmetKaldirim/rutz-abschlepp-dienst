import React, { useState, useRef } from "react";
import { FaArrowsAltH } from "react-icons/fa"; // Use left-right arrow icon
import { Link } from "react-router-dom";

const UnsereArbeit = () => {
  const [imageRevealFraq, setImageRevealFraq] = useState(0.5);
  const imageContainer = useRef(null);

  const slide = (xPosition) => {
    const containerBoundingRect =
      imageContainer.current.getBoundingClientRect();
    setImageRevealFraq(() => {
      if (xPosition < containerBoundingRect.left) {
        return 0;
      } else if (xPosition > containerBoundingRect.right) {
        return 1;
      } else {
        return (
          (xPosition - containerBoundingRect.left) / containerBoundingRect.width
        );
      }
    });
  };

  const handleTouchMove = (event) => {
    slide(event.touches[0].clientX);
  };

  const handleMouseDown = () => {
    window.onmousemove = handleMouseMove;
    window.onmouseup = handleMouseUp;
  };

  const handleMouseMove = (event) => {
    slide(event.clientX);
  };

  const handleMouseUp = () => {
    window.onmousemove = null;
    window.onmouseup = null;
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center px-4 py-6">
      {/* First Row: Heading */}
      <div className="py-12">
        <h2 className="text-4xl font-bold text-yellow-400 text-center">
          Unsere Arbeit
        </h2>
      </div>

      {/* Second Row: Photo Slider */}
      <div className="px-4">
        <div
          ref={imageContainer}
          className="max-w-lg w-full mx-auto mt-10 relative select-none group"
          style={{ transform: "scale(1.4)" }} // Scale everything by 30%
        >
          <img
            src="https://lirp.cdn-website.com/md/pexels/dms3rep/multi/opt/network-cable-ethernet-computer-159304-640w.jpeg"
            alt=""
            className="pointer-events-none"
          />
          <img
            style={{
              clipPath: `polygon(0 0, ${imageRevealFraq * 100}% 0, ${
                imageRevealFraq * 100
              }% 100%, 0 100%)`,
            }}
            src="https://lirp.cdn-website.com/md/pexels/dms3rep/multi/opt/pexels-photo-257736-640w.jpeg"
            alt=""
            className="absolute inset-0 pointer-events-none"
          />
          <div
            style={{ left: `${imageRevealFraq * 100}%` }}
            className="absolute inset-y-0 group-hover:opacity-100 sm:opacity-0"
          >
            <div className="relative h-full opacity-50 hover:opacity-100">
              <div className="absolute inset-y-0 bg-white w-0.5 -ml-px"></div>
              <div
                style={{ touchAction: "none" }}
                onMouseDown={handleMouseDown}
                onTouchMove={handleTouchMove}
                className="h-12 w-12 -ml-6 -mt-6 rounded-full bg-white absolute top-1/2 shadow-xl flex items-center justify-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 text-gray-400 rotate-90 transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Row: Button */}
      <div className="py-12 mt-20 bg-white w-full flex justify-center">
        <Link to="/project">
          <button className="bg-yellow-400 text-white font-semibold text-lg py-4 px-8 rounded-3xl shadow-lg transition-colors duration-300 hover:bg-white hover:text-yellow-400">
            Alle Projekte anzeigen
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UnsereArbeit;
