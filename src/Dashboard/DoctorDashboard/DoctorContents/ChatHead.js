import React from 'react';
import { VscCallOutgoing } from "react-icons/vsc";
import { MdOutlineVideoCall } from "react-icons/md";

export default function ChatHead() {
  return (
    <div>
         <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <div className="chat-o-profile">
                  <img src="/images/prenatal.png" alt="selected-chat" />
                </div>
                <div className="chat-o-name ml-3">
                  <h6 className="dashboard-head">Dr. Raza</h6>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="audio-call">
                  <VscCallOutgoing fontSize={"20px"} color={"#72d3d3"} />
                </div>
                <div className="audio-call ml-3">
                  <MdOutlineVideoCall fontSize={"25px"} color={"#72d3d3"} />
                </div>
              </div>
            </div>
            <hr/>
    </div>
  )
}
