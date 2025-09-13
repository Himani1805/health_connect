import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SigninPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const requestOptions = {
      method:"POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        username,
        
        password,
      }).toString(),
    }

    try {
      const response = await fetch(
        "https://backend-health-connect.vercel.app/auth/login", requestOptions
      );
      const result = await response.json()

      if(response.ok){
        localStorage.setItem("token", result.access_token);
        localStorage.setItem("token_type", result.token_type);
        localStorage.setItem("username", result.username);

        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 2000)
        

      } 
    } catch (error) {
      console.log(error)
      
    }finally{
      setLoading(false)
    }

  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col md:flex-row w-full max-w-4xl shadow-lg rounded-xl overflow-hidden bg-white">
        {/* Doctor Illustration: visible on all screens, stacked on small, left on large */}
        <div className="flex w-full md:w-1/2 items-center justify-center bg-white p-8 bg-gradient-to-br from-white via-blue-50 to-blue-100">
          <img src="https://res.cloudinary.com/dgbymqjtk/image/upload/v1757668085/doc_qvhnkw.png" 
          alt="Doctor" 
          className="object-contain max-w-[16rem] md:max-w-[32rem] max-h-[16rem] md:max-h-[32rem]" />
        </div>
        {/* Sign In Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Welcome to<br/>HealthConnect</h2>
            <p className="text-center text-gray-500 mb-6">Sign in to access your healthcare dashboard</p>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300 text-gray-700"
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300 text-gray-700"
              />
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-md transition-colors"
              >
                {loading ? "Signing in.." : "Sign in"}
              </button>
            </form>
            <p className="text-center text-gray-500 mt-6">
              Don't have an account?{' '}
              <a href="/signup" className="text-red-500 hover:underline font-medium">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SigninPage;
