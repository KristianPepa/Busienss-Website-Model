import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({bgColor,topMargin,padding}) => {
    return (
        <div className={`bg-${bgColor} w-full  text-white mt-${topMargin}`}>
            <div className={`flex justify-around flex-row text-white p-${padding}`}>
                <div className="basis-2/4 ml-16">
                    <Link to="/Home"><p className="text-4xl">Logo<span className="text-blue-500 text-6xl ">.</span></p></Link>
                    <p className="text-xs">Business Type</p>
                </div>
                <div className="flex basis-3/4 flex-col  mr-24 text-base">
                    <div className="flex justify-end">
                        <button className="mr-10">Log In</button>
                        <Link to="/Learning"><button type="button" className="w-40 h-11 bg-violet-500 hover:bg-transparent transition delay-0 duration-300 ease-out hover:border-2">Enroll Now</button></Link>
                    </div>
                    <div className="flex justify-between mt-5 ">
                        <Link to="/AboutUs"><p className="hover:text-violet-400">Who We Are</p></Link>
                        <Link to="/Learning"><p className="hover:text-violet-400">Learning Modules</p></Link>
                        <Link to="/Resources"><p className="hover:text-violet-400">Resources</p></Link>
                        <Link to="/OurTeam"><p className="hover:text-violet-400">Our Team</p></Link>
                        <Link to="/ContactUs"><p className="hover:text-violet-400">Contact</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar