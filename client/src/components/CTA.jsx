import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="bg-yellow-400 py-20 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto">
        {/* Heading */}
        <h2 className="text-white text-3xl font-bold leading-tight mb-4">
          Brauchen Sie schnelle Hilfe? <br /> Wir sind 24/7 für Sie da!
        </h2>
        <p className="text-white mb-6">
          Abschleppdienst & Pannenhilfe in Herne und Umgebung.
        </p>

        {/* Button */}
        <Link to="/kontakt">
          <button className="bg-yellow-400 text-white font-semibold text-base py-3 px-6 rounded-3xl shadow-lg transition-colors duration-300 hover:bg-white hover:text-yellow-400">
            Jetzt Abschleppdienst <br /> anfordern
          </button>
        </Link>

        {/* Alternatif olarak telefonla hızlı arama butonu */}
        <a
          href="tel:+4915566300110"
          className="mt-6 inline-block text-white underline"
        >
          Oder rufen Sie uns direkt an: +49 155 663 00110
        </a>
      </div>
    </div>
  );
};

export default CTA;
