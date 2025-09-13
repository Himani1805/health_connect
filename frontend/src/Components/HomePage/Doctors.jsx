import React, { useEffect, useState } from 'react';
import doctorImages from '../../utils/imageData.js'

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  // console.log("pgl", doctorImages.doctorImages)
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(
          "https://backend-health-connect.vercel.app/doctors"
        );
        const data = await response.json();
        setDoctors(data);

        // Assign unique image to each doctor (fallback if more doctors than images)
        const updatedDoctors = data.map((doc, index) => ({
          ...doc,
          img: doctorImages.doctorImages[index % doctorImages.doctorImages.length],
        }));

        setDoctors(updatedDoctors);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // call function
    fetchDoctors();
  }, []);

  return (
    <div className='container mx-auto py-12 px-6 md:px-6 mt-0'>
      {/* <h4 className='md:text-3xl text-2xl font-bold text-gray-800 mb-8'>Browse through the doctor specialist.</h4> */}
      <div className='flex flex-col md:flex-row gap-8'>
        {/* Doctors List */}
        <div className='w-full'>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition'
              >
                {/* Doctor Image */}
                <div className='w-28 h-28 mb-4 rounded-full overflow-hidden border-2 '>
                  <img
                    src={doctor.img}
                    alt={doctor.name}
                    className='w-full h-full object-cover object-top'
                  />
                </div>

                {/* Availability */}
                <div className='flex items-center mb-2'>
                  <span
                    className={`w-2 h-2 rounded-full mr-2 ${doctor.available ? "bg-green-500" : "bg-red-500"}`}
                  ></span>
                  <span className={`font-medium ${doctor.available ? "text-green-500" : "text-red-500"}`}>
                    {doctor.available ? "Available" : "Unavailable"}
                  </span>
                </div>

                {/* Doctor Info */}
                <h3 className='text-lg font-bold text-gray-800 mb-1'>{doctor.name}</h3>
                <p className='text-gray-500'>{doctor.speciality.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctors;


