import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

export default function TopHeader() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = ["English", "Spanish", "French", "German"];

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

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

        <div
          className="relative flex items-center gap-1"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="font-title-14px-regular text-text text-sm leading-[21px]">
            {selectedLanguage}
          </span>
          <ChevronDown className="h-4 w-4 text-text cursor-pointer" />
          {isDropdownOpen && (
            <div className="absolute top-8 left-0 bg-white text-black shadow-md rounded-md">
              {languages.map((language) => (
                <div
                  key={language}
                  className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer"
                  onClick={() => selectLanguage(language)}
                >
                  {language}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
