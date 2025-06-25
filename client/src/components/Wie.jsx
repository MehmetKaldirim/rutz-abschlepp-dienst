import React from "react";
import abuk from "../assets/abuk.png";

export default function Wie() {
  return (
    <div className="bg-[#f8f7f7] lg:mt-20 lg:mb-20 lg:ml-30 lg:mr-30 p-6">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Column: Image */}
        <div className="w-full md:w-1/2 md:my-20  my-8 md:mx-20 mx-6">
          <img src={abuk} alt="Abuk" className="w-[70%] h-[70%] " />
        </div>

        {/* Right Column: Title and List */}
        <div className="w-full md:w-1/2 md:my-20  my-8 md:mx-20 mx-6">
          <h2 className="text-3xl font-bold mb-6">Wie wir arbeiten</h2>
          <ul className="space-y-4">
            <li className="pb-4 border-b-2 border-yellow-500 flex">
              <span className="text-xl font-bold mr-2">01.</span>
              <span className="text-base">Beratung</span>
            </li>
            <li className="pb-4 border-b-2 border-yellow-500 flex">
              <span className="text-xl font-bold mr-2">02.</span>
              <span className="text-base">Kostenvoranschlag</span>
            </li>
            <li className="pb-4 border-b-2 border-yellow-500 flex">
              <span className="text-xl font-bold mr-2">03.</span>
              <span className="text-base">Installation</span>
            </li>
            <li className="pb-4 border-b-2 border-yellow-500 flex">
              <span className="text-xl font-bold mr-2">04.</span>
              <span className="text-base">Inspektion</span>
            </li>
            <li className="pb-4 flex">
              <span className="text-xl font-bold mr-2">05.</span>
              <span className="text-base">Garantie</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
