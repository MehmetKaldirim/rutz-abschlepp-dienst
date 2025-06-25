import React, { useState, useEffect } from "react";
import { FiPhone } from "react-icons/fi";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showCallOptions, setShowCallOptions] = useState(false);
  const [videoSupported, setVideoSupported] = useState(true); // video yedeği için

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCallClick = () => {
    const phoneNumber = "+4917683396077";

    if (navigator.userAgent.match(/(iPhone|iPad|iPod|Mac)/i)) {
      window.location.href = `facetime:${phoneNumber}`;
    } else if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/Mobile/i)
    ) {
      window.location.href = `tel:${phoneNumber}`;
    } else if (navigator.userAgent.match(/Windows/i)) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  const handleNumberClick = () => {
    const phoneNumber = "+4917683396077";
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleCancelClick = () => {
    setShowCallOptions(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {videoSupported ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://player.vimeo.com/external/367214172.sd.mp4?s=9443dd496c13df3825a2826f35479a5df0b6f7aa&profile_id=164"
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onError={() => setVideoSupported(false)}
        />
      ) : (
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/src/assets/Tolga-1.jpg')",
          }}
        />
      )}

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center bg-black bg-opacity-50 text-white px-6">
        <div className="w-full md:w-1/2 lg:w-1/2 p-4 md:px-20">
          <div className="flex flex-col">
            <h1 className="text-2xl lg:text-6xl mb-4 mt-20 lg:mt-48 text-left">
              Ihr <br /> Abschleppdienst <br /> aus{" "}
              <span className="text-yellow-300">Herne</span>
            </h1>
            <p className="text-xl text-white text-left">
              Wir sind rund um die Uhr für Sie da – egal ob Panne, Unfall oder
              Falschparker. Mit modernen Fahrzeugen und erfahrenem Personal
              sorgen wir für einen schnellen und sicheren Abschleppservice.
              Vertrauen Sie auf unsere Zuverlässigkeit und unseren bundesweiten
              Einsatz.
            </p>
          </div>
          <button
            className="flex items-center justify-center w-full md:w-auto px-4 py-2 my-12 border border-white text-white hover:bg-white hover:text-yellow-300 transition-colors duration-300 rounded-3xl"
            onClick={handleCallClick}
          >
            <FiPhone className="mr-2 text-gray-500 fill-current" />
            Jetzt Anrufen
          </button>
        </div>

        {isMobile && showCallOptions && (
          <div
            className={`flex flex-col items-center mt-4 transition-transform duration-700 ${
              showCallOptions ? "translate-y-0" : "translate-y-full"
            }`}
            style={{
              transform: showCallOptions ? "translateY(0)" : "translateY(100%)",
              width: "100%",
            }}
          >
            <button
              className="flex items-center justify-center w-full px-4 py-4 mb-2 bg-white text-blue-500 border border-gray-300 rounded shadow-md hover:bg-gray-100 transition-colors duration-300"
              onClick={handleNumberClick}
            >
              <FiPhone className="mr-2 text-gray-500 fill-current" />
              Call +49 176 83396077
            </button>
            <button
              className="flex items-center justify-center w-full px-4 py-4 bg-white text-red-500 border border-gray-300 rounded shadow-md hover:bg-gray-100 transition-colors duration-300"
              onClick={handleCancelClick}
            >
              Abbrechen
            </button>
          </div>
        )}

        {!isMobile && showCallOptions && (
          <div className="flex w-full mt-8">
            <div className="w-full md:w-1/2 p-4">
              <button
                className="flex items-center justify-center w-full px-4 py-4 mb-2 bg-white text-blue-500 border border-gray-300 rounded shadow-md hover:bg-gray-100 transition-colors duration-300"
                onClick={handleNumberClick}
              >
                <FiPhone className="mr-2 text-gray-500 fill-current" />
                Call +49 176 83396077
              </button>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <button
                className="flex items-center justify-center w-full px-4 py-4 bg-white text-red-500 border border-gray-300 rounded shadow-md hover:bg-gray-100 transition-colors duration-300"
                onClick={handleCancelClick}
              >
                Abbrechen
              </button>
            </div>
          </div>
        )}

        <div className="w-full md:w-1/2 lg:w-1/2 p-4 md:px-20">
          <div className="border-b border-yellow-300 pb-4 mb-4 mx-4 md:mx-0">
            <h2 className="text-2xl mb-2 text-left">Arbeitszeiten</h2>
            <p className="text-sm text-left">24/7 Notdienst</p>
          </div>
          <div className="border-b border-yellow-300 pb-4 mb-4 mx-4 md:mx-0">
            <h2 className="text-2xl mb-2 text-left">Servicebereich</h2>
            <p className="text-sm text-left">Bundesweit</p>
          </div>
          <div className="pb-4 mb-4 mx-4 md:mx-0">
            <h2 className="text-2xl mb-2 text-left">Kontakt</h2>
            <p className="text-sm text-left">rutz-abschleppdienst@outlook.de</p>
            <p className="text-sm font-bold text-left">+49 176 83396077</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
