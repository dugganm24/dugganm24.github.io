import React from "react";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

interface Link {
  path: string;
  title: string;
}

interface MenuOverlayProps {
  links: Link[];
  closeMenu: () => void; 
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links, closeMenu }) => {
  const pathname = usePathname(); 

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