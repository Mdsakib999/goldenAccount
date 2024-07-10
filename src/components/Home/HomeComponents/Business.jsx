import { useEffect, useState } from "react";
import CardOne from "../../../utilsComponents/CardOne";
import CommonTitle from "../../../utilsComponents/CommonTitle";
import { getData } from "./../../../utils/getData";
import Modal from "../../../utilsComponents/Modal";
import Dot3 from "./Dot3";

const Business = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (data) => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [datas, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("businessAccount");
      // if (Array.isArray(data)) {

      setData([data]);
      // }
    };
    fetchData();
  }, []);
  console.log(datas);
  return (
    <div className="bg-slate-900 relative">
      <div className="flex justify-center items-center">
        <CommonTitle title={"BUSINESS ACCOUNT INSTANT"} />

        <div className="mb-4">
          <Dot3></Dot3>
        </div>
      </div>

      <div className="flex justify-center">
        {datas?.map((data) => (
          <CardOne data={data} openModal={openModal} />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <h2 className="text-lg text-center  font-semibold">
            Qonto Business | Unlimited VCC | FA | 100 Hours Warranty
          </h2>
          <h2 className=" text-center mb-4">
            Min. Order: 1 / Stock: 1 / Price: $1,149.99 USD /
          </h2>
          <hr />
          <p className="mt-3">
            - Create Unlimited Cards - Create Invoices <br /> - Note From Owner:
            Our Business reached Almost 5 Years & This is the first product we
            ever launched that is above $1,000 & With 100 Hours Warranty. Thank
            you for everything. <br /> Automated Shop! All Items are in Stock,
            We don't do "Contact us to receive your product" BS Warranty: 100
            Hours <br /> Comes with: ✅Mail Access ✅Account Login ✅ ID &
            Business Documents 🔘Number Access (Optional, If it’s required by
            the bank, It will be provided, If not, Then no) <br /> Doesn’t Come
            with: ❌Funds (This is a handmade account) ❌Cracked/Hacked (This is
            made Legally) ❌Anything the description doesn’t mention <br />{" "}
            ⚠️Feel Free to ask us any questions before purchase so there’s no
            confusion between us. We make sure you are getting everything you
            asked for, Or at least aware what you are getting 😃 <br /> 🔔Get
            FREE Access To Our Secret Channel: https://t.me/Pureden_Bot
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Business;
