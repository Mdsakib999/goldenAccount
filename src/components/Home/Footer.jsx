import React from "react";
import { AiFillDiscord, AiFillStar } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-800 ">
      {/* footer */}
      <div className=" w-[90%] mx-auto max-w-7xl pb-5 pt-16 md:flex gap-x-6 ">
        <div className=" md:w-[35%] md:h-[110px] flex items-center gap-x-5 ">
          <img
            className="md:w-[20%] h-[90px]"
            src="https://imagedelivery.net/8KF1g3-Pi-ph225F906vPQ/901b7a98-19a3-4dc4-c0fb-a229e8918000/public"
            alt=""
          />

          <p className="text-lg font-semibold">GOLDEN ACCOUNTS</p>
        </div>

        <div className=" md:flex md:w-[60%] justify-between mt-6 md:mt-0">
          <div className="">
            <p className="font-semibold text-lg mb-3">OUR PRODUCTS</p>
            <p className="text-slate-500 hover:text-slate-400 font-semibold">
              Home
            </p>

            <div className="flex items-center group my-2 ">
              <div className="w-[40px] bg-slate-500 group-hover:bg-slate-400 h-[2px] mt-1 "></div>
              <p className="uppercase font-semibold text-slate-500 group-hover:text-slate-400 text-center  py-1 ">
                Business Accounts instant
              </p>
              <div className="w-[40px] bg-slate-500 group-hover:bg-slate-400 h-[2px] mt-1"></div>
            </div>

            <div className="flex items-center group my-2 ">
              <div className="w-[40px] bg-slate-500 group-hover:bg-slate-400 h-[2px] mt-1 "></div>
              <p className="uppercase font-semibold text-slate-500 group-hover:text-slate-400   py-1 ">
                crypto open-up
              </p>
              <div className="w-[40px] bg-slate-500 group-hover:bg-slate-400 h-[2px] mt-1"></div>
            </div>

            <div className="flex items-center group my-2 ">
              <div className="w-[40px] bg-slate-500 group-hover:bg-slate-400 h-[2px] mt-1 "></div>
              <p className="uppercase font-semibold text-slate-500 group-hover:text-slate-400 text-center  py-1 ">
                usa open-up instant
              </p>
              <div className="w-[40px] bg-slate-500 group-hover:bg-slate-400 h-[2px] mt-1"></div>
            </div>
            <div className="flex items-center group my-2 ">
              <div className="w-[40px] bg-slate-500 group-hover:bg-slate-400 h-[2px] mt-1 "></div>
              <p className="uppercase font-semibold text-slate-500 group-hover:text-slate-400 text-center  py-1 ">
                Eu Open-up instant
              </p>
              <div className="w-[40px] bg-slate-500 group-hover:bg-slate-400 h-[2px] mt-1"></div>
            </div>
            <div className="flex items-center group my-2 ">
              <div className="w-[40px] bg-slate-500 group-hover:bg-slate-400 h-[2px] mt-1 "></div>
              <p className="uppercase font-semibold text-slate-500 group-hover:text-slate-400 text-center  py-1 ">
                argentina banks
              </p>
              <div className="w-[40px] bg-slate-500 group-hover:bg-slate-400 h-[2px] mt-1"></div>
            </div>
            <div className="flex items-center group my-2 ">
              <div className="w-[40px] bg-slate-500 group-hover:bg-slate-400 h-[2px] mt-1 "></div>
              <p className="uppercase font-semibold text-slate-500 group-hover:text-slate-400 text-center  py-1 ">
                Canada open-up instant
              </p>
              <div className="w-[40px] bg-slate-500 group-hover:bg-slate-400 h-[2px] mt-1"></div>
            </div>
            <div className="flex items-center group my-2 ">
              <div className="w-[40px] bg-slate-500 group-hover:bg-slate-400 h-[2px] mt-1 "></div>
              <p className="uppercase font-semibold text-slate-500 group-hover:text-slate-400 text-center  py-1 ">
                UK open-up instant
              </p>
              <div className="w-[40px] bg-slate-500 group-hover:bg-slate-400 h-[2px] mt-1"></div>
            </div>
            <div className="flex items-center group my-2 ">
              <div className="w-[40px] bg-slate-500 group-hover:bg-slate-400 h-[2px] mt-1 "></div>
              <p className="uppercase font-semibold text-slate-500 group-hover:text-slate-400 text-center  py-1 ">
                Manual delivery items
              </p>
              <div className="w-[40px] bg-slate-500 group-hover:bg-slate-400 h-[2px] mt-1"></div>
            </div>
            <div className="flex items-center group my-2 ">
              <div className="w-[40px] bg-slate-500 group-hover:bg-slate-400 h-[2px] mt-1 "></div>
              <p className="uppercase font-semibold text-slate-500 group-hover:text-slate-400 text-center  py-1 ">
                Asia/latin/africa open-up instant
              </p>
              <div className="w-[40px] bg-slate-500 group-hover:bg-slate-400 h-[2px] mt-1"></div>
            </div>
          </div>

          <div>
            <p className="font-semibold text-lg mb-3 mt-6 md:mt-0">SOCIAL</p>
            <p className="text-slate-500 hover:text-slate-400 font-semibold mb-2 flex items-center gap-x-2">
              <AiFillDiscord className="text-xl"></AiFillDiscord> Discord
            </p>
            <p className="text-slate-500 hover:text-slate-400 font-semibold mb-2 flex items-center gap-x-2">
              <FaTelegram className="text-xl"></FaTelegram> Telegram
            </p>
          </div>

          <div>
            <p className="font-semibold text-lg mb-3 mt-6 md:mt-0">LEGAL</p>
            <p className="text-slate-500 hover:text-slate-400 font-semibold mb-2 ">
              Terms of Service
            </p>
            <p className="text-slate-500 hover:text-slate-400 font-semibold mb-2 ">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
{/* hhhhhhhh */}
      <div class="pb-10 max-w-7xl mx-auto flex justify-end">
        <div class="text-white flex items-center rounded-md shadow-xl md:w-[30%] w-[70%] mx-auto md:mx-0">
          <div class="bg-gray-700 w-2/5 py-4 rounded-l-md">
            <p class="text-xl font-bold flex items-center gap-x-1 text-orange-300 ml-4">
              <AiFillStar /> 4.5
            </p>
            <p class="uppercase text-sm font-semibold text-gray-300 mt-2 ml-4">
              Shop Rating
            </p>
          </div>
          <div class="py-5 w-3/5 bg-gradient-to-r from-indigo-500 to-indigo-700 text-center rounded-r-md text-gray-300">
            <p class="font-semibold">850 customers have</p>
            <p class="font-semibold">rated this shop</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
