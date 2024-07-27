import React, { useEffect, useState } from "react";
import CommonTitle from "../../../utilsComponents/CommonTitle";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoCube } from "react-icons/io5";
import { FaAngleRight, FaCircleInfo } from "react-icons/fa6";
import Modal from "../../../utilsComponents/Modal";
import { BsInfoLg } from "react-icons/bs";
import Dot3 from "./Dot3";
import Tooltip from "../../../utilsComponents/Tooltip";
import Divider from "../../../utilsComponents/divider";

const Argentina = () => {
  const [cards, setCards] = useState([]);
  const [modatData, setModalData] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [multimodalOpen, setMultimodalOpen] = useState(false);
  const [multidata, setMultiData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [downState, setDownState] = useState(false);
  const openModal = (d) => {
    // console.log(id);
    setIsModalOpen(true);
    fetch("description.json")
      .then((res) => res.json())
      .then((data) => {
        const filterData = data.find((item) => item.cryptoId == d.id);
        setModalData(filterData);
      });
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setMultiData({});
    setMultimodalOpen(false);
    setDownState(false);
    setQuantity(0);
  };

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
              <Tooltip availableInStock={card.availableInStock} message={`There's currently ${card.availableInStock} item left in stock `}>
                <button className={`ms-4 flex items-center ${!card.availableInStock == 0 ? "hover:text-[#6366F1]" : 'hover:text-red-700'}`}>
                  <IoCube className="text-base mr-1" />
                  {card.availableInStock}
                </button>
              </Tooltip>
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
                <AiFillDollarCircle className="text-xl mr-1" /> $564.99
                USD
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
        <div className="text-slate-300">
          {multimodalOpen ? (
            <></>
          ) : (
            <div>
              {modatData?.cryptoData?.length > 1 ? (
                <></>
              ) : (
                <div>
                  <p className="text-xl text-center">
                    {modatData?.cryptoTitle}
                  </p>
                  <div className="text-center text-sm flex justify-center">
                    <span>min. Order:1/</span>
                    <p>Stock: {modatData?.cryptoData?.stock} /</p>
                    <p>Price:{modatData?.cryptoData?.price}</p>
                  </div>
                  <hr className="bg-slate-600 my-8" />
                  <div>
                    {/* header text */}
                    {
                      modatData?.cryptoData?.discription?.topUp && (
                        // <p className="text-xl">{modatData?.cryptoData?.discription?.deliveryThese}</p> //need change todo
                        modatData?.cryptoData?.discription?.topUp?.map(item => <li className="text-xl py-1">{item}</li>)
                      )
                    }
                    {
                      modatData?.cryptoData?.discription?.deliveryThese && (
                        <p className="text-xl">{modatData?.cryptoData?.discription?.deliveryThese}</p> //need change todo
                      )
                    }
                    <p>

                      {
                        modatData?.cryptoData?.discription?.whay$ && (
                          <p> What{modatData?.cryptoData?.discription.whay$}</p> //need change todo
                        )
                      }
                    </p>
                    <p>

                      {
                        modatData?.cryptoData?.discription?.threeWords && (
                          <p> three words {modatData?.cryptoData?.discription?.threeWords}</p> //need change todo
                        )
                      }
                    </p>
                    <p>
                      {
                        modatData?.cryptoData?.discription?.threeWords && (
                          modatData?.cryptoData?.discription?.threeWords.map(item => <p>{item}</p>)
                        )
                      }
                    </p>

                    {modatData?.cryptoData?.discription?.whayNeed && (
                      <div>
                        <p className="my-4 text-xl">
                          Why Do You Need This Anyways?
                        </p>
                        <div>
                          {modatData?.cryptoData?.discription?.whayNeed?.map(
                            (item) => (
                              <li className="py-2 text-lg">{item}</li>
                            )
                          )}
                        </div>
                      </div>
                    )}
                    {modatData?.cryptoData?.discription?.headerText && (
                      <p className="py-4 text-xl">
                        {modatData?.cryptoData?.discription?.headerText}
                      </p>
                    )}
                    {modatData?.cryptoData?.discription?.comes_with && (
                      <p className="text-xl my-4">
                        Comes with: {modatData?.cryptoData?.discription?.comes_with}
                      </p>
                    )}
                    {modatData?.cryptoData?.discription?.middelText && (
                      <p className="text-xl my-4">
                        {modatData?.cryptoData?.discription?.middelText}
                      </p>
                    )}
                    {modatData?.cryptoData?.discription?.country && (
                      <p className="text-xl my-4">
                        {" "}
                        Country:{modatData?.cryptoData?.discription?.country}
                      </p>
                    )}
                    {modatData?.cryptoData?.discription?.afterPurchase && (
                      <div>
                        <p className="text-xl my-4">
                          After Purchase what do I do?
                        </p>
                        {modatData?.cryptoData?.discription?.afterPurchase.map(
                          (item) => (
                            <li className="text-lg my-4">{item}</li>
                          )
                        )}
                      </div>
                    )}
                    {modatData?.cryptoData?.discription?.YouGet && (
                      <p className="text-xl my-4">
                        you will get:{" "}
                        {modatData?.cryptoData?.discription?.YouGet}
                      </p>
                    )}
                    {modatData?.cryptoData?.discription?.YouNotGet && (
                      <p className="text-xl my-4">
                        What you will not get
                        {modatData?.cryptoData?.discription?.YouNotGet}
                      </p>
                    )}
                    {modatData?.cryptoData?.discription?.specialNote && (
                      <p className="text-xl my-4">
                        Special Note :
                        {modatData?.cryptoData?.discription?.specialNote}
                      </p>
                    )}
                    {modatData?.cryptoData?.discription?.doesntComeWith && (
                      <p className="text-xl my-4">
                        Doesn’t Come with :{" "}
                        {modatData?.cryptoData?.discription?.doesntComeWith}
                      </p>
                    )}
                    {modatData?.cryptoData?.discription?.footerText && (
                      <p className="text-xl my-4">
                        What you will not get
                        {modatData?.cryptoData?.discription?.footerText}
                      </p>
                    )}

                    {/* -- end */}
                    {modatData?.cryptoData?.discription?.telegramLink && (
                      <div>
                        {modatData?.cryptoData?.discription?.telegramLink.map(
                          (item) => (
                            <div className="text-xl py-4">
                              <p>🔔Get FREE Access To Our Secret Channel:</p>
                              <a
                                className="text-white hover:text-blue-300"
                                href={item}
                              >
                                {item}
                              </a>
                            </div>
                          )
                        )}
                      </div>
                    )}
                    <Divider text={"ORDER"} />

                    <div className=" mt-2">
                      <div>
                        {modatData?.cryptoData?.stock > 0 && (
                          <div div className="flex items-center">
                            <span className="border border-stone-500 rounded-s-md py-2 px-4">
                              Quantity
                            </span>
                            <input
                              required
                              onChange={(e) => setQuantity(e.target.value)}
                              type="number"
                              className="bg-transparent ps-3 rounded-e-md focus:border-stone-400 outline-none w-full border border-stone-500 py-2"
                              defaultValue={multidata.stock}
                              placeholder="1"
                            />
                          </div>
                        )}
                        <button
                          className={` to-blue-600 ${modatData?.cryptoData?.stock <= 0
                            ? "cursor-not-allowed bg-blue-900 "
                            : ""
                            }  bg-blue-500 hover:bg-blue-600 w-full mt-4 py-2 rounded-md font-semibold`}
                        >
                          Check out for {" $"}
                          {quantity > 1
                            ? quantity * modatData?.cryptoData?.price
                            : modatData?.cryptoData?.price}{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Argentina;
