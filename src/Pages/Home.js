import React from 'react'
import { P1, P2, P3, P4, Footer } from '../Components';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="App">
            {/* Part 1 */}
            <P1 />
            {/* Part 2 */}
            <div className="grid grid-cols-2 ">
                <div>
                    <div className="h-96 p-20 border-r border-b">
                        <p className="text-4xl font-medium ">Why Enroll in Our Programs</p>
                        <p className="text-4xl font-medium">Programs?</p>
                    </div>
                    <div className="h-96 p-20 border-r">
                        <svg className="mb-5" preserveAspectRatio="xMidYMid meet" data-bbox="20.63 20.63 158.74 158.74" viewBox="20.63 20.63 158.74 158.74" height="60" width="60" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid--bcg4l4-uydrsp"><title id="svgcid--bcg4l4-uydrsp"></title>
                            <g>
                                <path fill="#7E55F6" d="M178.233 101v77h-77v-77h77z" data-color="1"></path>
                                <path d="M20.63 20.63v158.74h158.74V20.63H20.63zm156.26 156.26h-74.41v-74.41h74.409v74.41zM100 100v76.89H23.11V23.11h153.78V100H100z" fill="#1D1D1B" data-color="2"></path>
                            </g>
                        </svg>
                        <p className="text-2xl mb-5">Self - Paced Program</p>
                        <p>I'm a paragraph. Click here to add your own text and</p>
                        <p className="mb-2 mt-2">edit me. I’m a great place for you to tell a story and let</p>
                        <p>your users know a little more about you.</p>
                    </div>
                </div>
                <div>
                    <div className="h-96 p-20  border-b">
                        <svg className="mb-5" preserveAspectRatio="xMidYMid meet" data-bbox="20.63 20.63 158.74 158.74" viewBox="20.63 20.63 158.74 158.74" height="60" width="60" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid-jzm5ag7byoz1"><title id="svgcid-jzm5ag7byoz1"></title>
                            <g>
                                <path fill="#7E55F6" d="M138.872 61v78h-78V61h78z" data-color="1"></path>
                                <path d="M20.63 20.63v158.74h158.74V20.63H20.63zm156.26 156.26H23.11V23.11h153.78v153.78zM139.685 60.315h-79.37v79.37h79.37v-79.37zm-2.48 76.89h-74.41v-74.41h74.409v74.41z" fill="#1D1D1B" data-color="2"></path>
                            </g>
                        </svg>
                        <p className="text-2xl mb-5">Simple Online Enrollment</p>
                        <p>I'm a paragraph. Click here to add your own text and</p>
                        <p className="mb-2 mt-2">edit me. I’m a great place for you to tell a story and let</p>
                        <p>your users know a little more about you.</p>
                    </div>
                    <div className="h-96 p-20">
                        <svg className="mb-5" preserveAspectRatio="xMidYMid meet" data-bbox="20.63 20.63 158.74 158.74" viewBox="20.63 20.63 158.74 158.74" height="60" width="60" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid-mw4yrr-pbjqdb"><title id="svgcid-mw4yrr-pbjqdb"></title>
                            <g>
                                <path fill="#7E55F6" d="M177.659 100v78h-78v-78h78z" data-color="1"></path>
                                <path d="M101.26 98.74V20.63H20.63v80.63h78.11v78.11h80.63V98.74h-78.11zm-78.11 0V23.15h75.59v75.59H23.15zm153.7 78.11h-75.59v-75.59h75.591v75.59z" fill="#1D1D1B" data-color="2"></path>
                            </g>
                        </svg>
                        <p className="text-2xl mb-5">Professional Mentors</p>
                        <p>I'm a paragraph. Click here to add your own text and</p>
                        <p className="mb-2 mt-2">edit me. I’m a great place for you to tell a story and let</p>
                        <p>your users know a little more about you.</p>
                    </div>
                </div>
            </div>
            {/* Part 3 */}
            <P2 />
            {/* Part 4 */}
            <P3 />
            {/* Part 5 */}
            <div className="flex flex-col">
                <div className="flex flex-row justify-between mt-28 ml-16">
                    <div>
                        <p className="text-5xl mb-5">Resources</p>
                        <p className="text-2xl">Expand your knnowledge toolkit by</p>
                        <p className="text-2xl">reading from the most prominent experts</p>
                    </div>
                    <Link to="/Resources"><button type="button" className="mr-20 mt-20 text-md border border-black w-44 h-14 hover:bg-violet-500 hover:border-0 hover:text-white transition delay-50 duration-300 ease-in-out">View More</button></Link>
                </div>
                {/* Part 6 */}
                <div className="grid grid-cols-2">
                    {/* Post 1 */}
                    <div className="border ml-16  mt-20 mb-5" style={{ width: "600px" }}>
                        <img src={require("../Images/image4.jpg")} alt="img-1" style={{ height: "300px", width: "600px" }} />
                        <p className="text-xs mt-5 ml-5">Jan 12 • 1 min</p>
                        <p className="text-2xl my-5 ml-5">Should you start a podcast?</p>
                        <p className="ml-5">Create a blog post subtitle that summarizes your post in a few short, punchy</p>
                        <p className="ml-5 mb-12"> senteces and entices your audience to continue reading...</p>
                        <div className="border-b mb-3 mx-5">
                        </div>
                        <div className="flex flex-row justify-center mb-3">
                            <div className="flex flex-row" >
                                <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="19" viewBox="0 0 19 19" role="img" aria-label="90 views"><title>Views</title>
                                    <path d="M18.6514224,10.4604595 C17.3924224,11.9688254 13.9774224,15.4790227 9.46342244,15.5 L9.42442244,15.5 C6.26242244,15.5 3.20842244,13.7938483 0.345422443,10.4264963 C-0.115140814,9.88163847 -0.115140814,9.08439833 0.345422443,8.5395405 C1.60442244,7.03117456 5.01942244,3.52097727 9.53342244,3.5 L9.57342244,3.5 C12.7354224,3.5 15.7894224,5.20615167 18.6524224,8.5735037 C19.1122856,9.11875503 19.1118633,9.91569484 18.6514224,10.4604595 Z M17.8674224,9.2228003 C15.2084224,6.09518855 12.4194224,4.50990594 9.57442244,4.50990594 L9.54042244,4.50990594 C5.46142244,4.52888537 2.30642244,7.78335969 1.14042244,9.18084575 C0.991393136,9.3517953 0.988008897,9.60533857 1.13242244,9.78019645 C3.79142244,12.9078082 6.58142244,14.4920919 9.42542244,14.4920919 L9.46042244,14.4920919 C13.5394224,14.4741114 16.6934224,11.2196371 17.8604224,9.822151 C18.0095734,9.6511131 18.0125381,9.39726759 17.8674224,9.2228003 L17.8674224,9.2228003 Z M9.49942244,13.3932823 C7.35251405,13.3646853 5.63255349,11.6080263 5.65157552,9.46333471 C5.67059754,7.31864313 7.42144652,5.59270141 9.56852513,5.6021069 C11.7156037,5.61151239 13.4512316,7.35272696 13.4514224,9.49750271 C13.4349115,11.6625186 11.6668124,13.4054651 9.49942244,13.3932823 L9.49942244,13.3932823 Z M9.49942244,6.61762258 C7.91092198,6.63961751 6.63891624,7.93990193 6.65354481,9.52676854 C6.66817338,11.1136351 7.96393479,12.3902997 9.55257137,12.3830695 C11.1412079,12.3758393 12.4252698,11.0874333 12.4254224,9.50049946 C12.4127657,7.89797688 11.1037033,6.60820738 9.49942244,6.61762258 L9.49942244,6.61762258 Z"></path>
                                </svg>
                                <span className="text-xs">90</span>
                            </div>
                            <div className="flex flex-row ml-5 mr-36">
                                <svg className="" xmlns="http://www.w3.org/2000/svg" width="19" viewBox="0 0 19 19" role="img" aria-label="0 comments" class="blog-post-post-list-description-fill blog-link-hover-fill"><title>Comments</title>
                                    <path d="M9.5,13 L15,13 C15.5522847,13 16,12.5522847 16,12 L16,12 L16,5 C16,4.44771525 15.5522847,4 15,4 L15,4 L4,4 L4,4 C3.44771525,4 3,4.44771525 3,5 L3,12 C3,12.5522847 3.44771525,13 4,13 L7,13 L7,15.5 L9.5,13 Z M15.0081158,13.973325 L10,13.973325 L7.42191625,16.5445317 C6.63661359,17.3277395 6,17.0667904 6,15.9700713 L6,13.973325 L3.99188419,13.973325 C2.89179693,13.973325 2,13.0706688 2,11.979044 L2,4.994281 C2,3.89287002 2.89339733,3 3.99188419,3 L15.0081158,3 C16.1082031,3 17,3.90265618 17,4.994281 L17,11.979044 C17,13.0804549 16.1066027,13.973325 15.0081158,13.973325 Z"></path>
                                </svg>
                                <span className="text-xs">0</span>
                            </div>
                            <div className="flex flex-row">
                                <span className="text-xs ml-72 mr-2">6</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 25 25" fill='red'><title>Likes</title>
                                    <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    {/* Post 2 */}
                    <div className="border ml-5  mt-20 mb-5" style={{ width: "600px" }}>
                        <img src={require("../Images/image5.jpg")} alt="img-1" style={{ height: "300px", width: "600px" }} />
                        <p className="text-xs mt-5 ml-5">Jan 12 • 2 min</p>
                        <p className="text-2xl my-5 ml-5">Branding in the misinformation era</p>
                        <p className="ml-5">Create a blog post subtitle that summarizes your post in a few short, punchy</p>
                        <p className="ml-5 mb-12"> senteces and entices your audience to continue reading...</p>
                        <div className="border-b mb-3 mx-5">
                        </div>
                        <div className="flex flex-row justify-center mb-3">
                            <div className="flex flex-row" >
                                <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="19" viewBox="0 0 19 19" role="img" aria-label="90 views"><title>Views</title>
                                    <path d="M18.6514224,10.4604595 C17.3924224,11.9688254 13.9774224,15.4790227 9.46342244,15.5 L9.42442244,15.5 C6.26242244,15.5 3.20842244,13.7938483 0.345422443,10.4264963 C-0.115140814,9.88163847 -0.115140814,9.08439833 0.345422443,8.5395405 C1.60442244,7.03117456 5.01942244,3.52097727 9.53342244,3.5 L9.57342244,3.5 C12.7354224,3.5 15.7894224,5.20615167 18.6524224,8.5735037 C19.1122856,9.11875503 19.1118633,9.91569484 18.6514224,10.4604595 Z M17.8674224,9.2228003 C15.2084224,6.09518855 12.4194224,4.50990594 9.57442244,4.50990594 L9.54042244,4.50990594 C5.46142244,4.52888537 2.30642244,7.78335969 1.14042244,9.18084575 C0.991393136,9.3517953 0.988008897,9.60533857 1.13242244,9.78019645 C3.79142244,12.9078082 6.58142244,14.4920919 9.42542244,14.4920919 L9.46042244,14.4920919 C13.5394224,14.4741114 16.6934224,11.2196371 17.8604224,9.822151 C18.0095734,9.6511131 18.0125381,9.39726759 17.8674224,9.2228003 L17.8674224,9.2228003 Z M9.49942244,13.3932823 C7.35251405,13.3646853 5.63255349,11.6080263 5.65157552,9.46333471 C5.67059754,7.31864313 7.42144652,5.59270141 9.56852513,5.6021069 C11.7156037,5.61151239 13.4512316,7.35272696 13.4514224,9.49750271 C13.4349115,11.6625186 11.6668124,13.4054651 9.49942244,13.3932823 L9.49942244,13.3932823 Z M9.49942244,6.61762258 C7.91092198,6.63961751 6.63891624,7.93990193 6.65354481,9.52676854 C6.66817338,11.1136351 7.96393479,12.3902997 9.55257137,12.3830695 C11.1412079,12.3758393 12.4252698,11.0874333 12.4254224,9.50049946 C12.4127657,7.89797688 11.1037033,6.60820738 9.49942244,6.61762258 L9.49942244,6.61762258 Z"></path>
                                </svg>
                                <span className="text-xs">54</span>
                            </div>
                            <div className="flex flex-row ml-5 mr-36">
                                <svg className="" xmlns="http://www.w3.org/2000/svg" width="19" viewBox="0 0 19 19" role="img" aria-label="0 comments" class="blog-post-post-list-description-fill blog-link-hover-fill"><title>Comments</title>
                                    <path d="M9.5,13 L15,13 C15.5522847,13 16,12.5522847 16,12 L16,12 L16,5 C16,4.44771525 15.5522847,4 15,4 L15,4 L4,4 L4,4 C3.44771525,4 3,4.44771525 3,5 L3,12 C3,12.5522847 3.44771525,13 4,13 L7,13 L7,15.5 L9.5,13 Z M15.0081158,13.973325 L10,13.973325 L7.42191625,16.5445317 C6.63661359,17.3277395 6,17.0667904 6,15.9700713 L6,13.973325 L3.99188419,13.973325 C2.89179693,13.973325 2,13.0706688 2,11.979044 L2,4.994281 C2,3.89287002 2.89339733,3 3.99188419,3 L15.0081158,3 C16.1082031,3 17,3.90265618 17,4.994281 L17,11.979044 C17,13.0804549 16.1066027,13.973325 15.0081158,13.973325 Z"></path>
                                </svg>
                                <span className="text-xs">0</span>
                            </div>
                            <div className="flex flex-row">
                                <span className="text-xs ml-72 mr-2">6</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 25 25" fill='red'><title>Likes</title>
                                    <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    {/* Post 3 */}
                    <div className="border ml-16  mt-5 mb-5" style={{ width: "600px" }}>
                        <img src={require("../Images/image6.jpg")} alt="img-1" style={{ height: "300px", width: "600px" }} />
                        <p className="text-xs mt-5 ml-5">Jan 12 • 1 min</p>
                        <p className="text-2xl my-5 ml-5">Staying ahead of the industry</p>
                        <p className="ml-5">Create a blog post subtitle that summarizes your post in a few short, punchy</p>
                        <p className="ml-5 mb-12"> senteces and entices your audience to continue reading...</p>
                        <div className="border-b mb-3 mx-5">
                        </div>
                        <div className="flex flex-row justify-center mb-3">
                            <div className="flex flex-row" >
                                <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="19" viewBox="0 0 19 19" role="img" aria-label="90 views"><title>Views</title>
                                    <path d="M18.6514224,10.4604595 C17.3924224,11.9688254 13.9774224,15.4790227 9.46342244,15.5 L9.42442244,15.5 C6.26242244,15.5 3.20842244,13.7938483 0.345422443,10.4264963 C-0.115140814,9.88163847 -0.115140814,9.08439833 0.345422443,8.5395405 C1.60442244,7.03117456 5.01942244,3.52097727 9.53342244,3.5 L9.57342244,3.5 C12.7354224,3.5 15.7894224,5.20615167 18.6524224,8.5735037 C19.1122856,9.11875503 19.1118633,9.91569484 18.6514224,10.4604595 Z M17.8674224,9.2228003 C15.2084224,6.09518855 12.4194224,4.50990594 9.57442244,4.50990594 L9.54042244,4.50990594 C5.46142244,4.52888537 2.30642244,7.78335969 1.14042244,9.18084575 C0.991393136,9.3517953 0.988008897,9.60533857 1.13242244,9.78019645 C3.79142244,12.9078082 6.58142244,14.4920919 9.42542244,14.4920919 L9.46042244,14.4920919 C13.5394224,14.4741114 16.6934224,11.2196371 17.8604224,9.822151 C18.0095734,9.6511131 18.0125381,9.39726759 17.8674224,9.2228003 L17.8674224,9.2228003 Z M9.49942244,13.3932823 C7.35251405,13.3646853 5.63255349,11.6080263 5.65157552,9.46333471 C5.67059754,7.31864313 7.42144652,5.59270141 9.56852513,5.6021069 C11.7156037,5.61151239 13.4512316,7.35272696 13.4514224,9.49750271 C13.4349115,11.6625186 11.6668124,13.4054651 9.49942244,13.3932823 L9.49942244,13.3932823 Z M9.49942244,6.61762258 C7.91092198,6.63961751 6.63891624,7.93990193 6.65354481,9.52676854 C6.66817338,11.1136351 7.96393479,12.3902997 9.55257137,12.3830695 C11.1412079,12.3758393 12.4252698,11.0874333 12.4254224,9.50049946 C12.4127657,7.89797688 11.1037033,6.60820738 9.49942244,6.61762258 L9.49942244,6.61762258 Z"></path>
                                </svg>
                                <span className="text-xs">44</span>
                            </div>
                            <div className="flex flex-row ml-5 mr-36">
                                <svg className="" xmlns="http://www.w3.org/2000/svg" width="19" viewBox="0 0 19 19" role="img" aria-label="0 comments" class="blog-post-post-list-description-fill blog-link-hover-fill"><title>Comments</title>
                                    <path d="M9.5,13 L15,13 C15.5522847,13 16,12.5522847 16,12 L16,12 L16,5 C16,4.44771525 15.5522847,4 15,4 L15,4 L4,4 L4,4 C3.44771525,4 3,4.44771525 3,5 L3,12 C3,12.5522847 3.44771525,13 4,13 L7,13 L7,15.5 L9.5,13 Z M15.0081158,13.973325 L10,13.973325 L7.42191625,16.5445317 C6.63661359,17.3277395 6,17.0667904 6,15.9700713 L6,13.973325 L3.99188419,13.973325 C2.89179693,13.973325 2,13.0706688 2,11.979044 L2,4.994281 C2,3.89287002 2.89339733,3 3.99188419,3 L15.0081158,3 C16.1082031,3 17,3.90265618 17,4.994281 L17,11.979044 C17,13.0804549 16.1066027,13.973325 15.0081158,13.973325 Z"></path>
                                </svg>
                                <span className="text-xs">0</span>
                            </div>
                            <div className="flex flex-row">
                                <span className="text-xs ml-72 mr-2">7</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 25 25" fill='red'><title>Likes</title>
                                    <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <P4 />
                <Footer />
            </div>
        </div>
    )
}

export default Home