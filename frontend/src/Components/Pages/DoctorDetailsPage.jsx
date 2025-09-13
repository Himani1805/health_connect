import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import "react-toastify/dist/ReactToastify.css";

// Import all images directly
import DrRichardJames from "../../assets/Dr_Richard_James_Cardiology.webp";
import DrSarahWhite from "../../assets/Dr_Sarah_White_Urology.jpg";
import DrEmmaBrown from "../../assets/Dr_Emma_Brown_Dental_Care.png";
import DrJohnSmith from "../../assets/Dr_John_Smith_Neurology.webp";
import DrAliceGrey from "../../assets/Dr_Alice_Grey_Eye_Care.png";
import DrKevinLee from "../../assets/Dr_Kevin_Lee_Cardiology.png";
import DrLisaRay from "../../assets/Dr_Lisa_Ray_Eye_Care.png";
import DrMarkLiu from "../../assets/Dr_Mark_Liu_Urology.png";
import DrNoraWilliams from "../../assets/Dr_Nora_Williams_Neurology.png";
import DrRobertKing from "../../assets/Dr_Robert_King_Plastic_Surgery.jpg";
import DrChandra from "../../assets/Dr_Chandra_Cardiology.png";
import DrEmilyCarter from "../../assets/Dr_Emily_Carter_Pediatrics.png";

const doctorImageMap = {
  "Dr. Richard James": DrRichardJames,
  "Dr. Sarah White": DrSarahWhite,
  "Dr. Emma Brown": DrEmmaBrown,
  "Dr. John Smith": DrJohnSmith,
  "Dr. Alice Grey": DrAliceGrey,
  "Dr. Kevin Lee": DrKevinLee,
  "Dr. Lisa Ray": DrLisaRay,
  "Dr. Mark Liu": DrMarkLiu,
  "Dr. Nora Williams": DrNoraWilliams,
  "Dr. Robert King": DrRobertKing,
  "Dr. Chandra": DrChandra,
  "Dr. Emily Carter": DrEmilyCarter,
};

const DoctorDetailsPage = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  // console.log(id)
  const navigate = useNavigate()

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch(
      `https://backend-health-connect.vercel.app/doctors/${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setDoctor(data))
      .catch((error) => console.error("Error fetching doctor details:", error));
  }, [id]);

  // console.log(doctor);

  const handleBooking = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login to make an appointment", {
        position: "top-right",
        autoClose: 3000,
      });
      navigate("/login")
      return;
    };


    // if (!selectedDateTime) {
    //   toast.error("Please select a date and time", {
    //     position: "top-right",
    //     autoClose: 3000,
    //   });
    //   return;
    // }

    const dayName = selectedDateTime.toLocaleDateString("en-US", {
      weekday: "short",
    })

    const day = selectedDateTime.getDate()
    const hours = selectedDateTime.getHours().toString().padStart(2, "0")
    const minutes = selectedDateTime.getMinutes().toString().padStart(2, "0")
    const formattedDateTime = `${dayName} ${day} | ${hours}:${minutes}`

    const appointmentData = {
      doctor_id: Number(id),
      // Tue | 3:30
      date_time: formattedDateTime,
    };
    fetch(`https://backend-health-connect.vercel.app/appointments/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(appointmentData),
    })
      .then((response) => response.json())
      .then((result) => toast.success("Appointment successfully booked!", {
        position: "top-right",
        autoClose: 2000,
      }))
      .catch((error) => toast.error("Failed to book appoinment. Please try again.", {
        position: "top-right",
        autoClose: 2000,
      }));


    setTimeout(() => {
      navigate("/appointments")
    }, 2000)
    // .catch((error) => console.error("Error booking appoinment:", error));
  }

  const handleDateTimeChange = (date) => {
    setSelectedDateTime(date);
    console.log("Selected Date and Time:", date)
    console.log("Formatted Date:", date.toLocaleDateString())
    console.log("Formatted Time:", date.toLocaleTimeString())
  }

  if (!doctor)
    return <p className="text-center mt-10">No doctor data found...</p>;

  return (
    <div className=" container mx-auto py-12 px-6 flex flex-col md:flex-row items-start gap-6 mt-0">
      {/* Doctor Image */}
      <div className="w-full md:w-1/3 flex justify-center relative">
        <img
          src={doctorImageMap[doctor.name] || "/default-doctor.png"}
          alt={doctor?.name}
          className="w-52 h-52 rounded-full mb-4 border-8 border-red-400 object-cover object-top "
        />
      </div>

      {/* Doctor Info Card */}
      <div className="w-full md:w-2/3 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-gray-800">{doctor.name}</h2>
        <p className="text-gray-600 font-semibold mt-2 mb-4">
          {doctor.degree} - {doctor.speciality.title} • {" "}<span className="text-gray-700 rounded-full px-2 py-1 text-sm bg-red-200">{doctor.experience}</span>
        </p>

        {/* Rest of your component with optional chaining */}
        <h3 className="text-lg font-bold text-gray-800 mb-2">About</h3>
        <p className="text-gray-500 mb-6 ">{doctor.about}</p>
        <h4 className="text-lg mt-4 font-bold text-gray-800">
          Appointment fee:{" "}
          <span className="text-green-600">${doctor.fees}</span>
        </h4>

        {doctor.available ? (
          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Select Date & Time</h3>
            <div className="mb-4">
              <DatePicker
                selected={selectedDateTime}
                onChange={handleDateTimeChange}
                showTimeSelect
                timeIntervals={30}
                minDate={new Date()}
                maxDate={new Date(new Date().setDate(new Date().getDate() + 7))}
                dateFormat="MMMM d, yyyy h:mm aa"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 "
                placeholderText="Select date and time"
              />
            </div>
          </div>
        ) : (
          ""
        )}

        {doctor.available ? (
          <div className="mt-2">
            <button
              onClick={handleBooking}
              disabled={!selectedDateTime}
              className="mt-2 px-6 py-3 font-bold bg-gray-300 text-gray-600 rounded-full hover:bg-red-600 hover:text-white transition-colors">
              Book an appointment
            </button>
          </div>
        ) : (
          <p className="mt-6 text-red-500 font-semibold border px-6 py-3 rounded-lg  border-gray-200">
            This doctor is currently unavailable for appointments.
          </p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default DoctorDetailsPage;

