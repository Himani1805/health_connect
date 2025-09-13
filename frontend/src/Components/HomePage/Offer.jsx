import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicroscope,
  faUserMd,
  faClipboardCheck,
  faHeartbeat,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faMicroscope,
    title: "Advanced equipment",
    description:
      "State-of-the-art medical equipment for accurate diagnostics and treatment.",
  },
  {
    icon: faUserMd,
    title: "Qualified doctors",
    description:
      "Our team includes highly qualified and experienced medical professionals.",
  },
  {
    icon: faClipboardCheck,
    title: "Certified services",
    description:
      "All services are certified to ensure the highest quality standards.",
  },
  {
    icon: faHeartbeat,
    title: "Emergency care",
    description:
      "24/7 emergency services to provide urgent care when you need it most.",
  },
];

const Offer = () => (
  <div className="w-full py-12 bg-white">
    <div className="text-center mb-10">
      <div className="text-gray-400 font-semibold mb-1">WHY CHOOSE US?</div>
      <h2 className="text-4xl font-bold text-gray-800">Offer for You</h2>
    </div>
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-0">
      {services.map((service, idx) => (
        <div key={idx} className="flex-1 max-w-xs text-center px-4 mb-8 lg:mb-0">
          <FontAwesomeIcon icon={service.icon} className="text-rose-400 text-5xl mb-2" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
          <p className="text-gray-500">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Offer;
