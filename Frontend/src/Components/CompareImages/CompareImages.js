import React, { useEffect, useState } from "react";
import './CompareImages.css';
function CompareImages(props){
    return (
        <div style={{height:"1%",overflow:"hidden",margin:"2%"}}>
            <div className="temp" >
            <img src={props.imageFile} style={{objectFit:"contain",width:"100%",height:"auto",maxWidth:"700px",border: "solid 1px #CCC"}}/>
            </div>
            <div class="vl"></div>
            <div className="temp" >
            <img src={props.resultImage} style={{objectFit:"contain",width:"100%",height:"auto",maxWidth:"700px",border: "solid 1px #CCC"}}/>
            </div>
        </div>
    );
}

export default CompareImages;