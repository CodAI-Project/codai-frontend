'use client'
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarContent, NavbarItem } from "@nextui-org/react";
import { CodaiIcon } from "./codaiIcon";
import Link from "next/link";

export default function NavbarCustom() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Planos",
    "Sobre nós",
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={true}
      position="static"
      maxWidth="xl"
      classNames={{
        base: 'lg:px-56 py-2',
      }}

    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <CodaiIcon />
        </NavbarBrand>
      </NavbarContent>


      <NavbarContent as="div" justify="end">
        <NavbarItem>
          <Link href="/login" passHref>
            Entrar
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar >
  );
}
