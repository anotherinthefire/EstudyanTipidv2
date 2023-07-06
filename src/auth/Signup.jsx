import human from "../assets/human.png";
import logo from "../assets/logon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [isPasswordHidden, setPasswordHidden] = useState(true);
    return (
        <div className="h-screen">
            {/* login */}
            <div className="w-full space-y-6 text-white sm:max-w-md mx-auto relative z-20 pt-5">
                <div className="bg-esblack shadow space-y-8 sm:p-6 sm:rounded-xl p-0">
                    <form onSubmit={(e) => e.preventDefault()} className="px-4 py-3">
                        <div className="flex pb-8">
                            <h1 className="text-6xl">|</h1>
                            <div>
                                <h1 className="text-4xl font-semibold monserat">Sign up</h1>
                                <span className="text-lg font-thin">
                                    Please Enter Your Details
                                </span>
                            </div>
                        </div>
                        <label htmlFor="firstname" className="block text-white">
                            First Name <span className="text-esred">*</span>
                        </label>
                        <div className="flex items-center mb-2 p-2 border rounded-md bg-white">
                            <input
                                type="text"
                                placeholder="Enter your first name"
                                id="fistname"
                                className="w-full h-8 p-1 text-esblack outline-none bg-white"
                            />
                        </div>

                        <label htmlFor="lastname" className="block text-white">
                            Last Name <span className="text-esred">*</span>
                        </label>
                        <div className="flex items-center mb-2 p-2 border rounded-md bg-white">
                            <input
                                type="textt"
                                placeholder="Enter your last name"
                                id="lastname"
                                className="w-full h-8 p-1 text-esblack outline-none bg-white"
                            />
                        </div>

                        <label htmlFor="email" className="block text-white">
                            Email <span className="text-esred">*</span>
                        </label>
                        <div className="flex items-center mb-2 p-2 border rounded-md bg-white">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                id="email"
                                className="w-full h-8 p-1 text-esblack outline-none bg-white"
                            />
                        </div>

                        <label htmlFor="username" className="block text-white">
                            Username <span className="text-esred">*</span>
                        </label>
                        <div className="flex items-center mb-2 p-2 border rounded-md bg-white">
                            <input
                                type="text"
                                placeholder="Enter your desired username"
                                id="username"
                                className="w-full h-8 p-1 text-esblack outline-none bg-white"
                            />
                        </div>

                        <label className="text-gray-600 ">Password <span className="text-esred">*</span></label>
                        <div className="relative max-w-full w-full mb-4">
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
                                placeholder="Enter your desired password"
                                className="w-full h-12 pr-24 pl-3 py-2 text-esblack bg-white outline-none border shadow-sm rounded-lg"
                            />
                        </div>

                        <Link to="/login">
                            <button className="w-full px-4 py-2 text-white font-medium bg-esgreen hover:bg-green-600 active:bg-indigo-600 rounded-lg duration-150">
                                Sign up
                            </button>
                        </Link>
                    </form>
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

export default Signup;
