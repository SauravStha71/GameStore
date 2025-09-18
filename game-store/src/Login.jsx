import React from "react";
import { FaCog } from "react-icons/fa";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#121212] px-4">
      <div className="w-full max-w-[500px] bg-[#1e1e1e] rounded-2xl border border-[#d2d2d2] flex flex-col items-center p-4 sm:p-6 md:p-8">
        
        {/* Title */}
        <h1
          className="text-2xl sm:text-3xl font-semibold text-white mb-6 text-center"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Sign In to GG Store
        </h1>

        {/* First Rectangle */}
        <div className="w-full bg-[#181818] rounded-xl border border-[#d2d2d2] flex flex-col justify-center p-4 sm:p-6 mb-6">
          <label
            className="text-base sm:text-lg text-white mb-2"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Sign In with username or email
          </label>
          <input
            type="text"
            className="w-full mb-4 p-2 rounded bg-[#242424] border border-[#d2d2d2] text-white"
          />
          <label
            className="text-base sm:text-lg text-white mb-2"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Password
          </label>
          <input
            type="password"
            className="w-full mb-4 p-2 rounded bg-[#242424] border border-[#d2d2d2] text-white"
          />
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold">
            Login
          </button>
        </div>

        {/* Second Rectangle */}
        <div className="w-full bg-[#181818] rounded-xl border border-[#d2d2d2] flex flex-col items-center justify-center p-4 sm:p-6">
          <h2
            className="text-base sm:text-lg text-white mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Other ways to sign in
          </h2>
<div className="flex flex-col gap-3 w-full">
  {/* Google */}
  <button className="w-full flex items-center justify-between bg-[#242424] hover:bg-green-700 text-white py-2 px-4 rounded font-semibold border border-[#d2d2d2]">
    <div className="w-6 flex justify-start">
      <FcGoogle size={20} />
    </div>
    <span className="flex-1 text-center">Google</span>
    <div className="w-6" /> {/* Spacer to balance layout */}
  </button>

  {/* Apple */}
  <button className="w-full flex items-center justify-between bg-[#242424] hover:bg-black text-white py-2 px-4 rounded font-semibold border border-[#d2d2d2]">
    <div className="w-6 flex justify-start">
      <FaApple size={20} />
    </div>
    <span className="flex-1 text-center">Apple</span>
    <div className="w-6" />
  </button>

  {/* Facebook */}
  <button className="w-full flex items-center justify-between bg-[#242424] hover:bg-blue-900 text-white py-2 px-4 rounded font-semibold border border-[#d2d2d2]">
    <div className="w-6 flex justify-start">
      <FaFacebook size={20} className="text-blue-600" />
    </div>
    <span className="flex-1 text-center">Facebook</span>
    <div className="w-6" />
  </button>
</div>

        <div className="absolute bottom-4 left-4">
          <button
            title="Settings"
            className="p-2 rounded-full bg-[#242424] hover:bg-[#333] text-white border border-[#d2d2d2] transition duration-200"
          >
            <FaCog size={20} />
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
