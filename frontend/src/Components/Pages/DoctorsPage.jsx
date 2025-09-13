import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import doctorImages from "../../utils/imageData.js"
import {
  faHeartPulse,
  faUserMd,
  faTooth,
  faEye,
  faBrain,
  faSyringe,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";

// iconMapping
const iconMapping = {
  "Cardiology": faHeartPulse,
  "Urology": faUserMd,
  "Dental Care": faTooth,
  "Eye Care": faEye,
  "Neurology": faBrain,
  "Plastic Surgery": faSyringe,
  "Pediatrics": faUserMd,
  "All": faStethoscope
}

const DoctorsPage = () => {
  const department = localStorage.getItem("department") || "department"
  // || "All";
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(department ?? "All");
  // useState(department)

  console.log("test", selectedDepartment)
  console.log("redirect department", department)

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(
          "https://backend-health-connect.vercel.app/doctors"
        );
        const data = await response.json();
        // console.log("data", data)
        setDoctors(data);

        // Assign imported images to doctors
        const updatedDoctors = data.map((doc, index) => ({
          ...doc,
          image: doctorImages.doctorImages[index % doctorImages.doctorImages.length],
        }));

        //  console.log("hi",updatedDoctors);
        setDoctors(updatedDoctors);

        //fetch departments .
        const deptResponse = await fetch(
          `https://backend-health-connect.vercel.app/doctors/department`
        );
        const deptData = await deptResponse.json();
        setDepartments(deptData.departments);

        // Add "All" category to departments
        const allDepartments = [{ title: "All", icon: "All" }, ...deptData.departments];
        setDepartments(allDepartments);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // call function
    fetchDoctors();
    // console.log("hina", doctors);
  }, []);
  // console.log("hina",doctors);

  // Filter doctors based on selected department
  const filteredDoctors = selectedDepartment === "All"
    ? doctors
    : doctors.filter(doctor => doctor.speciality.title === selectedDepartment);

  return (
    <div className='container mx-auto py-12 px-6 md:px-6 mt-0'>
      {/* Header with only the department name in red */}
      <h4 className='md:text-3xl text-4xl font-bold text-gray-800 mb-8'>
        Browse through{" "}
        <span className={selectedDepartment !== "All" ? "text-red-600" : ""}>
          {selectedDepartment !== "All" ? selectedDepartment.toUpperCase() : "specialist"}
        </span>{" "}
        doctors near you.</h4>

      <div className='flex flex-col md:flex-row gap-8'>
        {/* Departments Sidebar */}
        <div className='md:w-1/4'>
          <div className='shadow-md bg-white p-4 rounded-lg'>
            <h3 className='hidden md:block text-lg font-semibold text-blue-500 mb-4'>
              Filter by Departments
            </h3>
            <div className='flex flex-wrap  md:flex-col md:space-y-4'>
              {departments.map((department) => (
                <div
                  key={department.title}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors  ${selectedDepartment === department.title
                    ? "bg-red-100 text-red-600"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-700"}`}
                  onClick={() => setSelectedDepartment(department.title)}
                >
                  <FontAwesomeIcon
                    icon={iconMapping[department.title]}
                    className={`text-lg mr-2 ${selectedDepartment === department.title
                      ? "text-red-600"
                      : "text-gray-600"
                      }`}
                  />
                  <span>{department.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Doctors List */}
        <div className='w-full md:w-3/4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredDoctors.map((doctor) => (
              <Link to={`/doctors/${doctor.id}`} key={doctor.id}>
                {console.log("doctors images himani", doctor.image)}
                <div
                  key={doctor.id}
                  className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition'
                >
                  {/* Doctor Image */}
                  <div className='w-28 h-28 mb-4 rounded-full overflow-hidden border-2 '>
                    {/* <img
                      src={"D:/Project/himaniSharma_healthConnect/src/assets/Dr_Alice_Grey_Eye_Care.png"}
                      alt={doctor.name}
                      className='w-full h-full object-fit'
                    /> */}
                    {console.log("imges break", `"${doctorImages[0]}"`)}
                    <img 
                      src={doctor.image} 
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorsPage;