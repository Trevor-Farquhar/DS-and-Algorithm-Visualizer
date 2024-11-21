'use client'
import Link from "next/link"
import Image from "next/image"
import { useNavigate } from "react-router-dom"


const Navbar = () => {
    // let navigate = useNavigate();
    // function handleClick() {
    //     navigate('/test_routes/test_routes')
    // }

    
    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    {/* <Image src="/logo.png" alt="logo" width={144} height={30} /> */}
                    <h1 className="text-3xl text-black">Site Name</h1>
                </Link>

                <div className="flex items-center gap-5 text-black">
                    <ul>
                        <li>
                            <a href="/test"></a>
                        </li>
                    </ul>
                </div>

            </nav>
        </header>
    )
}

export default Navbar