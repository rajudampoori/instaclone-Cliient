import React from "react";
import { useState,useEffect } from "react";
import './fetchapi.css'
import Header from "../header/header";
import { json } from "react-router-dom";
const Api = ()=> {
    const [data,setdata] = useState([])
    const apiGet = ()=> {
        const httpoptions = {
        method : "GET",

        }
        fetch('https://jsonplaceholder.typicode.com/posts/1',)
        .then((response) => response.json()).then((data)=> {
            setdata(data.data.reverse())
        })
    }
    useEffect(()=> {
        apiGet();
    },[])
return (
    <div>
        <Header/>

        {/* My API <br/>
        <button onClick={apiGet}>Fetch Api</button>
        <br/> */}
        {/* <pre>
        {JSON.stringify(data,null,2)}
        </pre> */}
      {data.map((item,i)=> {
        return (
            <section key={i} className="card">

            <section className='card-header'>
                <div className='card-header_name'>{item.name}</div>
                <div className='card-header_location'>{item.location}</div>
                <span>
                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                </span>
            </section>

            <section className="card-image">
                <img src={item.PostImage} alt='imageicon' />
            </section>

            <section className='card-actions'>
                <span>
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                </span>
                <span>
                    <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                </span>
                <span>
                    {item.date}
                </span>
            </section>

            <section className='likes'>
                {item.likes} Likes
            </section>

            <section className='description'>
                {item.description}
            </section>

        </section>
        )
      })}

    </div>
)
}
export default Api;
// https://jsonplaceholder.typicode.com/posts/1