import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex justify-between flex-wrap p-3 bg-[#121212]">
            <ul className="flex ml-auto">
                <li className = "mr-6">
                    <Link href="https://www.linkedin.com/in/mpduggan/">LinkedIn</Link>
                </li>
                <li className = "mr-6">
                    <Link href="https://github.com/dugganm24">Github</Link>
                </li>
                
            </ul>
        </footer>
    )
}

export default Footer;