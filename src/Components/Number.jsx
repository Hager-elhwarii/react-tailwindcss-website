export default function Number() {
    return (
      <>
       <div 
        className="hero h-[950px] relative xl:w-[1390px] mx-auto rounded-3xl  "
        style={{
          backgroundImage: `url("https://10wallpaper.com/wallpaper/2560x1600/1610/Ocean_underwater_blu_rays-HD_Retina_Wallpaper_2560x1600.jpg")`,
        }}>
       <div
       className="absolute bg-black  rounded-3xl  px-24   " 
       >
         <section className=" lg:mt-0 px-8 md:px-0 pt-12 rounded-3xl">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 xl:py-5 ">
        <div>
        <div className="card card-compact w-full lg:w-[470px] bg-zinc-900 shadow-xl rounded-3xl mb-16 2xl:-translate-x-10">
              <figure>
                <img
                className="w-full  scale-100 hover:scale-110 cursor-pointer transition ease-in-out duration-700"
                  src="https://i.imgur.com/eYAKRCB.jpeg"
                  alt="Shoes"
                />
              </figure>
              <div className="px-10  mx-auto h-80 2xl-h-full">
                <p className="text-xl py-5 leading-9 px-0 2xl-px-16 text-center  ">
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                </p>
                <div className="card-actions justify-start">
                 
                </div>
              </div>
            </div>
        </div>
        <div>
            <h2>The numbers</h2>
            
        </div>
        </div>
      </section>
       </div>
       </div>
      </>
    );
  }