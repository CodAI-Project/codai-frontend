'use client'
import React, { useEffect, useState } from 'react'
import { FaRegLightbulb } from 'react-icons/fa'
import { GoArrowRight } from 'react-icons/go'
import { motion } from "framer-motion"
import { Button } from '@nextui-org/react';

export default function MainEditor() {
    const [isBulbOn, setIsBulbOn] = useState(false);


    const ideas = [
        {
            title: 'E-commerce básico de roupas em ReactJS',
            objet: ''
        },
        {
            title: 'Site de farmácia',
            objet: ''
        }

    ]

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsBulbOn((prevIsBulbOn) => !prevIsBulbOn);
        }, 3000); // Change this interval time as needed

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        if (isBulbOn) {
            const repeatIntervalId = setInterval(() => {
                setIsBulbOn(false);
            }, 500); // Time between each repeat, adjust as needed

            return () => {
                clearInterval(repeatIntervalId);
            };
        }
    }, [isBulbOn]);

    return (
        <div className='flex flex-col items-center h-full justify-center content-center'>

            <header className='mb-12 text-center'>

                <h1 className='text-2xl mb-3 font-semibold'>Ainda não sabe como usar?</h1>

                <p className='text-gray-400'>Use as ideias básicas de templates para ver funcionando</p>

            </header>


            <article>
                <div className="glow">
                    <div className='bg-gradient-to-tl orb  from-gray-700 to-gray-900 rounded-full content-center justify-center flex items-center'>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{
                                rotate: isBulbOn ? [-22, 0, -10] : 10,
                                rotate: isBulbOn ? [-22, 0, 8] : 2,
                                scale: 1,
                                opacity: isBulbOn ? 1 : 0.7,
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 260,
                                damping: 20,
                            }}
                        >

                            <FaRegLightbulb className='text-yellow-300' size={25} />
                        </motion.div>

                    </div>
                </div>
            </article>


            <div className='mt-6 text-lg'>
                <span>Ideias de templates</span>
            </div>

            <div className='mt-6 '>
                {ideas.map((ideia, index) => (
                    <div key={index} className='flex flex-row py-2 px-4 bg-gradient-to-l from-blackcodai-950 to-gray-800 hover:bg-slate-100 hover:scale-[1.02] hover:shadow-md transform transition-transform duration-300 gap-20 rounded-lg my-4 items-center justify-between'>
                        <div>
                            <h1>{ideia.title}</h1>
                        </div>
                        <div>
                            <Button variant='light' startContent={<GoArrowRight className='font-bold text-blue-400' />} isIconOnly>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
