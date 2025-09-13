import { faStethoscope, faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Footer = () => {
    const companyLinks = [
        { name: "About Us", href: "/about" },
        { name: "Departments", href: "/specializations" },
        { name: "Find a Doctor", href: "/doctors" },
        { name: "News", href: "/news" },
    ];

    const quickLinks = [
        { name: "Health Checkups", href: "#" },
        { name: "Vaccinations", href: "#" },
        { name: "Emergency Services", href: "/doctors" },
        { name: "Mental Health", href: "#" },
        { name: "Nutrition & Diet", href: "#" },
    ];

    const contactInfo = [
        {
            icon: faMapMarkerAlt,
            color: "text-red-500",
            text: "1234 Health Street, Sector 42, Gurgaon, Haryana, India",
        },
        {
            icon: faPhone,
            color: "text-red-500",
            text: "+91-98765-43210",
        },
        {
            icon: faEnvelope,
            color: "text-red-500",
            text: "support@healthconnect.in",
        },
    ];

    return (
        <footer className='bg-gray-900 text-gray-300 pt-12 px-4 md:px-6'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
                {/* Brand & Subscribe */}
                <div>
                    <h1 className='text-2xl font-bold text-white mb-6 flex items-center'>
                        <FontAwesomeIcon
                            icon={faStethoscope}
                            className='mr-2 text-red-500'
                        />
                        Health Connect
                    </h1>
                    <div className='flex flex-col w-full mb-4'>
                        <div className='flex w-full'>
                            <input
                                type="email"
                                placeholder='Email'
                                className='p-2 pl-4 w-full rounded-l-full bg-gray-800 text-gray-200 focus:outline-none'
                            />
                            <button className='px-4 py-2 bg-red-500 text-white rounded-r-full font-semibold hover:bg-red-600 transition md:w-auto w-32'>
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                    <div className='flex space-x-4 mb-6 mt-2'>
                        <a href="#" className='text-gray-400 hover:text-white'><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#" className='text-gray-400 hover:text-white'><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#" className='text-gray-400 hover:text-white'><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </div>

                {/* Company */}
                <div className='mt-8 md:mt-0'>
                    <h2 className='text-lg font-semibold text-white mb-4'>Company</h2>
                    <ul className='space-y-2 text-gray-400'>
                        {companyLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className='hover:text-white'>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Quick Links */}
                <div className='mt-8 md:mt-0'>
                    <h2 className='text-lg font-semibold text-white mb-4'>Quick Links</h2>
                    <ul className='space-y-2 text-gray-400'>
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className='hover:text-white'>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className='mt-8 md:mt-0'>
                    <h2 className='text-lg font-semibold text-white mb-4'>Contact Us</h2>
                    <ul className='space-y-2 text-gray-400'>
                        {contactInfo.map((info, index) => (
                            <li key={index} className='flex items-start'>
                                <FontAwesomeIcon icon={info.icon} className={`mr-2 mt-1 ${info.color}`} />
                                <span>{info.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Bottom Bar - hidden on mobile, visible on md+ */}
            <div className='hidden md:flex max-w-7xl mx-auto border-t border-gray-800 mt-10 pt-6 pb-4 px-2 flex-col md:flex-row justify-between items-center text-sm text-gray-400'>
                <div className='mb-2 md:mb-0'>
                    © 2024 All Rights Reserved
                </div>
                <div className='mb-2 md:mb-0'>
                    This template is made with <span className='text-red-500'>❤️</span> by Health Connect
                </div>
                <div>
                    <a href="#" className='hover:text-white'>Terms & Use</a>
                    <span className='mx-2'>•</span>
                    <a href="#" className='hover:text-white'>Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
