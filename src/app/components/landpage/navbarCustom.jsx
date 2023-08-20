'use client'
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarContent, NavbarItem, Button,Link } from "@nextui-org/react";
import { CodaiIcon } from "./codaiIcon";
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


      <NavbarContent justify="end">
        <NavbarItem>

          <Button color="primary" className="text-white px-9 border-emerald-600" variant="bordered">
            <Link href="/login">
              Entrar
            </Link>
          </Button>

        </NavbarItem>
      </NavbarContent>
    </Navbar >
  );
}
