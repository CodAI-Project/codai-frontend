

import { useState, useEffect } from 'react'
import { AiFillMessage, } from 'react-icons/ai'
import { RiAddCircleLine } from 'react-icons/ri'
import { TbLayoutSidebarLeftExpand, TbLayoutSidebarRightExpand } from 'react-icons/tb'
import { motion, useAnimation } from 'framer-motion'
import HeaderSidebar from './headerSidebar'
import { Button, Tooltip, Divider } from "@nextui-org/react";



export default function Sidebar({ setSelectedChat }) {


    const [data, setData] = useState([
        {
            title: 'Tela de login',
            icon: AiFillMessage,
        },
        {
            title: 'Teste teste',
            icon: AiFillMessage,
        },
        {
            title: 'Teste teste',
            icon: AiFillMessage,
        }
    ]);





    const [active, setActive] = useState(false)
    const controls = useAnimation()
    const controlText = useAnimation()
    const controlTitleText = useAnimation()

    const showMore = () => {
        controls.start({
            width: '250px',
            transition: { duration: 0.001 }
        })
        controlText.start({
            opacity: 1,
            display: 'block',
            transition: { delay: 0.3 }
        })
        controlTitleText.start({
            opacity: 1,
            transition: { delay: 0.3 }
        })

        setActive(true)
    }

    const showLess = () => {
        controls.start({
            width: '80px',
            transition: { duration: 0.001 }
        })

        controlText.start({
            opacity: 0,
            display: 'none',
        })

        controlTitleText.start({
            opacity: 0,
        })

        setActive(false)

    }



    useEffect(() => {
        showMore()
    }, [])



    return (
        <div className=' flex-grow-0 teste'>
            <div className=''>
                <motion.div
                    animate={controls}
                    className={`max-w-[250px] p-2 h-screen animate duration-300 relative flex flex-col group ${active ? '' : 'w-16 mx-auto text-center'
                        }`}
                >
                    <div className='bg-blackcodai-950 py-6 h-full rounded-3xl overflow-hidden'> {/* Adicionando overflow-hidden para a div da lista de chats */}
                        <div className={`px-5 flex flex-wrap teste flex-row gap-5 items-center ${active ? '' : 'justify-center'}`}>
                            <HeaderSidebar active={active} />
                        </div>

                        <Divider className="mt-6 mb-2" />

                        <div className='flex bg-transparent px-4 py-1 justify-center cursor-pointer'>
                            <Tooltip placement={!active ? 'right-start' : ''} content="Gerar novo template">
                                <Button onClick={() =>
                                    setData(prevData => [
                                        ...prevData,
                                        {
                                            title: '',
                                            icon: AiFillMessage,
                                        }
                                    ])
                                } className={`w-full ${active ? 'justify-start' : ''} `} isIconOnly={!active} variant='light' color='default'>
                                    <div className="flex items-center">
                                        <RiAddCircleLine className={`text-lg ${active ? 'text-xl' : ''} text-gray-500`} />
                                        <motion.p animate={controlText} className='ml-4 text-sm font-bold text-gray-400' >Gerar novo template</motion.p>
                                    </div>
                                </Button>
                            </Tooltip>
                        </div>

                        <div className='grow items-center overflow-y-auto' style={{ maxHeight: active ? 'calc(82vh - 100px)' : 'calc(74vh - 48px)' }}>
                            {data.slice().reverse().map((item, index2) => (
                                <div key={index2} className='flex px-4 py-1 justify-center cursor-pointer'>
                                    <Tooltip placement={!active ? 'right-start' : ''} content={item.title || "Novo template"}>
                                        <Button onClick={() => setSelectedChat(item || false)} className={`w-full ${active ? 'justify-start' : ''} `} isIconOnly={!active} variant='light' color='default'>
                                            <item.icon className='text-lg text-sulu-300' />
                                            <motion.p animate={controlText} className='ml-4 text-sm font-bold text-gray-300 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-[160px]' > {item.title || 'Novo template'}</motion.p>
                                        </Button>
                                    </Tooltip>
                                </div>
                            ))}

                        </div>
                        <div className="absolute bottom-5 left-0 right-0 p-4 flex justify-center items-center">
                            {active ? (
                                <TbLayoutSidebarRightExpand onClick={showLess} className='text-2xl text-gray-400 cursor-pointer' />
                            ) : (
                                <TbLayoutSidebarLeftExpand onClick={showMore} className='text-2xl text-gray-400 cursor-pointer' />
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}