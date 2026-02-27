"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "../../../public/assets/services/page-Head.webp";

const Services = () => {
  const ServiceData = [
    {
      image: Header,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-blue-600">
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"
            fill="currentColor"
          />
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      ),
      title: "Web Development",
      description:
        "We implement reliable open source technologies which allow us to deliver you a high quality and cost effective solution.",
    },
    {
      image: Header,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-blue-600"
        >
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
        </svg>
      ),
      title: "Mobile App Development",
      description:
        "Mobilize your business with our mobile app development services and solutions to get high performing and customer-centric app.",
    },
    {
      image: Header,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-blue-600"
        >
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
      title: "Digital Marketing",
      description:
        "Your complete solution for online marketing strategies to increase online sales and drive highly targeted traffic to your website.",
    },
    {
      image: Header,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-blue-600"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
      title: "Local SEO",
      description:
        "We help business owners to generate more local leads, get more customers and grow their business with Local SEO service.",
    },
    {
      image: Header,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-blue-600"
        >
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
        </svg>
      ),
      title: "Global SEO",
      description:
        "We offer the result driven SEO Services to rank your Website on the first page of Google to generate more traffic and leads.",
    },
    {
      image: Header,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-blue-600"
        >
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
        </svg>
      ),
      title: "Logo Design",
      description:
        "A logo is the foundation of your company's brand identity. Get a unique logo, brochure, flyer, and package designs that speak about you.",
    },
    {
      image: Header,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-blue-600"
        >
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 6.1 17 7.5 17H19v-2H7.83c-.13 0-.25-.11-.25-.25v-.15l.9-1.6H15c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0019.5 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      ),
      title: "E-Commerce Solutions",
      description:
        "We build your dream online store with integrating seamless WooCommerce plug-in and theme at an affordable rate.",
    },
    {
      image: Header,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-blue-600"
        >
          <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
        </svg>
      ),
      title: "On Demand App Products",
      description:
        "Launch your own Ecommerce Mobile App. We are specialized in building Food ordering, Grocery, Gifts and more ordering/delivery apps.",
    },
  ];

  return (
    <>
      <div className="relative w-full h-[480px] overflow-hidden">
        <Image
          src={Header}
          fill
          alt=""
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-blue-950/85" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-5 text-white">
          <h1 className="text-5xl font-bold">Services</h1>
          <div className="px-5 py-2 rounded-full bg-gray-600/50 backdrop-blur-2xl">
            <p className="font-semibold text-md">Home / Services</p>
          </div>
        </div>
      </div>

      <div className=" py-16 px-8 bg-[#f7f7f7]">
        <div className="max-w-7xl  mx-auto grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {ServiceData.map((service, index) => (
            <div
              key={index}
              className="relative group h-[480px] overflow-hidden border border-gray-300 bg-[#f7f7f7] p-8 flex flex-col justify-between transition-all duration-500"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover opacity-0 group-hover:opacity-100 transition duration-1000"
              />

              <div className="absolute inset-0 bg-blue-950/80 opacity-0 group-hover:opacity-100 transition duration-700" />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-white transition duration-500">
                    <div className="group-hover:text-blue-600">
                      {service.icon}
                    </div>
                  </div>

                  <p className="text-gray-400 group-hover:text-gray-300 mb-2">
                    {`0${index + 1}`}
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition duration-500">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 group-hover:text-gray-200 transition duration-500">
                    {service.description}
                  </p>
                </div>

                <button className="mt-6 font-semibold text-blue-600 group-hover:text-white transition duration-500">
                  Get optimization →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative bg-blue-600 overflow-hidden px-6 py-12 md:px-10 md:py-16 flex flex-col md:flex-row  items-center justify-between gap-8">
        <div className="absolute -top-32 -left-32  w-72 h-72 md:w-96 md:h-96  bg-blue-500 rounded-full opacity-40"></div>

        <div className="absolute -bottom-32 -right-32 w-72 h-72 md:w-96 md:h-96  bg-blue-500 rounded-full opacity-40"></div>

        <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold text-white  text-center md:text-left">
          GET CONSULTANT NOW!
        </h1>

        <Link
          href="#"
          className="relative group overflow-hidden  flex items-center gap-3  bg-white  px-5 py-3 md:px-6 md:py-3 rounded-full font-semibold"
        >
          <span className="absolute inset-0 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full rounded-full"></span>

          <span className="relative z-10  bg-blue-800 text-white w-8 h-8 flex items-center justify-center rounded-full transition-all duration-500  group-hover:bg-white  group-hover:text-blue-600">
            →
          </span>

          <span className="relative z-10 text-black  transition-colors duration-500 group-hover:text-white">
            Lets talk now
          </span>
        </Link>
      </div>
    </>
  );
};

export default Services;
