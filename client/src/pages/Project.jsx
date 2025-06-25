import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation from react-router-dom
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.jpg";

const ProjectPage = () => {
  const photos = [
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    project7,
  ];

  // Get the current location
  const location = useLocation();

  return (
    <div className="p-4 md:p-8 lg:p-16">
      <div className="text-gray-600 mb-4">
        <nav className="text-sm space-x-2">
          <Link
            to="/"
            className={`hover:text-red-500 text-xl ${
              location.pathname === "/" ? "text-red-500" : ""
            }`}
          >
            Home{" "}
          </Link>
          /
          <Link
            to="/leistungen"
            className={`hover:text-red-500 text-xl ${
              location.pathname === "/leistungen" ? "text-red-500" : ""
            }`}
          >
            Leistungen{" "}
          </Link>
          /<span className="text-red-500 text-xl">Projekt</span>{" "}
          {/* Always red since this is the current page */}
        </nav>
      </div>
      <div className="text-2xl md:text-5xl  mb-8">
        <h2>Installationen</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="w-full h-full">
            <img
              src={photo}
              alt={`Projekt ${index + 1}`}
              className="object-cover w-full h-full rounded-lg"
              style={{ height: "300px" }} // Set a fixed height
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
