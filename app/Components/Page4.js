import React from 'react'

const Page4 = () => {
    return (
        <div>
            <div>
                <div className="bg-black flex-wrap lg:h-[80vh]">
                    <div className=" lg:flex ">
                        <div className="flex flex-col py-6  justify-center space-y-5 lg:h-[80vh] lg:w-1/2 lg:pl-24 px-16">
                            <span className='text-white text-center lg:text-left text-3xl lg:text-5xl font-bold'>Watch everywhere</span>
                            <span className='text-white text-center lg:text-left text-base lg:text-xl'> Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</span>
                        </div>
                        <div className='  flex items-center justify-center  lg:h-[75vh] '>
                            <img className='z-10 w-80 lg:w-[555px] ' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="TV Image" />
                            <video className='absolute w-48 pb-28 lg:w-[325px] lg:pb-44' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v' alt="vid1" autoPlay muted loop></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page4
// w-52 pb-32  md:w-72   lg:w-96 lg:pb-44