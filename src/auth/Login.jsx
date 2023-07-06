import human from "../assets/human.png";
import logo from "../assets/logon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  return (
    <div className="h-screen">

      {/* login */}
      <div className="w-full space-y-6 text-white sm:max-w-md mx-auto pt-[10vh] relative z-20">
        <div className="bg-esblack shadow space-y-8 sm:p-6 sm:rounded-xl ">
          <form onSubmit={(e) => e.preventDefault()} className="px-4 py-6">

            <div className="flex pb-8">
              <h1 className="text-6xl">|</h1>
              <div>
                <h1 className="text-4xl font-semibold monserat">
                  Login
                </h1>
                <span className="text-lg font-thin">Please Enter Your Details</span>
              </div>
            </div>

            <label htmlFor="email" className="block text-white">
              Email or Username
            </label>
            <div className="flex items-center mb-6 p-2 border rounded-md bg-white">
              <input
                type="email"
                placeholder="user@gmail.com"
                id="email"
                className="w-full h-8 p-1 text-esblack outline-none bg-white"
              />
            </div>
            <label className="text-gray-600 ">Password</label>
            <div className="relative max-w-full w-full">
              <button
                className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
                onClick={() => setPasswordHidden(!isPasswordHidden)}
              >
                {isPasswordHidden ? (
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </button>
              <input
                type={isPasswordHidden ? "password" : "text"}
                placeholder="Enter your password"
                className="w-full h-12 pr-24 pl-3 py-2 text-esblack bg-white outline-none border shadow-sm rounded-lg"
              />
            </div>
            <div className="text-right pb-3">
              <Link to="/forgot" className="hover:text-indigo-600">
                Forgot password?
              </Link>
            </div>
            <button className="w-full px-4 py-2 mb-2 text-white font-medium bg-esgreen hover:bg-green-600 active:bg-indigo-600 rounded-lg duration-150">
              Sign in
            </button>

            <div className="relative my-3">
              <span className="block w-full h-px bg-white"></span>
              <pre className="inline-block w-fit text-smpx-2 bg-esblack absolute -top-3 inset-x-0 mx-auto"> Or </pre>
            </div>
            <div className="">
              <button className="w-full flex items-center justify-center gap-x-3 py-2.5 mt-5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100">
                <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_17_40)">
                    <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                    <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                    <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                    <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_40">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Continue with Google
              </button>
            </div>
            <div className="text-center pt-2">
              <p>Dont have account? <Link to="/signup" className="text-esgreen">Create a new account</Link>
              </p>
            </div>
            
          </form>
          <Link to="/">{'<'}{'<'} back to home</Link>
        </div>
      </div>

      <div className="flex">
        {/* Left */}
        <div className="w-3/5">
          <img src={human} className="absolute bottom-0 left-0 h-[55vh]" />
        </div>
        {/* Right */}
        <div className="w-2/5 bg-white flex items-center justify-center h-screen absolute right-0 top-0 z-0">
          <img src={logo} className="h-[55vh]" />
        </div>
      </div>
    </div>
  );
};

export default Login;
