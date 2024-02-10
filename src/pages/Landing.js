import React, {Suspense, useEffect, useState} from 'react';
import Button from "../components/Button";
import ConfirmationModal from "../components/ConfirmationModal";
import About_Us from "../components/Landing/About_Us";
import '../assets/css/social_media.css'
import Footer from "../layouts/Footer";
import {Link} from "react-router-dom";

const Landing = () => {
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
    const [isContentVisible, setIsContentVisible] = useState(false);
    const handleExternalLinkClick = () => {
        setIsConfirmationModalOpen(true);
    };

    const handleConfirmRedirect = () => {
        setIsConfirmationModalOpen(false);
        window.open('https://gdsc.community.dev/mit-academy-of-engineering-pune/', '_self');
    };

    const handleCancelRedirect = () => {
        setIsConfirmationModalOpen(false);
    };

    function imageIntersectionObserverCallback(imageEntries, observer) {
        imageEntries.forEach(imgEntry => {
            if (imgEntry.isIntersecting) {
                imgEntry.target.setAttribute('src', imgEntry.target.dataset.src);
                observer.unobserve(imgEntry.target);
            }
        })
    }
    const imageObserver = new IntersectionObserver(imageIntersectionObserverCallback, { rootMargin: '30px 0px' });
    imageObserver.POLL_INTERVAL = 200;
    imageObserver.USE_MUTATION_OBSERVER = false;
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    })

    function iframeObserverCallback(iframeEntries, observer) {
        iframeEntries.forEach(iframe => {
            if (iframe.isIntersecting && window.matchMedia('(min-width: 450px)').matches) {
                iframe.target.setAttribute('src', iframe.target.dataset.urllink);
                observer.unobserve(iframe.target);
            }
        })
    }

    const iframeObserver = new IntersectionObserver(iframeObserverCallback, { rootMargin: '30px 0px' });
    iframeObserver.POLL_INTERVAL = 200;
    iframeObserver.USE_MUTATION_OBSERVER = false;
    document.querySelectorAll('iframe[data-urllink]').forEach(img => {
        iframeObserver.observe(img);
    });

    // if ('serviceWorker' in navigator) {
    //     window.addEventListener('load', function () {
    //             navigator.serviceWorker.register('./service-worker.js')
    //                 .then(function () {
    //                     console.log("Service Worker Registered,");
    //                 });
    //         }
    //     );
    // }

    useEffect(() => {
        // Set a delay before showing the content (for example, 2 seconds)
        const timer = setTimeout(() => {
            setIsContentVisible(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []); // Run the effect only once after the initial render

    return (
        <div className={"overflow-x-hidden"}>
            {/*{isContentVisible &&*/}

            {/*}*/}
            <div className=" align-items-center text-center mb-lg-3">
                <h3 className="hire-title">GCSJ Leaderboard is Live 🟢
                </h3>
                <Link to="/leaderboard" className="hero-button d-inline-block" rel="noopener">&nbsp; Go to Leaderboard</Link>
            </div>
            <div className="min-h-screen flex px-16">
                <div className="relative w-full max-w-lg">
                    <div className="flex justify-center items-center h-screen z-20">
                        <div className="flex flex-col text-left items-start mb-20">
                            <div className="">
                                <h1 className="font-bold text-5xl"><br />Google Developer Student Clubs @ MITAOE<br /></h1>
                            </div>
                            <div className="items-start">
                                <p className="text-gray-600 mt-8">Developer Student Clubs is a <first-letter>G</first-letter><third-letter>o</third-letter><second-letter>o</second-letter><first-letter>g</first-letter><forth-letter>l</forth-letter><third-letter>e</third-letter> Developers program for university students to learn<second-letter> mobile </second-letter> and <first-letter>web development skills</first-letter>, <third-letter>design thinking skills</third-letter> and <forth-letter>leadership skills.</forth-letter>
                                </p><br />
                                <Button text="Become Member" bgColor="bg-gdsc_blue" borderRadius="rounded-full md:my-0 my-7 " onButtonClick={handleExternalLinkClick} />
                            </div>
                        </div>
                        <div>
                            <ConfirmationModal
                                isOpen={isConfirmationModalOpen}
                                onCancel={handleCancelRedirect}
                                onConfirm={handleConfirmRedirect}
                            />
                        </div>
                    </div>
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-gdsc_blue3 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute top-0 -right-4 w-72 h-72 bg-gdsc_yellow3 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gdsc_red3 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                </div>
            </div>
            {/*<div>*/}
            {/*    <h2 className={"font-bold text-2xl"}>About Us</h2>*/}
            {/*    <About_Us />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <h2 className={"font-bold text-2xl"}>What We're Excited About</h2>*/}
            {/*    <p className={"text-gray-600"}>Opportunities to learn & access deep technical content.</p><br /><br />*/}
            {/*</div>*/}
            {/*<br /><br />*/}
            {/*<div>*/}
            {/*    <h2 className={"font-bold text-2xl"}>Events & Workshops</h2>*/}
            {/*    <p className={"text-gray-600"}>Come learn, share and connect with us in person.</p><br /><br />*/}
            {/*</div>*/}
            {/*<br /><br />*/}
            <div>
                <h2 className={"font-bold text-2xl"}>Meet The Team</h2>
                <p className={"text-gray-600"}>Passionate students driving the success of the program.</p><br /><br />
                <section id="team" className="section-spacer team-section bg-very__gray">
                    <div  className="container">
                        <div className="container-fluid">
                            <div className="row" id="current_year_team">

                            </div>
                        </div>
                        <div className="text-center section-header mt-50">
                            <Link to="/pastteam" className="bg-gdsc_blue py-2 px-4 text-white rounded-full" target="_blank" rel="noopener"> &nbsp;View Past Team</Link>
                        </div>
                    </div>
                </section>
            </div>
            <br /><br />
            <h2 className={"font-bold text-2xl"}>Join Your Peers At Community</h2>
            <p className={"text-gray-600"}>Connect with fellow community members by joining us through the links mentiond below.</p><br /><br />
            <div className={"flex justify-center items-center"}>
                <ul className={"social-media flex max-md:flex-col max-md:gap-8"}>
                    <li>
                        <a href="https://www.instagram.com/gdsc.mitaoe/">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="fa fa-instagram"></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://chat.whatsapp.com/Jj0WUWZfWVh8cbKIsQ3FDB">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="fa fa-whatsapp"></span>
                        </a>
                    </li>
                    {/*<li>*/}
                    {/*    <a href="https://discord.gg/B8r92RuDgK">*/}
                    {/*        <span></span>*/}
                    {/*        <span></span>*/}
                    {/*        <span></span>*/}
                    {/*        <span></span>*/}
                    {/*        <span className="fa fa-discord"></span>*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                    <li>
                        <a href="https://www.linkedin.com/company/gdscmitaoe/">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="fa fa-linkedin"></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/DSCmitaoe">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="fa fa-twitter"></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/c/GoogleDeveloperStudentClubMITAOE">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="fa fa-youtube"></span>
                        </a>
                    </li>
                </ul>
            </div>
            <br /><br />
            <Footer />
        </div>

    );
};

export default Landing;