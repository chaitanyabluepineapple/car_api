import { useEffect, useState } from "react";
import Axios from 'axios';

function useMakeList() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log("API ",process.env.REACT_APP_API);
    useEffect(() => {
        setLoading(true);
        const fetchdata = async () => {

            const response = await Axios.get(process.env.REACT_APP_API)

            setData(response.data.Results);
            setLoading(false);
            console.log("Custome Hooks",loading)
        }
        fetchdata();
        
    }, []);
    return { loading , data };
}

export default useMakeList