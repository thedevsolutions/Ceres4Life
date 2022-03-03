import React from "react";
import CommunityForum from "../../Components/CommunityForum";
import Hero from "../../Components/Hero";
import DoForYou from "../../Components/DoForYou";
import Help from "../../Components/Help";
import Committed from "../../Components/Committed";
import ChatBot from "../../Components/ChatBot";
import BlogsNews from "../../Components/BlogsNews";

export default function Home() {
  return (
    <div className="bg-sea">
      <ChatBot />
      <Hero />
      <DoForYou />
      <Help />
      <Committed />
      <CommunityForum />
      <BlogsNews/>
    </div>
  );
}
