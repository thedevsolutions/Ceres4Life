import React from "react";
import { VscSmiley } from "react-icons/vsc";
import { ImAttachment } from "react-icons/im";
import { FiSend } from "react-icons/fi";
import { Input } from 'antd';

export default function ChatContent() {
  return (
    <>
      <div className="chat-content pt-3">
        <div className="scroll">
          <div className="px-5">
            <div className="msg-recieve">
              <p>Hi</p>
            </div>
            <div className="msgs-send">
              <div className="msg-send">
                <p>How are you?</p>
              </div>
            </div>

            <div className="msg-recieve">
              <p>I am Fine</p>
            </div>
            <div className="msg-recieve">
              <p>What about you?</p>
            </div>
            <div className="msgs-send">
              <div className="msg-send">
                <p>I am good</p>
              </div>
            </div>
            <div className="msgs-send">
              <div className="msg-send">
                <p>Thank You</p>
              </div>
            </div>
            <div className="msg-recieve">
              <p>How may i help you?</p>
            </div>
            <div className="msgs-send">
              <div className="msg-send">
                <p>I am prenatal</p>
              </div>
            </div>
            <div className="msgs-send">
              <div className="msg-send">
                <p>6 Month of my lil baby girl</p>
              </div>
            </div>

            <div className="msg-recieve">
              <p>Oh! That's Great</p>
            </div>
            <div className="msgs-send">
              <div className="msg-send">
                <p>Can we do video call?</p>
              </div>
            </div>
            <div className="msg-recieve">
              <p>Yes but not know</p>
            </div>
            <div className="msgs-send">
              <div className="msg-send">
                <p>When?</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="ml-5"/>
        <div className="ml-5 mt-4">
          <div className="d-flex align-items-center justify-content-around">
          <div className="d-flex align-items-center">
          <div className="emojis">
              <VscSmiley />
            </div>
            <div className="type-msg ml-3">
            <Input placeholder="Type your message..." />
            </div>
            <div className="emojis ml-3">
              <ImAttachment />
            </div>
          </div>
         <div className="d-flex align-items-center">
            <button type="button" className="btn btn-send px-5">
              <FiSend />
            </button>
         </div>
          </div>
        </div>
      </div>
    </>
  );
}
