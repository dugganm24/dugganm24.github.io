import React from "react";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation"; // Hook to get the current path

interface Link {
  path: string;
  title: string;
}

interface MenuOverlayProps {
  links: Link[];
  closeMenu: () => void; // New prop to close the menu
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links, closeMenu }) => {
  const pathname = usePathname(); // Get current path

  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            href={link.path}
            title={link.title}
            isActive={pathname === link.path}
            onClick={closeMenu} 
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;