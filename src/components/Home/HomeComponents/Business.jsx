import { useState } from "react";
import CardOne from "../../../utilsComponents/CardOne";
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

const Business = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({})
  const [quantity, setQuantity] = useState('')
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
  const { data: busnessData = [] } = useGetItemByCategoryQuery('businessAccount', { refetchOnFocus: true })
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
    <div className="bg-slate-900 relative">
      <div className="flex justify-center items-center">
        <CommonTitle title={"BUSINESS ACCOUNT INSTANT"} />
        <div className="mb-4">
          <Dot3></Dot3>
        </div>
      </div>

      <div className="flex justify-center">
        {busnessData?.map((data) => (
          <CardOne data={data} openModal={openModal} />
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

export default Business;
