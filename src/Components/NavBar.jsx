import { useState, useEffect } from "react";

export default function NavBar() {
  const fileUrl = "https://react-tailwindcss-website-gray.vercel.app/";

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }
  return (
    <>
      <div
        className={`fixed top-0 w-full navbar text-white shadow-lg  z-50 bg-black  transition-all duration-300 ${
          scrolled ? "py-4" : "py-8"
        }`}
      >
        <div className="navbar-start md:ml-32">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className={`mr-2 -mb-1 lg:-mb-2 w-3 ${scrolled ? "w-4" : "lg:w-6"}`}
            viewBox="0 0 16 16"
          >
            <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"></path>
            <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"></path>
          </svg>
          <a
            className={` font-bold transtion duration-200 ${
              scrolled ? "text-2xl" : "lg:text-3xl"
            }`}
          >
            Klar
          </a>
        </div>
        <div className="lg:navbar-center w-full lg:w-auto">
          <ul
            className={` w-full flex justify-end gap-3 lg:mb-0 lg:gap-10 px-1 text-[14px]  ${
              scrolled ? "md:text-[18px]" : "lg:text-[19.8px]"
            }`}
          >
            <li>
              <a className="hover-underline-animation  cursor-pointer">Home</a>
            </li>
            <li>
              <a className="hover-underline-animation  cursor-pointer">
                Content
              </a>
            </li>
            <li>
              <a className="hover-underline-animation  cursor-pointer">
                System
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end md:mr-32  hidden lg:flex">
          <a
            download
            href={tailwind-project}
            className={`border border-outline hover:bg-white hover:text-black  px-4 rounded-full cursor-pointer transtion ease-in-out duration-500 ${
              scrolled ? "py-1" : "py-2"
            }`}
          >
            Download Template
          </a>
        </div>
      </div>
    </>
  );
}
