import React from "react";
import { Input, Menu, Dropdown } from "antd";
const { Search } = Input;

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
  const onSearch = (value) => console.log(value);

  return (
    <div className="d-flex align-items-center justify-content-between h-100">
      <div className="search">
        <Search
          placeholder="Search"
          allowClear
          onSearch={onSearch}
          style={{ width: 300, background: "transparent", border: "none" }}
          size="large"
        />
      </div>

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
