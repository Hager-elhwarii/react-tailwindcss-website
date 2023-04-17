import DoYouLike from "./DoYouLike";
import ImagesSection from "./ImagesSection";
import RightArrow from "./RightArrow";
import WhatWeCharge from "./WhatWeCharge";
import WhatWeDo from "./WhatWeDo";
import WhatWeDont from "./WhatWeDont";

export default function Home() {
  return (
    <>
      <div className="navbar text-white  py-8 ">
        {/* <div className="navbar text-white b-b-2 border-b-2 border-gray-300 py-8"> */}
        <div className="navbar-start md:ml-32">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 -mb-1 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>

          <a className="text-4xl font-bold ">Klar</a>
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
      <div className="container w-full md:w-[700px] text-center mx-auto flex flex-col translate-y-20 gap-3 mb-60 ">
        <p className="text-xl md:text-3xl text-gray-400 capitalize font-thin">
          our mission
        </p>
        <p className="font-bold text-3xl md:text-6xl text-white">
          We do ordinary stuff for cool people
        </p>
        <p className="  md:text-[32px] text-gray-400 font-thin">
          We are some sort of DAO working with AI, NFT´s, web 4.0 and the so
          called blockchain...in the Metaverse. You don´t understand a word? No
          problem, we neither!
        </p>
        <p>
          <button className="bg-white px-4 md:px-[60px] md:py-4 text-sm md:text-xl rounded-full text-gray-800 ">
            <div className="flex items-center">
              <div>Join us </div>
              <div>
                {" "}
                <RightArrow />
              </div>
            </div>
          </button>
        </p>
      </div>
      <ImagesSection />
      <WhatWeDo />
      <WhatWeDont />
      <DoYouLike />
      <WhatWeCharge />
    </>
  );
}
