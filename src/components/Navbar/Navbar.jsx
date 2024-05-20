
// import Container from '@mui/material/Container';
// import logo from '../../until/logo.png'

// const Navbar = () => {
//     return (
//         <div className=''>
//             <Container maxWidth='xxl'>
//                 <div className='flex justify-between items-center py-4'>
//                     <div>
//                         <ul className='links flex space-x-5'>
//                             <li className="font-normal text-base leading-6 tracking-[-0.03em] text-center">Rent</li>
//                             <li className="font-normal text-base leading-6 tracking-[-0.03em] text-center">Buy</li>
//                             <li className="font-normal text-base leading-6 tracking-[-0.03em] text-center">Add Listing</li>
//                             <li className="font-normal text-base leading-6 tracking-[-0.03em] text-center">Add Request</li>
//                             <li className="font-normal text-base leading-6 tracking-[-0.03em] text-center">Find Agent</li>
//                         </ul>
//                     </div>
//                     <div className='space-x-1'>
//                         <img src={logo} alt='logo not found' className='logo-image ' />
//                     </div>
//                     <div className='space-x-4 flex items-center'>
//                         <section>
//                             <div className='flex items-center space-x-3'>
//                                 <span className='ar-language'>AR</span>
//                                 <span class="switch">
//                                     <input id="switch-rounded" type="checkbox" />
//                                     <label for="switch-rounded"></label>
//                                 </span>

//                                 <span className='en-language'>EN</span>
//                             </div>
//                         </section>
//                         <button className='sign-in px-4 py-2'>Sign in</button>
//                         <button className='sign-up px-4 py-2'>Sign Up</button>
//                     </div>
//                 </div>
//             </Container>
//         </div>

//     )

// };

// export default Navbar;


import { useState } from 'react';
import Container from '@mui/material/Container';
import logo from '../../until/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=''>
            <Container maxWidth='xxl'>
                <div className='flex justify-between items-center py-4'>
                    <div>
                        <img src={logo} alt='logo not found' className='logo-image' />
                    </div>
                    <div className='lg:hidden'>
                        <button onClick={toggleMenu} className='burger-menu'>
                            <svg
                                className='w-6 h-6'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M4 6h16M4 12h16m-7 6h7'
                                />
                            </svg>
                        </button>
                    </div>
                    <div className={`lg:flex ${isOpen ? 'flex' : 'hidden'} lg:items-center space-x-4`}>
                        <ul className='links hidden lg:flex space-x-5'>
                            <li className='font-normal text-base leading-6 tracking-[-0.03em] text-center'>Rent</li>
                            <li className='font-normal text-base leading-6 tracking-[-0.03em] text-center'>Buy</li>
                            <li className='font-normal text-base leading-6 tracking-[-0.03em] text-center'>Add Listing</li>
                            <li className='font-normal text-base leading-6 tracking-[-0.03em] text-center'>Add Request</li>
                            <li className='font-normal text-base leading-6 tracking-[-0.03em] text-center'>Find Agent</li>
                        </ul>
                        <section className='lg:flex items-center space-x-3'>
                            <span className='ar-language'>AR</span>
                            <span className='switch'>
                                <input id='switch-rounded' type='checkbox' />
                                <label htmlFor='switch-rounded'></label>
                            </span>
                            <span className='en-language'>EN</span>
                        </section>
                        <button className='sign-in px-4 py-2'>Sign in</button>
                        <button className='sign-up px-4 py-2'>Sign Up</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
