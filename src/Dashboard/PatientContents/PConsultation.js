import React from "react";

import { Select } from 'antd';

const { Option } = Select;

export default function PConsultation() {

function handleChange(value) {
  console.log(`selected ${value}`);
}
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <div className="d-flex align-items-center justify-content-between">
            <h6>Completed Consultation</h6>
            <div className="consultation-drop">
            <Select
              defaultValue="Audio"
              style={{ width: 90 }}
              onChange={handleChange}
            >
              <Option value="audio">Audio</Option>
              <Option value="video">Video</Option>
            </Select>
              </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
           </div>
        </div>
    </div>
  );
}
