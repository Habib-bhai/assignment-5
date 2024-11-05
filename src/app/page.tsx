import Image from "next/image";


export default function Home() {
  return (
    <div className="w-screen pt-20 relative ">

      <div className="w-full flex flex-col md:flex-row justify-center md:justify-evenly items-center ">
        {/* hero section */}
        <div className="flex flex-col gap-10 justify-center items-center md:items-start">
          <h1 className="font-libre font-bold text-[37px] md:w-[472px]">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="font-libre font-medium  text-3xl text-[#787054] md:w-[798.9px]">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
          <button className="w-[247.67px] h-[49.2px] bg-[#787054] text-white font-libre text-2xl rounded-lg">EXPLORE NOW</button>
        </div>

        <div className="image relative mt-16 md:mt-0 ">
          <Image src={"/images/hero-section.png"} alt="hero-sec-image" height={573} width={421} />
          <div className="absolute top-10 right-6 border-[1px] border-white  rounded-tl-[100px] rounded-br-[100px] h-[525px] w-[380px]">
          </div>
        </div>
      </div>


    </div>
  );
}
