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
        <div className="bg-slate-900">
            <CommonTitle tilte={"BUSINESS ACCOUNT INSTANT"} />
            <div className="flex justify-center">
                <CardOne data={data} />
            </div>
        </div>
    );
};

export default Business;