import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

const doctorImages = [
    "https://res.cloudinary.com/dgbymqjtk/image/upload/v1757668434/Dr_Richard_James_Cardiology_ikdjwm.webp", // doctor 1
    "https://res.cloudinary.com/dgbymqjtk/image/upload/v1757668433/Dr_Sarah_White_Urology_fgmz7s.jpg", // doctor 2
    "https://res.cloudinary.com/dgbymqjtk/image/upload/v1757668444/Dr_Emma_Brown_Dental_Care_z1chbn.png", // doctor 3
    "https://res.cloudinary.com/dgbymqjtk/image/upload/v1757668446/Dr_John_Smith_Neurology_vmaxmi.webp", // doctor 4
];

const DoctorHome = () => {
    let [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch("https://backend-health-connect.vercel.app/doctors")
            .then((res) => res.json())
            .then((data) => setDoctors(data))
            .catch((err) => console.log(err))
    }, []);
    return (
        <div className="py-12 text-center">
            <h4 className="text-gray-500 uppercase text-sm mb-2">Our Team</h4>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-10'>Our Expert Doctors</h2>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-10 container mx-auto'>
                {doctors.slice(0, 4).map((doc, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        {/* Doctor Image */}
                        <div className='relative w-48 h-48 mb-4 overflow-hidden rounded-full border-4 border-white shadow-xl'>
                            <img
                                src={doctorImages[index]}
                                alt={doc?.name}
                                className='w-full h-full object-cover object-top'
                            />
                        </div>
                        {/* Doctor Name and Title */}
                        <h3 className='text-lg font-bold text-red-500'>{doc.name}</h3>
                        <p className='text-gray-500 mb-4'>{doc.speciality.title}</p>
                        {/* Social Icons */}
                        <div className='flex space-x-4 text-gray-500'>
                            <a href="#" className='hove:text-red-500'>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="#" className='hove:text-red-500'>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="#" className='hove:text-red-500'>
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="#" className='hove:text-red-500'>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default DoctorHome;