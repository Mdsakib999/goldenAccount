import React from 'react';

const CommonTitle = ({ title }) => {
    return (
        <div className='flex items-center justify-center'>
            <div className="w-[90px] bg-white h-[3px] mt-1 "></div>
            <p className='uppercase font-bold text-3xl text-center  py-14 tracking-[2px]'>
                {title}
            </p>
            <div className="w-[90px] bg-white h-[3px] mt-1"></div>
        </div>


    );
};

export default CommonTitle;