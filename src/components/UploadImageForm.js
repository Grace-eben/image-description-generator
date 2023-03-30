import React from 'react'
import { useState } from 'react';
import "../css/UploadImage.css";


export default function UploadImageForm(handleCaption) {

    const [preview,setPreview]=useState(null);
    const [error,setError]=useState(false)


    const imageUploadHandler=(e)=>{
            const selectedImg=e.target.files[0];
            const ALLOWED_IMG_TYPES=["image/png","image/jpg","image/jpeg"];
            if(selectedImg && ALLOWED_IMG_TYPES.includes( selectedImg.type)){
                let readFile=new FileReader()
                readFile.onloadend=()=>{
                        setPreview(readFile.result)
                        console.log("image uploaded !!!!")
                }
                readFile.readAsDataURL(selectedImg)
            }
            else{
            console.log("unsupported file")
            setError(true)
            }
    }
   

  return (
    <div>

<form>
            <div className='container'>
                    {error && <p className='errorMsg'>File unsupported</p>}
                    <div className='image-preview'
                    style={{background: preview? `url("${preview}") no-repeat center/cover` : "white",boxShadow:"0px 0px 18px 10px rgba(110, 206, 250,.3)"}}
                    
                    >
                        {!preview && (<div className="image-upload-area">
                       
                       <img src="/images/image_icon.png" alt=""/>
                        <label htmlFor='imgUpload' className='image-upload-btn'>Click here to browse.</label>
                        <input type="file" id="imgUpload" onChange={imageUploadHandler}/>
 
                       
                        </div>
                        )}
                    </div>
                   
            </div>
        </form>
    </div>
  )
}
