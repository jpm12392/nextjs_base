'use client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Loader from '@/components/Loader';
import "./globals.css";
import Script from 'next/script'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
   useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500); // simulate loading delay

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <html lang="en">
      <head>
      </head>
      <body className="bg-gray-100 text-gray-900 font-sans">
        {loading && <Loader />}
        {children}
        <ToastContainer position="top-right" autoClose={7000} />
      </body>
    </html>
  );
}
