import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
  isActive: boolean;  // Added isActive prop
  onClick: () => void; // Added onClick prop
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, isActive, onClick }) => {
  return (
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 ${isActive ? "text-white underline decoration-[#00FFC8] underline-offset-8 decoration-4" : "text-[#BFBCBC]"} text-2xl sm:text-3xl md:text-4xl hover:text-[#00FFC8]`}
      onClick={onClick} // Trigger onClick to close the menu
    >
      {title}
    </Link>
  );
};

export default NavLink;