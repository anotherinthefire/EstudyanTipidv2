/* eslint-disable react/jsx-key */
import { GooglePlayButton, AppStoreButton } from "react-mobile-app-button";
import logo from '../assets/EstudyanTipid-logo.png'
import { Link } from "react-router-dom";
import hero from '../assets/human.png'
import Menu from '../components/Menu'
import contactMethods from "../data/contactMethods";
import footerNavs from "../data/HomeNavs.js"

const Home = () => {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
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

      <section id="ContactUs" className="h-screen py-24">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
            <div className="max-w-lg space-y-3">
              <h3 className="text-green-600 font-semibold">
                Contact
              </h3>
              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Let us know how we can help
              </p>
              <p>
                We’re here to help and answer any question you might have, We look forward to hearing from you! Please fill out the form, or use the contact information bellow .
              </p>
              <div>
                <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                  {
                    contactMethods.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-x-3">
                        <div className="flex-none text-gray-400">
                          {item.icon}
                        </div>
                        <p>{item.contact}</p>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
              >
                <div>
                  <label className="font-medium">
                    Email<span className="text-red-600"> *</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">
                    Name<span className="text-red-600"> *</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">
                    Message<span className="text-red-600"> *</span>
                  </label>
                  <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"></textarea>
                </div>
                <button
                  className="w-full px-4 py-2 text-white font-medium bg-green-600 hover:bg-green-500 active:bg-green-600 rounded-lg duration-150"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="About" className="h-screen">
        <h1>About</h1>
      </section>

      <footer className="pt-10">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="justify-between sm:flex">
            <div className="space-y-6">
              <img src={logo} className="w-48" />
              <p className="max-w-md">
                a valuable tool that can help a student allowing them to manage their finances efficiently and make proper financial decisions.
              </p>
              <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
                {
                  footerNavs.map((item, idx) => (
                    <li className="text-gray-800 hover:text-gray-500 duration-150">
                      <Link key={idx} onClick={() => handleClickScroll(item.scroll)}>
                        {item.name}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="mt-6">
              <p className="text-gray-700 font-semibold">Get the app</p>
              <div className="grid grid-cols-2 gap-3 mt-3 sm:block">
                <div className="mb-3 max-w-44">
                  <GooglePlayButton url="" theme="light" />
                </div>
                <div className="mb-3 max-w-44">
                  <AppStoreButton url="" theme="light" />
                </div>
              </div>

            </div>
          </div>
          <div className="mt-10 py-10 border-t md:text-center">
            <p>© 2023 EstudyanTipid Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home