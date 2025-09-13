import React from 'react'
import { Heart, Calendar, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate()

    return (
        <section className="w-full flex flex-col lg:flex-row items-center justify-between px-4 lg:px-24 py-8 lg:py-16 bg-white">
            {/* Left Side */}
            <div className="flex-1 flex flex-col items-start">
                {/* Trusted Partner */}
                <div className="flex items-center bg-white shadow-xl rounded-full px-6 py-3 mb-4">
                    <Heart className="text-red-500 mr-2" size={20} />
                    <span className="font-bold text-base">Trusted Healthcare Partner</span>
                </div>
                {/* Headings */}
                <div className='mt-8 mb-4 '>
                    <div className='flex flex-col items-start gap-y-2 text-4xl font-bold lg:text-5xl leading-tight mb-2'>
                        <h1 >Your </h1>
                        <h1 className=' text-red-500'>Health is</h1>
                        <h1>Our Priority</h1>
                    </div>
                    <div>
                        <span className='text-4xl font-bold text-red-500'>.</span>
                        <span className='text-4xl font-bold'>.</span>
                        <span className='text-4xl font-bold text-red-500'>.</span>
                    </div>
                </div>
                {/* Paragraph */}
                <p className="text-gray-600 font-normal text-lg lg:text-xl mb-8 max-w-xl">
                    Experience personalized healthcare through our network of qualified professionals. Your well-being is at the heart of everything we do.
                </p>
                {/* Features */}
                <div className="flex flex-col sm:flex-row gap-10 mb-14">
                    <div className="flex items-center bg-white rounded-sm shadow-md px-6 py-4">
                        <Calendar className="text-blue-600 mr-3" size={28} /><span className="font-bold text-md">24/7 Availability</span>
                    </div>
                    <div className="flex items-center bg-white shadow-md rounded-sm px-6 py-4">
                        <Shield className="text-green-600 " size={28} /><span className="font-bold text-md">100% Secure</span>
                    </div>
                </div>
                {/* Register Button */}
                <button onClick={() => { navigate("/Signup") }}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-md text-lg shadow-md">
                    Register Now
                </button>
            </div>
            {/* Right Side (Image) */}
            <div className="flex-1 flex justify-center mt-12 lg:mt-0 ">
                <img
                    src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1757668083/banner_as6rrk.png"
                    alt="Doctor"
                />
            </div>
        </section>
    )
}

export default Banner;
