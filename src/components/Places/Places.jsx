
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import RiyadhImge from '../../until/places/image1.jpg'
import MakkahImage from '../../until/places/image2.jpg'
import MadinahImage from '../../until/places/image3.jpg'
import JeddahImage from '../../until/places/image4.jpg';
import DammamImage from '../../until/places/image5.jpg';
import QaassimImage from '../../until/places/image6.jpg';
import KhobarImage from '../../until/places/image7.jpg';
import AbhaImage from '../../until/places/image8.jpg';
const Places = () => {
    return (
        <div className='places-container'>
            <Container maxWidth='xl'>
                <h1 className="places-title">Best places on each city</h1>
                {/* <Box style={{ padding: '30px 0px' }} sx={{}}>
                    <Grid container spacing={2}>
                        <Grid item md={3}>
                            <img src={RiyadhImge} style={{ width: "304px", height: '323px', borderRadius: '16px', }} alt='Riyadh Imge not found' />
                            <h3>Riyadh</h3>
                        </Grid>
                        <Grid item md={3}>

                            <img src={MakkahImage} style={{ width: "304px", height: '323px', borderRadius: '16px' }} alt='Makkah Image not found' />
                            <h3>Makkah</h3>
                        </Grid>
                        <Grid item md={3}>
                            <img src={MadinahImage} style={{ width: "304px", height: '323px', borderRadius: '16px' }} alt='Madinah Image not found' />
                            <h3>Madinah</h3>
                        </Grid>
                        <Grid item md={3}>
                            <img src={JeddahImage} style={{ width: "304px", height: '323px', borderRadius: '16px' }} alt='Jeddah Image not found ' />
                            <h3>Jeddah</h3>
                        </Grid>
                    </Grid>
                </Box>

                <Box>
                    <Grid container spacing={2}>
                        <Grid item md={3}>
                            <img src={DammamImage} style={{ width: "304px", height: '323px', borderRadius: '16px', }} alt='Dammam Image not found ' />
                            <h3>Dammam</h3>
                        </Grid>
                        <Grid item md={3}>

                            <img src={QaassimImage} style={{ width: "304px", height: '323px', borderRadius: '16px' }} alt='Qaassim Image not found ' />
                            <h3>Qaassim</h3>
                        </Grid>
                        <Grid item md={3}>
                            <img src={KhobarImage} style={{ width: "304px", height: '323px', borderRadius: '16px' }} alt='Khobar Image not found ' />
                            <h3>Khobar</h3>
                        </Grid>
                        <Grid item md={3}>
                            <img src={AbhaImage} style={{ width: "304px", height: '323px', borderRadius: '16px' }} alt='Abha Image not found ' />
                            <h3>Abha</h3>
                        </Grid>
                    </Grid>
                </Box> */}

                {/* <div className="p-6 places-card">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="flex flex-col">
                            <img style={{ width: "304px", height: '323px', borderRadius: '16px' }} src={RiyadhImge} className="w-full h-auto rounded-lg" alt="Riyadh Image not found" />
                            <h3 className="mt-4">Riyadh</h3>
                        </div>
                        <div className="flex flex-col">
                            <img style={{ width: "304px", height: '323px', borderRadius: '16px' }} src={MakkahImage} className="w-full h-auto rounded-lg" alt="Makkah Image not found" />
                            <h3 className="mt-4">Makkah</h3>
                        </div>
                        <div className="flex flex-col">
                            <img style={{ width: "304px", height: '323px', borderRadius: '16px' }} src={MadinahImage} className="w-full h-auto rounded-lg" alt="Madinah Image not found" />
                            <h3 className="mt-4">Madinah</h3>
                        </div>
                        <div className="flex flex-col">
                            <img  style={{ width: "304px", height: '323px', borderRadius: '16px' }}src={JeddahImage} className="w-full h-auto rounded-lg" alt="Jeddah Image not found" />
                            <h3 className="mt-4">Jeddah</h3>
                        </div>
                        <div className="flex flex-col">
                            <img  style={{ width: "304px", height: '323px', borderRadius: '16px' }} src={DammamImage} className="w-full h-auto rounded-lg" alt="Dammam Image not found" />
                            <h3 className="mt-4">Dammam</h3>
                        </div>
                        <div className="flex flex-col">
                            <img  style={{ width: "304px", height: '323px', borderRadius: '16px' }} src={QaassimImage} className="w-full h-auto rounded-lg" alt="Qaassim Image not found" />
                            <h3 className="mt-4">Qaassim</h3>
                        </div>
                        <div className="flex flex-col">
                            <img  style={{ width: "304px", height: '323px', borderRadius: '16px' }} src={KhobarImage} className="w-full h-auto rounded-lg" alt="Khobar Image not found" />
                            <h3 className="mt-4 text-left">Khobar</h3>
                        </div>
                        <div className="flex flex-col">
                            <img style={{ width: "304px", height: '323px', borderRadius: '16px' }} src={AbhaImage} className="w-full h-auto rounded-lg" alt="Abha Image not found" />
                            <h3 className="mt-4">Abha</h3>
                        </div>
                    </div>
                </div> */}

                <div className="pt-9 places-card">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { image: RiyadhImge, alt: "Riyadh Image not found", label: "Riyadh" },
                            { image: MakkahImage, alt: "Makkah Image not found", label: "Makkah" },
                            { image: MadinahImage, alt: "Madinah Image not found", label: "Madinah" },
                            { image: JeddahImage, alt: "Jeddah Image not found", label: "Jeddah" },
                            { image: DammamImage, alt: "Dammam Image not found", label: "Dammam" },
                            { image: QaassimImage, alt: "Qaassim Image not found", label: "Qaassim" },
                            { image: KhobarImage, alt: "Khobar Image not found", label: "Khobar" },
                            { image: AbhaImage, alt: "Abha Image not found", label: "Abha" },
                        ].map((place, index) => (
                            <div key={index} className="flex flex-col">
                                <img
                                    src={place.image}
                                    className="w-full h-auto md:w-304 md:h-323 rounded-lg"
                                    alt={place.alt}
                                    style={{ objectFit: "cover" }}
                                />
                                <h3 className="text-left">{place.label}</h3>
                            </div>
                        ))}
                    </div>
                </div>


            </Container>

        </div>
    );
};

export default Places;
