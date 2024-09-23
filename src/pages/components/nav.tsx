import Link from "next/link";

const links = [
	{ name: 'Home', href: '/' },
	{ name: 'New', href: '/new' },
	{ name: 'Popular', href: '/popular' },
	{ name: 'Trending', href: '/trending' },
	{ name: 'Categories', href: '/categories' },
]

export default function Nav() {
    return (
        <>
            {
                links.map((link) => (
                    <Link key={link.name} href={link.href} className="text-[#524848] hover:text-[#e9ab53]">{link.name}</Link>
                ))
            }
        </>
    )
}