import React from "react";
import { AiFillDiscord } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="bg-gray-800 ">
      {/* footer */}
      <div className="bb w-[90%] mx-auto lg: max-w-7xl pb-5 pt-16 flex gap-x-6">
        <div className=" md:w-[30%] flex items-center gap-x-5">
          <img
            className="w-[20%] "
            src="https://imagedelivery.net/8KF1g3-Pi-ph225F906vPQ/901b7a98-19a3-4dc4-c0fb-a229e8918000/public"
            alt=""
          />

          <p className="text-lg font-semibold">GOLDEN ACCOUNTS</p>
        </div>

        <div className="flex w-[60%] justify-between "> 
          <div>
            <p className="font-semibold text-lg mb-3">OUR PRODUCTS</p>
            <p className="text-">Home</p>
          </div>

          <div>
            <p className="font-semibold text-lg mb-3">SOCIAL</p>
            <p className="text-slate-500 font-semibold mb-2 flex items-center gap-x-2"><AiFillDiscord className="text-xl"></AiFillDiscord> Discord</p>
            <p className="text-slate-500 font-semibold mb-2 flex items-center gap-x-2"><FaTelegram className="text-xl"></FaTelegram> Telegram</p>
          </div>

          <div>
            <p className="font-semibold text-lg mb-3">LEGAL</p>
            <p className="text-slate-500 font-semibold mb-2 ">Terms of Service</p>
            <p className="text-slate-500 font-semibold mb-2 ">Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
