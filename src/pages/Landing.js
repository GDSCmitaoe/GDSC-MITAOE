import React, {useEffect, useLayoutEffect} from 'react';
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useAnimation} from 'framer-motion';
import Events from "../components/Landing/Events";
gsap.registerPlugin(ScrollTrigger);

const Landing = () => {

    // function imageIntersectionObserverCallback(imageEntries, observer) {
    //     imageEntries.forEach(imgEntry => {
    //         if (imgEntry.isIntersecting) {
    //             imgEntry.target.setAttribute('src', imgEntry.target.dataset.src);
    //             observer.unobserve(imgEntry.target);
    //         }
    //     })
    // }
    // const imageObserver = new IntersectionObserver(imageIntersectionObserverCallback, { rootMargin: '30px 0px' });
    // imageObserver.POLL_INTERVAL = 200;
    // imageObserver.USE_MUTATION_OBSERVER = false;
    // document.querySelectorAll('img[data-src]').forEach(img => {
    //     imageObserver.observe(img);
    // })
    //
    // function iframeObserverCallback(iframeEntries, observer) {
    //     iframeEntries.forEach(iframe => {
    //         if (iframe.isIntersecting && window.matchMedia('(min-width: 450px)').matches) {
    //             iframe.target.setAttribute('src', iframe.target.dataset.urllink);
    //             observer.unobserve(iframe.target);
    //         }
    //     })
    // }
    //
    // const iframeObserver = new IntersectionObserver(iframeObserverCallback, { rootMargin: '30px 0px' });
    // iframeObserver.POLL_INTERVAL = 200;
    // iframeObserver.USE_MUTATION_OBSERVER = false;
    // document.querySelectorAll('iframe[data-urllink]').forEach(img => {
    //     iframeObserver.observe(img);
    // });
    //
    // if ('serviceWorker' in navigator) {
    //     window.addEventListener('load', function () {
    //             navigator.serviceWorker.register('./service-worker.js')
    //                 .then(function () {
    //                     console.log("Service Worker Registered,");
    //                 });
    //         }
    //     );
    // }

    const controls = useAnimation();

    useEffect(() => {

    }, [controls]);

    useEffect(() => {
        controls.start({
            opacity: 1,
            transition: { duration: 2.5 },
        });

        // Add event listener to track mouse movements and update blurred circle position
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            // Remove event listener when component unmounts to avoid memory leaks
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [controls]);

    const handleMouseMove = (event) => {
        const blurredCircle = document.getElementById('blurredCircle');
        const mouseX = event.clientX - 100;
        const mouseY = event.clientY - 100;

        blurredCircle.style.left = mouseX + 'px';
        blurredCircle.style.top = mouseY + 'px';
    };

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

        });

        return () => ctx.revert();
    }, []);

    return (
        <div>
            <div className={"w-screen min-h-screen bg-[#0f0f0f] flex flex-col"}>
                <Navbar/>
                <div className={"w-full h-full flex-grow flex justify-center items-center text-center"}>
                    {/*<div className="absolute z-0">*/}
                    {/*    <div className="w-80 h-80 rounded-full bg-gray-300 opacity-50"*/}
                    {/*         style={{left: '10%', top: '40%'}}></div>*/}
                    {/*    <div className="w-96 h-96 rounded-full bg-gray-300 opacity-50"*/}
                    {/*         style={{left: '20%', top: '20%'}}></div>*/}
                    {/*</div>*/}
                    <div
                        id="connect"
                        className="bg-gradient-to-b from-white to-gray-600 inline-block text-transparent bg-clip-text text-9xl"
                    >
                        Connect
                    </div>
                    {/*<div id="learn"*/}
                    {/*     className="bg-gradient-to-b from-white to-gray-600 inline-block text-transparent bg-clip-text text-9xl">Learn*/}
                    {/*</div>*/}
                    {/*<div id="grow"*/}
                    {/*     className="bg-gradient-to-b from-white to-gray-600 inline-block text-transparent bg-clip-text text-9xl">Grow*/}
                    {/*</div>*/}
                </div>
            </div>
            <div className={"w-screen min-h-screen bg-[#0f0f0f] flex flex-col items-center justify-center"}>
                <div
                    id="connect"
                    className="bg-gradient-to-b from-white to-gray-600 inline-block text-transparent bg-clip-text text-7xl text-center mb-5"
                >
                    Events
                </div>
                <label className="input input-bordered flex items-center gap-2 bg-[#1e1e1e] w-1/2 mb-10">
                    <input type="text" className="grow" placeholder="Search"/>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor" className={"opacity-70"}>
                        <path fillRule="evenodd" d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z" clipRule="evenodd"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                         className="w-4 h-4 opacity-70">
                        <path fillRule="evenodd"
                              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                              clipRule="evenodd"/>
                    </svg>
                </label>
                <Events/>
            </div>
            <div id="blurredCircle"
                 className="w-[200px] h-[200px] bg-[rgba(255,_255,_255,_0.07)] rounded-full fixed pointer-events-none filter blur-2xl">

            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Landing;