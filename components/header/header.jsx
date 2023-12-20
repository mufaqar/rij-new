"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import TopBar from "./topBar";
import Container from "../UI/container";
import Nav from "./nav";
import useHeader from "./useHeader";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import MobileNav from "./mobileNav";

const Header = ({data}) => {
  const { isMobile, setIsMobile } = useHeader();
  return (
    <>
      <header className="bg-white z-50 relative">
        <TopBar topBar={data?.TopNav}/>
        <Container className=" py-1 sm:py-2 flex justify-between items-center sticky top-0">
          <figure>
            <Link href="/">
              <Image
                src={"/images/logo-main.png"}
                width={80}
                height={80}
                alt="logo"
                className="w-12 sm:w-16 md:w-20"
              />
            </Link>
          </figure>
          <Nav nav={data?.Header}/>
          <button
            onClick={() => setIsMobile(!isMobile)}
            className="text-3xl lg:hidden text-black"
          >
            {isMobile ? <RxCross2 /> : <HiOutlineMenuAlt3 />}
          </button>
        </Container>
      </header>
      <MobileNav isMobile={isMobile} nav={data?.Header}/>
    </>
  );
};

export default Header;
