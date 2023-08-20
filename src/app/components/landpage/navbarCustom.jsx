'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { CodaiIcon } from "./codaiIcon";
import Link from "next/link";
export default function NavbarCustom() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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

      <NavbarContent className="hidden sm:flex gap-2" justify="center" >
        <NavbarItem>
          {menuItems.map((item, index) => (

            <Link
              className="w-24 text-white"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          ))
          }

        </NavbarItem>
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
      <NavbarMenu isBlurred={true} className="">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-white"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar >
  );
}
