import React from "react";
import { useState } from "react";
import './ModelsPage.css';
import axios from "axios";
import InputFiles from "../../Components/InputFiles/InputFiles";
import CompareImages from "../../Components/CompareImages/CompareImages";
function ModelsPage(props){
    const [SubmitClicked, setSubmitClicked]=useState(false);
    const [imageFile, setImageFile]=useState();
    const [resultImage,setResultImage] = useState({});
    const [filename,setFilename] = useState();
    
    return(
        <div  className="Area">
            <div >
                <div className="headings"><img src="https://img.icons8.com/clouds/90/000000/image.png"/> Select Input Image </div>
                <hr></hr>
            </div>
            <InputFiles setFilename={setFilename} setSubmitClicked={setSubmitClicked} setResultImage={setResultImage} imageFile={imageFile} setImageFile={setImageFile} />
            {
                SubmitClicked&&
                <div >
                    <div >

                        <div className="headings"><img src="https://img.icons8.com/dusk/60/000000/compare.png"/> Compare Images</div>
                        <hr></hr>
                        <CompareImages imageFile={imageFile} resultImage={resultImage} />
                    </div>
                </div>
            }
        </div>
    );
}
export default ModelsPage;