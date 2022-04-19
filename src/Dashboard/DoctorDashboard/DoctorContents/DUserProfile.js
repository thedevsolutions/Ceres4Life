import React from "react";
import { Form, Input } from "antd";
import { RiImageAddFill } from "react-icons/ri";
import MainLayout from "../Layout";
import { Select } from "antd";
const { Option } = Select;

export default function DUserProfile() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <MainLayout>
        <Form layout="vertical">
          <div className="row justify-content-center">
            <div className="col-lg-12 d-flex justify-content-center align-items-center">
              <div className="image_div">
                <RiImageAddFill fontSize={"50px"} />
              </div>
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="col-lg-5">
              <div className="d-block d-md-flex">
                <Form.Item label="First Name" className="w-50">
                  <Input size="large" placeholder="Raza" />
                </Form.Item>
                <Form.Item label="Last Name" className="ml-3 w-50">
                  <Input size="large" placeholder="Ali" />
                </Form.Item>
              </div>

              <div className="children">
                <label>Speciality</label>
                <Select
                  defaultValue="Prenatal"
                  size="large"
                  style={{ width: "100%", textAlign: "left" }}
                  onChange={handleChange}
                  className="mb-3"
                >
                  <Option value="Prenatal">Prenatal</Option>
                  <Option value="Postnatal">Postnatal</Option>
                </Select>
              </div>
              <Form.Item label="License No." className="w-100">
                <Input size="large" placeholder="34556666" />
              </Form.Item>
              <Form.Item label="PMC Verified No." className="w-100">
                <Input size="large" placeholder="34556666" />
              </Form.Item>
              <Form.Item label="Experience" className="w-100">
                <Input
                  size="large"
                  placeholder="Enter your experience (Years)"
                />
              </Form.Item>
            </div>
            <div className="col-lg-5">
              <Form.Item label="Email or Phone" className="w-100">
                <Input size="large" placeholder="Email" />
              </Form.Item>

              <div className="children">
                <label>Gender</label>
                <Select
                  defaultValue="Select gender"
                  size="large"
                  style={{ width: "100%", textAlign: "left" }}
                  onChange={handleChange}
                  className="mb-3"
                  required
                >
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </div>
              <div className="children">
                <label>PMC Verified</label>
                <Select
                  defaultValue="Yes"
                  size="large"
                  style={{ width: "100%", textAlign: "left" }}
                  onChange={handleChange}
                  className="mb-3"
                  required
                >
                  <Option value="Yes">Yes</Option>
                  <Option value="No">No</Option>
                </Select>
              </div>

              <Form.Item label="Degree College" className="w-100">
                <Input size="large" placeholder="Enter college name" />
              </Form.Item>
              <Form.Item label="Previous Job" className="w-100">
                <Input size="large" placeholder="Enter previous job details" />
              </Form.Item>
            </div>
          </div>
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-4">
              <button className="btn btn-primary w-100">Edit Profile</button>
            </div>
          </div>
        </Form>
      </MainLayout>
    </div>
  );
}
