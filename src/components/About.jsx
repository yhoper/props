import React, {useState, useEffect} from 'react'
import {
    Link
  } from "react-router-dom";

const About = () => {
    const urlApi='https://jsonplaceholder.typicode.com/todos/';
    const [list, setList]=useState([])
    useEffect(()=>{
        const listCivilizationsApi = async()=>{
            const data = await fetch(urlApi)
            const users = await data.json()
            console.log(users)
            setList(users);
        }
        
        listCivilizationsApi();
    },[])

    

    

    return (
        <div>
            <p>Nosotros</p>
            <ul>
            {
                list.length===  0 ? ('No hay dato'): (
                    
                    list.map((item)=><li key={item.id}>
                        <Link to={`about/${item.id}`}>
                        {item.title}
                        </Link>
                        </li>)

                )
            }
            </ul>
        </div>
    )
}

export default About
