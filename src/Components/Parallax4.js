import { Parallax } from 'react-parallax';
import parallax_image from '../Images/image7.jpg';

const Parallax_4 = () => (
    <Parallax   bgImage={parallax_image}  strength={-100}  className="relative" style={{height: "738px"}}>
        <div className="text-white text-center text-7xl flex flex-col justify-center" style={{height: "738px",backgroundColor: "rgba(0,0,0,0.7)"}}>
            <p>"Success is not final, failure</p>
            <p>is not fatal: it is the courage</p>
            <p className="mb-24">to continue that counts"</p>
            <p className="text-2xl">Winston Churchill</p>
            <p className="text-xl">▪</p>
        </div>
    </Parallax>
)

export default Parallax_4;