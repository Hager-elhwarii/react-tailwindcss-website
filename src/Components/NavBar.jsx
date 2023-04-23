import { useState, useEffect } from "react";

export default function NavBar() {
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
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 -mb-1 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>

          <a
            className={` font-bold transtion duration-200 ${
              scrolled ? "text-2xl" : "text-3xl"
            }`}
          >
            Klar
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-10 px-1 text-xl">
            <li>
              <a className=" hover:border-b ease-in-out transition-duration-700">
                Home
              </a>
            </li>
            <li>
              <a className="hover:border-b border-gray-300">Content</a>
            </li>
            <li>
              <a className="hover:border-b border-gray-300">System</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end md:mr-32">
          <a className="border border-outline py-2 px-4 rounded-full">
            Download Template
          </a>
        </div>
      </div>
    </>
  );
}
