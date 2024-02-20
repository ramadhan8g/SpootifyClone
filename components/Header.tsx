"use client";

import React from "react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import Button from "./Button";
import { twMerge } from "tailwind-merge";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `
    h-fit 
    bg-gradient-to-b 
    from-emerald-800 
    p-6
    `,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            className="
              rounded-full 
              bg-black 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            className="
              rounded-full 
              bg-black 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
          <button
            // onClick={() => router.push('/search')}
            className="
              rounded-full 
              p-2 
              bg-white 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <div className="flex gap-x-4 items-center">
            <Button className="bg-white px-6 py-2">Logout</Button>
            <Button
              //   onClick={() => router.push("/account")}
              className="bg-white"
            >
              <FaUserAlt />
            </Button>
          </div>
          <div>
            <Button
              //   onClick={authModal.onOpen}
              className="
                    bg-transparent 
                    text-neutral-300 
                    font-medium
                  "
            >
              Sign up
            </Button>
          </div>
          <div>
            <Button
              //   onClick={authModal.onOpen}
              className="bg-white px-6 py-2"
            >
              Log in
            </Button>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
