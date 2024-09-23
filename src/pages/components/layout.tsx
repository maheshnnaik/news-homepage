import React from "react";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }: {children: React.ReactNode}) {
    return (
        <div className="w-[900px] items-center justify-center min-h-screen p-6 px-12 md:w-full">
            <Header />
            {children}
            <Footer />
        </div>
    )
}