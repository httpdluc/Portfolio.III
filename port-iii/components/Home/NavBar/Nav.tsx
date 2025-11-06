"use client";
import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaLaptopCode } from "react-icons/fa";
import { HiBars3BottomRight } from 'react-icons/hi2';
import { BiDownload } from 'react-icons/bi';

type Props = {
    openNav: () => void;
};

const Nav = ({openNav}: Props) => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true);
            else setNavBg(false);
        };
        window.addEventListener("scroll", handler);

        return () => window.removeEventListener("scroll", handler);
    });

    return (
        <div className={`fixed w-full z-[10000] h-[12vh] transition-all duration-200 ${navBg ? "bg-[#0f142ed9] shadow-md" : ""}`}>
            <div className="flex items-center h-full justify-between w-[90%] mx-auto">
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <FaLaptopCode className="w-5 h-5 text-black"/>
                    </div>
                    <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">DLUC</h1>
                </div>
                <div className="hidden lg:flex items-center space-x-10">
                    {NavLinks.map((link) => (
                        <Link key={link.id} href={link.url} className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200">
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="flex items-center space-x-4">
                    <button className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2">
                        <BiDownload className="w-5 h-5"/>
                        <span>Download CV</span>
                    </button>
                    <HiBars3BottomRight 
                        onClick={openNav} 
                        className="w-8 h-8 cursor-pointer text-white lg:hidden" 
                        aria-label="Open navigation menu"
                    />
                </div>
            </div>
        </div>
    );
};

export default Nav;
