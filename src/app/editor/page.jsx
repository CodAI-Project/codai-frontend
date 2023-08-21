'use client'
import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Topbar from './components/topSideBar';
import EditorContent from './components/editorContent';
import InputCodeAI from './components/inputCodeAI';

const Home = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  console.log(selectedChat)

  return (
    <div className="flex max-h-screen overflow-hidden">
      <Sidebar setSelectedChat={setSelectedChat} />
      <div className="flex-1 flex flex-col ">
        <Topbar title={selectedChat ? selectedChat.title : false} sidebarOpen={sidebarOpen} />
        <EditorContent selectedChatContent={selectedChat} sidebarOpen={sidebarOpen} />
        <InputCodeAI/>
      </div>
    </div>
  );
};

export default Home;
