import React from 'react';
import { BsPersonSquare } from 'react-icons/bs';
import { AiOutlineProduct } from "react-icons/ai";
import { FaClipboardCheck } from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";

const HomeProfile = () => {
    return (
        <div>
            <div className="relative group  bg-slate-600 rounded-lg cursor-pointer">
                  <button
                    className=" "
                    aria-haspopup="true"
                  >
                    <span className=' flex px-3 py-1 rounded-lg items-center gap-x-3 bg-slate-700 font-semibold'><BsPersonSquare /> Profile</span>
                  </button>
                  <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform ">
                    <div className="relative top-6 bg-[#2b3646ec] rounded-xl shadow-xl w-full ">
                      <div className="w-10 h-10 bg-[#2b3646] transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-300 ease-in-out rounded-sm "></div>
                      <div className="relative z-10 ">
                        
                        <ul className=" text-[15px] ">
                          
                          {/* bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500  , hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400*/}
                            <p
                              className=" font-semibold  flex items-center text-gray-300 gap-x-5  px-5 py-4 hover:bg-slate-900 hover:rounded-t-lg  "
                            >
                              <AiOutlineProduct className='text-2xl'/> Our Products
                            </p>
                            <p
                              className=" font-semibold  flex items-center text-gray-300 gap-x-5  px-5 py-4  hover:bg-slate-900 "
                            >
                              <FaClipboardCheck className='text-2xl'/> My Orders
                            </p>
                            <p
                              className=" font-semibold  flex items-center text-gray-300 gap-x-5  px-5 py-4  hover:bg-slate-800 hover:rounded-b-lg"
                            >
                              <TbShoppingBagPlus className='text-2xl'/> Create a Shop
                            </p>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
    );
};

export default HomeProfile;