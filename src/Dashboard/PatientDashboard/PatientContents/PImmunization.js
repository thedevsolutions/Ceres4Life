import React, { useState } from "react";
import { Input } from "antd";
import { ImCross } from "react-icons/im";
import MainLayout from "../Layout";

export default function PAmmunization() {
  const [addImmune, setAddImmune] = useState(false);

  const addImmunes = (e) => {
    setAddImmune(false);
  };

  return (
    <>
      <MainLayout>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="d-flex align-items-center justify-content-between">
              <h6 className="dashboard-head">My Immunizations</h6>
              <div className="add-btn">
                <button
                  className="btn btn-primary px-5"
                  onClick={() => setAddImmune(true)}
                >
                  Add Immunization
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            addImmune === false ? "d-none" : "row justify-content-center my-5"
          }
        >
          <div className="col-lg-4">
            <div className="add-card">
              <div className="text-right">
                <ImCross onClick={addImmunes} style={{ cursor: "pointer" }} />
              </div>
              <div className="p-4 text-center">
                <Input placeholder="Enter Title" />
                <button className="btn btn-primary px-5 mt-4">
                  Add Immunization
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5 justify-content-center">
          <div className="col-lg-10">
            <div className="uploaded-allergies">
              <div className="upload-card mb-5 mr-3">
                <div className="text-center">
                  <h6>Covid 19</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
