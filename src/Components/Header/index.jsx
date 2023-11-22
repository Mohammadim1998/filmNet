import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-blue-500 h-[10vh] flex justify-center items-center">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"} className="text-white text-xl">فیلم نت</Link>

                <nav>
                    <ul className="flex justify-start items-center gap-8">
                        <li>
                            <Link className="bg-white transition-all duration-500 hover:bg-yellow-400 hover:text-black text-blue-500 flex justify-center items-center w-20 h-8 rounded-md" href={"/"}>خانه</Link>
                        </li>
                        <li>
                            <Link className="bg-white transition-all duration-500 hover:bg-yellow-400 hover:text-black text-blue-500 flex justify-center items-center w-20 h-8 rounded-md" href={"/movies"}>فیلم ها</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
