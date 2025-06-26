import React from "react";
import { Link } from "react-router-dom";
import tolga1 from "../assets/tolga-1.jpg";
import tolga2 from "../assets/tolga-2.jpg";
import tolga3 from "../assets/tolga-3.jpg";
import tolga4 from "../assets/tolga-6.jpeg";

const UnsereLeistungen = () => {
  return (
    <div className="bg-white text-black p-6 mt-20">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Unsere Leistungen</h1>
      </div>

      {/* Leistungen Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {/* Autotransport */}
        <div className="flex flex-col items-center">
          <img
            src={tolga1}
            alt="Autotransport"
            style={{ width: "3cm", height: "2cm" }}
            className="mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Autotransport</h2>
          <p className="text-gray-500 text-center">
            Sicherer und schneller Transport Ihres Fahrzeugs an den gewünschten
            Ort.
          </p>
        </div>

        {/* Unfallfahrzeuge */}
        <div className="flex flex-col items-center">
          <img
            src={tolga2}
            alt="Unfallfahrzeuge"
            style={{ width: "3cm", height: "2cm" }}
            className="mb-4"
          />
          <h2 className="text-xl font-semibold mb-2 text-center">
            Unfallfahrzeuge
          </h2>
          <p className="text-gray-500 text-center">
            Professionelles Abschleppen und Abtransport von Unfallfahrzeugen.
          </p>
        </div>

        {/* Fahrzeuge ohne TÜV */}
        <div className="flex flex-col items-center">
          <img
            src={tolga3}
            alt="Fahrzeuge ohne TÜV"
            style={{ width: "3cm", height: "2cm" }}
            className="mb-4"
          />
          <h2 className="text-xl font-semibold mb-2 text-center">
            Fahrzeuge ohne TÜV
          </h2>
          <p className="text-gray-500 text-center">
            Sicherer Transport von Fahrzeugen ohne gültigen TÜV zur Werkstatt
            oder zu Ihrem Wunschort.
          </p>
        </div>

        {/* Defekte Fahrzeuge */}
        <div className="flex flex-col items-center">
          <img
            src={tolga4}
            alt="Defekte Fahrzeuge"
            style={{ width: "3cm", height: "2cm" }}
            className="mb-4"
          />
          <h2 className="text-xl font-semibold mb-2 text-center">
            Defekte Fahrzeuge
          </h2>
          <p className="text-gray-500 text-center">
            Abschleppdienst für defekte Fahrzeuge – schnell und zuverlässig vor
            Ort.
          </p>
        </div>
      </div>

      {/* Button */}
    </div>
  );
};

export default UnsereLeistungen;
