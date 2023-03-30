import React, { useState } from 'react'
import axios from "axios"

export default function ImageUpload() {

    const [image,setImage]=useState(null);
    const uploadImageHandler=(e)=>{
        console.log(e.target.files)
        setImage(e.target.files[0])
    }

    const url="https://3484-2401-4900-6291-2bf3-6038-641-c41a-5c15.in.ngrok.io/generateCaption"

    const generateCaptionHandler=async(event)=>{
        event.preventDefault()
        const uploaded_file = new FormData()
        uploaded_file.append("uploaded_file",image)

        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        };
        let response = await axios.post(url,uploaded_file,config)
        .then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
        console.log(response)    }
  return (
    <div>
        <input type="file" name="uploaded_file" onChange={uploadImageHandler}/>
        <button onClick={generateCaptionHandler}>Generate Caption</button>
    </div>
  )
}
