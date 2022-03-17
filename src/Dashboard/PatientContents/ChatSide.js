import React from 'react';
import {Link} from "react-router-dom";

export default function ChatSide() {
  return (
    <div>
    <h6 className="dashboard-head py-4">Chats</h6>
   <div className="single-chat">
    <Link to="#/">
    <div className="d-flex align-items-center justify-content-around px-2">
        <div className='d-flex align-items-center'>
        <div className="single-chat-profile">
          <img src="/images/prenatal.png" alt="profile" />
        </div>
        <div className="single-chat-message ml-3">
            <h6 className="single-chat-name">Dr. Raza</h6>
          <h6 className="single-chat-msg">Vestibulum convallis eu lorem.</h6>
        </div>
        </div>
        <div>
        <p className="single-chat-time mr-2">12:30 PM</p>
        </div>
      </div>
    </Link>
    <hr className='mx-4'/>
    </div>
    <div className="single-chat">
    <Link to="#/">
    <div className="d-flex align-items-center justify-content-around px-2">
        <div className='d-flex align-items-center'>
        <div className="single-chat-profile">
          <img src="/images/postnatal.png" alt="profile" />
        </div>
        <div className="single-chat-message ml-3">
            <h6 className="single-chat-name">Dr. Shiza</h6>
          <h6 className="single-chat-msg">Vestibulum convallis eu lorem.</h6>
        </div>
        </div>
        <div>
        <p className="single-chat-time mr-2">12:30 PM</p>
        </div>
      </div>
    </Link>
    <hr className='mx-4'/>
    </div>
  </div>
  )
}
