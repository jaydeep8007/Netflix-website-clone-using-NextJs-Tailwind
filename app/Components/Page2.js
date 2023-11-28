import React from 'react'


const Page2 = () => {
    return (
        <div>
            <div className="bg-black flex-wrap lg:h-[80vh] ">
                <div className=" lg:flex  ">
                    <div className="flex flex-col pt-6  justify-center space-y-5 lg:h-[80vh] lg:w-1/2 lg:pl-24 px-16">
                        <span className='  text-white text-center lg:text-left text-3xl lg:text-5xl font-bold'>Enjoy on your TV</span>
                        <span className='text-white text-center lg:text-left text-base lg:text-xl'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</span>
                    </div>
                    <div className='  flex items-center justify-center  lg:h-[75vh] '>
                        <img className='z-10 px-5' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="TV Image" />
                        <video className='absolute pb-3 px-6' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v' alt="vid1" autoPlay muted loop></video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page2
