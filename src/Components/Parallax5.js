import { Parallax } from 'react-parallax';
import parallax_image from '../Images/image8.jpg';

const Parallax5 = () => (
    <Parallax  bgImage={parallax_image}  strength={-200}  className="relative" style={{height: "1147px"}}>
        <div className="absolute" style={{width: "640px"}}>
            <div className="pl-24 bg-gray-950 text-white p-20">
                <p className="text-6xl">Contact us</p>
                <div className="border-b mr-72 mt-16 mb-10 border-gray-500"></div>
                <p className="text-2xl">We are here for questions or</p>
                <p className="text-2xl">consulting</p>
                <div>
                    <div className="flex flex-row my-5">
                        <div className="flex flex-col">
                            <label className="mb-3">First Name *</label>
                            <input type="text" className="w-60 h-12 py-1 pl-6 pr-1 border bg-transparent"></input>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-3">Last Name *</label>
                            <input type='text' className="w-60 h-12 py-1 pl-6 pr-1 border bg-transparent"/>
                        </div>
                    </div>
                    <div className="flex flex-row mb-5">
                        <div className="flex flex-col">
                            <label className="mb-3">Email *</label>
                            <input type="email" className="w-60 h-12 py-1 pl-6 pr-1 border bg-transparent"></input>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-3">Phone *</label>
                            <input type='tel' className="w-60 h-12 py-1 pl-6 pr-1 border bg-transparent"/>
                        </div>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label className="mb-3">Leave us a message...</label>
                        <textarea  rows={4} className=" py-5 pl-6 pr-6 border bg-transparent"/>
                    </div>
                    <button type="button" className="w-40 h-11 bg-violet-500 hover:bg-transparent transition delay-0 duration-300 ease-out hover:border-2">Enroll Now</button>
                </div>
            </div>
            <div className="bg-black text-white p-16 pl-24" style={{width: "640px"}}>
                <p className="text-2xl mb-5">Chat with our support team</p>
                <p>Im a paragraph. Click here to add your</p>
                <p>own text and edit me</p>
                <button type="button" className="mt-5 w-44 h-12 bg-white text-gray-500 hover:bg-transparent hover:text-white transition delay-0 duration-300 ease-out hover:border-2">Submit</button>
            </div>
        </div>
    </Parallax>
)

export default Parallax5;