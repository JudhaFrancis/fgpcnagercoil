'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [isSongsOpen, setIsSongsOpen] = useState(false);
    useEffect(() => {
        const mobileBtn = document.getElementById("mobile-menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");

        const toggleMenu = () => {
            if (mobileMenu) {
                mobileMenu.classList.toggle("hidden");
            }
        };

        mobileBtn?.addEventListener("click", toggleMenu);

        return () => {
            mobileBtn?.removeEventListener("click", toggleMenu);
        };
    }, []);

    return (
        <header className="bg-[#222222CC] text-[#DEDEDE] py-2 top-4 z-50 shadow sticky max-w-5xl mx-4 md:mx-auto mt-3 rounded-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 font-poppins">
                {/* Logo */}
                <div className="flex items-center flex-shrink-0 bg-[#3E3E3E] rounded-[10px] p-[6px]">
                    <Link href="/home">
                        <Image
                            src="/header/fgpc_nagercoil_logo.jpg"
                            alt="Scott School logo"
                            className="w-10 lg:w-12 h-12 rounded-[10px]"
                            width={40}
                            height={40}
                        />
                    </Link>
                </div>

                {/* Navigations */}
                    <nav className="hidden bg-[#3E3E3E] px-4 py-2 rounded-[10px] md:flex space-x-2 mx-auto">
                        {["Home", "About Us", "Ministries", "Sermons", "Songs", "Gallery", "Contact Us"].map((item) => {
                            if (item === "Songs") {
                                return (
                                    <div
                                        key="Songs"
                                        className="relative group"
                                    >
                                        <button className="bg-[#3E3E3E] border border-[#4E4E4E] hover:border-white transition-colors duration-300 ease-in-out px-4 py-3 rounded-[10px] text-[14px] font-normal">
                                            Songs ▾
                                        </button>
                                        <div className="absolute left-0 top-full mt-2 ml-[-20px] w-60 bg-[#3E3E3E] text-[#DEDEDE] rounded-[10px] border border-[#4E4E4E] shadow-lg z-50
                                            opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible
                                            transition-all duration-300 ease-in-out px-2 py-2">
                                            <Link href="/songs/johnsam_joyson" className="block px-4 py-1 hover:text-white">Johnsam Joyson</Link>
                                            <Link href="/songs/davidsam_joyson" className="block px-4 py-1 hover:text-white">Davidsam Joyson</Link>
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={item}
                                    href={`/${item.toLowerCase().replace(/\s/g, "")}`}
                                    className="bg-[#3E3E3E] border border-[#4E4E4E] hover:border-white transition-colors duration-300 ease-in-out px-4 py-3 rounded-[10px] text-[14px] font-normal"
                                >
                                    {item}
                                </Link>
                            );
                        })}
                    </nav>

                {/* Right-side buttons */}
                <div className="flex items-center bg-[#3E3E3E] px-3 py-2 rounded-[10px]">
                    {/* Mobile menu button */}
                    <button id="mobile-menu-btn" className="md:hidden text-[#212121] focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>

                    {/* Register Button */}
                    <Link
                        href="/register"
                        className="hidden md:flex bg-[#3E3E3E] border border-[#4E4E4E] hover:border-white transition-colors duration-300 ease-in-out px-4 py-3 rounded-[10px] text-[14px] font-normal"
                    >
                        August Prayer
                    </Link>
                </div>
            </div>

            {/* Mobile menu */}
            <nav
                id="mobile-menu"
                className="hidden fixed top-16 left-0 w-full bg-white shadow-md z-50 md:hidden"
            >
                <div className="flex flex-col items-center space-y-2 py-4 bg-white">
                    <Link href="/home" className="text-[#212121] hover:text-[#BF360C] p-2 rounded-[10px] text-sm font-medium">
                        Home
                    </Link>
                    <Link href="/aboutus" className="text-[#212121] hover:text-[#BF360C] p-2 rounded-[10px] text-sm font-medium">
                        About Us
                    </Link>
                    <Link href="/sermons" className="text-[#212121] hover:text-[#BF360C] p-2 rounded-[10px] text-sm font-medium">
                        Sermons
                    </Link>
                    <Link href="/gallery" className="text-[#212121] hover:text-[#BF360C] p-2 rounded-[10px] text-sm font-medium">
                        Gallery
                    </Link>
                    <Link href="/contactus" className="text-[#212121] hover:text-[#BF360C] p-2 rounded-[10px] text-sm font-medium">
                        CONTACT US
                    </Link>
                </div>
            </nav>
        </header>
    );
}
