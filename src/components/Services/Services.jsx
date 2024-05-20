import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import { DialogContent, Backdrop } from '@mui/material';
import icon from '../../until/svg/Icon.svg';
import Vector from '../../until/svg/Icon (1).svg';
import _Vector from '../../until/svg/Icon (2).svg';
import closeLine from '../../until/svg/close-line.svg'
import silderImage from '../../until/SilderImages/image_1.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Services = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const handleDialogOpen = (service) => {
        setSelectedService(service);
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    return (
        <div className="mx-8">
            <div className='places-container service'>
                <Container maxWidth='xl'>
                    <div>
                        <h1 className="places-title text-2xl font-bold my-8">Our Services</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-4 border border-gray-200 w-full rounded-lg bg-white">
                                <img src={icon} alt="icon not found" className="mb-4" />
                                <h1 className="text-xl font-semibold mb-2">Professional Photography</h1>
                                <p className="mb-4">Our focus is on you. Experience personalized treatment that addresses your specific needs.</p>
                                <button onClick={() => handleDialogOpen("Professional Photography")} className="btn-primary">See More</button>
                            </div>
                            <div className="p-4 border border-gray-200 rounded-lg bg-white">
                                <img src={_Vector} alt="icon not found" className="mb-4" />
                                <h1 className="text-xl font-semibold mb-2">Virtual Tour</h1>
                                <p className="mb-4">Our focus is on you. Experience personalized treatment that addresses your specific needs.</p>
                                <button onClick={() => handleDialogOpen("Virtual Tour")} className="btn-primary">See More</button>
                            </div>
                            <div className="p-4 border border-gray-200 rounded-lg bg-white">
                                <img src={Vector} alt="icon not found" className="mb-4" />
                                <h1 className="text-xl font-semibold mb-2">Property Management</h1>
                                <p className="mb-4">Our focus is on you. Experience personalized treatment that addresses your specific needs.</p>
                                <button onClick={() => handleDialogOpen("Property Management")} className="btn-primary">See More</button>
                            </div>
                        </div>
                    </div>

                </Container>
                <Dialog
                    open={dialogOpen}
                    onClose={handleDialogClose}
                    PaperProps={{
                        sx: {
                            height: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            zIndex: 1000
                        },
                        style: {
                            width: '75vw',
                            maxWidth: 'none',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }
                    }}
                >
                    <DialogContent>


                        <div className='flex flex-col sm:flex-row md:justify-between'>
                            <div className='w-full sm:w-1/2'>
                                <img src={silderImage} className='rounded-lg' alt='silder image not found' />
                            </div>

                            <div className='w-full sm:w-1/2 mx-2 p-2'>
                                <div className='flex justify-between items-center'>
                                    <img src={icon} alt='icon not found' />
                                    <img src={closeLine} alt='close line icon not found' className='closeLine' onClick={handleDialogClose} />
                                </div>

                                <div className='dialog-contain'>
                                    <h1>Professional Photography</h1>
                                    <p className='whitespace-wrap'>Our focus is on you. Experience personalized treatment that addresses your specific needs and</p>
                                </div>

                                <div className='benefit-contain'>
                                    <h3>Benefit use this service</h3>

                                    <div className='benefit-card'>
                                        <div>
                                            <p>Time: Shoot in good natural light—early morning or late afternoon.</p>
                                        </div>
                                        <div>
                                            <p>Time: Shoot in good natural light—early morning or late afternoon.</p>
                                        </div>
                                        <div>
                                            <p>Time: Shoot in good natural light—early morning or late afternoon.</p>
                                        </div>
                                        <div>
                                            <p>Time: Shoot in good natural light—early morning or late afternoon.</p>
                                        </div>
                                    </div>
                                </div>

                                <button className='w-full btn-request'>Request Service
                                    <ArrowForwardIcon className='ml-2' />
                                </button>
                            </div>
                        </div>

                    </DialogContent>
                </Dialog>
                <Backdrop open={dialogOpen} sx={{ zIndex: 999 }} />
            </div>
        </div>
    );
};

export default Services;


// <div className="mx-8">
// <div className="places-container service">

//     <Container maxWidth='xl'>
//     <div className="">
//         {/* container mx-auto px-4 max-w-screen-xl */}
//         <h1 className="places-title text-2xl font-bold my-8">Our Services</h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="p-4 border border-gray-200 rounded-lg bg-W">
//                 <img src={icon} alt="icon not found" className="mb-4" />
//                 <h1 className="text-xl font-semibold mb-2">Professional Photography</h1>
//                 <p className="mb-4">Our focus is on you. Experience personalized treatment that addresses your specific needs.</p>
//                 <button onClick={() => handleDialogOpen("Professional Photography")} className="btn-primary">See More</button>
//             </div>
//             <div className="p-4 border border-gray-200 rounded-lg">
//                 <img src={_Vector} alt="icon not found" className="mb-4" />
//                 <h1 className="text-xl font-semibold mb-2">Virtual Tour</h1>
//                 <p className="mb-4">Our focus is on you. Experience personalized treatment that addresses your specific needs.</p>
//                 <button onClick={() => handleDialogOpen("Virtual Tour")} className="btn-primary">See More</button>
//             </div>
//             <div className="p-4 border border-gray-200 rounded-lg">
//                 <img src={Vector} alt="icon not found" className="mb-4" />
//                 <h1 className="text-xl font-semibold mb-2">Property Management</h1>
//                 <p className="mb-4">Our focus is on you. Experience personalized treatment that addresses your specific needs.</p>
//                 <button onClick={() => handleDialogOpen("Property Management")} className="btn-primary">See More</button>
//             </div>
//         </div>
//     </div>

//     </Container>

//     <Dialog
//         open={dialogOpen}
//         onClose={handleDialogClose}
//         PaperProps={{
//             sx: {
//                 height: '500px',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//                 zIndex: 1000,
//             },
//             style: {
//                 width: '75vw',
//                 maxWidth: 'none',
//                 marginLeft: 'auto',
//                 marginRight: 'auto',
//             },
//         }}
//     >
//         <DialogContent>
//             <div className="flex flex-col sm:flex-row md:justify-between">
//                 <div className="w-full sm:w-1/2">
//                     <img src={silderImage} className="rounded-lg w-full" alt="slider image not found" />
//                 </div>
//                 <div className="w-full sm:w-1/2 mx-2 p-2">
//                     <div className="flex justify-between items-center mb-4">
//                         <img src={icon} alt="icon not found" className="w-12 h-12" />
//                         <img src={closeLine} alt="close line icon not found" className="closeLine cursor-pointer w-6 h-6" onClick={handleDialogClose} />
//                     </div>
//                     <div className="dialog-contain">
//                         <h1 className="text-2xl font-bold mb-2">Professional Photography</h1>
//                         <p className="whitespace-normal mb-4">Our focus is on you. Experience personalized treatment that addresses your specific needs.</p>
//                     </div>
//                     <div className="benefit-contain mb-4">
//                         <h3 className="text-xl font-semibold mb-2">Benefits of using this service</h3>
//                         <div className="benefit-card grid grid-cols-1 gap-2">
//                             <div>
//                                 <p>Time: Shoot in good natural light—early morning or late afternoon.</p>
//                             </div>
//                             <div>
//                                 <p>Time: Shoot in good natural light—early morning or late afternoon.</p>
//                             </div>
//                             <div>
//                                 <p>Time: Shoot in good natural light—early morning or late afternoon.</p>
//                             </div>
//                             <div>
//                                 <p>Time: Shoot in good natural light—early morning or late afternoon.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <button className="w-full btn-primary flex items-center justify-center">Request Service
//                         <ArrowForwardIcon className="ml-2" />
//                     </button>
//                 </div>
//             </div>
//         </DialogContent>
//     </Dialog>
//     <Backdrop open={dialogOpen} sx={{ zIndex: 999 }} />
// </div>
// </div>