import React, { useState } from 'react'
import Nav from '../components/Nav';
import "../css/UploadImage.css";
import LoadingOverlay from '../components/LoadingOverlay';
import { GoInfo } from "react-icons/go";
import axios from "axios"



export default function UploadImage() {
 
 

  const[loading,setLoading]=useState(false)

  const [preview,setPreview]=useState(null);
  const [error,setError]=useState(false)
  const [image,setImage]=useState(null)
 
  const uploadImageHandler=(e)=>{
      console.log(e.target.files)
      setImage(e.target.files[0])
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


  const [caption,setCaption]=useState("")
  const url="https://3484-2401-4900-6291-2bf3-6038-641-c41a-5c15.in.ngrok.io/generateCaption"
   
  const generateCaptionHandler=async(event)=>{
    event.preventDefault()
    setLoading(true)
    const uploaded_file = new FormData()
    uploaded_file.append("uploaded_file",image)

    const config = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    };
    let response = await axios.post(url,uploaded_file,config)
    .then(res=>{
      setLoading(false)
      setCaption(p=>res.data)
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
   
  
  
  }

 

  return (

    loading?(<LoadingOverlay/>):(
    <div className="upload-image-page">
      <Nav/>
     
    
      <div className='page-div'>
        <div className='upload-image-area'>
          
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
                        <input type="file" id="imgUpload" onChange={uploadImageHandler}/>
 
                       
                        </div>
                        )}
                    </div>
                   
            </div>
            <div style={{display:"flex",alignItems:"center", justifyContent:"center"}}>
                    <button className='remove-btn' onClick={()=>setPreview(null)}>Remove Image</button>
                    <button  type="submit"className='caption-cta-btn' onClick={generateCaptionHandler}>Generate Caption</button>
                     </div>
        </form>
    </div>
          
        </div>
        <div className='generate-caption-area'>
        <div className="caption">
      <div>
        <button className="pill-button">
          <GoInfo style={{ marginRight: "10px", fontWeight: "bold" }} />
          Generated caption
        </button>
        <p  className="caption-textarea">{caption}</p>
      </div>
      
    </div>
        </div>
      
        
      </div>
      
    
    </div>
    )
  
  )
}
