import { Link } from "react-router-dom"
import { useRef, useState } from "react"

const OTPassword = () => {
  const fieldsRef = useRef()
  const [state, setState] = useState({ code1: "", code2: "", code3: "", code4: "" })

  // Switch to input fields method
  const inputFocus = (e) => {
    const elements = fieldsRef.current.children
    const dataIndex = +e.target.getAttribute("data-index")
    if ((e.key === "Delete" || e.key === "Backspace")) {
      const next = dataIndex - 1;
      if (next > -1) {
        elements[next].focus()
      }
    } else {

      const next = dataIndex + 1
      if (next < elements.length && e.target.value != " " && e.target.value != "" && e.key.length == 1) {
        elements[next].focus()
      }
    }
  }

  const handleChange = (e, codeNumber) => {
    const value = e.target.value
    setState({ ...state, [codeNumber]: value.slice(value.length - 1) })
  }
  return (
    <div className="h-screen">
      {/* login */}
      <div className="w-full space-y-6 text-esblack sm:max-w-md mx-auto pt-[10vh] relative z-20">
        <div className="bg-white shadow space-y-8 sm:p-6 sm:rounded-xl ">
          <form onSubmit={(e) => e.preventDefault()} className="px-4 py-6">

            <div className="pb-8">
              <div className="text-center">
                <h1 className="text-4xl font-extrabold monserat pb-5">
                  OTP
                </h1>
                <span className="text-lg font-thin">An OTP has sent to your email, please do not share it with others</span>
              </div>
            </div>

            <div className="mx-[21%]">
              <div ref={fieldsRef} className="mt-2 flex items-center gap-x-2">
                <input type="text" data-index="0" placeholder="0" value={state.code1} className="w-12 h-12 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
                  onChange={(e) => handleChange(e, "code1")}
                  onKeyUp={inputFocus}
                />
                <input type="text" data-index="1" placeholder="0" value={state.code2} className="w-12 h-12 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
                  onChange={(e) => handleChange(e, "code2")}
                  onKeyUp={inputFocus}
                />
                <input type="text" data-index="2" placeholder="0" value={state.code3} className="w-12 h-12 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
                  onChange={(e) => handleChange(e, "code3")}
                  onKeyUp={inputFocus}
                />
                <input type="text" data-index="3" placeholder="0" value={state.code4} className="w-12 h-12 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
                  onChange={(e) => handleChange(e, "code4")}
                  onKeyUp={inputFocus}
                />
              </div>
            </div>
            <Link to="/reset">
              <button className="w-full px-4 py-2 mt-8 my-2 text-white font-medium bg-esgreen hover:bg-green-600 active:bg-indigo-600 rounded-lg duration-150">
                VERIFY
              </button>
            </Link>
            <div className="text-center">
              <Link to="/otp">
              <p>resend otp</p>
              </Link>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default OTPassword