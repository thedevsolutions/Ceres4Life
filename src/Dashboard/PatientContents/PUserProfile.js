import React, { useState } from "react";
import { Form, Radio, Input, Space, InputNumber } from "antd";

export default function PUserProfile() {


  const [radio, setRadio] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setRadio({
      value: e.target.value,
    });
  };

  const { value } = radio;

  console.log(radio);

  return (
    <div>
      <Form layout="vertical">
        <div className="row justify-content-around">
          <div className="col-lg-5">
            <div className="d-block d-md-flex">
              <Form.Item label="First Name" className="w-50">
                <Input  size="large" placeholder="Raza" />
              </Form.Item>
              <Form.Item label="Last Name" className="ml-3 w-50">
                <Input  size="large" placeholder="Ali" />
              </Form.Item>
            </div>
            <div className="children">
              <Form.Item label="No. of Children" className="w-50">
                <Radio.Group onChange={onChange} value={value}>
                  <Space direction="vertical">
                    <Radio value={1}>No</Radio>
                    <Radio value={2}>Yes</Radio>
                  </Space>
                </Radio.Group>
                <InputNumber size="large" min={1} max={10} defaultValue={1} className={value === 2 ? "mt-2 w-100" : "d-none"} />
              </Form.Item>
            </div>
            <Form.Item label="Existing Condition" className="w-100">
                <Input  size="large" placeholder="What is your condition" />
              </Form.Item>
              <Form.Item label="Weight" className="w-100">
                <Input  size="large" placeholder="Weight" />
              </Form.Item>
              <Form.Item label="Week Of Pregnancy" className="w-100">
              <InputNumber size="large" min={1} max={34} defaultValue={1} className= "w-100" />
              </Form.Item>
              <div className="d-block d-md-flex">
              <Form.Item label="Blood Pressure (SYSTOLIC)"  className="w-100">
              <InputNumber size="large"  className="w-100"/>
              </Form.Item>
              <Form.Item label="Blood Pressure (DIASTOLIC)" className="ml-3 w-100">
              <InputNumber size="large" className="w-100" />
              </Form.Item>
            </div>
              <Form.Item label="Immunization" className="w-100">
                <Input  size="large" placeholder="Immunization" />
              </Form.Item>
          </div>
          <div className="col-lg-5">
            <Form.Item label="Email Address" className="w-100">
              <Input  size="large" placeholder="user@example.com" />
            </Form.Item>
            <Form.Item label="Preexisting Condition" className="w-100">
              <Input  size="large" placeholder="Preexisting condition" />
            </Form.Item>
            <Form.Item label="Blood Group" className="w-100">
              <Input  size="large" placeholder="Blood group" />
            </Form.Item>
            <Form.Item label="Height" className="w-100">
              <Input  size="large" placeholder="Height" />
            </Form.Item>
            <Form.Item label="Sugar Level" className="w-100">
              <Input  size="large" placeholder="Sugar Level" />
            </Form.Item>
            <Form.Item label="Medication" className="w-100">
              <Input  size="large" placeholder="Medication" />
            </Form.Item>
            <Form.Item label="Nutrition" className="w-100">
              <Input  size="large" placeholder="Nutrition" />
            </Form.Item>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-lg-4">
            <button className="btn btn-primary w-100">Edit Profile</button>
            </div></div>
      </Form>
    </div>
  );
}
