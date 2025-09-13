import React from 'react'
import PopularDepartments from '../HomePage/PopularDepartments';
import departmentsImage from '../../utils/imageData.js'

const DepartmentsPage = () => {
    return (
        <>
            <PopularDepartments isHomePage={false} />
            {/* Our Department Section */}
            <div className=" max-w-6xl mx-auto px-4 py-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
                    Our Departments
                </h2>
                <p className='text-gray-500 mb-10 max-w-2xl mx-auto text-center'> We provide a wide range of medical specialties to meet your healthcare needs. Each department is managed by experienced professionals who are committed to delivering compassionate and reliable care.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {departmentsImage.departmentsImage.map((img, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                        >
                            <img
                                src={img}
                                alt={`Department ${index + 1}`}
                                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default DepartmentsPage;
