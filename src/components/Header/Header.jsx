import Container from '@mui/material/Container';


const Header = () => {
    return (
        <div className='Header'>
            <div className="background">
                <div className="overlay"></div>
                <div class="flex flex-col h-full justify-around items-center">
                    <div className="centered-text">
                        <div>
                            <h2 className="text-white">
                                We help you find the best-fit property
                            </h2>
                            <p className="text-white">Guiding You Through the Real Estate Journey to Discover Your Perfect Home Sweet Home</p>
                        </div>
                    </div>
                    {/* <Container maxWidth='xl' className='bg-white'> */}

                    <div class="search-container">
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <input type="search" id="default-search" class="block w-full p-4 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                            <div class="absolute inset-y-0 end-0 flex items-center pr-3 pointer-events-none">
                                <svg class="w-4 h-4 text-white-500 dark:text-white-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* </Container> */}
                </div>
            </div>
        </div>

    )

};

export default Header;
