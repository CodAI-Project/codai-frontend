'use client'
import { Button } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import { FiDownload, FiShare2 } from 'react-icons/fi'
import { BsFillPlayFill } from 'react-icons/bs'
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useChat } from '../context/chatContext';

const Topbar = ({ sidebarOpen }) => {
  const { selectedChat } = useChat();

  const [loading, setLoading] = useState(false);

  const textControl = useAnimation();
  const buttonsControl = useAnimation();

  const textAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonsAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    textControl.start(selectedChat?.title ? 'visible' : 'hidden');
    buttonsControl.start(selectedChat?.title ? 'visible' : 'hidden');
  }, [selectedChat]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`bg-blackcodai-950 my-3 mx-1 py-6 px-4  rounded-3xl ${sidebarOpen ? 'ml-1/4' : 'ml-1/5'
        } transition-all duration-300`}
    >
      <div className='flex flex-row items-center w-full justify-between'>
        <motion.h1
          key={selectedChat?.title} // Chave única para forçar a transição ao mudar o título
          initial={{ opacity: 0, y: -20 }}
          animate="visible"
          exit="hidden"
          variants={textAnimation}
          className="text-white h-[40px] text-lg"
        >
          {selectedChat && (selectedChat.title !== '' ? selectedChat.title : "Novo template") || "Novo template"}
        </motion.h1>
        <AnimatePresence>
          {selectedChat?.title && (
            <motion.div
              key="buttons" // Chave única para a transição suave dos botões
              initial={{ opacity: 0, y: 20 }}
              animate="visible"
              exit="hidden"
              variants={buttonsAnimation}
              transition={{ duration: 0.3 }}
              className={`flex flex-row gap-5`}
            >
              <Button variant='light' className='text-gray-400' isLoading={loading} startContent={!loading ? <FiDownload /> : ""}>
                Download (ZIP)
              </Button>

              <Button variant='light' className='text-gray-400' isLoading={loading} startContent={!loading ? <FiShare2 /> : ""}>
                Compartilhar
              </Button>

              <Button variant='solid' className='text-gray-400' isLoading={loading} isIconOnly>
                <BsFillPlayFill size={30} />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Topbar;
