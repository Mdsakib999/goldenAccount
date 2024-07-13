import React, { useEffect, useState, useRef } from "react";
import CommonTitle from "../../../utilsComponents/CommonTitle";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoCube } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import Modal from "../../../utilsComponents/Modal";
import Dot3 from "./Dot3";
import Tooltip from "../../../utilsComponents/Tooltip";
import Divider from "../../../utilsComponents/divider";
import { IoIosArrowDown } from "react-icons/io";

const Crypto = () => {
  const [cards, setCards] = useState([]);
  const [modatData, setModalData] = useState({});
  const [multimodalOpen, setMultimodalOpen] = useState(false);
  const [multidata, setMultiData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [downState, setDownState] = useState(false);
  const openModal = (id) => {
    setIsModalOpen(true);
    fetch("discription.json")
      .then((res) => res.json())
      .then((data) => {
        const filterData = data.find((item) => item.cryptoId == id);
        setModalData(filterData);
      });
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setMultiData({});
    setMultimodalOpen(false);
    setDownState(false);
  };

  // DATA facing
  useEffect(() => {
    fetch("cryptoData.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter(
          (product) => product.category === "crypto"
        );
        setCards(filteredData);
      });
    //   .catch((error) => console.error('Error fetching data:', error));
  }, []);
  console.log(multidata);

  return (
    <>
      <div className="bg-slate-900  md:pt-16 relative ">
        <div className="flex justify-center items-center">
          <CommonTitle title={"CRYPTO OPEN-UP"} />

          <div className="mb-4">
            <Dot3></Dot3>
          </div>
        </div>

        {/* 3 dot section */}
        {/* <div className="absolute md:right-[36%] right-[8%] lg:right-[32%] top-[30px] md:top-[107px]">
          <Dot3></Dot3>
        </div> */}

        <div className="w-[90%] mx-auto gap-10 grid md:grid-cols-2 lg:grid-cols-3 lg:mt-8 max-w-7xl pb-5">
          {cards.map((card) => (
            <div
              data-aos="zoom-in-down"
              key={card.id}
              className="h-[420px] max-w-[400px]  rounded-lg relative overflow-hidden bg-gradient-to-r from-[#1E2836] to-[#10192B]"
            >
              <img className="  px-7 pb-7" src={card.Image} alt="" />
              <div className="px-7">
                <p className="text-gray-400 font-semibold">{card.title}</p>
                <p className="text-[#166E3B] font-semibold mt-2 flex items-center">
                  <AiFillDollarCircle className="text-xl mr-1" /> ${card.price}{" "}
                  USD
                </p>
              </div>
              <div className=" text-gray-400 bg-[#1E2836] font-semibold grid grid-cols-2 absolute left-0 right-0 bottom-0">
                {/* <Tooltip availableInStock={card.availableInStock} message={`There's currently ${card.availableInStock} item left in stock `}> */}

                <Tooltip
                  availableInStock={card.availableInStock}
                  message={
                    card.availableInStock === 0
                      ? "No more items left in stock, check back later"
                      : `There's currently ${card.availableInStock} item${
                          card.availableInStock} left in stock`
                  }
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
                  onClick={() => openModal(card.id)}
                  className={`flex items-center justify-between ps-3 pe-4 py-1 ${card.availableInStock == 0 ? "hover:bg-gradient-to-r from-[#33393a] to-[#615f64]" : "hover:bg-gradient-to-r from-[#473596] to-[#964FE6]"}`}
                >
                  <span>Purchase</span>
                  <FaAngleRight className="text-xl ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="text-slate-300">
            {multimodalOpen ? (
              <div>
                <p className="text-center text-2xl text">
                  {multidata.cryptoTitle}
                </p>
                <hr className="my-8" />
                <div className="flex gap-6">
                  <p>{multidata?.title}</p>
                  <p>
                    ${multidata.price} USD / {multidata.stock} in stock
                  </p>
                </div>
                <div>
                  {/* header text */}
                  {multidata.discription.whayNeed && (
                    <div>
                      <p className="my-4 text-xl">
                        Why Do You Need This Anyways?
                      </p>
                      <div>
                        {multidata.discription.whayNeed.map((item) => (
                          <li className="py-2 text-lg">{item}</li>
                        ))}
                      </div>
                    </div>
                  )}
                  {multidata.discription.headerText && (
                    <p className="py-4 text-xl">
                      {multidata.discription.headerText}
                    </p>
                  )}
                  {multidata.discription.comes_with && (
                    <p className="text-xl my-4">
                      {multidata.discription.comes_with}
                    </p>
                  )}
                  {multidata.discription.middelText && (
                    <p className="text-xl my-4">
                      {multidata.discription.middelText}
                    </p>
                  )}
                  {multidata.discription.country && (
                    <p className="text-xl my-4">
                      {" "}
                      Country:{multidata.discription.country}
                    </p>
                  )}
                  {multidata.discription.afterPurchase && (
                    <div>
                      <p className="text-xl my-4">
                        After Purchase what do I do?
                      </p>
                      {multidata.discription.afterPurchase.map((item) => (
                        <li className="text-lg my-4">{item}</li>
                      ))}
                    </div>
                  )}
                  {multidata.discription.YouGet && (
                    <p className="text-xl my-4">
                      you will get: {multidata.discription.YouGet}
                    </p>
                  )}
                  {multidata.discription.YouNotGet && (
                    <p className="text-xl my-4">
                      What you will not get{multidata.discription.YouNotGet}
                    </p>
                  )}
                  {multidata.discription.specialNote && (
                    <p className="text-xl my-4">
                      Special Note :{multidata.discription.specialNote}
                    </p>
                  )}
                  {multidata.discription.doesntComeWith && (
                    <p className="text-xl my-4">
                      Doesn’t Come with : {multidata.discription.doesntComeWith}
                    </p>
                  )}
                  {multidata.discription.footerText && (
                    <p className="text-xl my-4">
                      What you will not get{multidata.discription.footerText}
                    </p>
                  )}
                  {multidata.discription.telegramLink && (
                    <div>
                      {multidata.discription.telegramLink.map((item) => (
                        <div className="text-xl py-4">
                          <p>🔔Get FREE Access To Our Secret Channel:</p>
                          <a
                            className="text-white hover:text-blue-300"
                            href={item}
                          >
                            {item}
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div>
                {modatData?.cryptoData?.length > 1 && (
                  <div>
                    <p className="text-2xl text-center py-4 pb-4 ">
                      {modatData?.cryptoTitle}
                    </p>
                    <Divider text={"ORDER"} />
                    <div
                      onClick={() => setDownState(!downState)}
                      className="border flex justify-between items-center p-2 text-lg border-stone-400 mt-8 text cursor-pointer  rounded-md"
                    >
                      <p>
                        Choose one of {modatData?.cryptoData?.length} options
                      </p>
                      <IoIosArrowDown />
                    </div>
                    {!downState && (
                      <div className="mt-2">
                        <button className="w-full bg-blue-900 py-2 rounded-md">
                          Please select one Opotion above
                        </button>
                      </div>
                    )}
                    <div className=" mt-2">
                      {downState && (
                        <div className=" bg-[#11192C] p-4 rounded-md space-y-3">
                          {modatData.cryptoData.map((item) => (
                            <div
                              onClick={() => {
                                setMultiData({
                                  ...item,
                                  cryptoTitle: modatData.cryptoTitle,
                                });
                                setMultimodalOpen(true);
                              }}
                              className=" cursor-pointer flex justify-between gap-2"
                            >
                              <p className="">{item.title}</p>
                              <span
                                className={`flex h-[30px]  px-3 items-center justify-center border text-sm py-0 rounded-lg ${
                                  item.stock > 0
                                    ? "text-green-600  border-green-600"
                                    : "text-slate-500"
                                }`}
                              >
                                {" "}
                                <AiFillDollarCircle />
                                {item.price}USD
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Crypto;
