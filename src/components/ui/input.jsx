import React from "react";

// filepath: /c:/Users/empow/OneDrive/Documents/techpye-project/src/components/ui/input.jsx

export function Input({ type, placeholder, className, ...props }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`border rounded px-2 py-1 ${className}`}
            {...props}
        />
    );
}