import React from "react";
import { useState } from "react"
import Axios from 'axios'
import Header from "../header/header";

// import Card from "../card/card";

import Api from "../API/fetchapi";
const Postview = () => {
    const [posts, setPosts] = useState([])
    // useEffect(() => {
    //     fetch("http://localhost:3000/postview").then((res) => { res.json() }).then((data) => {
    //         setPosts(data)
    //     }).catch((err) => {
    //         if (err) {
    //             console.log(err)
    //         }
    //     })
    // }, [])
    return (
        <div>
            {/* <Header /> */}
            <Api />
            <div className="postview-container">
                {/* {posts.map((post, i) => {
                    return <Card post={post} key={i} />
                })} */}
            </div>
        </div>
    )
}
export default Postview;