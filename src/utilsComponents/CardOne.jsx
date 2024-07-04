import { AiFillDollarCircle } from "react-icons/ai";
import { IoCube } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";

const CardOne = ({ data }) => {
    const { title, price, availableInStock, Image } = data
    return (
        <div className="h-[400px] w-[350px] border-2 rounded-lg relative">
            <img className="px-7 pb-7" src={Image} alt="" />
            <div className="px-7">
                <p className="text-gray-400 font-semibold"> {title}</p>
                <p className="text-[#166E3B] font-semibold"><AiFillDollarCircle className="text-xl inline" /> ${price} USD
                </p>
            </div>
            <div className="text-gray-400 font-semibold grid grid-cols-2 px-5 absolute left-0 right-0 bottom-4 ">
                <span><IoCube className="size-4 inline" /> {availableInStock}</span>
                <button className="flex items-center justify-between"> <span>Purchase</span> <FaAngleRight className="size-4 inline " />
                </button>
            </div>
        </div>
    );
};

export default CardOne;