import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeartPulse,
    faUserMd,
    faTooth,
    faEye,
    faBrain,
    faSyringe,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom';


const iconMapping = {
    faHeartPulse: faHeartPulse,
    faUserMd: faUserMd,
    faTooth: faTooth,
    faEye: faEye,
    faBrain: faBrain,
    faSyringe: faSyringe,
};

const PopularDepartments = ({ isHomePage }) => {
    const [departments, setDepartments] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        fetch("https://backend-health-connect.vercel.app/doctors/department")
            .then((res) => res.json())
            .then((data) => {
                const departmentWithIcons = data.departments.map((dept) => ({
                    title: dept.title,
                    iconName: iconMapping[dept.icon] || faUserMd,
                }));
                setDepartments(departmentWithIcons);
            })
    }, [])
    //console.log(departments)

    function handleDepartmentClick(department) {
        navigate("/doctors/departments")
        localStorage.setItem("department", department)

    }


    return (
        <div className=' bg-gray-50 py-12 px-5 text-center'>
            {isHomePage ?
                <>
                    <h4 className='text-gray-500 uppercase text-sm mb-2'>Why Choose Us?</h4>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>Health Connect popular Departments</h2>
                    <p className='text-gray-500 mb-10 px-4'>
                        Discover the range of medical specialties that our expert team offers to ensure comprehensive health care services.
                    </p></> :
                <>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>All Available Departments</h2>
                    <p className='text-gray-500 mb-10 max-w-2xl mx-auto'>
                        We provide a wide range of medical specialties to cater to your healthcare needs. Our departments are staffed by highly qualified professionals who are commited to providing exceptional care.
                    </p>
                </>}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {departments.slice(0, 6).map((department, index) => (
                    <div
                        key={index}
                        onClick={() => handleDepartmentClick(department.title)}
                        className='cursor-pointer flex flex-col items-center  text-center p-6 rounded-lg shadow-'
                        style={{
                            background: "linear-gradient(to top, #ff0844 0%, #ffb199 100%)",
                            color: "white"
                        }}
                    >
                        <div className='text-white text-5xl mb-4'>
                            <FontAwesomeIcon icon={department.iconName} />
                        </div>
                        <h3 className="text-lg font-bold text-white">{department.title}</h3>
                    </div>
                ))}

            </div>
            {isHomePage && (<div className='mt-10'>
                <button className='px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700'>
                    <Link to="/departments">View More</Link>
                </button>
            </div>)}
            <div>

            </div>
        </div>
    )
}

export default PopularDepartments;
