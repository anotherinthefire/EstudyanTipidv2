import { Link } from "react-router-dom"

const Reset = () => {
  return (
    <div className="h-screen">
      <div className="w-full space-y-6 text-esblack sm:max-w-md mx-auto pt-[10vh] relative z-20">
        <div className="bg-white shadow space-y-8 sm:p-6 sm:rounded-xl ">
          <form onSubmit={(e) => e.preventDefault()} className="px-4 py-6">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#51D289" className="w-24 h-24 mx-auto mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
            </svg>

            <div className="pb-8">
              <div className="text-center">
                <h1 className="text-4xl font-extrabold monserat pb-5">
                  Reset Password
                </h1>
              </div>
            </div>

            <div className="flex items-center mb-6 p-2 border rounded-md bg-white">
              <input
                type="text"
                placeholder="new password"
                id="newpassword"
                className="w-full h-8 p-1 text-esblack outline-none bg-white"
              />
            </div>

            <div className="flex items-center mb-6 p-2 border rounded-md bg-white">
              <input
                type="text"
                placeholder="confirm password"
                id="confirmpassword"
                className="w-full h-8 p-1 text-esblack outline-none bg-white"
              />
            </div>

            <Link to="/login">
              <button className="w-full px-4 py-2 mb-2 text-white font-medium bg-esgreen hover:bg-green-600 active:bg-indigo-600 rounded-lg duration-150">
                Confirm
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Reset