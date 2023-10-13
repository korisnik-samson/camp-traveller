import React from 'react';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Traveller',
    description: 'Travel UI/UX App for camping',
}

export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <main className="relative overflow-hidden">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
