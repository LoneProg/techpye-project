import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../components/ui/navigation-menu";
import { Search } from "lucide-react";
import React from "react";

export default function Navbar() {
  // Navigation items data
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Sign Up", path: "/signup", underlined: true },
  ];

  return (
    <header className="flex items-center justify-between py-4">
      {/* Logo */}
      <div className="font-heading-24px-bold font-[700] text-text-2 text-[24px] tracking-[0.72px] leading-[24px]">
        Exclusive
      </div>

      {/* Navigation */}
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="flex items-center gap-12">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.name}>
              <NavigationMenuLink
                href={item.path}
                className="flex flex-col items-center"
              >
                <span className="font-title-16px-regular font-[400] text-text-2 text-[16px] tracking-[0] leading-[24px]">
                  {item.name}
                </span>
                {item.underlined && (
                  <div className="w-[61px] h-px opacity-50 bg-black mt-0.5" />
                )}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Search bar */}
      <div className="flex items-center bg-app-secondary rounded px-5 py-[7px]">
        <Input
          type="text"
          placeholder="What are you looking for?"
          className="border-0 bg-transparent h-6 p-0 text-[12px] font-title-12px-regular font-[400] text-text-2 opacity-50 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Search className="w-6 h-6 ml-[34px] flex-shrink-0" />
      </div>
    </header>
  );
}
