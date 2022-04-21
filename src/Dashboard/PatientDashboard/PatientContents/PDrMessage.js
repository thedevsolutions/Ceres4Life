import React from "react";
import { Layout } from "antd";
import ChatSide from "./ChatSide";
import ChatHead from "./ChatHead";
import ChatContent from "./ChatContent";
import MainLayout from "../Layout";
import AgoraRTM from "agora-rtm-sdk";
const { Header, Sider, Content } = Layout;

export default function PDrMessage() {
  // const rtm = new RtmClient();

  const options = {
    appId: "de4feff0637f46bba420ffdecc540a14",
    accountName: "Testing",
  };

  const client = AgoraRTM.createInstance(options.appId);

  client.on("MessageFromPeer", function (message, peerId) {
    console.log("Message from: " + peerId + " Message: " + message);
  });
  // Display connection state changes
  client.on("ConnectionStateChanged", function (state, reason) {
    console.log("State changed To: " + state + " Reason: " + reason);
  });

  let channel = client.createChannel("testingChannel");

  channel.on("ChannelMessage", function (message, memberId) {
    console.log("Message received from: " + memberId + " Message: " + message);
  });
  // Display channel member stats
  channel.on("MemberJoined", function (memberId) {
    console.log(memberId + " joined the channel");
  });
  // Display channel member stats
  channel.on("MemberLeft", function (memberId) {
    console.log(memberId + " left the channel");
  });

  client.login({ uid: `${Math.floor(Math.random() * 1000)}` }).then(() => {
    channel.join().then(() => {
      console.log("You have successfully joined channel " + channel.channelId);

      channel.getMembers().then((res) => {
        console.log(res, "res");
      });
    });
  });

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
