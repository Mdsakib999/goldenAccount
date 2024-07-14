import React, { useEffect, useState } from "react";
import CommonTitle from "../../../utilsComponents/CommonTitle";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoCube } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import Modal from "../../../utilsComponents/Modal";
import { FaCircleInfo } from "react-icons/fa6";
import { BsInfoLg } from "react-icons/bs";
import Dot3 from "./Dot3";
import Tooltip from "../../../utilsComponents/Tooltip";

const Manual = () => {
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (data) => {
    setModalContent(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  useEffect(() => {
    fetch("cryptoData.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter(
          (product) => product.category === "manual"
        );
        setCards(filteredData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="bg-slate-900 md:pt-12 relative">
      <div className="flex justify-center items-center">
        <CommonTitle title={"MANUAL DELIVERY ITEMS"} />
        <div className="mb-4">
          <Dot3></Dot3>
        </div>
      </div>

      <div className="w-[90%] mx-auto md:flex justify-center gap-x-10 lg:mt-8 md:max-w-7xl pb-12">
        {cards.map((card) => (
          <div
            key={card.id}
            data-aos="zoom-in-down"
            className=" h-[200px] md:max-w-[400px]  rounded-lg relative overflow-hidden bg-gradient-to-r from-[#1E2836] to-[#10192B]  mb-10 md:mb-0"
          >
            <div className=" flex items-center pt-6">
              <img className=" px-3 w-[45%] " src={card.Image} alt="" />

              {/* price div added*/}
              <div className="px-3 ">
                <p className="text-gray-300 font-semibold ">{card.title}</p>
                <p className="text-[#166E3B] font-semibold mt-2 flex items-center">
                  <AiFillDollarCircle className="text-xl mr-1" /> ${card.price}{" "}
                  USD
                </p>
              </div>
            </div>

            {/* purchase */}
            <div className=" text-gray-400 bg-[#1E2836] font-semibold grid grid-cols-2 absolute left-0 right-0 bottom-0">
              <Tooltip
                availableInStock={card.availableInStock}
                message={`There's currently ${card.availableInStock} item left in stock `}
              >
                <button
                  className={`ms-4 flex items-center ${
                    !card.availableInStock == 0
                      ? "hover:text-[#6366F1]"
                      : "hover:text-red-700"
                  }`}
                >
                  <IoCube className="text-base mr-1" />
                  {card.availableInStock}
                </button>
              </Tooltip>
              <button
                onClick={() => openModal(card)}
                className=" flex items-center justify-between ps-3 pe-4 hover:bg-gradient-to-r from-[#473596] to-[#964FE6] py-1"
              >
                <span>More Info</span>
                <FaAngleRight className="text-xl ml-1" />
              </button>
            </div>
          </div>
        ))}

        <div
          data-aos="zoom-in-down"
          className="md:max-w-[400px] rounded-lg relative overflow-hidden bg-gradient-to-r from-[#1E2836] to-[#10192B]"
        >
          <div className="flex items-center bg-gradient-to-r from-[#473596] to-[#964FE6]">
            <div className="w-[55%]">
              <BsInfoLg className="text-3xl ml-[35%]" />
            </div>
            <div className="px-8 pt-6 pb-8 mb-8 text-gray-300 bg-gradient-to-r from-[#1E2836] to-[#10192B]">
              <p className="font-semibold text-lg">
                Information On Manual Delivery:
              </p>
              <p className="mt-3">
                In this Category, Products are Delivered Manually to E-mail.
              </p>
              <p className="mt-4 mb">Q&A: How Long Till I Receive?</p>
              <ul className="list-disc list-inside mt-3 mb-4">
                <li>6 Hours To 24 Hours</li>
              </ul>
              <p>What Is The Warranty On These?</p>
              <ul className="list-disc list-inside mt-3">
                <li>12 Hours</li>
              </ul>
              <p className="mt-4 flex items-center gap-x-3 text-blue-600">
                <FaCircleInfo /> Info
              </p>
            </div>
          </div>

          <div className="text-gray-400 bg-[#1E2836] font-semibold grid grid-cols-2 absolute left-0 right-0 bottom-0">
            <span className="ms-4 flex items-center w-[50%]"></span>
            <button
              onClick={() => openModal("InfoModal")}
              className="flex items-center justify-between ps-3 pe-4 hover:bg-gradient-to-r from-[#473596] to-[#964FE6] py-2"
            >
              <span>More Info</span>
              <FaAngleRight className="text-xl ml-1" />
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} >
        <div className="relative p-3 text-gray-300 ">
          {typeof modalContent === "string" ? (
            <div>
              <p className="text-center mb-3 text-xl">
                Information On Manual Delivery:
              </p>
              <hr />
              <div className=" pt-6  text-gray-300 ">
                
                <p className="mt-3">
                  In this Category, Products are Delivered Manually to E-mail.
                </p>
                <p className="mt-6 ">Q&A: How Long Till I Receive?</p>
                <ul className="list-disc list-inside mt-3 mb-4">
                  <li>6 Hours To 24 Hours</li>
                </ul>
                <p className="mt-6">What Is The Warranty On These?</p>
                <ul className="list-disc list-inside mt-3">
                  <li>12 Hours</li>
                </ul>

                <p className="mt-6 ">What Will I receive?</p>
                <ul className="list-disc list-inside mt-3 mb-8">
                  <li>In Email You used to Purchase</li>
                </ul>
                
                <p>By Purchasing You Agree to our Terms of Service: goldenaccount.io/terms</p>
              </div>

              <button
                onClick={closeModal}
                className="bg-slate-50 px-4 py-2 text-black rounded-md font-semibold mt-7  "
              >
                Close
              </button>
            </div>
          ) : (
            modalContent && (
              // This is for div-1 (dynamic data)
              <div>
                <h2 className="text-center font-semibold mb-3 ">
                  {modalContent.title}
                </h2>
                <hr />
                <p>Modal content based on the card data: </p>
              </div>
            )
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Manual;

// <button className="bg-slate-50 px-3 py-1 text-black rounded-md font-semibold mt-10" onClick={closeModal} >Close</button>
