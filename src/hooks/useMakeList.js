import { useEffect, useState } from "react";
import Axios from 'axios';

function useMakeList() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {

            const response = await Axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json")

            console.log(response.data.Results);

            console.log(response);

            setData(response.data.Results);
        }
        fetchdata();
    }, [])
    return { data };
}

export default useMakeList