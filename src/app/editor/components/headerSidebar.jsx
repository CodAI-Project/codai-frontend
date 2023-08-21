'use client'

import React, { useState } from 'react'
import { VscChevronDown } from 'react-icons/vsc'
import { Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, RadioGroup, Radio } from '@nextui-org/react'


export default function HeaderSidebar({ active }) {


    return (
        <header className={`px-2 flex flex-row items-center ${active ? 'flex-row gap-7' : 'flex-col items-center justify-center'}`}>
            <div className={`${active ? '' : ''}`}>
                {!active ? (
                    <DropdownContent color="default" variant="light" active={active}>
                        <Avatar isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                    </DropdownContent>
                ) :
                    (
                        <Avatar isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                    )}
            </div>
            <div className="flex flex-row gap-3 items-center justify-center">
                <span className={`text-white overflow-hidden overflow-ellipsis whitespace-nowrap max-w-[160px] ${active ? '' : 'hidden'}`}>
                    Luan Reis
                </span>
                <div className="flex flex-wrap gap-4">
                    <DropdownContent color="default" variant="light" active={active}>
                        <Button
                            className={active ? '' : 'hidden'}
                            isIconOnly
                            variant="outline"
                        >
                            <VscChevronDown size={20} />
                        </Button>
                    </DropdownContent>
                </div>
            </div>
        </header>
    )
}

const DropdownContent = ({ variant, color, children }) => (
    <Dropdown>
        <DropdownTrigger className='cursor-pointer'>
            {children}
        </DropdownTrigger>
        <DropdownMenu aria-label="Dropdown Variants" color={color} variant={variant}>
            <DropdownItem key="edit">Ver informações</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
                Sair
            </DropdownItem>
        </DropdownMenu>
    </Dropdown>
);

