import React, { useRef } from 'react';
import '../assets/css/navbar.css';
import { gsap } from 'gsap';
import DSC_MITAOE_Logo from "../assets/img/DSC_MITAOE_Logo.png";

const Navbar = () => {
    let Links = [
        { name: "About Us", url: "/" },
        { name: "Technologies", url: "/" },
        { name: "Workshops", url: "/" },
        { name: "Team", url: "/" },
        { name: "Community", url: "/" },
        { name: "GCSJ Leaderboard", url: "/leaderboard" }
    ];

    const navRef = useRef(null);
    const tl = useRef(gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } }));

    const handleOpen = () => {
        if (tl.current.reversed()) {
            tl.current.play();
        } else {
            tl.current
                .to(navRef.current, { right: 0 })
                .to(navRef.current, { height: '100vh' }, '-=.1')
                .to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: 0.2 }, '-=.8')
                .to('.close', { opacity: 1, pointerEvents: 'all' }, '-=.8')
                .to('nav h2', { opacity: 1 }, '-=1');
        }
    };

    const handleClose = () => {
        tl.current.reverse();
    };

    return (
        <div>
            <div className="container" onClick={handleOpen}>
                <div className="bars"></div>
            </div>
            <nav ref={navRef}
                 className={"absolute w-full h-[30px] bg-[#0f0f0f] flex justify-center items-center -right-[200vw]"}>
                <div className="close" onClick={handleClose}>
                    <div></div>
                </div>
                <ul className={"list-none"}>
                    {Links.map((link, index) => (
                        <li key={index} className={"mx-0 my-[50px]"}><a href={link.url}>{link.name}</a></li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;