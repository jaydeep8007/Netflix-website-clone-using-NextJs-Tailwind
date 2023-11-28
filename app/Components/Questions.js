import React from 'react';

const Question = ({ questionText }) => {
    return (
        <div className='hover:bg-[#4b4b4b] duration-300 text-left bg-[#2d2d2d] h-20 w-[80vw] flex justify-between items-center px-7 cursor-pointer'>
            <span className='text-white text-2xl'>{questionText}</span>
            <svg className='h-14' viewBox='0 0 24 24' fill='white' xmlns='http://www.w3.org/2000/svg'>
                <path d='M6 12H18M12 6V18' stroke='#FFFFFF' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
        </div>
    );
};

export default Question;
