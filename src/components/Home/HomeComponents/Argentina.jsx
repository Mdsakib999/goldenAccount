import React, { useEffect, useState } from "react";
import CommonTitle from "../../../utilsComponents/CommonTitle";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoCube } from "react-icons/io5";
import { FaAngleRight, FaCircleInfo } from "react-icons/fa6";
import Modal from "../../../utilsComponents/Modal";
import { BsInfoLg } from "react-icons/bs";
import Dot3 from "./Dot3";

const Argentina = () => {
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (data) => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    fetch("cryptoData.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter(
          (product) => product.category === "argentina"
        );
        setCards(filteredData);
      });
    //   .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="bg-slate-900  md:pt-16 relative">
      <div className="flex justify-center items-center">
        <CommonTitle title={"ARGENTINA BANKS"} />

        <div className="mb-4">
          <Dot3></Dot3>
        </div>
      </div>

      {/* w-[90%] mx-auto gap-10 grid md:grid-cols-2 lg:grid-cols-3 lg:mt-8 max-w-7xl pb-5 */}
      <div className="w-[90%] mx-auto md:flex justify-center gap-x-10 lg:mt-8 max-w-7xl  pb-12">
        {cards.map((card) => (
          <div
            data-aos="zoom-in-down"
            key={card.id}
            className="h-[420px] max-w-[400px]  rounded-lg relative overflow-hidden bg-gradient-to-r from-[#1E2836] to-[#10192B] mb-10 md:mb-0"
          >
            <img className="  px-7 pb-7" src={card.Image} alt="" />
            <div className="px-7 ">
              <p className="text-gray-400 font-semibold">{card.title}</p>
              <p className="text-[#166E3B] font-semibold mt-2 flex items-center">
                <AiFillDollarCircle className="text-xl mr-1" /> ${card.price}{" "}
                USD
              </p>
            </div>
            <div className="text-gray-400 bg-[#1E2836] font-semibold grid grid-cols-2 absolute left-0 right-0 bottom-0">
              <span className=" ms-4  flex items-center">
                <IoCube className="text-base  mr-1 " /> {card.availableInStock}
              </span>
              
              <button
                onClick={() => openModal(card)}
                className="flex items-center justify-between ps-3 pe-4 hover:bg-gradient-to-r from-[#473596] to-[#964FE6] py-1"
              >
                <span>Purchase</span>
                <FaAngleRight className="text-xl ml-1" />
              </button>
            </div>
          </div>
        ))}

        <div
          data-aos="zoom-in-down"
          className="  md:max-w-[400px] h-[180px] rounded-lg relative overflow-hidden bg-gradient-to-r from-[#1E2836] to-[#10192B] "
        >
          <div className=" flex items-center bg-gradient-to-r from-[#473596] to-[#964FE6]">
            <div className="w-[45%]  ">
              {" "}
              <BsInfoLg className="text-3xl  ml-[35%]" />{" "}
            </div>

            {/* price */}
            <div className="px-8 pt-6 text-gray-300 bg-gradient-to-r from-[#1E2836] to-[#10192B]  pb-8">
              <p className=" font-semibold text-lg ">
                BBVA Argentina + Card Activated | FA
              </p>
              <p className="text-[#166E3B] font-semibold mt-2 flex items-center text-lg">
                <AiFillDollarCircle className="text-xl mr-1" /> $564.99 USD
              </p>
            </div>
          </div>

          {/* purchase */}
          <div className=" text-gray-400 bg-[#1E2836] font-semibold grid grid-cols-2 absolute left-0 right-0 bottom-0">
            <span className=" ms-4  flex gap-x-1 items-center">
              <IoCube className="text-base  mr-1" /> 1
            </span>
            <button
              // onClick={() => openModal(card)}
              className=" flex items-center justify-between ps-3 pe-4 hover:bg-gradient-to-r from-[#473596] to-[#964FE6] py-1"
            >
              <span>Purchase</span>
              <FaAngleRight className="text-xl ml-1" />
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <h1>hello</h1>
          modal content
          <p>Argentina Bank</p>
          {/* here write modal content */}
        </div>
      </Modal>
    </div>
  );
};

export default Argentina;
