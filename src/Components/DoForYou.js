import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Modal, Select } from "antd";
const { Option } = Select;

export default function DoForYou() {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [isModalOVisible, setIsModalOVisible] = useState(false);

  const showModalO = () => {
    setIsModalOVisible(true);
  };

  const handleOOk = () => {
    setIsModalOVisible(false);
  };

  const handleOCancel = () => {
    setIsModalOVisible(false);
  };

  return (
    <div className="container-fluid px-0">
      <div className="footer">
        <div className="row py-5 position-relative mx-0">
          <div className="left-img">
            <img src="/images/right.svg" alt="right" height={"250px"} />
          </div>
          <div className="col-lg-12">
            <div className="community-text pb-4">
              <h6>What we Do for you</h6>
              <p>
                Pregnancy or being a new Mom is complicated and joyful. We want
                to help you make this wonderful journey as <br /> pleasant as
                possible. We connect you to your provider through video
                consultations or direct messaging. Also, when
                <br /> directed by your care team, we provide you with remote
                monitoring services directly from your home. Of course, you{" "}
                <br />
                will always get plenty of health education resources.
              </p>
            </div>
            <div className="services-list">
              <ul>
                <li>1. Reproductive Health</li>
                <li>2. Mental Health</li>
                <li>3. Wellness & Coaching</li>
              </ul>
            </div>
            <div className="d-block d-md-flex py-5 pre-post">
              <div className="mb-3">
                {/* <Link to="/prenatal"> */}
                  <div className="card left-card">
                    <div className="text-center pt-4">
                      <img
                        src="/images/dna.svg"
                        alt="left-card"
                        height={"80px"}
                      />
                      <p className="card-text" onClick={showModalO}>I'm Pregnant</p>
                    </div>
                  </div>
                {/* </Link> */}
                {/* <div className="text-center pt-5">
                <button className="btn btn-secondary w-100" onClick={showModalO}>
                  Online consultation
                </button>
              </div> */}
              </div>
              <div className="mb-3">
                <div className="text-center">
                  <img
                    src="/images/d-for-img.svg"
                    alt="what-do"
                    height={"300px"}
                  />
                </div>
              </div>
              <div className="mb-3">
                {/* <Link to="/postnatal"> */}
                <div className="card right-card">
                  <div className="text-center pt-4">
                    <img
                      src="/images/heart.svg"
                      alt="right-card"
                      height={"80px"}
                    />
                    <p className="card-text" onClick={showModal}>
                      I'm a new Mom
                    </p>
                  </div>
                </div>
                {/* </Link> */}
                {/* <div className="text-center pt-5">
                <button className="btn btn-golden w-100" onClick={showModal}>
                  Request a chat
                </button>
              </div> */}
              </div>
            </div>
          </div>
        </div>
        <Modal
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          className="request-modal"
          centered
        >
          <div className="modal-content">
            <h5 className="text-center mb-4">I am</h5>
            <Select
              defaultValue="New Patient"
              size="large"
              style={{ width: "100%" }}
              onChange={handleChange}
              className="mb-3"
            >
              <Option value="new">New Patient</Option>
              <Option value="existing">Existing Patient</Option>
            </Select>

            <button class="btn btn-primary w-100">SUBMIT</button>
            <div className="text-center py-3">
              <a href="#/" onClick={handleCancel}>
                Cancel
              </a>
            </div>
          </div>
        </Modal>
        <Modal
          visible={isModalOVisible}
          onOk={handleOOk}
          onCancel={handleOCancel}
          className="request-modal"
          centered
        >
          <div className="modal-content">
            <h5 className="text-center mb-4">I am</h5>
            <Select
              defaultValue="New Patient"
              size="large"
              style={{ width: "100%" }}
              onChange={handleChange}
              className="mb-3"
            >
              <Option value="new">New Patient</Option>
              <Option value="existing">Existing Patient</Option>
            </Select>

            <button class="btn btn-primary w-100">SUBMIT</button>
            <div className="text-center py-3">
              <a href="#/" onClick={handleOCancel}>
                Cancel
              </a>
            </div>
          </div>
        </Modal>


      </div>
    </div>
  );
}
