'use client'
import React from "react";
import {FaX} from 'react-icons/fa6'
import "../app/globals.css";
import { useRouter } from "next/navigation";
const Model = ({ children }) => {
    const router = useRouter();
  return (
    <div className="fixed top-0 left-0 w-full h-full backdrop-blur-[4px]">
        <div className="w-full h-full relative flex items-center justify-center">
            <div className="relative bg-white p-1 rounded flex items-center justify-center font-bold text-2xl w-[600px] h-[600px]">
                <span className=" absolute right-1 top-1 p-2 bg-white cursor-pointer" onClick={() => router.back()}><FaX /></span>
                {children}
            </div>
        </div>
    </div>
  );
};

export default Model;
