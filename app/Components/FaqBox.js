import React from 'react'
import Question from './Questions'


const FaqBox = () => {
    return (
        <div>
            <div className='h-auto bg-black flex flex-col items-center px-5 '>
                <span className='text-white font-bold text-center text-3xl lg:text-5xl p-12 '>Frequently Asked Questions</span>

                <div className='space-y-4  '>

                    <Question questionText='What Is Netflix ?' />
                    <Question questionText='How much does Netflix cost?' />
                    <Question questionText='Where Can I Watch?' />
                    <Question questionText='How do I cancle?' />
                    <Question questionText='What can I watch on Netflix ?' />
                    <Question questionText='Is Netflix good for Kids?' />

                </div>




                <div className='flex flex-col pt-14 mb-24 '>
                    <span className='text-white text-lg lg:text-xl pb-5'>Ready to watch? Enter your email to create or restart your membership.</span>
                    <div className="flex flex-col lg:flex-row items-center">
                        <input className="hover:border-white duration-300 mt-5 w-80  lg:w-96  opacity-60 bg-black text-white border border-gray-400 rounded-md mr-5 pl-3 h-14" value="" placeholder="Email adress"></input>

                        <button className=" duration-300  text-center w-36  mt-5 lg:text-2xl font-bold bg-red-600 text-white hover:bg-red-800    px-4 border border-black rounded shadow cursor-pointer   lg:w-52 h-14  ">Get started</button>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default FaqBox


