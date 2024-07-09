import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdAccountBalanceWallet, MdReceipt } from "react-icons/md";
import { IoMdCalendar, IoMdPricetag, IoIosArrowForward } from "react-icons/io";
import { SiLitecoin, SiDogecoin, SiTether, SiPolygon } from "react-icons/si";
import { v4 as uuid } from "uuid";
import Modal2 from "../../utilsComponents/Modal2";
import { Button, DialogTitle } from "@headlessui/react";
import { FaEthereum, FaBitcoin } from "react-icons/fa";



const Payment = () => {
    const [unicId, setUnicId] = useState('')
    const [data, setData] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const open = () => {
        setIsOpen(true)
    }
    const close = () => {
        setIsOpen(false)
    }
    const { id } = useParams()
    useEffect(() => {
        fetch('/cryptoData.json')
            .then(res => res.json())
            .then(products => {
                const product = products.find(d => d.id == id)
                setData(product)
            })
    }, [])
    useEffect(() => {
        const unique_id = uuid().replace(/-/g, '');
        const small_id = unique_id.slice(0, 18).split('-').join('');
        setUnicId(small_id)

    }, [])
    // data 
    const formattedDate = formatDate();

    const { title, price } = data
    return (
        <div>
            <div className="w-[80%] mx-auto flex  max-w-7xl my-16">
                <div className="bg-gradient-to-b from-[#402B8B] to-[#6A21A7] w-[40%] px-7 rounded-s-lg py-9">
                    <p className=" font-semibold text-[#C5BAD6]">Your order</p>
                    <p className="text-xl font-medium mt-2" >{title}</p>
                    <p className="text-[#C5BAD6] mt-1 font-medium">lalos20193@luravel.com</p>
                    <div className="mt-8 space-y-6">
                        <div className="flex gap-5">
                            <MdAccountBalanceWallet className="size-6 text-[#C5BAD6] mt-2" />
                            <p className=" font-medium flex flex-col ">
                                <span className="text-[#C5BAD6]">Amount</span>
                                <span className=" mt-1">${price} USD</span>
                            </p>
                        </div>
                        <div className="flex gap-5">
                            <MdReceipt className="size-6 text-[#C5BAD6] mt-2" />
                            <p className=" font-medium flex flex-col ">
                                <span className="text-[#C5BAD6]">Order ID</span>
                                <span className=" mt-1">{unicId} </span>
                            </p>
                        </div>
                        <div className="flex gap-5">
                            <IoMdCalendar className="size-6 text-[#C5BAD6] mt-2" />
                            <p className=" font-medium flex flex-col ">
                                <span className="text-[#C5BAD6]">Date</span>
                                <span className=" mt-1">{formattedDate} </span>
                            </p>
                        </div>
                        <div className="flex gap-5">
                            <IoMdPricetag className="size-6 -rotate-90 text-[#C5BAD6] mt-2" />
                            <p className=" font-medium flex flex-col ">
                                <span className="text-[#C5BAD6]">Coupon Code</span>
                                <span onClick={open} className=" mt-1 underline cursor-pointer"> No Coupon code</span>
                            </p>
                        </div>

                    </div>
                </div>
                <div className="w-[80%] relative px-7 bg-[#1F2937] rounded-e-lg ">

                    <p className="text-4xl font-bold text-center mt-12">Select a payment method</p>
                    <div className="border-2 border-[#9B7DF5] p-4 mt-8 flex justify-between rounded-lg">
                        <div className="  flex  gap-4 ">
                            <input type="radio" className="size-4 text-orange-500 " />
                            <div className="">
                                <p className=" text-[#BCC2C8] font-medium">Crypto Currencies</p>
                                <p>
                                    <span className="text-xs text-[#969CA5] pe-2">Powered by
                                    </span>
                                    <span className="text-sm text-[#BCC2C8] font-medium">Crypto Payments</span></p>
                            </div>

                        </div>
                        <div className="flex gap-2 text-[#969DA9] ">
                            <FaEthereum className="size-4 " />
                            <FaBitcoin className="size-4" />
                            <SiLitecoin className="size-4" />
                            <SiDogecoin className="size-4" />
                            <SiPolygon className="size-4 bg-[#969DA9]  rounded-full p-1 text-black" />
                            <SiTether className="size-4" />

                        </div>
                    </div>
                    <div className=" absolute bottom-5 right-0 left-0 flex justify-between px-8">
                        <Link to={'/'}>
                            <Button
                                className={`text-black border bg-white hover:border-black rounded-md px-3 py-1`}>
                                Back to Shop
                            </Button>
                        </Link>
                        <Button
                            className="inline-flex items-center gap-2 rounded-md bg-[#8262dc] py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-[#714DD2] data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                        >
                            Continue to payment <IoIosArrowForward />

                        </Button>
                    </div>
                </div>
            </div>
            <Modal2 close={close} isOpen={isOpen} open={open}>
                <DialogTitle as="h3" className="text-base/7 font-medium text-black">
                    Enter your coupon code below to apply it! 🙌
                </DialogTitle>
                <div className="mt-2 text-sm/6 " >
                    <input type="text" className='w-full py-1 border-2 rounded-md border-stone-500 focus:boder-[#8262dc] outline-none text-black' />
                </div>
                <div className="mt-4 float-end space-x-3">
                    <Button
                        onClick={close}
                        className={`text-black border hover:border-black rounded-md px-3 py-1`}>
                        Cancel
                    </Button>
                    <Button
                        className="inline-flex items-center gap-2 rounded-md bg-[#8262dc] py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-[#714DD2] data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    >
                        Apply Coupon Code
                    </Button>
                </div>
            </Modal2>

        </div>
    );
};

export default Payment;

function formatDate() {
    const now = new Date();

    // Get hours and minutes
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Format minutes to always have two digits
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    // Create the formatted date string
    const formattedDate = `Today at ${hours}:${formattedMinutes} ${ampm}`;

    return formattedDate;
}