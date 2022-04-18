import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../dashboard.css";
import DHeader from "../PatientDashboard/DHeader";
import { Layout, Menu } from "antd";

import {
  ReconciliationOutlined,
  UserOutlined,
  MedicineBoxOutlined,
  MergeCellsOutlined,
  AlertOutlined,
  ExperimentOutlined,
  FileDoneOutlined,
  LaptopOutlined,
  DisconnectOutlined,
} from "@ant-design/icons";
import { useLocation } from "react-router-dom";
// import PReports from "./PatientContents/PReports";
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
  const currentRoute = useHistory().location.pathname.toLowerCase();
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname.toLowerCase());
  }, [location]);

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
            <Menu.Item
              key="1"
              icon={<UserOutlined />}
              className={
                currentRoute.includes("dashboard")
                  ? ".ant-menu-item active"
                  : ".ant-menu-item"
              }
              active
              // onClick={() => setFragment(0)}
            >
              <Link to="/dashboard">User Profile</Link>
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<ReconciliationOutlined />}

              // onClick={() => setFragment(1)}
            >
              <Link to="/pconsultations">Consultations</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<DisconnectOutlined />}>
              <Link to="/medications"> Medications</Link>
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<MergeCellsOutlined />}
              // onClick={() => setFragment(3)}
            >
              <Link to="/reports">Reports</Link>
            </Menu.Item>
            <Menu.Item
              key="5"
              icon={<AlertOutlined />}
              // onClick={() => setFragment(4)}
            >
              <Link to="/allergies">Allergies</Link>
            </Menu.Item>
            <Menu.Item
              key="6"
              icon={<ExperimentOutlined />}
              // onClick={() => setFragment(5)}
            >
              <Link to="/immunizations">Immunizations</Link>
            </Menu.Item>
            <Menu.Item
              key="7"
              icon={<MedicineBoxOutlined />}
              // onClick={() => setFragment(6)}
            >
              <Link to="/available-doctors"> Available Doctors</Link>
            </Menu.Item>
            <Menu.Item
              key="8"
              icon={<FileDoneOutlined />}
              // onClick={() => setFragment(7)}
            >
              <Link to="/doctor-message"> Doctor's Message</Link>
            </Menu.Item>

            <Menu.Item
              key="10"
              icon={<LaptopOutlined />}
              // onClick={() => setFragment(8)}
            >
              <Link to="/rhm">RHM</Link>
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
