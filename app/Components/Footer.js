import React from 'react'
import LanguageButton from './LanguageButton'

const Footer = () => {
    return (
        <div>
            <div className='bg-black h-[60vh] text-white '>
                <div className='scale-90 flex flex-col w-[75vw] h-[50vh] m-auto pt-11'>
                    <span className='my-7'>Questions?  Call 000-800-919-1694</span>

                    <div className='flex flex-row gap-2 justify-between mx-2'>
                        <div className='flex flex-col space-y-4'>
                            <span className='underline'>FAQ</span>
                            <span className='underline'>Investor Relations</span>
                            <span className='underline'>Privacy</span>
                            <span className='underline'>Speed Test </span>
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <span className='underline'>Help Cetre</span>
                            <span className='underline'>Jobs</span>
                            <span className='underline'>Cookie Preferences</span>
                            <span className='underline'>Legal Notices</span>
                        </div>

                        <div className='flex flex-col space-y-4'>
                            <span className='underline'>Account</span>
                            <span className='underline'>Ways To Watch</span>
                            <span className='underline'>Corporate Information</span>
                            <span className='underline'>Only On Netflix</span>
                        </div>

                        <div className='flex flex-col space-y-4'>
                            <span className='underline'>Media Centre</span>
                            <span className='underline'>Terms Of Use</span>
                            <span className='underline'>Contact Us</span>

                        </div>


                    </div>



                    <LanguageButton />


                    <span className=''>Netflix India</span>





                </div>

            </div>
        </div>
    )
}

export default Footer
