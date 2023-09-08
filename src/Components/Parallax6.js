import { Parallax } from 'react-parallax';
import parallax_image from '../Images/image19.jpg';

const Parallax6 = () => (
    <Parallax  bgImage={parallax_image}  strength={300}  className="relative" style={{height: "720px"}}>
        <div className="absolute" style={{width: "640px",backgroundColor: "rgba(0,0,0,0.9)"}}>
            <div className="pl-24 text-white p-16">
                <p className="text-6xl">Logo</p>
                <p className="text-6xl">Business Type</p>
                <div className="border-b mr-72 mt-16 mb-10 border-gray-500"></div>
                <div>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s</p>
                    <p>easy. Just click “Edit Text” or double click me to add your own</p>
                    <p>content and make changes to the font. Feel free to drag and</p>
                    <p>drop me anywhere you like on your page. I’m a great place for</p>
                    <p>you to tell a story and let your users know a little more about you.</p>
                    <p className="pt-5">This is a great space to write a long text about your company and</p>
                    <p>your services. You can use this space to go into a little more</p>
                    <p>detail about your company. Talk about your team and what</p>
                    <p>services you provide. Tell your visitors the story of how you came</p>
                    <p>up with the idea for your business and what makes you different</p>
                    <p>from your competitors. Make your company stand out and show</p>
                    <p>your visitors who you are.</p>
                </div>
            </div>
        </div>
    </Parallax>
)

export default Parallax6;