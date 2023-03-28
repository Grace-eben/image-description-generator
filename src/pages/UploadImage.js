import React, { useState } from 'react'
import Nav from '../components/Nav';
import UploadImageForm from '../components/UploadImageForm';
import "../css/UploadImage.css";
import Caption from '../components/Caption';
import LoadingOverlay from '../components/LoadingOverlay';



export default function UploadImage() {
 
  const[loading,setLoading]=useState(false)
  const loadOverlay=()=>{
      setLoading(true)
  }
  return (

    loading?(<LoadingOverlay/>):(
    <div className="upload-image-page">
      <Nav/>
     
    
      <div className='page-div'>
        <div className='upload-image-area'>
          <UploadImageForm />
        </div>
        <div className='generate-caption-area'>
          <Caption />
        </div>
      
        
      </div>
      <button onClick={loadOverlay}>Click me</button>
    
    </div>
    )
  
  )
}
