import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="bg-yellow-400 py-20 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto">
        {/* Heading */}
        <h2 className="text-white text-3xl font-bold leading-tight mb-6">
          Erzählen Sie uns von <br /> Ihren Plänen
        </h2>

        {/* Button */}
        <Link to="/kontakt">
          <button className="bg-yellow-400 text-white font-semibold text-base py-3 px-6 rounded-3xl shadow-lg transition-colors duration-300 hover:bg-white hover:text-yellow-400">
            Kostenloser Kostenvoranschlag <br /> anfordern
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CTA;
