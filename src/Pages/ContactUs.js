import { useState } from 'react';
import { Navbar, Footer, P5 } from '../Components';
import 'boxicons';

const ContactUs = () => {
    const [changeBtn1,setChangeBtn1] = useState(false)
    const [changeBtn2,setChangeBtn2] = useState(false)
    const [changeBtn3,setChangeBtn3] = useState(false)

    const changeButtonStatus1 = () => {
        setChangeBtn1(!changeBtn1)
    }
    const changeButtonStatus2 = () => {
        setChangeBtn2(!changeBtn2)
    }
    const changeButtonStatus3 = () => {
        setChangeBtn3(!changeBtn3)
    }

    return (
        <div>
            <Navbar bgColor={"black"} padding={5}/>
            <P5 />
            <div className="flex justify-center">
                <div>
                    <p className="text-5xl p-5 mt-20">Frequently Asked Questions</p>
                    <div className="flex flex-row text-sm mb-5 p-3 mt-20">
                        <p className="mr-7 text-blue-950 font-medium">Setting up FAQs</p>
                        <p>General</p>
                    </div>
                    <div className="flex flex-col mb-20">
                        <div className=" flex  flex-col p-3">
                            <div className="flex justify-between">
                                <button type="button" className="mb-5" onClick={changeButtonStatus1}>How do i add a new question & answer?</button>
                                <box-icon name={(!changeBtn1) ? 'chevron-down' : 'chevron-up'}></box-icon>
                            </div>
                            {(changeBtn1)
                                ?   <div className="flex flex-col">
                                        <p className="mb-5">To add a new FAQ follow these steps:</p>
                                        <ol className="flex flex-col">
                                            <li>1. Click “Manage FAQs” button</li>
                                            <li>2. From your site’s dashboard you can add, edit and manage all your questions and answers</li>
                                            <li>3. Each question and answer should be added to a category</li>
                                            <li>4. Save and publish.</li>
                                        </ol>
                                        <div className="flex flex-row mt-3">
                                            <box-icon type='logo' name='facebook-circle' style={{width: "20px"}}/>
                                            <box-icon name='twitter' type='logo'  style={{width: "20px",marginLeft: "9px"}}/>
                                            <box-icon name='linkedin-square' type='logo' style={{width: "20px",marginLeft: "9px"}}/>
                                            <box-icon name='link' style={{width: "20px",marginLeft: "9px"}}/>
                                        </div>    
                                    </div>
                                : ""
                            }
                        </div>
                        <div className=" flex  flex-col p-3 border-b border-t">
                            <div className="flex justify-between mt-5">
                                <button type="button" className="mb-5" onClick={changeButtonStatus2}>Can i insert an image,video, or gif in my FAQ?</button>
                                <box-icon name={(!changeBtn2) ? 'chevron-down' : 'chevron-up'}></box-icon>
                            </div>
                            {(changeBtn2)
                                ?   <div className="flex flex-col">
                                        <p className="mb-5">Yes. To add media follow these steps:</p>
                                        <ol className="flex flex-col">
                                            <li>1. Enter the app’s Settings</li>
                                            <li>2. Click on the “Manage FAQs” button</li>
                                            <li>3. Select the question you would like to add media to</li>
                                            <li>4. When editing your answer click on the camera, video, or GIF icon</li>
                                            <li>5. Add media from your library.</li>
                                        </ol>
                                        <div className="flex flex-row mt-3">
                                            <box-icon type='logo' name='facebook-circle' style={{width: "20px"}}/>
                                            <box-icon name='twitter' type='logo'  style={{width: "20px",marginLeft: "9px"}}/>
                                            <box-icon name='linkedin-square' type='logo' style={{width: "20px",marginLeft: "9px"}}/>
                                            <box-icon name='link' style={{width: "20px",marginLeft: "9px"}}/>
                                        </div>    
                                    </div>
                                : ""
                            }
                        </div>
                        <div className=" flex  flex-col p-3 border-b">
                            <div className="flex justify-between mt-5">
                                <button type="button" className="mb-5" onClick={changeButtonStatus3}>How do I edit or remove the “FAQ” title?</button>
                                <box-icon name={(!changeBtn3) ? 'chevron-down' : 'chevron-up'}></box-icon>
                            </div>
                            {(changeBtn3)
                                ?   <div className="flex flex-col">
                                        <p className="mb-5">Yes. To add media follow these steps:</p>
                                        <ol className="flex flex-col">
                                            <li>You can edit the title from the Settings tab in the app. </li>
                                            <li>If you don’t want to display the title, simply disable the Title under “Info to Display”.</li>
                                        </ol>
                                        <div className="flex flex-row mt-3">
                                            <box-icon type='logo' name='facebook-circle' style={{width: "20px"}}/>
                                            <box-icon name='twitter' type='logo'  style={{width: "20px",marginLeft: "9px"}}/>
                                            <box-icon name='linkedin-square' type='logo' style={{width: "20px",marginLeft: "9px"}}/>
                                            <box-icon name='link' style={{width: "20px",marginLeft: "9px"}}/>
                                        </div>    
                                    </div>
                                : ""
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactUs