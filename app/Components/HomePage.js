import React from 'react'
import LanguageButton from './LanguageButton'
import Link from 'next/link'

const HomePage = () => {
    return (
        <div>
            <div className=" bg-cover w-full bg-center  h-[90vh] bg-[url('./assets/Images/bg.jpg')]">
                <nav className="flex  bg-transparent justify-between max-w-[90%] lg:max-w-[80%] m-auto ">
                    <span className="z-10" > <img className="h-20 lg:h-36 p-0 m-0" src="../Netflix-Logo.wine.svg" alt="logo" /> </span>
                    <div className="z-10 flex space-x-4 items-center">

                        <LanguageButton />


                        <Link href="" className="duration-300 text-xs py-1 lg:text-sm bg-red-600 text-white hover:scale-105    px-4 border border-black rounded shadow cursor-pointer h-8 ">sign in</Link>
                    </div>

                </nav>


                <div className="bg-black opacity-70 h-[90vh] top-0 absolute w-full ">


                </div>


                <div className=" w-[77%] space-y-6 bg-transparent z-10   flex flex-col text-white  items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                    <h2 className="text-center text-3xl lg:text-5xl font-bold ">The biggest Indian hits. Ready to watch here from ₹ 149.</h2>
                    <span className="text-center text-xl lg:text-2xl">Join today. Cancel anytime.</span>
                    <span className="text-center text-base lg:text-xl">Ready to watch? Enter your email to create or restart your membership.</span>

                    <div className="flex flex-col lg:flex-row items-center">
                        <input className="hover:border-white duration-300 mt-5 w-80  lg:w-96  opacity-60 bg-black text-white border border-gray-400 rounded-md mr-5 pl-3 h-14" value="" placeholder="Email adress"></input>

                        <button className=" duration-300  text-center w-36  mt-5 lg:text-2xl font-bold bg-red-600 text-white hover:bg-red-800    px-4 border border-black rounded shadow cursor-pointer   lg:w-52 h-14  ">Get started</button>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default HomePage
