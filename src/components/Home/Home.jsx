import React, { useEffect, useState } from 'react';
import { IoStar } from "react-icons/io5";
import { BsPersonSquare } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import Business from './HomeComponents/Business';
import Crypto from './HomeComponents/Crypto';


const Home = () => {


    return (
        <div>
            <div className='bg-slate-800 text-white md:pt-28'>
                <img className=' md:w-[30%] md:mx-auto shadow-xl rounded-lg ' src="https://imagedelivery.net/8KF1g3-Pi-ph225F906vPQ/f6e61577-982b-4c60-c79e-dbcf5937da00/public" alt="" />
                <p className=' text-3xl font-semibold text-gray-300 text-center mt-8 flex justify-center items-center'>Golden Accounts <span className='flex items-center justify-center text-orange-400 text-2xl gap-1 font-bold'><IoStar className=' ml-3 text-xl'></IoStar> 4.5</span></p>
                <div className=' relative justify-center items-center gap-x-5 flex pb-8 mt-6'>
                    <input className='bg-slate-700 py-1 pl-10 rounded-md' placeholder='Search for a product' type="text" />

                    <p className=' flex px-2 py-1 rounded-lg items-center gap-x-3 bg-slate-700 font-semibold'><BsPersonSquare /> Profile</p>

                    <IoSearch className='absolute md:left-[42%]' />
                </div>

            </div>
            <Business />

            <Crypto></Crypto>

        </div>
    );
};

export default Home;