import React, { useState } from "react";
import { Input } from "antd";
import { RiImageAddFill } from "react-icons/ri";
import { ImCross } from "react-icons/im";

export default function PReports() {
  const [addReport, setAddReport] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [previewImg, setPreviewImg] = useState("");

  const changeHandler = (e) => {
		setSelectedFile(e.target.files[0]);
    if(e.target.files.length !==0){
      setPreviewImg(URL.createObjectURL(e.target.files[0]), "Img")
    }
    console.log(selectedFile)
	};


  function uploadImage(){
    document.getElementById('selectFile').click();
  }

  const addReports =(e)=>{
setAddReport(false);
setPreviewImg("")
  }



  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="d-flex align-items-center justify-content-between">
            <h6 className="dashboard-head">My Reports</h6>
            <div className="add-btn">
              <button
                className="btn btn-primary px-5"
                onClick={() => setAddReport(true)}
              >
                Add Report
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          addReport === false ? "d-none" : "row justify-content-center my-5"
        }
      >
        <div className="col-lg-4">
          <div className="add-card">
            <div className="text-right">
              <ImCross
                onClick={addReports}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="p-4 text-center">
              <div className="mb-4">
                <input type="file" name="file" className="d-none" id="selectFile" onChange={changeHandler} />
                <div>
                </div>
              <div className="d-flex justify-content-center">
              <RiImageAddFill fontSize={"80px"}  onClick={uploadImage} className={previewImg === "" ? "" : "d-none"}/>
                <img src={previewImg} height="200px" width="200px" alt="report" className={previewImg === "" ? "d-none" : ""} />
              </div>
              </div>
              <Input placeholder="Enter Title" />
              <button className="btn btn-primary px-5 mt-4">Add Report</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-5 justify-content-center">
       <div className="col-lg-10">
       <div className="uploaded-reports">
          <div className="upload-card mb-5 mr-3">
            <div className="text-center">
              <img src="/images/prenatal.png" alt="report"/>
              <h6 className="pt-3">Blood Report</h6>
            </div>
          </div>
        </div> 
       </div>
      </div>
    </>
  );
}
