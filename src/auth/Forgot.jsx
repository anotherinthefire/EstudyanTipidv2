import { Link } from "react-router-dom";

const Forgot = () => {
  return (
    <div className="h-screen">
      <div className="w-full space-y-6 text-esblack sm:max-w-md mx-auto pt-[10vh] relative z-20">
        <div className="bg-white shadow space-y-8 sm:p-6 sm:rounded-xl ">
          <form onSubmit={(e) => e.preventDefault()} className="px-4 py-6">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#51D289" className="w-24 h-24 mx-auto mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>

            <div className="pb-8">
              <div className="text-center">
                <h1 className="text-4xl font-extrabold monserat pb-5">
                  Forgot Password?
                </h1>
                <span className="text-lg font-thin">Enter username or email associated with your account</span>
              </div>
            </div>

            <div className="flex items-center mb-6 p-2 border rounded-md bg-white">
              <input
                type="email"
                placeholder="email or username"
                id="email"
                className="w-full h-8 p-1 text-esblack outline-none bg-white"
              />
            </div>

            <Link to="/otp">
            <button className="w-full px-4 py-2 mb-2 text-white font-medium bg-esgreen hover:bg-green-600 active:bg-indigo-600 rounded-lg duration-150">
              Send OTP
            </button>
            </Link>
          </form>
          <Link to="/login">{'<'}{'<'} back to login</Link>
        </div>
      </div>
    </div>
  )
}

export default Forgot