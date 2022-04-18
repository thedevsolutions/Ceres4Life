import React from "react";
import { Menu, Dropdown } from "antd";

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#/">
        Logout
      </a>
    </Menu.Item>
  </Menu>
);

export default function DHeader() {
  return (
    <div className="d-flex align-items-center justify-content-between h-100">
     <h6 className="d-welcome">Welcome</h6>

      <Dropdown overlay={menu}>
        <a
          className="ant-dropdown-link"
          href="#/"
          onClick={(e) => e.preventDefault()}
        >
          <div className="profile">
            <img src="/images/Prenatal.png" alt="profile" />
          </div>
        </a>
      </Dropdown>
    </div>
  );
}
