import { useEffect, useState } from "react";
import Axios from 'axios';

function useMakeList() {

    const [data, setData] = useState([]);

    console.log("API ",process.env.REACT_APP_API);
    useEffect(() => {
        const fetchdata = async () => {

            const response = await Axios.get(process.env.REACT_APP_API)
            
            setData(response.data.Results);
        }
        fetchdata();
    }, [])
    return { data };
}

export default useMakeList