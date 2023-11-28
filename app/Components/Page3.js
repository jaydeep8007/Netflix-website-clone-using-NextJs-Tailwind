import React from 'react'

const Page3 = () => {
    return (
        <div>
            <div>
                <div className="bg-black flex flex-wrap  lg:h-[80vh]">
                    <div className=" lg:flex ">

                        <div className=" lg:order-2 flex flex-col py-6  justify-center space-y-5 lg:h-[80vh] lg:w-1/2  lg:pr-24 px-16">
                            <span className='text-white text-center lg:text-left  text-3xl lg:text-5xl font-bold'>Download your shows to watch offline</span>
                            <span className='text-white text-center lg:text-left  text-base lg:text-xl'>Save your favourites easily and always have something to watch.</span>
                        </div>

                        <div className='lg:order-1  flex items-center justify-center  lg:h-[75vh] '>
                            <img className=' scale-75 md:scale-90' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="phone Image" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page3
