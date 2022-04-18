import React, { useState } from "react";
import { Input } from "antd";
import { ImCross } from "react-icons/im";
import MainLayout from "../Layout";

export default function PAllergies() {
  const [addAllergy, setAddAllergy] = useState(false);

  const addAllergies = (e) => {
    setAddAllergy(false);
  };

  return (
    <>
      <MainLayout>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="d-flex align-items-center justify-content-between">
              <h6 className="dashboard-head">My Allergies</h6>
              <div className="add-btn">
                <button
                  className="btn btn-primary px-5"
                  onClick={() => setAddAllergy(true)}
                >
                  Add Allergy
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            addAllergy === false ? "d-none" : "row justify-content-center my-5"
          }
        >
          <div className="col-lg-4">
            <div className="add-card">
              <div className="text-right">
                <ImCross onClick={addAllergies} style={{ cursor: "pointer" }} />
              </div>
              <div className="p-4 text-center">
                <Input placeholder="Enter Title" />
                <button className="btn btn-primary px-5 mt-4">
                  Add Allergy
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
                  <h6>Blood Report</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
