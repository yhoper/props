import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';

const Aboutdetail = () => {
    
    const {id}=useParams();

    const urlApi=`https://jsonplaceholder.typicode.com/todos/${id}`;
    const [detail, setDetail]=useState([])
    useEffect(()=>{
        const getCivilizationDetailApi = async()=>{
            const data = await fetch( urlApi)
            const resData = await data.json()
            console.log(resData)
            setDetail(resData);
        }

        getCivilizationDetailApi();
    },[id])

    

    return (
        <div>
            <hr />
            <h5>Detalle: </h5>
            <h6>{detail.title}</h6>
            <h6>{detail.id}</h6>
            <hr />
        </div>
    )
}

export default Aboutdetail
