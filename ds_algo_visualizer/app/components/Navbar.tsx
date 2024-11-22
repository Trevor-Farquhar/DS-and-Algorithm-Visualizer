'use client'
import Link from "next/link"

const Navbar = () => {
    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-3xl text-black">Site Name</h1>
                </Link>

                <div className="flex items-center gap-5 text-black">
                    <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
                            <Link href="/test_route">Stacks</Link>
                        </li>
                        <li>
                            <Link href="/queues">Queues</Link>
                        </li>
                        <li>
                            <Link href="/hashmaps">Hashmaps</Link>
                        </li>
                        <li>
                            <Link href="/linked-lists">Linked Lists</Link>
                        </li>
                        <li>
                            <Link href="/trees">Trees</Link>
                        </li>
                        <li>
                            <Link href="/sorting">Sorting</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
