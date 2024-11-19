import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={144} height={30} />
                </Link>

                <h1 className="text-black">Test</h1> {/** This is a place holder for the other values in the navbar */}

            </nav>
        </header>
    )
}

export default Navbar