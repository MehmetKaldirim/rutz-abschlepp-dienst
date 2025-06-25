import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [selectedService, setSelectedService] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [isFocused, setIsFocused] = useState({
    name: false,
    telefon: false,
    service: false,
  });
  const [formData, setFormData] = useState({
    name: "",
    telefon: "",
    service: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    telefon: "",
    service: "",
    general: "",
  });

  const services = [
    "Photovoltaik",
    "MSR",
    "Installation",
    "Geräteprüfung",
    "Etwas anderes",
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowOptions(false);
    setFormData({ ...formData, service });
    setErrors({ ...errors, service: "" }); // Clear service error when selected
  };

  const handleFocus = (field) => {
    setIsFocused((prevState) => ({ ...prevState, [field]: true }));
  };

  const handleBlur = (field) => {
    setIsFocused((prevState) => ({ ...prevState, [field]: false }));
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle field-specific errors returned from the server
        setErrors({
          ...errors,
          ...data.errors, // Populate specific field errors
        });
        return;
      }

      // On success
      toast.success(data.msg); // Show success message with toast
      setFormData({ name: "", telefon: "", service: "" }); // Reset the form
      setSelectedService(""); // Reset service selection
      setErrors({ name: "", telefon: "", service: "", general: "" }); // Clear errors
    } catch (error) {
      setErrors({
        ...errors,
        general:
          "Es ist ein Serverfehler aufgetreten. Bitte versuchen Sie es später erneut.",
      });
    }
  };

  return (
    <div className="min-h-screen p-10 md:p-40">
      <ToastContainer />
      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-40 justify-center">
        {/* First Column */}
        <div className="w-full md:w-1/2 bg-white p-6 shadow-lg flex flex-col justify-between">
          <div className="p-10">
            <h2 className="text-4xl mb-6">
              Erzählen Sie <br /> uns mehr
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Input */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full border-b-2 border-gray-300 focus:ring-0 p-2 outline-none ${
                    isFocused.name
                      ? "border-2 border-black"
                      : "border-b-2 border-gray-300"
                  }`}
                  placeholder="Geben Sie Ihren Namen ein"
                  onFocus={() => handleFocus("name")}
                  onBlur={() => handleBlur("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                )}
              </div>

              {/* Telefon Input */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Telefon
                </label>
                <input
                  type="text"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleInputChange}
                  className={`w-full border-b-2 border-gray-300 focus:ring-0 p-2 outline-none ${
                    isFocused.telefon
                      ? "border-2 border-black"
                      : "border-b-2 border-gray-300"
                  }`}
                  placeholder="Geben Sie Ihre Telefonnummer ein"
                  onFocus={() => handleFocus("telefon")}
                  onBlur={() => handleBlur("telefon")}
                />
                {errors.telefon && (
                  <p className="text-red-500 text-sm mt-2">{errors.telefon}</p>
                )}
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Service auswählen
                </label>
                <div
                  className={`relative w-full focus-within:ring-0 p-2 outline-none ${
                    isFocused.service
                      ? "border-2 border-black"
                      : "border-b-2 border-gray-300"
                  }`}
                  onClick={() => setShowOptions(!showOptions)}
                  onFocus={() => handleFocus("service")}
                  onBlur={() => handleBlur("service")}
                >
                  <input
                    type="text"
                    name="service"
                    value={selectedService}
                    readOnly
                    placeholder="Wählen Sie einen Service aus"
                    className="w-full outline-none cursor-pointer"
                  />
                  {showOptions && (
                    <ul className="absolute left-0 right-0 top-full mt-2 bg-white shadow-lg rounded-lg z-10">
                      {services.map((service, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                          onClick={() => handleServiceClick(service)}
                        >
                          {service}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-2">{errors.service}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="bg-yellow-400 text-white px-4 py-3 rounded-3xl font-semibold hover:bg-yellow-500 transition-colors duration-300"
                >
                  Kostenvoranschlag einholen
                </button>
              </div>

              {/* General Error Message Display */}
              {errors.general && (
                <div className="mt-4 text-red-500 text-sm">
                  {errors.general}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Second Column */}
        <div className="w-full md:w-1/2 bg-yellow-400 text-white rounded-lg p-6 shadow-lg flex flex-col justify-between">
          <div className="h-full flex flex-col p-10">
            {/* Arbeitszeiten */}
            <div className="border-b-2 border-white pb-12 mb-12">
              <h3 className="text-2xl font-bold mb-2">Arbeitszeiten</h3>
              <p className="text-lg">24/7 Notdienst</p>
            </div>

            {/* Einsatzbereich */}
            <div className="border-b-2 border-white pb-12 mb-12">
              <h3 className="text-2xl font-bold mb-2">Einsatzbereich</h3>
              <p className="text-lg">Deutschlandweit</p>
            </div>

            {/* Kontakt */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Kontakt</h3>
              <p className="text-lg">info@my-elektro-online.de</p>
              <p className="text-lg">+49 201 45894463</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
