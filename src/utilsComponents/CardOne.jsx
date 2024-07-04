import { AiFillDollarCircle } from "react-icons/ai";
import { IoCube } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import AOS from 'aos';

AOS.init({});

const CardOne = ({ data }) => {
    const { title, price, availableInStock, Image } = data
    return (
        <div data-aos="zoom-in-up" className="h-[400px] w-[350px]  rounded-lg relative overflow-hidden bg-gradient-to-r from-[#1E2836] to-[#10192B]">
            <img className="px-7 pb-7" src={Image} alt={title} />
            <div className="px-7">
                <p className="text-gray-400 font-semibold">{title}</p>
                <p className="text-[#166E3B] font-semibold mt-2 flex items-center">
                    <AiFillDollarCircle className="text-xl mr-1" /> ${price} USD
                </p>
            </div>
            <div className="text-gray-400 bg-[#1E2836] font-semibold grid grid-cols-2 absolute left-0 right-0 bottom-0">
                <span className=" ms-4  flex items-center">
                    <IoCube className="text-base  mr-1" /> {availableInStock}
                </span>
                <button className="flex items-center justify-between ps-3 pe-4 hover:bg-gradient-to-r from-[#473596] to-[#964FE6] py-1">
                    <span>Purchase</span>
                    <FaAngleRight className="text-xl ml-1" />
                </button>
            </div>
        </div>
    );
};

export default CardOne;