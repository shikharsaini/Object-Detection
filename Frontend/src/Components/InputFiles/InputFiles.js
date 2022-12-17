import React, { useState } from "react";
import './InputFiles.css';
import axios from "axios";
function InputFiles(props){
    const [img , setImg]=useState();
    const [image, setImage]=useState();
    const baseURL = "http://127.0.0.1:5000/Mask";
    const handleSubmit=()=>{
        props.setSubmitClicked(true);
        props.setImageFile(img);
        const data = new FormData();
        data.append('file',image);
        axios.post(baseURL,data).then((req,response) => {
            console.log(req);
            console.log(response);
            GetImage();
        });
    }
    function GetImage(){
        
        axios.get(baseURL,{responseType: 'blob' }).then((response)=>{
            props.setResultImage(URL.createObjectURL(response.data))
        })
    }
    const handleChange=(e)=>{
        console.log(e.target.files[0]);
        setImg(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0]);
        props.setFilename(e.target.files[0]['name'])
    }
    return(
        <div style={{width:"100%"}}>
            <form>
                <div className="form-group input">
                <label htmlFor="exampleFormControlFile1" style={{marginRight:"1%"}}>Select File From Here : </label>
                <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={handleChange} />
                <button type="button" class="btn buttons" onClick={handleSubmit}>Run Model</button>
                </div>
            </form>
        </div>
    );
}
export default InputFiles;