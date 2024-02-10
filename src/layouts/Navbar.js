import React, {useEffect, useState} from 'react';
import {HiMenuAlt3, HiOutlineMoon, HiOutlineX} from 'react-icons/hi'
import Button from "../components/Button";
import ConfirmationModal from "../components/ConfirmationModal";
import DSC_MITAOE_Logo from "../assets/img/DSC_MITAOE_Logo.png"

const Navbar = () => {
    let Links =[
        {name:"About Us"},
        {name:"Technologies"},
        {name:"Workshops"},
        {name:"Team"},
        {name:"Community"},
    ];
    let [open, setOpen] =useState(false);

    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

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

    useEffect(() => {
        // Select the navigation bar
        const navbar = document.getElementById('navbar');

        // Get the initial offset of the navigation bar

        // Function to update the navigation bar's position
        function updateNavbarPosition() {
            if (window.scrollY >= 10) {
                navbar.style.position = 'fixed';
                navbar.style.top = '0';
                navbar.style.left = '0';
                navbar.style.width = '100%';
                navbar.style.background = 'rgba(255,255,255,0.2)'; // Adjust the alpha (0.2) for the desired level of frosted glass effect
                navbar.style.backdropFilter = 'blur(30px)';
            } else {
                navbar.style.position = 'relative';
                navbar.style.background = 'transparent'; // Change to your initial background color
            }
        }


        // Listen for scroll events and update the navigation bar position
        window.addEventListener('scroll', updateNavbarPosition);

        // Call the function initially in case the page loads already scrolled
        updateNavbarPosition();
    }, []);

    return (
        <div>
            <nav id="navbar" className='w-full fixed top-0 left-0 z-50' aria-label="Global">
                <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                    <div className='cursor-pointer flex items-center gap-1'>
                        <img src={DSC_MITAOE_Logo} alt="DSC-MITAOE logo" className={"w-[300px]"}/>
                    </div>
                    <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                        {
                            open ? <HiOutlineX/> : <HiMenuAlt3 />
                        }
                    </div>
                    <br/>
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                        {
                            Links.map((link) => (
                                <li className='md:ml-8 md:my-0 my-7 font-semibold cursor-pointer'>
                                    <a href={link.link} className='text-gray-500 hover:text-gray-800 duration-100'>{link.name}</a>
                                </li>))
                        }
                        <Button text="Become Member" bgColor="bg-gdsc_blue" borderRadius="rounded-full md:ml-8 md:my-0 my-7" onButtonClick={handleExternalLinkClick} />
                        {/*<HiOutlineMoon  />*/}
                    </ul>
                </div>
            </nav>
            <div>
                <ConfirmationModal
                    isOpen={isConfirmationModalOpen}
                    onCancel={handleCancelRedirect}
                    onConfirm={handleConfirmRedirect}
                />
            </div>
        </div>
    );
};

export default Navbar;