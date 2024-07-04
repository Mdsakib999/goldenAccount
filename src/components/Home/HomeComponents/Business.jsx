import { useEffect, useState } from "react";
import CardOne from "../../../utilsComponents/CardOne";
import CommonTitle from "../../../utilsComponents/CommonTitle";
import { getData } from './../../../utils/getData';

const Business = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData("businessAccount")
            setData(data)
        }
        fetchData()
    }, [])
    console.log(data);
    return (
        <div >
            <CommonTitle tilte={"𝗕𝗨𝗦𝗜𝗡𝗘𝗦𝗦 𝗔𝗖𝗖𝗢𝗨𝗡𝗧𝗦 𝗜𝗡𝗦𝗧𝗔𝗡𝗧"} />
            <div className="flex justify-center">
                <CardOne data={data} />
            </div>
        </div>
    );
};

export default Business;