import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// This component receives a FontAwesome icon object as the 'icon' prop and renders it using <FontAwesomeIcon icon={icon} />
const CoreValueCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
    <span className="text-red-500 text-3xl mb-4">
      <FontAwesomeIcon icon={icon} />
    </span>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default CoreValueCard; 