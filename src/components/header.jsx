import { ChevronDown } from "lucide-react";
import React from "react";

export default function TopHeader() {
  return (
    <header className="font-sans w-full mb-8 h-16 bg-button flex items-center justify-center bg-black text-white">
      <div className="container flex space-x-10 justify-center items-center">
        <div className="flex items-center gap-2">
          <p className="font-title-14px-regular justify-center text-sm leading-[21px]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a
            href="#"
            className="font-semibold text-text text-sm leading-6 underline whitespace-nowrap hover:opacity-80"
          >
            ShopNow
          </a>
        </div>

        <div className="flex items-center gap-1">
          <span className="font-title-14px-regular text-text text-sm leading-[21px]">
            English
          </span>
          <ChevronDown className="h-4 w-4 text-text" />
        </div>
      </div>
    </header>
  );
}
