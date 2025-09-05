import React from 'react';

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Sign In to CG Store
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Sign in with email or username"
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-gray-400">Other ways to sign in</div>

        <div className="mt-4 space-y-3">
          <button className="w-full bg-white text-gray-800 font-semibold py-2 rounded-md hover:bg-gray-100 transition duration-200">
            Google
          </button>
          <button className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-900 transition duration-200">
            Apple
          </button>
          <button className="w-full bg-blue-800 text-white font-semibold py-2 rounded-md hover:bg-blue-900 transition duration-200">
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
}