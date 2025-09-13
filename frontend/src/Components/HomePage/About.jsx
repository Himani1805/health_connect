import React from 'react'
import { CircleCheck } from 'lucide-react'
import { useState } from 'react'
import Modal from '../Common/Modal'

const checklistItems = [
    "State-of-the-art medical facilities and equipment.",
    "Experienced doctors and friendly, supportive staff.",
    "Comprehensive care to each patient's needs.",
]

const checklistItemsMore = [
    "Comprehensive range of medical specialties to address all aspects of your health.",
    "24/7 emergency and urgent care services to ensure timely treatment.",
    "Patient-centered approach with focus on trust, comfort, and healing.",
    "Advanced diagnostic and imaging services for accurate and quick results.",
    "Affordable healthcare packages without compromising quality.",
    "Continuous care and follow-up to support your long-term health goals.",
]

const About = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='flex flex-col md:flex-row items-center md:px-6 mb-20 w-3/4 mx-auto mt-20'>
            <div className='md:w-1/2 mb-8 md:mb-0 justify-center'>
                <div className='relative '>
                    <img
                        src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1757668081/about-1_dsvvgl.webp"
                        alt="about-1"
                        className='w-full h-auto rounded-lg shadow-lg'
                    />
                    <img
                        src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1757668082/about-2_gvrlbc.webp"
                        alt="about-2"
                        className='w-full h-auto rounded-lg shadow-lg absolute top-20 left-20 border-4 border-white hidden md:block'
                    />
                </div>
            </div>
            <div className='w-full md:w-1/2 text-center md:text-left md:ml-28'>
                <h4 className='text-red-500 font-semibold text-sm uppercase mb-2'>
                    Welcome to Health Connect
                </h4>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
                    Best Care For Your Good Health
                </h2>
                <p className='text-gray-600 mb-6'>
                    At Health Connect, we prioritize compassionate, personalized care that meets the unique needs of every patient. Our team of experienced professionals is committed to providing the highest quality medical services, ensuring you receive the best care possible.
                </p>
                <ul className='space-y-3 mb-6 text-gray-600 text-left'>
                    {checklistItems.map((item, index) => (
                        <li
                            key={index}
                            className='flex items-center text-[12px] md:text-[16px]'
                        >
                            <CircleCheck className='text-red-500 md:mr-3 mr-1' />
                            {item}
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() => setIsOpen(true)}
                    className='px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300'>
                    Learn More
                </button>
                <Modal
                    isOpen={isOpen}
                    onClose={() => { setIsOpen(false) }
                    }
                    title="LearnMore"
                >
                <ul className='space-y-3 mb-6 text-gray-600 text-left'>
                    {checklistItemsMore.map((item, index) => (
                        <li
                            key={index}
                            className='flex items-center text-[12px] md:text-[16px]'
                        >
                            <CircleCheck className='text-red-500 md:mr-3 mr-1' />
                            {item}
                        </li>
                    ))}
                </ul>
                </Modal>
            </div>
        </div>
    )
}

export default About;
