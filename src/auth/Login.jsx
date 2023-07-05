import human from "../assets/human.png";
import logo from "../assets/Estudyantipid-logo (1).png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  return (
    <div className="h-screen">

      {/* login */}
      <div className="w-full space-y-6 text-white sm:max-w-md mx-auto pt-20 relative z-20">
        <div className="bg-esblack shadow space-y-8 sm:p-6 sm:rounded-lg">
          <form onSubmit={(e) => e.preventDefault()} className="py-8">

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
              Email
            </label>
            <div className="flex items-center mb-6 p-2 border rounded-md bg-transparent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400 w-7 h-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <input
                type="email"
                placeholder="user@gmail.com"
                id="email"
                className="w-full h-8 p-1 ml-3 text-gray-500 outline-none bg-esblack"
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
                    stroke="currentColor"
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
                    stroke="currentColor"
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
                className="w-full h-12 pr-24 pl-3 py-2 text-white bg-esblack outline-none border shadow-sm rounded-lg"
              />
            </div>
            <div className="text-right pb-8">
          <Link to="/forgot" className="hover:text-indigo-600">
            Forgot password?
          </Link>
        </div>
            <button className="w-full px-4 py-2 mb-2 text-white font-medium bg-esgreen hover:bg-green-600 active:bg-indigo-600 rounded-lg duration-150">
              Sign in
            </button>
            <div className="text-center">
              <p>Dont have account? <Link to="/signup" className="text-esgreen">Create a new account</Link>
          </p>  
        </div>
          </form>
        </div>
      </div>

      {/* left */}
      <div className="flex">
        <div className="w-3/5">
          <img src={human} className="absolute bottom-0 left- w-1/3" />
        </div>
        {/* right */}
        <div className="w-2/5 bg-white flex items-center justify-center h-screen right-0 top-0 z-0 absolute">
          <img src={logo} className="w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Login;
