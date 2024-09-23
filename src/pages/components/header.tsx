import Image from "next/image";
import Nav from "./nav";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Header() {
    return (
        <header className="w-full flex items-center justify-between px-4 mx-auto">
            <Image src="/images/logo.svg" width={100} height={100} alt="logo" />
            <div className="hidden md:flex gap-4">
                <Nav />
            </div>
            <div className="flex flex-col gap-4 md:hidden">
                <Bars3Icon width={24} />
                {/* <Nav /> */}
            </div>

        </header>
    )
}