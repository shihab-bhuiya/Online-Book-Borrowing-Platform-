import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const path = usePathname();
    const isActive = path === href;
    console.log(path)
    return (
        <div>
            <a href={href} className={`${isActive ? 'border-b-2 border-b-red-500' : ''}`}>
                {children}
            </a>
        </div>
    );
};

export default NavLink;