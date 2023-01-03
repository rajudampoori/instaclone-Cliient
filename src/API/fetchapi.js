import React from "react";
import { useState,useEffect } from "react";
import './card.css'
import Header from "../header/header";


const Api = ()=> {
    const [data,setdata] = useState([])
    const apiGet = ()=> {
        const httpoptions = {
        method : "GET",
        headers:{
            "Content-Type" : "application/json",
            "Accept":"application/json"
        }
        }
        fetch('https://instaclone-server-jlbz.onrender.com/posts',httpoptions)
        .then((data) => data.json()).then((data)=> {
            console.log(data)
            setdata(data.posts.reverse())
        })
    }
    useEffect(()=> {
        apiGet();
    },[])
return (
    <div>
        <Header/>

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
                <img src={`https://instaclone-server-i6wb.onrender.com/posts/images/${item.PostImage}`} 
                //
                alt='imageicon' />
            </section>
            <section className='card-actions'>
                <span>
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                </span>
                <span>
                    <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                </span>
                <span id="date">
                    {item.date.split("T")[0]}
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
