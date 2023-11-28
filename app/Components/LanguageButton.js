import React from 'react'

const LanguageButton = () => {
    return (
        <div>

            <div class="inline-block relative w-34">
                <select class="language text-sm  my-7 duration-300  bg-black   text-white   px-3 py-1  border border-gray-500 rounded shadow cursor-pointer h-8 ">
                    <option disabled selected value="" className='text-sm'>木 &nbsp;Language</option>

                    <option className='text-sm '>木 &nbsp; English</option>
                    <option className='text-sm'>木 &nbsp; Hindi</option>
                    <option className='text-sm'>木 &nbsp;Japanese</option>
                </select>

            </div>




        </div>
    )
}

export default LanguageButton
