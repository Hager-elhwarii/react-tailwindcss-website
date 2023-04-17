import RightArrow from "./RightArrow";

export default function WhatWeCharge() {
  return (
    <>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 my-24 md:-translate-x-32 gap-5 xl:gap-0">
        <div className="md:text-right mt-12 md:mt-16 ml-40 xl:ml-[428px] ">
          <h3 className="font-thin text-3xl">What we charge</h3>
          <p className="md:text-3xl xl:text-6xl text-white ">
            You get all our knowledge for one simple price
          </p>
        </div>
        <div className="md:w-[490px] xl:w-[630px] mx-auto bg-zinc-900 rounded-3xl text-center py-12 px-[45px]">
          <h2 className="text-2xl text-white md:pb-14">
            $
            <span className="text-6xl font-bold underline underline-offset-8">
              499
            </span>
            /day
          </h2>
          <p className="text-3xl font-thin leading-10 mb-6 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="bg-white px-4 md:px-[60px] md:py-4 text-sm md:text-xl rounded-full text-gray-800 ">
            <div className="flex items-center">
              <div>Sign up</div>
              <div>
                {" "}
                <RightArrow />
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
