export default function ImagesSection() {
  return (
    <>
  
      <div className="w-full container flex flex-wrap mx-auto gap-5 my-32 min-[1280px]:max-[1535px]:justify-center justify-evenly z-50 relative ">
        <div >
          <img
            className="md:h-[480px] w-full md:w-[700px] rounded-3xl"
            src="https://themewagon.github.io/klar/img/webp/abstract18.webp"
            alt=""
          />
        </div>
        <div >
          <img
            className="md:h-[400px] w-full md:w-[300px] rounded-3xl md:translate-x-1 translate-y-10"
            src="https://themewagon.github.io/klar/img/webp/abstract6.webp"
            alt=""
          />
        </div>
        <div className="flex md:items-center">
          <img
            className="mt-20 md:mt-0 md:h-[200px] w-full md:w-[300px] rounded-3xl  "
            src="https://themewagon.github.io/klar/img/webp/abstract9.webp"
            alt=""
          />
        </div>
      </div>
    
    </>
  );
}
