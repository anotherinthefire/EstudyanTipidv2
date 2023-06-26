import { Link } from "react-router-dom";
import hero from '../assets/human.png'
import Menu from '../components/Menu'

const Home = () => {
  return (
    <div className='bg-white'>
      <Menu />

      <section className="py-28 h-screen" id="Home">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h1 className="text-sm text-green-500 font-medium">
              Student Budget Planner
            </h1>
            <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
              Work Hard Budget Smarter
            </h2>
            <p>
              a valuable tool that can help a student allowing them to manage their finances efficiently and make proper financial decisions.
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <Link to="/login" className="flex items-center justify-center gap-x-2 py-2 px-4 text-white hover:text-gray-500 font-medium duration-150 bg-green-500 hover:bg-gray-100 border rounded-lg md:inline-flex">
                Get started
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <img
              src={hero}
              alt="parambaliw"
            />
          </div>
        </div>
      </section>


      <section id="Features" className="h-screen">
        <h1>Features</h1>
      </section>

      <section id="FAQs" className="h-screen">
        <h1>FAQs</h1>
      </section>

      <section id="ContactUs" className="h-screen">
        <h1>ContactUs</h1>
      </section>

      <section id="About" className="h-screen">
        <h1>About</h1>
      </section>


    </div>
  )
}

export default Home