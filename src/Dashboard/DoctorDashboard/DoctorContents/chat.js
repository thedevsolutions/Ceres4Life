import React from "react";
import { Layout } from "antd";
import ChatSide from "./ChatSide";
import ChatHead from "./ChatHead";
import ChatContent from "./ChatContent";
import MainLayout from "../Layout";

const { Header, Sider, Content } = Layout;

export default function DrChat() {
  return (
    <>
      <MainLayout>
        <Layout className="over">
          <Sider className="bg-transparent chat">
            <ChatSide />
          </Sider>
          <Layout>
            <Header className="bg-transparent chat-header">
              <ChatHead />
            </Header>
            <Content>
              <ChatContent />
            </Content>
          </Layout>
        </Layout>
      </MainLayout>
    </>
  );
}
