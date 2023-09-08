import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="bg-black text-white flex flex-row justify-between font-questrial" style={{height: "596px"}}>
            <div className="ml-32 mt-32 mr-36">
                <p className="text-4xl">Logo<span className="text-blue-500 text-6xl ">.</span></p>
                <p className="text-xs mb-20">Business Type</p>
                <p className="text-6xl text-center">Join The</p>
                <p className="text-6xl text-center">Success!</p>
                <Link to="/Learning"><button type="button" className="text-md border-2 mt-10 border-white w-44 h-14 hover:bg-violet-500 hover:border-0 transition delay-50 duration-300 ease-in-out">Read More</button></Link>
            </div>
            <div className="border-r mt-24 mb-10"></div>
            <div className="mr-96 mt-32">
                <p className="text-2xl mb-5">Info</p>
                <p>123-456-7890</p>
                <p className="cursor-pointer">info@mysite.com</p>
                <p className="text-2xl mb-5 mt-10">Address</p>
                <p>123 abcd efgi</p>
                <p>San Francisco 12345</p>
                <p className="text-2xl mb-5 mt-10">Follow</p>
                <p className="cursor-pointer underline">Linkedln</p>
                <p className="cursor-pointer underline">Facebook</p>
                <p className="cursor-pointer underline">Instagram</p>
            </div>
        </div>
    )
}

export default Footer