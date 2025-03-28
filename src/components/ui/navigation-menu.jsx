import React from "react";
import clsx from "clsx";

// filepath: /c:/Users/empow/OneDrive/Documents/techpye-project/src/components/ui/navigation-menu.jsx

export function NavigationMenu({ children, className }) {
    return (
        <nav className={clsx("navigation-menu", className)}>
            {children}
        </nav>
    );
}

export function NavigationMenuList({ children, className }) {
    return (
        <ul className={clsx("navigation-menu-list", className)}>
            {children}
        </ul>
    );
}

export function NavigationMenuItem({ children, className }) {
    return (
        <li className={clsx("navigation-menu-item", className)}>
            {children}
        </li>
    );
}

export function NavigationMenuLink({ href, children, className }) {
    return (
        <a href={href} className={clsx("navigation-menu-link", className)}>
            {children}
        </a>
    );
}