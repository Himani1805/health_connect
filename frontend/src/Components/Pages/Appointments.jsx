import { Phone } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import apointmentDoctorImage from "../../utils/imageData.js"

const Appointments = () => {
    const [loading, setLoading] = useState(true);
    const [appointments, setAppointments] = useState([]);
    console.log("apoointment...", appointments)

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }),
            redirect: "follow",
        }
        fetch(
            "https://backend-health-connect.vercel.app/appointments",
            requestOptions
        )
            .then((response) => response.json())
            .then((data) => {
                setAppointments(data);
                setLoading(false);

                // Assign imported images to doctors
                const updatedDoctors = data.map((doc, index) => (
                    // console.log("check doc", doc.doctor.image)
                    //  console.log("check doc", apointmentDoctorImage.apointmentDoctorImage[doc.doctor.name])
                    {
                        ...doc,
                        // ...apointmentDoctorImage,
                        image: apointmentDoctorImage.apointmentDoctorImage[doc.doctor.name]
                    }
                ))
                //   console.log("apoointmentdoctor", apointmentDoctorImage.apointmentDoctorImage)
                //  console.log("hi",updatedDoctors);
                setAppointments(updatedDoctors);
            })
            .catch((error) => {
                console.log("Error fetching appointments:", error)
                setLoading(false)
            });
    }, [])

    console.log("apoooooooooo", appointments)
    if (loading) return <div>Loading...</div>

    if (appointments.length === 0) {
        return (
            <div className='h-screen'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-8 mt-20 text-center'>
                    My Appointments
                </h2>
                <p className='text-center text-gray-500 mt-10'>
                    No appoinments found.
                </p>
                <button
                    className='bg-red-500 m-auto block mt-10 text-white font-semibold px-4 py-2 sm:py-3'
                >
                    <a href="/doctors">Book Appointment Now</a>
                </button>
            </div>
        )
    }

    return <div className='container mx-auto py-12 px-6 mt-2'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center'>
            My Appointments
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {appointments.map((appointment) => (
                <div
                    key={appointment.id}
                    className='flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md'
                >
                    {/* Doctor Image */}
                    <div className='w-full md:w-1/4 mb-4 md:mb-0 md:mr-6'>
                        <img
                            src={appointment.image}
                            alt={appointment.doctor.name}
                            className='w-full h-32 rounded-lg object-cover bg-gray-100'
                        />
                    </div>

                    {/* Appointment Details */}
                    <div className='w-full md:w-3/4'>
                        <h3 className='text-2xl font-semibold text-gray-800 mb-1'>
                            {appointment.doctor.name}
                        </h3>
                        <p className='text-gray-500 mb-2'>{appointment.speciality?.title}</p>
                        <p className='text-gray-600 mb-2'><strong>Address:</strong>{appointment.address?.line1}</p>
                        <p className='text-gray-600 mb-4'><strong>Date & Time:</strong>{appointment?.date_time}</p>

                        {/* Appointment Details */}
                        <div className='flex justify-end'>
                            <button className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 flex'>
                                <Phone className='mr-2' />
                                Call Clinic
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default Appointments;
