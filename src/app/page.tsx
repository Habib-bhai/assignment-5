import Image from "next/image";


export default function Home() {
  return (
    <div className="w-screen pt-20 overflow-x-hidden ">

      <div className="w-full flex justify-evenly items-center ">
        {/* hero section */}
          <div className="flex flex-col gap-10 justify-center items-start">
              <h1 className="font-libre font-bold text-[37px] w-[472px]">
                IMPECCABLE CRAFTSMANSHIP AND FINESSE
              </h1>
              <p className="font-libre font-medium  text-3xl text-[#787054] w-[798px]">
              An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
              </p> 
              <button className="w-60 h-12 bg-[#787054] text-white font-libre text-2xl rounded-lg">EXPLORE NOW</button>
          </div>

          <div className="image relative ">
              <Image src={"/images/hero-section.png"} alt="hero-sec-image" height={450} width={300} />
              <div className="absolute top-10 right-6 border-[1px] border-white  rounded-tl-[50px] rounded-br-[50px] h-[350px] w-[260px]">
              </div>
          </div>
      </div>

      <div className="w-screen text-center ">
    {/* shop by categories */}
    <h1 className="font-rye text-[65px]  ">Shop By Categories</h1>

      </div>

    </div>
  );
}
