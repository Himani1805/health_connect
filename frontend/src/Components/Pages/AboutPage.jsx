import React from "react";
import { faHeartbeat, faPeopleCarry, faUserMd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CoreValueCard from "../Common/CoreValueCard";
import Doctors from "../HomePage/Doctors";
import { useNavigate } from "react-router-dom";
import about_bg from "../../assets/about_bg.webp"

// We pass the FontAwesome icon object in the data, and render it in the card using <FontAwesomeIcon icon={icon} />
const coreValuesData = [
  {
    icon: faHeartbeat,
    title: "Compassion",
    description: "We care deeply for our patients and treat them like family, providing a compassionate experience at every touchpoint."
  },
  {
    icon: faPeopleCarry,
    title: "Collaboration",
    description: "Working together with patients, doctors, and the community to achieve holistic health for everyone."
  },
  {
    icon: faUserMd,
    title: "Excellence",
    description: "Striving for excellence in every service, from routine checkups to complex procedures."
  }
];

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 md:px-16 py-8">
      <div className="relative rounded-lg overflow-hidden mb-12">
        <img
          src={about_bg}
          alt="Health Connect Banner"
          className="w-full h-48 md:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-red-500 bg-opacity-80 flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 text-center">
            Welcome to Health Connect
          </h1>
          <p className="text-white text-center text-sm md:text-base">
            Connecting you with top healthcare professionals, compassionate care, and a <br />healthier tomorrow.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="font-bold text-xl mb-2">Our Mission</h2>
          <p>At Health Connect, our mission is to bridge the gap between patients and healthcare providers, ensuring accessible, efficient, and high-quality medical services for everyone.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="font-bold text-xl mb-2">Our Vision</h2>
          <p>We envision a world where healthcare is accessible to all, fostering a healthier, happier global community.</p>
        </div>
      </div>

      {/* Core Values */}
      <h2 className="text-2xl font-bold text-center mb-6">Our Core Values</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {coreValuesData.map((value, idx) => (
          <CoreValueCard
            key={idx}
            icon={value.icon}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>

      {/* Doctors */}
      <Doctors />

      {/* Contact Us */}
      <div className="flex flex-col items-center mt-12">
        <h3 className="text-xl font-semibold mb-2">Ready to Connect with Us?</h3>
        <p className="mb-4 text-center">We're here to support your health journey. Reach out today!</p>
        <button
          className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
