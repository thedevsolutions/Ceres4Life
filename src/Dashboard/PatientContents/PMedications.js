import React from "react";
import { Input } from 'antd';

export default function PMedications() {

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="d-flex align-items-center justify-content-between">
            <h6 className="dashboard-head">My Medications</h6>
          <div className="medication-search">
          <Input placeholder="Search" bordered={false} />
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
                  <th scope="col">Medicine Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Dosage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dr. Raza</td>
                  <td>Panadol</td>
                  <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, </td>
                  <td><div className="text-success">
                  Completed
                    </div></td>
                </tr>
                <tr>
                  <td>Dr. Soha</td>
                  <td>Arinac</td>
                  <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, </td>
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
