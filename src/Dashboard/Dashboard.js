import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "../dashboard.css";
import DHeader from "./DHeader";
import { Layout, Menu } from "antd";
import PUserProfile from "./PatientContents/PUserProfile";
import PConsultation from "./PatientContents/PConsultation";
import PMedications from "./PatientContents/PMedications";
import PLabs from "./PatientContents/PLabs";
import PAllergies from "./PatientContents/PAllergies";
import PImmunization from "./PatientContents/PImmunization";
import PImages from "./PatientContents/PImages";
import PDrMessage from "./PatientContents/PDrMessage";
import PHealth from "./PatientContents/PHealth";
import PRemote from "./PatientContents/PRemote";

import {
  ReconciliationOutlined,
  UserOutlined,
  MedicineBoxOutlined,
  MergeCellsOutlined,
  AlertOutlined,
  ExperimentOutlined,
  PictureOutlined,
  FileDoneOutlined,
  HeartOutlined,
  LaptopOutlined,

} from "@ant-design/icons";
const { Header, Content, Sider } = Layout;

export default function Dashboard() {

  
  const [sideCollapsed, setSideCollapsed] = useState(false);
  const collapsed = sideCollapsed;
  const width = window.innerWidth;

  useEffect(() => {
    if(width <= 500){
      setSideCollapsed(true);
    }
    else{
      setSideCollapsed(false);
    }

console.log(width)
  },[width]);

  function onCollapse() {
    if (sideCollapsed === false) {
      setSideCollapsed(true);
    } else {
      setSideCollapsed(false);
    }
  }

  const [fragment, setFragment] = useState(0);

  const loadFragment = () => {
    switch (fragment) {
      case 0:
        return <PUserProfile />
      case 1:
        return <PConsultation />
        case 2:
        return <PMedications />
        case 3:
        return <PLabs />
        case 4:
        return <PAllergies />
        case 5:
        return <PImmunization />
        case 6:
        return <PImages />
        case 7:
        return <PDrMessage />
        case 8:
        return <PHealth />
        case 9:
          return <PRemote />
      default:
        break;
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
            <img src="/images/Logo.svg" alt="logo" height={"70px"} className={sideCollapsed === true ? "d-none" : ""}/>
              </Link>
            <Link to="/dashboard">
            <img src="/images/s-logo.svg" alt="logo" height={"50px"} className={sideCollapsed === true ? "my-3" : "d-none"}/>
              </Link>
            </div>
          <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<UserOutlined />} onClick={() => setFragment(0)}>
              User Profile
            </Menu.Item>
            <Menu.Item key="2" icon={<ReconciliationOutlined />} onClick={() => setFragment(1)}>
              Consultations
            </Menu.Item>
            <Menu.Item key="3" icon={<MedicineBoxOutlined />} onClick={() => setFragment(2)}>
              Medications
            </Menu.Item>
            <Menu.Item key="4" icon={<MergeCellsOutlined />}  onClick={() => setFragment(3)}>
              Labs
            </Menu.Item>
            <Menu.Item key="5" icon={<AlertOutlined />}  onClick={() => setFragment(4)}>
              Allergies
            </Menu.Item>
            <Menu.Item key="6" icon={<ExperimentOutlined />}  onClick={() => setFragment(5)}>
              Immunizations
            </Menu.Item>
            <Menu.Item key="7" icon={<PictureOutlined />}  onClick={() => setFragment(6)}>
              Images
            </Menu.Item>
            <Menu.Item key="8" icon={<FileDoneOutlined />}  onClick={() => setFragment(7)}>
              Doctor's Message
            </Menu.Item>
            <Menu.Item key="9" icon={<HeartOutlined />}  onClick={() => setFragment(8)}>
              Health Tips
            </Menu.Item>
            <Menu.Item key="10" icon={<LaptopOutlined />}  onClick={() => setFragment(9)}>
              Remote Monitioring
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="bg-white" style={{ padding: "0px 20px" }}>
            <DHeader />
          </Header>
          <Content style={{ margin: "20px 0" }}>
            <div className="px-5 py-3">
            {loadFragment()}
              </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
