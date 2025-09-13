import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [otp, setOtp] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    // console.log(name,username,email,password);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        username,
        name,
        password,
      }),
    }

    try {
      const response = await fetch(
        "https://backend-health-connect.vercel.app/auth/signup", requestOptions
      );
      const result = await response.text()

      if (response.ok) {
        console.log("Signup successfull", result)
        setShowOTPForm(true)

      }
    } catch (error) {
      console.log(error)

    } finally {
      setLoading(false)
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault()
    setLoading(true);
    console.log(name, username, email, password);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        verification_code: otp,
      }),
    }

    try {
      const response = await fetch(
        "https://backend-health-connect.vercel.app/auth/verify-email", requestOptions
      );
      const result = await response.text()

      if (response.ok) {
        console.log("Email verified successfully!")
        // Redirect to login oage after succesful verification
        navigate("/signin");

      } else {
        const result = await response.text();
        console.error("Verification failed:", result)
      }
    } catch (error) {
      console.log("Verification error:", error)
    } finally {
      setLoading(false)
    }

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-2 py-8">
      {/* Unified card containing both image and form */}
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-6xl">
        {/* Doctor image */}
        <div className="flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 w-full md:w-3/5 px-2 py-8 border-none outline-none">
          <img src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1757668085/doc_qvhnkw.png" alt="Doctor" className="object-contain w-full h-full max-w-[32rem] max-h-[32rem] border-none outline-none" />
        </div>
        {/* Signup form */}
        <div className="flex flex-col justify-center w-full md:w-2/5 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center md:text-left whitespace-nowrap">Welcome to HealthConnect</h2>
          <p className="text-gray-400 text-center md:text-center mb-8 text-sm">{showOTPForm ? "Please enter verification code sent to your email" : "Create your account and start your healthcare journey"}</p>
          {!showOTPForm ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Enter full name"
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-300 text-gray-700" />
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder="Username"
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-300 text-gray-700" />
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-300 text-gray-700" />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-300 text-gray-700" />
              <button
                type="submit"
                className="mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-md transition-colors">{loading ? "Signing up..." : "Sign Up"}</button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-300 text-gray-700" />
              <button
                type="submit"
                className="mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-md transition-colors">Verify OTP</button>
            </form>
          )}
          {!showOTPForm && <p className="mt-6 text-center text-gray-600">Already have an account? <span className="text-red-500 cursor-pointer hover:underline"><a href="/signin">Log In</a></span></p>}

        </div>
      </div>
    </div>
  )
}

export default SignupPage;
