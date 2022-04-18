import React from "react";
import { Checkbox } from "antd";
import { GiStarFormation } from "react-icons/gi";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import MainLayout from "../Layout";

export default function PADoctors() {
  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }

  const gender = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];

  const category = [
    { label: "Prenatal", value: "Prenatal" },
    { label: "Postnatal", value: "Postnatal" },
    { label: "Mental Health", value: "Mental" },
    { label: "Wellness & Coaching", value: "wellness" },
  ];

  return (
    <>
      <MainLayout>
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <h6 className="dashboard-head">Doctor's Available</h6>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3 mb-3">
            <div className="doctors-head">
              <h6>Filters</h6>
            </div>
            <div className="filters-f">
              <h6 className="filter-head pb-4">
                Apply filters for specific Doctor
              </h6>
              <div className="d-filters">
                <h6>Status</h6>
                <div className="my-2">
                  <Checkbox onChange={onChange}>Online</Checkbox>
                </div>
                <hr />
              </div>
              <div className="d-filters">
                <h6>Gender</h6>
                <div className="my-2">
                  <Checkbox.Group options={gender} onChange={onChange} />
                </div>
                <hr />
              </div>
              <div className="d-filters">
                <h6>Category</h6>
                <div className="my-2 vertical">
                  <Checkbox.Group options={category} onChange={onChange} />
                </div>
                <hr />
              </div>
              <div className="d-filters">
                <h6>Verification</h6>
                <div className="my-2">
                  <Checkbox onChange={onChange}>PMC Verified</Checkbox>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="doctors-head">
              <h6>Doctor's List</h6>
            </div>
            <div className="scroll">
              <div className="filters mb-3">
                <div className="d-block d-md-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="d-profile-img">
                      <div className="online"></div>
                      <img src="/images/prenatal.png" alt="profile-img" />
                    </div>
                    <div className="d-profile-description ml-4">
                      <h5>Jenny Wilson</h5>
                      <h6>MBBS | FCPS | MDSC</h6>
                      <p>Capitaine Jean Luc PICARD </p>
                      <p>
                        <span>
                          <GiStarFormation />
                        </span>{" "}
                        PMC Verified
                      </p>
                    </div>
                  </div>
                  <div className="chat-consultation">
                    <div className="text-center position-relative">
                      <div className="down-arrow">
                        <FiChevronDown fontSize={"25px"} color={"#72D3D3"} />
                      </div>
                      <div className="my-2">
                        <button className="btn btn-primary px-10">
                          Chat Now
                        </button>
                        <div className="my-2" />
                        <button className="btn btn-primary-outline px-4">
                          Book a Consultation
                        </button>
                      </div>
                      <div className="down-arrow">
                        <FiChevronUp fontSize={"25px"} color={"#72D3D3"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filters mb-3">
                <div className="d-block d-md-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="d-profile-img">
                      <img src="/images/prenatal.png" alt="profile-img" />
                    </div>
                    <div className="d-profile-description ml-4">
                      <h5>Jenny Wilson</h5>
                      <h6>MBBS | FCPS | MDSC</h6>
                      <p>Capitaine Jean Luc PICARD </p>
                      <p>
                        <span>
                          <GiStarFormation />
                        </span>{" "}
                        PMC Verified
                      </p>
                    </div>
                  </div>
                  <div className="chat-consultation">
                    <div className="text-center position-relative">
                      <div className="down-arrow">
                        <FiChevronDown fontSize={"25px"} color={"#72D3D3"} />
                      </div>
                      <div className="my-2">
                        <button className="btn btn-primary px-10">
                          Chat Now
                        </button>
                        <div className="my-2" />
                        <button className="btn btn-primary-outline px-4">
                          Book a Consultation
                        </button>
                      </div>
                      <div className="down-arrow">
                        <FiChevronUp fontSize={"25px"} color={"#72D3D3"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filters mb-3">
                <div className="d-block d-md-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="d-profile-img">
                      <img src="/images/prenatal.png" alt="profile-img" />
                    </div>
                    <div className="d-profile-description ml-4">
                      <h5>Jenny Wilson</h5>
                      <h6>MBBS | FCPS | MDSC</h6>
                      <p>Capitaine Jean Luc PICARD </p>
                      <p>
                        <span>
                          <GiStarFormation />
                        </span>{" "}
                        PMC Verified
                      </p>
                    </div>
                  </div>
                  <div className="chat-consultation">
                    <div className="text-center position-relative">
                      <div className="down-arrow">
                        <FiChevronDown fontSize={"25px"} color={"#72D3D3"} />
                      </div>
                      <div className="my-2">
                        <button className="btn btn-primary px-10">
                          Chat Now
                        </button>
                        <div className="my-2" />
                        <button className="btn btn-primary-outline px-4">
                          Book a Consultation
                        </button>
                      </div>
                      <div className="down-arrow">
                        <FiChevronUp fontSize={"25px"} color={"#72D3D3"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filters mb-3">
                <div className="d-block d-md-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="d-profile-img">
                      <img src="/images/prenatal.png" alt="profile-img" />
                    </div>
                    <div className="d-profile-description ml-4">
                      <h5>Jenny Wilson</h5>
                      <h6>MBBS | FCPS | MDSC</h6>
                      <p>Capitaine Jean Luc PICARD </p>
                      <p>
                        <span>
                          <GiStarFormation />
                        </span>{" "}
                        PMC Verified
                      </p>
                    </div>
                  </div>
                  <div className="chat-consultation">
                    <div className="text-center position-relative">
                      <div className="down-arrow">
                        <FiChevronDown fontSize={"25px"} color={"#72D3D3"} />
                      </div>
                      <div className="my-2">
                        <button className="btn btn-primary px-10">
                          Chat Now
                        </button>
                        <div className="my-2" />
                        <button className="btn btn-primary-outline px-4">
                          Book a Consultation
                        </button>
                      </div>
                      <div className="down-arrow">
                        <FiChevronUp fontSize={"25px"} color={"#72D3D3"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
