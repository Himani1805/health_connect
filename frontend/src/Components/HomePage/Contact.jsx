import React, { useState } from 'react';
import ContactImg from '../../assets/contact.jpg';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "name": name,
      "email": email,
      "subject": subject,
      "message": message
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(
      "https://backend-health-connect.vercel.app/contact/get_in_touch",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log("Result:", result);
        toast.success(
          "Thank you for reaching out! We have received your message and will get back to you shortly. ",
          {
            position: "top-right",
            autoClose: 3000,
          }
        );
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch(error => {
        console.error("Error:", error);
        toast.error("Failed to send message. Please try again later.", {
          position: "top-right",
          autoClose: 3000,
        });
      });

  }

  return (
    <div>
      <div className=' text-center px-4'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4 mt-10'>Get in Touch</h2>
        <p className='text-gray-600'>
          Have questions or need assistance? Fill out the form, and our team will get back to you shortly.
        </p>
      </div>
      <div className='flex flex-col md:flex-row w-full md:w-3/4 mx-auto items-center justify-center py-8 pb-12 gap-8'>
        <div className='flex justify-center mb-6 md:w-1/2 md:mb-0'>
          <img
            src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1757668084/contact_u762tz.jpg"
            alt='Contact'
            className='w-full max-w-[500px] h-96 md:w-full md:h-96 object-contain md:object-cover rounded-lg'
          />
        </div>
        <div className='w-full md:w-1/2 px-2'>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-md"
              value={name}
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-md"
              value={email}
            />
            <input
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              placeholder="Subject"
              className="p-3 border border-gray-300 rounded-md"
              value={subject}
            />
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="p-3 border border-gray-300 rounded-md min-h-[100px]"
              value={message}
            />
            <button
              type="submit"
              className="w-full py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />

    </div>
  )
}

export default Contact;
