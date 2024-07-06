import { useEffect, useState } from "react";
import CardOne from "../../../utilsComponents/CardOne";
import CommonTitle from "../../../utilsComponents/CommonTitle";
import { getData } from './../../../utils/getData';
import Modal from "../../../utilsComponents/Modal";

const Business = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [datas, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await getData("businessAccount")
            // if (Array.isArray(data)) {

            setData([data])
            // }
        }
        fetchData()
    }, [])
    console.log(datas);
    return (
        <div className="bg-slate-900">
            <CommonTitle title={"BUSINESS ACCOUNT INSTANT"} />
            <div className="flex justify-center">
                {
                    datas?.map(data => (
                        <CardOne data={data} openModal={openModal} />
                    ))
                }
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

export default Business;