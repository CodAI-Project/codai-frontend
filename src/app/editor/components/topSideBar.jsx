'use client'

import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
import { FiDownload, FiShare2 } from 'react-icons/fi'
import { BsFillPlayFill } from 'react-icons/bs'

const Topbar = ({ title, sidebarOpen }) => {
  const [loading, setLoading] = useState(false)
  return (
    <div
      className={`bg-blackcodai-950 my-3 mx-1 py-6 px-4 rounded-3xl ${sidebarOpen ? 'ml-1/4' : 'ml-1/5'
        } transition-all duration-300`}
    >
      <div className='flex flex-row items-center w-full justify-between'>

        <h1 className="text-white text-lg">{title || "Novo template"}</h1>

        <div className={`flex flex-row gap-5 ${title ? '' : 'hidden'}`}>
          <Button variant='light'
            className='text-gray-400'
            isLoading={loading}
            startContent={!loading ? <FiDownload /> : ""}>
            Download (ZIP)
          </Button>

          <Button variant='light'
            className='text-gray-400'
            isLoading={loading}
            startContent={!loading ? <FiShare2 /> : ""}>
            Compartilhar
          </Button>

          <Button variant='solid'
            className='text-gray-400'
            isLoading={loading}
            isIconOnly
          >
            <BsFillPlayFill size={30} />
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Topbar;
