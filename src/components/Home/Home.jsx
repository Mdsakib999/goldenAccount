import React, { useEffect, useState } from 'react';
import { IoStar } from "react-icons/io5";
import { BsPersonSquare } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import Business from './HomeComponents/Business';
import Crypto from './HomeComponents/Crypto';
import UsaOpen from './HomeComponents/UsaOpen';

import AOS from 'aos';
import 'aos/dist/aos.css';
import EuOpen from './HomeComponents/EuOpen';
import Asia from './HomeComponents/Asia';
import Canada from './HomeComponents/Canada';
import UkOpen from './HomeComponents/UkOpen';
import Manual from './HomeComponents/Manual';
import Footer from './Footer';
import Argentina from './HomeComponents/Argentina';
import HomeProfile from '../../utilsComponents/HomeProfile';
import { useSearchItemQuery } from '../../redux/features/item/itemApi';
import { HiCurrencyDollar } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../utils/getData';
import Modal from '../../utilsComponents/Modal';
import Modal2 from '../../utilsComponents/Modal2';
import { Button, DialogTitle } from '@headlessui/react';
import Divider from '../../utilsComponents/divider';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState({})
    const [quantity, setQuantity] = useState('1')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const open = (data) => {
        setIsOpen(true)
    }

    const close = () => {
        setIsOpen(false)
    }
    const openModal = (data) => {
        setIsModalOpen(true)
        setModalData(data)
        setEmail(localStorage.getItem("criptoEmail"))
    };
    const closeModal = () => {
        setIsModalOpen(false)
        setModalData({})
    };
    const [isMOpen, setIsMOpen] = useState(false)
    const [searchText, setSearchText] = useState('')
    const { data: searchData = [] } = useSearchItemQuery(searchText)
    useEffect(() => {
        AOS.init({
            duration: 600,
            offset: 200,
            easing: 'ease-in',
        });
    }, []);
    const formatedDate = formatDate()
    const handelPayment = () => {
        localStorage.setItem('criptoEmail', email)
        const unique_id = uuid().replace(/-/g, '');
        const unicId = unique_id.slice(0, 18).split('-').join('');
        const orderData = { email, amount: parseFloat(modalData?.price.split(",").join("")) * parseFloat(quantity), unicId, title: modalData.title, formatedDate }
        navigate(`/order/${unicId}`, { state: orderData })
        setIsModalOpen(false)
        setModalData({})
    }
    return (
        <div>
            <div className='bg-slate-800  text-white md:pt-28 '>
                <img className=' md:w-[30%] md:mx-auto shadow-xl rounded-lg ' src="https://imagedelivery.net/8KF1g3-Pi-ph225F906vPQ/f6e61577-982b-4c60-c79e-dbcf5937da00/public" alt="" />
                <p className=' text-3xl font-semibold text-gray-300 text-center mt-8 flex justify-center items-center'>Exploit Wise <span className='flex items-center justify-center text-orange-400 text-2xl gap-1 font-bold'><IoStar className=' ml-3 text-xl'></IoStar> 4.5</span></p>
                <div className='flex relative justify-center items-center gap-x-5 pb-8 mt-6'>
                    <div className='relative '>

                        <input onFocus={() => setIsMOpen(true)} onChange={(e) => setSearchText(e.target.value)} className='bg-slate-700 py-1 pl-10 rounded-md border border-slate-700 focus:border-purple-500 outline-none ' placeholder='Search for a product' type="text" />

                        <IoSearch className='absolute md:left-4 md:top-[9px] left-4 top-2' />
                    </div>
                    <div onMouseEnter={() => setIsMOpen(true)} onMouseLeave={() => setIsMOpen(!isMOpen)} className='absolute top-10 -ms-20 z-30 w-[300px] bg-[#1F2936]'>
                        {
                            isMOpen && searchData?.map(item => <div onClick={() => openModal(item)} className='flex gap-4 p-2 cursor-pointer' key={item._id}>
                                <img className='size-12' src={item.cover_image} alt="" />
                                <div>
                                    <p className='text-xs'>{item.title}</p>
                                    <div className='flex gap-4 mt-2' >
                                        <span className={`text-xs flex gap-2 items-center rounded-lg ${item.stock > 0 ? "text-[#368E5F]" : "bg-[#242D3B]"} `}><HiCurrencyDollar />{item.price} USD
                                        </span>
                                        <div >
                                            {
                                                !item.stock > 0 ? <span className='text-xs text-[#606976]'> Out of Stock</span> : <span className='bg-[#262D48] text-[#555FA1] text-xs px-2 rounded-lg'>{item.stock} in Stock </span>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                    {/* <p className=' flex px-2 py-1 rounded-lg items-center gap-x-3 bg-slate-700 font-semibold'><BsPersonSquare /> Profile</p> */}

                    <HomeProfile></HomeProfile>
                </div>

            </div>

            <Business />

            <Crypto></Crypto>

            <UsaOpen></UsaOpen>

            <EuOpen></EuOpen>

            <Argentina></Argentina>

            <Canada></Canada>

            <UkOpen></UkOpen>

            <Manual></Manual>

            <Asia></Asia>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div>
                    <h2 className="text-lg text-center  font-semibold">
                        {modalData?.title}
                    </h2>
                    <h2 className=" text-center mb-4">
                        Min. Order: 1 / Stock: {modalData?.stock} / Price: ${modalData?.price} USD /
                    </h2>
                    <hr />
                    <div
                        className="  py-4 "
                        dangerouslySetInnerHTML={{ __html: modalData?.description }}
                    />
                    <Divider text={"ORDER"} />
                    <div className="mt-4">
                        {!modalData?.stock == "0" && (
                            <div className="flex items-center">
                                <span className="border border-stone-500 rounded-s-md py-2 px-4">
                                    Quantity
                                </span>
                                <input
                                    type="number"
                                    onChange={(e) => setQuantity(e.target.value)}
                                    defaultValue={1}
                                    className="bg-transparent ps-3 rounded-e-md focus:border-stone-400 outline-none w-full border border-stone-500 py-2"
                                    placeholder="1"
                                />
                            </div>
                        )
                        }
                        <button disabled={modalData?.stock == "0"} onClick={open} className={`bg-blue-600 hover:bg-blue-500 w-full mt-4 py-2 rounded-md ${modalData?.stock === "0" && 'cursor-not-allowed'}`}>
                            Check out for{" "} ${parseFloat(!quantity ? 1 : quantity) * parseFloat(modalData?.price?.split(",").join(""))}
                        </button>
                    </div>

                </div>
            </Modal>
            <Modal2 close={close} isOpen={isOpen} open={open}>
                <DialogTitle as="h3" className="text-base/7 font-medium text-black">
                    Where would you like us to send your purchased goods?
                </DialogTitle>
                <div className="mt-2 text-sm/6 " >
                    <input type="text" defaultValue={email} onChange={(e) => setEmail(e.target.value)} className='w-full py-1 border-2 rounded-md border-stone-500 focus:boder-[#8262dc] outline-none text-black ps-2 placeholder:text-gray-600 placeholder:font-semibold' placeholder="your@gmail.com" />
                </div>
                <div className="mt-4 float-end space-x-3">
                    <Button
                        onClick={close}
                        className={`text-black border hover:border-black rounded-md px-3 py-1`}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handelPayment}
                        className="inline-flex items-center gap-2 rounded-md bg-[#8262dc] py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-[#714DD2] data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    >
                        Checkout
                    </Button>
                </div>
            </Modal2>
        </div>
    );
};

export default Home;