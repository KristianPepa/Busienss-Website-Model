import { Parallax } from 'react-parallax';
import parallax_image from '../Images/image1.jpg';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

const Parallax_1 = () => (
    <Parallax blur={{min: -5, max: 5}}  bgImage={parallax_image}  strength={100}  className="relative" style={{height: "1080px"}}>
        <div>
            <NavBar bgColor={"transparent"} topMargin={"8"}/>
            <div className="flex flex-col text-white w-screen justify-center" >
                <div className="flex flex-col  relative left-28 top-40 h-fit" >
                    <p className="text-7xl font-medium ">Company Name  </p>
                    <p className="text-7xl font-medium mt-4 mb-4">Business Type</p>
                    <p className="text-xl font-medium mb-10">Company Moto</p>
                    <Link to="/Learning"><button type="button" className="text-md border-2 border-white w-44 h-14 hover:bg-violet-500 hover:border-0 transition delay-50 duration-300 ease-in-out">Enroll Now</button></Link>
                </div>
                <div className="flex justify-between mt-96 relative pl-20" style={{backgroundColor: "rgba(0,0,0,0.5)"}} >
                    <div className="mt-16  w-1/3">
                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="46.141 20.63 107.717 158.741" viewBox="46.141 20.63 107.717 158.741" height="100" width="100" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true" fill='white'  aria-labelledby="svgcid-k5auehvy65le"><title  id="svgcid-k5auehvy65le"></title>
                            <g>
                                <path d="m153.858 130.731-53.857 48.64-53.86-48.64 1.804-1.944 50.722 45.809V20.63h2.669v153.965l50.719-45.809 1.803 1.945z"></path>
                            </g>
                        </svg>
                    </div>
                    <div className='border-l pl-20 pt-10 h-60' style={{marginRight: "128px"}}>
                        <h1 className="text-2xl">Subscribe to our Mailing List</h1   >
                        <p className="mt-4 text-sm">Enter your email here *</p>
                        <input type="email "  placeholder='Email Address' className="bg-transparent border text-white border-violet-500 p-1 pl-6 w-60 h-14 text-lg hover:border-4 mt-4 placeholder:text-white"/>
                        <button type="button" className='w-60 h-14 bg-violet-500 hover:bg-white hover:text-gray-400 transition delay-0 duration-300 ease-out hover:border-2'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </Parallax>
);

export default Parallax_1;