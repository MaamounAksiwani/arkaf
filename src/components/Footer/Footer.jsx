import React, { useState } from 'react';
import Container from '@mui/material/Container';
import emaiIcon from '../../until/svg/Vector.svg'
import logo from '../../until/logo.png'
import facebookIcon from '../../until/svg/Vector (1).svg';
import InstagramIcon from '../../until/svg/Vector (2).svg';
import TwitterIcon from '../../until/svg/Vector (3).svg';
const Footer = () => {
    return (
        // <footer style={{ margin: '0 30px 15px' }}>
        //     <div className='footer-container'>

        //         <Container maxWidth='xl'>
        //             <div className='flex justify-between items-center'>

        //                 <div className='footer-title'>
        //                     <h2>
        //                         Start your journey in real-estate with us
        //                         and join for our newsletter!
        //                     </h2>

        //                 </div>

        //                 <div className='flex contact-us'>
        //                     <div className="flex items-center border border-gray-300 rounded-md p-2 bg-white">
        //                         <img src={emaiIcon} alt='email not found' className='mr-2' />
        //                         <input
        //                             type="email"
        //                             className="flex-1 outline-none"
        //                             placeholder="Enter your email"
        //                         />
        //                     </div>
        //                     <button>Send </button>
        //                 </div>
        //             </div>


        //             <div className='footer-links flex justify-between items-center'>
        //                 <div className='left-side'>
        //                     <img src={logo} alt='logo not found' />

        //                     <p>
        //                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris orci, finibus ac justo ut, mattis malesuada erat.
        //                     </p>
        //                 </div>


        //                 <div className='links flex justify-between'>
        //                     <div>
        //                         <h1>About</h1>
        //                         <ul>
        //                             <li>About us</li>
        //                             <li>How it works</li>
        //                             <li>Terms of Use</li>
        //                             <li>Help</li>
        //                         </ul>
        //                     </div>


        //                     <div>
        //                         <h1>Services</h1>
        //                         <ul>
        //                             <li>Professional Photography</li>
        //                             <li>Virtual Tour</li>
        //                             <li>Property Management</li>

        //                         </ul>
        //                     </div>

        //                     <div>
        //                         <h1>Contact</h1>
        //                         <ul>
        //                             <li>Arkaf Care</li>
        //                             <li>+162291922332</li>
        //                         </ul>
        //                     </div>
        //                 </div>



        //             </div>



        //             <div className='flex justify-between items-center my-4'>

        //                 <div className='copy-aright-text'>
        //                     <span> 2024 Arkaf Real Estate</span>
        //                 </div>

        //                 <div className='flex space-x-5'>

        //                     <img src={facebookIcon} />

        //                     <img src={InstagramIcon} />

        //                     <img src={TwitterIcon} />

        //                 </div>



        //             </div>
        //         </Container>
        //     </div>

        // </footer>
        //         <footer className="mx-8 mb-4">
        //     <div className="footer-container">
        //         <div className="container mx-auto px-4 max-w-screen-xl">
        //             <div className="flex flex-col md:flex-row justify-between items-center">

        //                 <div className="footer-title mb-4 md:mb-0 text-center md:text-left">
        //                     <h2 className="text-xl md:text-2xl lg:text-3xl">
        //                         Start your journey in real-estate with us
        //                         and join our newsletter!
        //                     </h2>
        //                 </div>

        //                 <div className="flex flex-col md:flex-row items-center md:items-start contact-us">
        //                     <div className="flex items-center border border-gray-300 rounded-md p-2 bg-white mb-4 md:mb-0 md:mr-4">
        //                         <img src={emaiIcon} alt="email not found" className="mr-2" />
        //                         <input
        //                             type="email"
        //                             className="flex-1 outline-none"
        //                             placeholder="Enter your email"
        //                         />
        //                     </div>
        //                     <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Send</button>
        //                 </div>
        //             </div>

        //             <div className="footer-links flex flex-col md:flex-row justify-between items-center mt-8">
        //                 <div className="left-side text-center md:text-left mb-4 md:mb-0">
        //                     <img src={logo} alt="logo not found" className="mx-auto md:mx-0" />
        //                     <p className="mt-4">
        //                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris orci, finibus ac justo ut, mattis malesuada erat.
        //                     </p>
        //                 </div>

        //                 <div className="links flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-8">
        //                     <div>
        //                         <h1 className="font-bold">About</h1>
        //                         <ul className="space-y-2">
        //                             <li>About us</li>
        //                             <li>How it works</li>
        //                             <li>Terms of Use</li>
        //                             <li>Help</li>
        //                         </ul>
        //                     </div>

        //                     <div>
        //                         <h1 className="font-bold">Services</h1>
        //                         <ul className="space-y-2">
        //                             <li>Professional Photography</li>
        //                             <li>Virtual Tour</li>
        //                             <li>Property Management</li>
        //                         </ul>
        //                     </div>

        //                     <div>
        //                         <h1 className="font-bold">Contact</h1>
        //                         <ul className="space-y-2">
        //                             <li>Arkaf Care</li>
        //                             <li>+162291922332</li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="flex flex-col md:flex-row justify-between items-center my-4">
        //                 <div className="copy-right-text mb-4 md:mb-0 text-center md:text-left">
        //                     <span>2024 Arkaf Real Estate</span>
        //                 </div>

        //                 <div className="flex space-x-5 justify-center md:justify-start">
        //                     <img src={facebookIcon} alt="Facebook" />
        //                     <img src={InstagramIcon} alt="Instagram" />
        //                     <img src={TwitterIcon} alt="Twitter" />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </footer>
        <footer className="mx-8 mb-4">
    <div className="footer-container">
        <Container maxWidth='xl'>
        <div className="">
            <div className="flex flex-col md:flex-row justify-between items-center">

                <div className="footer-title mb-4 md:mb-0 text-center md:text-left">
                    <h2 className="text-xl md:text-2xl lg:text-3xl">
                        Start your journey in real-estate with us
                        and join our newsletter!
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start contact-us">
                    <div className="flex items-center border border-gray-300 rounded-md p-2 bg-white mb-4 md:mb-0 md:mr-4">
                        <img src={emaiIcon} alt="email not found" className="mr-2" />
                        <input
                            type="email"
                            className="flex-1 outline-none"
                            placeholder="Enter your email"
                        />
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Send</button>
                </div>
            </div>

            <div className="footer-links flex flex-col lg:flex-row justify-between items-center mt-8 space-y-8 lg:space-y-0">
                <div className="left-side text-center lg:text-left mb-4 lg:mb-0">
                    <img src={logo} alt="logo not found" className="mx-auto lg:mx-0" />
                    <p className="mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris orci, finibus ac justo ut, mattis malesuada erat.
                    </p>
                </div>

                <div className="links flex flex-col md:flex-row justify-between w-full lg:w-auto space-y-8 md:space-y-0 md:space-x-8">
                    <div className="text-center md:text-left">
                        <h1 className="font-bold">About</h1>
                        <ul className="space-y-2">
                            <li>About us</li>
                            <li>How it works</li>
                            <li>Terms of Use</li>
                            <li>Help</li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h1 className="font-bold">Services</h1>
                        <ul className="space-y-2">
                            <li>Professional Photography</li>
                            <li>Virtual Tour</li>
                            <li>Property Management</li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h1 className="font-bold">Contact</h1>
                        <ul className="space-y-2">
                            <li>Arkaf Care</li>
                            <li>+162291922332</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center my-4">
                <div className="copy-right-text mb-4 md:mb-0 text-center md:text-left">
                    <span>2024 Arkaf Real Estate</span>
                </div>

                <div className="flex justify-center md:justify-start space-x-5">
                    <img src={facebookIcon} alt="Facebook" />
                    <img src={InstagramIcon} alt="Instagram" />
                    <img src={TwitterIcon} alt="Twitter" />
                </div>
            </div>
        </div>

        </Container>
    </div>
</footer>



    );
};

export default Footer;
