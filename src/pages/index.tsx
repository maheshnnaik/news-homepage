import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className={`items-center justify-center min-h-screen p-4`}
    >
      <header className="w-full flex items-center justify-between">
        <Image src="/images/logo.svg" width={100} height={100} alt="logo" />
        <div className="flex gap-4">
          <Link href="/home" className="text-[#524848] hover:text-[#e9ab53]">Home</Link>
          <Link href="/new" className="text-[#524848] hover:text-[#e9ab53]">New</Link>
          <Link href="/popular" className="text-[#524848] hover:text-[#e9ab53]">Popular</Link>
          <Link href="/trending" className="text-[#524848] hover:text-[#e9ab53]">Trending</Link>
          <Link href="/categories" className="text-[#524848] hover:text-[#e9ab53]">Categories</Link>
        </div>

      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
