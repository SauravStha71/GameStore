import React from "react";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#121212]">
      <div className="w-[90%] max-w-[500px] min-h-[700px] bg-[#1e1e1e] rounded-[25px] border border-[#d2d2d2] flex flex-col items-center p-6">
        
        {/* Title */}
        <h1
          className="text-[30px] font-semibold text-white mb-6 text-center"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Sign In to GG Store
        </h1>

        {/* First Rectangle */}
        <div className="w-[90%] max-w-[400px] h-[257px] bg-[#181818] rounded-[15px] border border-[#d2d2d2] flex flex-col justify-center p-6 mb-6">
          <label
            className="text-[17px] text-white mb-2"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Sign In with username or email
          </label>
          <input
            type="text"
            className="w-full mb-4 p-2 rounded bg-[#242424] border border-[#d2d2d2] text-white"
          />
          <label
            className="text-[17px] text-white mb-2"
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
              <div className="w-[90%] max-w-[400px] h-[257px] bg-[#181818] rounded-[15px] border border-[#d2d2d2] flex flex-col items-center justify-center p-6">
          <h2
            className="text-[17px] text-white mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Other ways to sign in
          </h2>

          <div className="flex flex-col gap-3 w-full">
            <button className="w-full bg-[#242424] hover:bg-green-700 text-white py-2 rounded font-semibold border border-[#d2d2d2]">
              Google
            </button>
            <button className="w-full bg-[#242424] hover:bg-black text-white py-2 rounded font-semibold border border-[#d2d2d2]">
              Apple
            </button>
            <button className="w-full bg-[#242424] hover:bg-blue-900 text-white py-2 rounded font-semibold border border-[#d2d2d2]">
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
