import React from 'react';
import { Navbar, Footer } from '../Components';
import { Img9 } from '../Images';


const TeamMembers = () => {
  return (
    <div>
        <Navbar bgColor={"black"} padding={5}/>
        <div className="h-72 bg-gray-950 text-center flex justify-center flex-col text-white">
            <p className="text-6xl">Meet The Team</p>
            <p className="mt-5 text-2xl">The business leaders of today</p>
        </div>
        <div className="grid grid-cols-3 mb-10">
            <div className="border ml-10  mt-20 mb-5" style={{ width: "400px" }}>
                <img src={Img9} alt="img-1" style={{ height: "250px", width: "600px" }} />
                <p className="text-2xl my-5 ml-7">First Name - Last Name</p>
                <p className="ml-7 text-xl">Person Role in Company</p>
                <p className="ml-7 my-3">Describe your image here.</p>
                <button className="ml-7 mb-5 w-40 h-12 bg-violet-500 text-white hover:bg-violet-400 transition delay-0 duration-300 ease-out ">Read More</button>
            </div>
            <div className="border ml-10  mt-20 mb-5" style={{ width: "400px" }}>
                <img src={Img9} alt="img-1" style={{ height: "250px", width: "600px" }} />
                <p className="text-2xl my-5 ml-7">First Name - Last Name</p>
                <p className="ml-7 text-xl">Person Role in Company</p>
                <p className="ml-7 my-3">Describe your image here.</p>
                <button className="ml-7 mb-5 w-40 h-12 bg-violet-500 text-white hover:bg-violet-400 transition delay-0 duration-300 ease-out ">Read More</button>
            </div>
            <div className="border ml-10  mt-20 mb-5" style={{ width: "400px" }}>
                <img src={Img9} alt="img-1" style={{ height: "250px", width: "600px" }} />
                <p className="text-2xl my-5 ml-7">First Name - Last Name</p>
                <p className="ml-7 text-xl">Person Role in Company</p>
                <p className="ml-7 my-3">Describe your image here.</p>
                <button className="ml-7 mb-5 w-40 h-12 bg-violet-500 text-white hover:bg-violet-400 transition delay-0 duration-300 ease-out ">Read More</button>
            </div>
            <div className="border ml-10   mb-5" style={{ width: "400px" }}>
                <img src={Img9} alt="img-1" style={{ height: "250px", width: "600px" }} />
                <p className="text-2xl my-5 ml-7">First Name - Last Name</p>
                <p className="ml-7 text-xl">Person Role in Company</p>
                <p className="ml-7 my-3">Describe your image here.</p>
                <button className="ml-7 mb-5 w-40 h-12 bg-violet-500 text-white hover:bg-violet-400 transition delay-0 duration-300 ease-out ">Read More</button>
            </div>
            <div className="border ml-10   mb-5" style={{ width: "400px" }}>
                <img src={Img9} alt="img-1" style={{ height: "250px", width: "600px" }} />
                <p className="text-2xl my-5 ml-7">First Name - Last Name</p>
                <p className="ml-7 text-xl">Person Role in Company</p>
                <p className="ml-7 my-3">Describe your image here.</p>
                <button className="ml-7 mb-5 w-40 h-12 bg-violet-500 text-white hover:bg-violet-400 transition delay-0 duration-300 ease-out ">Read More</button>
            </div>
            <div className="border ml-10   mb-5" style={{ width: "400px" }}>
                <img src={Img9} alt="img-1" style={{ height: "250px", width: "600px" }} />
                <p className="text-2xl my-5 ml-7">First Name - Last Name</p>
                <p className="ml-7 text-xl">Person Role in Company</p>
                <p className="ml-7 my-3">Describe your image here.</p>
                <button className="ml-7 mb-5 w-40 h-12 bg-violet-500 text-white hover:bg-violet-400 transition delay-0 duration-300 ease-out ">Read More</button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default TeamMembers