import Link from "next/link"

const Navbar = () => {
    return (
        <>
            <div className="w-full flex justify-between items-center h-[70px] gap-[20px]  px-4 overflow-hidden">
                <Link href={'/'} className="xs:text-white text-yellow-300 font-bold xs:text-3xl text-2xl">Tarun <span className="text-yellow-300 xs:inline hidden">Devgan</span></Link>

                <div className="flex gap-[15px]">
                    <Link className="text-sm text-white hover:text-yellow-300" href='/skills'>Skills</Link>
                    <Link className="text-sm text-white hover:text-yellow-300" href='/projects'>Projects</Link>
                    <Link className="text-sm text-white hover:text-yellow-300" href='/experience'>Experience</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar