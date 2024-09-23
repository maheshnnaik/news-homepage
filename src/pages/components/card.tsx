import Image from "next/image";
import { inter } from "../font";

interface CardProps {
    imageSrc: string,
    num: string,
    title: string,
    desc: string
}
export default function Card (props: CardProps) {
    const { imageSrc, title, num, desc } = props;
    return (
        <div className="grid grid-cols-4">
            <Image className="hidden md:block p-2 h-full" src={imageSrc} width={90} height={144} alt="retro-pcs" />
            <Image className="p-2 col-span-1 md:hidden" src={imageSrc} width={180} height={288} alt="retro-pcs" />
            <div className="grid col-span-3 gap-2 md:py-2 gap-1">
                {
                    num &&
                    <span
                        className={`${inter.className} font-bold text-[color:hsl(5,85%,63%)] text-4xl md:text-2xl `}
                    >
                        {num}
                    </span>
                }
                <h1 className={`${inter.className} font-extrabold text-4xl text-black hover:cursor-pointer hover:text-[color:hsl(5,85%,63%)] md:text-sm`}>{title}</h1>
                <span className={`${inter.className} font-normal text-2xl text-gray-800 md:text-sm`}>
                    {desc}
                </span>
            </div>
        </div>
    )
}