import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../dashboard.css";
import DHeader from "./DHeader";
import { Layout, Menu } from "antd";

import {
  ReconciliationOutlined,
  UserOutlined,
  MergeCellsOutlined,
  AlertOutlined,
  ExperimentOutlined,
} from "@ant-design/icons";
const { Header, Content, Sider } = Layout;

export default function MainLayout(props) {
  const [sideCollapsed, setSideCollapsed] = useState(false);
  const collapsed = sideCollapsed;
  const width = window.innerWidth;

  useEffect(() => {
    if (width <= 500) {
      setSideCollapsed(true);
    } else {
      setSideCollapsed(false);
    }

    console.log(width);
  }, [width]);

  function onCollapse() {
    if (sideCollapsed === false) {
      setSideCollapsed(true);
    } else {
      setSideCollapsed(false);
    }
  }

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          className="bg-white"
        >
          <div className="text-center">
            <Link to="/dashboard">
              <img
                src="/images/Logo.svg"
                alt="logo"
                height={"70px"}
                className={sideCollapsed === true ? "d-none" : ""}
              />
            </Link>
            <Link to="/dashboard">
              <img
                src="/images/s-logo.svg"
                alt="logo"
                height={"50px"}
                className={sideCollapsed === true ? "my-3" : "d-none"}
              />
            </Link>
          </div>
          <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/dr-dashboard">User Profile</Link>
            </Menu.Item>

            <Menu.Item key="2" icon={<ReconciliationOutlined />}>
              <Link to="/dr-consultations">Consultations</Link>
            </Menu.Item>

            <Menu.Item key="3" icon={<MergeCellsOutlined />}>
              <Link to="/dr-notepad">Notepad</Link>
            </Menu.Item>

            <Menu.Item key="4" icon={<AlertOutlined />}>
              <Link to="/dr-chat">Chat</Link>
            </Menu.Item>

            <Menu.Item key="5" icon={<ExperimentOutlined />}>
              <Link to="/dr-remote">Remote Monitoring</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="bg-white" style={{ padding: "0px 20px" }}>
            <DHeader />
          </Header>
          <Content style={{ margin: "0 0" }}>
            <div className="px-5 py-3">{props.children}</div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
