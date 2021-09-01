import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Machi() {
    let { id } = useParams();
    const [machi, setMachi] = useState({});

    const getOneMachi = (id) => {
        axios.get(`http://localhost:5000/api/machi/get/${id}`)
        .then((res) => {
            setMachi(res.data)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    useEffect(() => {
        getOneMachi(id);
    }, [])

    return(
        <>
         <span>{machi.machi}</span>
        </>
    )
}