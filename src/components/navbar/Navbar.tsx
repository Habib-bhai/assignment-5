import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-screen h-20 bg-[#A29875] flex justify-evenly items-center">
        <Image src={"/images/logo.png"} alt="logo" width={150} height={150}/>   

        <div className="h-10 w-[700px] bg-[#F8F8F8] flex justify-center items-center rounded-xl ">
            <input type="text" className="h-full w-[90%] bg-[#f8f8f8] focus:outline-none pl-4" placeholder="Search for Gold Jewellery, Diamond Jewellery and more…"/>

            <div className="h-full w-8 ml-5 flex justify-end items-center bg-[#f8f8f8] ">
            <svg  xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
            </div>
        </div>
        <div className="flex gap-9 justify-center items-center ">
            <Image src={"/images/favorite.svg"} alt="favortite" width={30} height={30}/>
            <Image src={"/images/person.svg"} alt="person" width={30} height={30}/>
            <Image src={"/images/shopping_cart.svg"} alt="cart" width={30} height={30}/>
        </div>
    </div>
  )
}
