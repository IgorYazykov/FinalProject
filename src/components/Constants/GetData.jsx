import { useEffect, useState } from "react";
import axios from "axios";

export default function GetData () {
    let [topics, setUsers] = useState([]);
    useEffect(() => {
        (async () =>{
            const { data } = await axios.get("https://63f4faff3f99f5855dbb7d69.mockapi.io/api/quizl");
            setUsers(data);
        })();
    },[]);
    return topics 
}
