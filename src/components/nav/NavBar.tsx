import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="flex justify-between flex-wrap p-3">
            <ul className="flex ml-auto">
                <li className = "mr-6">
                    <Link href="/">Home</Link>
                </li>
                <li className = "mr-6">
                    <Link href="/about">About</Link>
                </li>
                <li className = "mr-6">
                    <Link href="/projects">Projects</Link>
                </li>
                <li className = "mr-6">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;