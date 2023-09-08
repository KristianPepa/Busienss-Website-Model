import { Parallax } from 'react-parallax';
import parallax_image from '../Images/image2.jpg';
import { Link } from 'react-router-dom';

const Parallax_2 = () => (
    <Parallax bgImage={parallax_image}  strength={-200}  className="relative">
        <div className="grid grid-cols-2 text-white" style={{height: "950px",backgroundColor: "rgba(0,0,0,0.7)"}}>
            <div className="text-5xl ml-28 mt-28">
                <p>About [Company Name]</p>
                <p>Online Business</p>
                <p className="mb-8">[Business Type]</p>
                <p className="text-2xl">We aim to empower students to</p>
                <p className="text-2xl">change the world</p>
            </div>
            <div></div>
            <div></div>
            <div className="text-base ml-28 mt-28">
                <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                <p>It’s easy. Just click “Edit Text” or double click me to add your</p>
                <p>own content and make changes to the font. Feel free to drag</p>
                <p className="mb-8">and drop me anywhere you like on your page.</p>
                <p>This is a great space to write a long text about your company</p>
                <p>and your services. You can use this space to go into a little</p>
                <p>more detail about your company. Talk about your team and</p>
                <p className="mb-8">what services you provide.</p>
                <Link to="/AboutUs"><button type="button" className="text-md border-2 border-white w-44 h-14 hover:bg-violet-500 transition delay-50 duration-300 ease-in-out">Read More</button></Link>
            </div>
        </div>
    </Parallax>
);

export default Parallax_2;