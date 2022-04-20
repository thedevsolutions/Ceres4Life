import React, { useState } from "react";
import { Input } from "antd";
import { ImCross } from "react-icons/im";
import MainLayout from "../Layout";
import TextArea from "antd/lib/input/TextArea";

export default function Notepad() {
  const [addNotepad, setAddNotepad] = useState(false);

  const addNotepads = (e) => {
    setAddNotepad(false);
  };

  return (
    <>
      <MainLayout>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="d-flex align-items-center justify-content-between">
              <h6 className="dashboard-head">Notepad</h6>
              <div className="add-btn">
                <button
                  className="btn btn-primary px-5"
                  onClick={() => setAddNotepad(true)}
                >
                  Add Note
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            addNotepad === false ? "d-none" : "row justify-content-center my-5"
          }
        >
          <div className="col-lg-6">
            <div className="add-card">
              <div className="text-right">
                <ImCross onClick={addNotepads} style={{ cursor: "pointer" }} />
              </div>
              <div className="p-4 text-center">
                <Input placeholder="Enter Title" className="mb-3" />
                <TextArea placeholder="Enter Details" rows="5" />
                <button className="btn btn-primary px-5 mt-4">Add Note</button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row my-5 justify-content-center">
          <div className="col-lg-10">
            <div className="uploaded-allergies">
              <div className="upload-card mb-5 mr-3">
                <div className="text-center">
                  <h6>Blood Report</h6>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </MainLayout>
    </>
  );
}
