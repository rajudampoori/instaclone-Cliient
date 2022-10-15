import React from "react";
import { useState } from 'react'
import Axios from 'axios'
import './login.css'
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
const Login = () => {
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState()
    const [myfile, setMyfile] = useState("")

    const navigate = useNavigate()


    // const handleFile = (e) => {
    //     console.log(e.target.files, "$$$$")
    //     console.log(e.target.files[0], "$$$$")
    //     if (e.target && e.target.files[0]) {
    //         formdata.append('file', e.target.files[0])
    //     }
    // }

    const handleUpload = async (e) => {
        e.preventDefault();
        setMyfile("myfile...")
        const formdata = new FormData();
        formdata.append("name", name);
        formdata.append("location", location);
        formdata.append("description", description)
        formdata.append("image", image)
        await Axios.post('https://dashboard.heroku.com/apps/instaclone-app-for-posting', (formdata))
        .then(res => { console.log(res) })
            .catch(error => {
                console.log(error)
            })
        navigate("/postview");
        setMyfile("")
    }

    return (
        <div className="login-container">
<Header/>
            <form encType="multipart/form-data">
                <div className="inputa">
                    <div className="i1">
                        <input type="file" name="image"
                            onChange={(e) => { setImage(e.target.files[0]) }} placeholder="Browse" />
                    </div>
                    {/* <div>
                        <button className="btn">Browse</button>
                    </div> */}
                </div>

                <div className="inputb">
                    <div>
                        <input type="text" name="name" onChange={(e) => { setName(e.target.value) }}
                            placeholder="Author" />
                    </div>
                    <div>
                        <input type="text" name="location" onChange={(e) => { setLocation(e.target.value) }}
                            placeholder="Location" />
                    </div>
                </div>

                <div className="inputc">
                    <input type="text" placeholder="description" name="description"
                        onChange={(e) => { setDescription(e.target.value) }} />
                </div>

                <div className="inputd">
                    <button className="btn2" onClick={(e) => { handleUpload(e) }}>Post</button>
                </div>
                <label>{myfile === "" ? "" : myfile}</label>
            </form>
        </div>
    )
}
export default Login;