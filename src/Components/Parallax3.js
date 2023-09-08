import { Parallax } from 'react-parallax';
import parallax_image from '../Images/image3.jpg';
import { Link } from 'react-router-dom';

const Parallax_3 = () => (
    <div>
        <Parallax  bgImage={parallax_image}  strength={-200}  className="relative">
            <div style={{height: "800px",backgroundColor: "rgba(0,0,0,0.9)"}}>
                <div className="grid grid-rows-2 text-white justify-center">
                    <div className="text-center mt-28" >
                        <p className="text-6xl mb-10">Our Academics</p>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s</p>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s</p>
                        <p>content and make changes to the font.</p>
                    </div>
                    <div className=" grid grid-cols-3 mt-10 text-center">
                        <div className="mx-20 mb-20">
                            <p className="text-2xl">Business Consulting - The</p>
                            <p className="text-2xl">Full Course</p>
                            <Link to="/Learning"><button className="mt-8 bg-violet-500 text-md hover:border-2 hover:border-white w-32 h-10 hover:bg-transparent transition delay-50 duration-300 ease-in-out">Join</button></Link>
                        </div>
                        <div>
                            <p className="text-2xl">Business Consulting for</p>
                            <p className="text-2xl">Professionals</p>
                            <Link to="/Learning"><button className="mt-8 bg-violet-500 text-md hover:border-2 hover:border-white w-32 h-10 hover:bg-transparent transition delay-50 duration-300 ease-in-out">Join</button></Link>
                        </div>
                        <div>
                            <p className="text-2xl">Business Strategy and</p>
                            <p className="text-2xl">Consulting</p>
                            <Link to="/Learning"><button className="mt-8 bg-violet-500 text-md hover:border-2 hover:border-white w-32 h-10 hover:bg-transparent transition delay-50 duration-300 ease-in-out">Join</button></Link>
                        </div>
                        <div>
                            <p className="text-2xl">Business Analysis</p>
                            <Link to="/Learning"><button className="mt-8 bg-violet-500 text-md hover:border-2 hover:border-white w-32 h-10 hover:bg-transparent transition delay-50 duration-300 ease-in-out">Join</button></Link>
                        </div>
                        <div>
                            <p className="text-2xl">Principles of Finance</p>
                            <Link to="/Learning"><button className="mt-8 bg-violet-500 text-md hover:border-2 hover:border-white w-32 h-10 hover:bg-transparent transition delay-50 duration-300 ease-in-out">Join</button></Link>
                        </div>
                        <div>    
                            <p className="text-2xl">Consulting Methods</p>
                            <Link to="/Learning"><button className="mt-8 bg-violet-500 text-md hover:border-2 hover:border-white w-32 h-10 hover:bg-transparent transition delay-50 duration-300 ease-in-out">Join</button></Link>
                          </div>
                    </div>
                </div>
            </div>
        </Parallax>
    </div>
);

export default Parallax_3;