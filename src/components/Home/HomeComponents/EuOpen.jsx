import { useState } from "react";
import CommonTitle from "../../../utilsComponents/CommonTitle";
import { formatDate } from "./../../../utils/getData";
import Modal from "../../../utilsComponents/Modal";
import Dot3 from "./Dot3";
import { useGetItemByCategoryQuery } from "../../../redux/features/item/itemApi";
import Divider from "../../../utilsComponents/divider";
import Modal2 from "../../../utilsComponents/Modal2";
import { Button, DialogTitle } from "@headlessui/react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { AiFillDollarCircle } from "react-icons/ai";
import Tooltip from "../../../utilsComponents/Tooltip";
import { IoCube } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";

const EuOpen = () => {
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
  const formatedDate = formatDate()
  const { data: fetchData = [] } = useGetItemByCategoryQuery('euOpen', { refetchOnFocus: true })
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
    <div className="bg-slate-900  md:pt-16 relative ">
      <div className="flex justify-center items-center">
        <CommonTitle title={"𝗘𝗨 𝗢𝗣𝗘𝗡-𝗨𝗣 𝗜𝗡𝗦𝗧𝗔𝗡𝗧"} />

        <div className="mb-4">
          <Dot3></Dot3>
        </div>
      </div>

      {/* 3 dot section */}
      {/* <div className="absolute md:right-[36%] right-[8%] lg:right-[32%] top-[30px] md:top-[107px]">
      <Dot3></Dot3>
    </div> */}

      <div className="w-[90%] mx-auto gap-10 grid md:grid-cols-2 lg:grid-cols-3 lg:mt-8 max-w-7xl pb-5">
        {fetchData?.map((card) => (
          <div
            data-aos="zoom-in-down"
            key={card._id}
            className="h-[420px] max-w-[400px]  rounded-lg relative overflow-hidden bg-gradient-to-r from-[#1E2836] to-[#10192B]"
          >
            <img className="  px-7 pb-7" src={card.cover_image} alt="" />
            <div className="px-7">
              <p className="text-gray-400 font-semibold">{card.title}</p>
              <p className="text-[#166E3B] font-semibold mt-2 flex items-center">
                <AiFillDollarCircle className="text-xl mr-1" /> ${card.price}{" "}
                USD
              </p>
            </div>
            <div className="text-gray-400 bg-[#1E2836] font-semibold grid grid-cols-2 absolute left-0 right-0 bottom-0">
              <Tooltip
                stock={card.sotck}
                message={
                  card.stock === 0
                    ? "No more items left in stock, check later"
                    : `There's currently ${card.stock} items left in stock`
                }
              >
                <button
                  className={`ms-4 flex items-center ${!card.stock == 0
                    ? "hover:text-[#6366F1]"
                    : "hover:text-red-700"
                    }`}
                >
                  <IoCube className="text-base mr-1" />
                  {card.stock}
                </button>
              </Tooltip>
              <button
                onClick={() => openModal(card)}
                className={`flex items-center justify-between ps-3 pe-4 py-1 ${card.stock === 0
                  ? "hover:bg-gradient-to-r from-[#33393a] to-[#615f64]"
                  : "hover:bg-gradient-to-r from-[#473596] to-[#964FE6]"
                  }`}
              >
                <span>
                  {card.stock === 0 ? "Out of stock" : "Purchase"}
                </span>
                <FaAngleRight className="text-xl ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
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
            dangerouslySetInnerHTML={{ __html: modalData.description }}
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
        <form onSubmit={handelPayment}>
          <div className="mt-2 text-sm/6 " >
            <input type="email" required defaultValue={email} onChange={(e) => setEmail(e.target.value)} className='w-full py-1 border-2 rounded-md border-stone-500 focus:boder-[#8262dc] outline-none text-black ps-2 placeholder:text-gray-600 placeholder:font-semibold' placeholder="your@gmail.com" />
          </div>
          <div className="mt-4 float-end space-x-3">
            <Button
              onClick={close}
              className={`text-black border hover:border-black rounded-md px-3 py-1`}>
              Cancel
            </Button>
            <button
              className="inline-flex items-center gap-2 rounded-md bg-[#8262dc] py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-[#714DD2] data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
            >
              Checkout
            </button>
          </div>
        </form>
      </Modal2>
    </div>
  );
};

export default EuOpen;
