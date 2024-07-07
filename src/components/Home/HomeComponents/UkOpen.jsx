import React, { useEffect, useState } from "react";
import CommonTitle from "../../../utilsComponents/CommonTitle";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoCube } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import Modal from "../../../utilsComponents/Modal";


const UkOpen = () => {
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (data) => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  useEffect(() => {
    fetch("cryptoData.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter(
          (product) => product.category === "uk"
        );
        setCards(filteredData);
      });
    //   .catch((error) => console.error('Error fetching data:', error));
  }, []);

  console.log(cards);

  return (
    <div className="bg-slate-900 md:pt-10">
      <CommonTitle title={"UK OPEN-UP INSTANT"} />

      <div className="w-[90%] mx-auto md:flex justify-center lg:mt-8 max-w-7xl  pb-12">
        {cards.map((card) => (
          <div
            key={card.id}
            data-aos="zoom-in-down"
            className=" h-[200px] md:max-w-[400px]  rounded-lg relative overflow-hidden bg-gradient-to-r from-[#1E2836] to-[#10192B]"
          >
            <div className=" flex items-center pt-6">
              <img className=" px-3 w-[45%] " src={card.Image} alt="" />

              {/* price */}
              <div className="px-3 ">
                <p className="text-gray-300 font-semibold ">{card.title}</p>
                <p className="text-[#166E3B] font-semibold mt-2 flex items-center">
                  <AiFillDollarCircle className="text-xl mr-1" /> ${card.price}{" "}
                  USD
                </p>
              </div>
            </div>

            {/* purchase */}
            <div className="  text-gray-400 bg-[#1E2836] font-semibold grid grid-cols-2 absolute left-0 right-0 bottom-0">
              <span className=" ms-4  flex items-center">
                <IoCube className="text-base  mr-1" /> {card.availableInStock}
              </span>
              <button onClick={() => openModal(card)} className=" flex items-center justify-between ps-3 pe-4 hover:bg-gradient-to-r from-[#473596] to-[#964FE6] py-1">
                <span>Purchase</span>
                <FaAngleRight className="text-xl ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} >
        <div>
          <h1>hello</h1>
          modal content


          {/* here write modal content */}
        </div>
      </Modal>
    </div>
  );
};

export default UkOpen;