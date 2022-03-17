import React from "react";

import { Select } from "antd";

const { Option } = Select;

export default function PConsultation() {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="d-flex align-items-center justify-content-between">
            <h6 className="dashboard-head">Consultation</h6>
            <div className="consultation-drop">
              <Select
                defaultValue="Completed"
                style={{ width: 120 }}
                onChange={handleChange}
              >
                <Option value="video">Completed</Option>
                <Option value="audio">Pending</Option>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-5 justify-content-center">
        <div className="col-lg-10">
          <div className="consultations">
          <table class="table">
          <thead>
                <tr>
                  <th scope="col">Doctor's Name</th>
                  <th scope="col">Consultation Date</th>
                  <th scope="col">Consultation Time</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dr. Raza</td>
                  <td>12/03/2020</td>
                  <td>12:03</td>
                  <td><div className="text-success">
                  Completed
                    </div></td>
                </tr>
                <tr>
                  <td>Dr. Soha</td>
                  <td>29/07/2020</td>
                  <td>04:30</td>
                  <td><div className="text-success">
                  Completed
                    </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
