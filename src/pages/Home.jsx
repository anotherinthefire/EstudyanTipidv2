/* eslint-disable react/jsx-key */
import { GooglePlayButton, AppStoreButton } from "react-mobile-app-button";
import logo from '../assets/EstudyanTipid-logo.png'
import { Link } from "react-router-dom";
import hero from '../assets/human.png'
import Menu from '../components/Menu'
import contactMethods from "../data/contactMethods";
import footerNavs from "../data/HomeNavs.js"
import team from "../data/team";
import faqsList from "../data/faqList";
import FaqsCard from "../components/FaqsCard";
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import slides from "../data/slides";


const Home = () => {


  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

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


      <section id="Features" className="h-fit">
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='w-full h-full bg-center bg-cover duration-500'
          ></div>
          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="FAQs" className="h-fit pt-6">
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
          <div className="space-y-3 text-center">
            <h1 className="text-3xl text-gray-800 font-semibold">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-600 max-w-lg mx-auto text-lg">
              Answered all frequently asked questions, Still confused? feel free to contact us.
            </p>
          </div>
          <div className="mt-14 max-w-2xl mx-auto">
            {
              faqsList.map((item, idx) => (
                <FaqsCard
                  idx={idx}
                  faqsList={item}
                />
              ))
            }
          </div>
        </section>
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
                target="_blank" action="https://formsubmit.co/curseofjedi@gmail.com" method="POST"
                className="space-y-5"
              >
                <div>
                  <label className="font-medium">
                    Email<span className="text-red-600"> *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
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
                    name="name"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">
                    Message<span className="text-red-600"> *</span>
                  </label>
                  <textarea 
                  required 
                  name="message"
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"></textarea>
                </div>
                <button
                type="submit"
                  className="w-full px-4 py-2 text-white font-medium bg-green-600 hover:bg-green-500 active:bg-green-600 rounded-lg duration-150"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="About" className="h-screen py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-xl">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Meet our team
            </h3>
            <p className="text-gray-600 mt-3">
              3rd Year Bachelor of Science in Information Technology Students from Quezon City University, SBIT-3B.
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {
                team.map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-center">
                    <div className="flex-none w-24 h-24">
                      <img
                        src={item.avatar}
                        className="w-full h-full rounded-full"
                        alt=""
                      />
                    </div>
                    <div>
                      <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                      <p className="text-indigo-600">{item.title}</p>
                      <div className="mt-3 flex gap-4 text-gray-400">
                        <a href={item.linkedin}>
                          <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48"><g clipPath="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" /></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                        </a>
                      </div>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
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
                  <GooglePlayButton url="" theme="dark" />
                </div>
                <div className="mb-3 max-w-44">
                  <AppStoreButton url="" theme="dark" />
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