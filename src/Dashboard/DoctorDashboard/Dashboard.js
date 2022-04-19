import React, { useEffect, useState } from "react";
import { Link, BrowserRouter, Route } from "react-router-dom";
// import "../dashboard.css";
import "../../dashboard.css";
import DHeader from "./DHeader";
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
// import PReports from "./PatientContents/PReports";
const { Header, Content, Sider } = Layout;

export default function Dashboard() {
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

  // const [fragment, setFragment] = useState(0);

  // const loadFragment = () => {
  //   switch (fragment) {
  //     case 0:
  //       return <PUserProfile />;
  //     case 1:
  //       return <PConsultation />;
  //     case 2:
  //       return <PMedications />;
  //     case 3:
  //       return <PReports />;
  //     case 4:
  //       return <PAllergies />;
  //     case 5:
  //       return <PImmunization />;
  //     case 6:
  //       return <PADoctors />;
  //     case 7:
  //       return <PDrMessage />;
  //     case 8:
  //       return <PRemote />;
  //     default:
  //       break;
  //   }
  // };

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
          <Menu theme="light" mode="inline">
            <Menu.Item
              key="1"
              icon={<UserOutlined />}
              // onClick={() => setFragment(0)}
            >
              <Link to="/dashboard/"> User Profile</Link>
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<ReconciliationOutlined />}
              // onClick={() => setFragment(1)}
            >
              <Link to="/consultations">Consultations</Link>
            </Menu.Item>

            <Menu.Item
              key="3"
              icon={<DisconnectOutlined />}
              // onClick={() => setFragment(2)}
            >
              <Link to="/medications">Medications</Link>
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<DisconnectOutlined />}
              // onClick={() => setFragment(2)}
            ></Menu.Item>

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
              Immunizations
            </Menu.Item>
            <Menu.Item
              key="7"
              icon={<MedicineBoxOutlined />}
              // onClick={() => setFragment(6)}
            >
              Available Doctors
            </Menu.Item>
            <Menu.Item
              key="8"
              icon={<FileDoneOutlined />}
              // onClick={() => setFragment(7)}
            >
              Doctor's Message
            </Menu.Item>
            <Menu.Item
              key="10"
              icon={<LaptopOutlined />}
              // onClick={() => setFragment(8)}
            >
              RHM
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="bg-white" style={{ padding: "0px 20px" }}>
            <DHeader />
          </Header>
          <Content style={{ margin: "0 0" }}>
            <div className="px-5 py-3">
              {/* <BrowserRouter>
                <Route index exact path="" component={<PUserProfile />} />
                <Route path="/consultations" component={<PConsultation />} />
                <Route path="/Reports" component={<Reports />} />
              </BrowserRouter> */}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
