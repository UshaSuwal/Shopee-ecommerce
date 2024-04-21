
'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Navbar} from './_components/Navbar';
import {Footer} from './_components/Footer';

import { Provider } from "react-redux";
import store from "../redux/store/configurStore";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <script
          src="https://kit.fontawesome.com/14dea2b7a9.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>
      <Provider store={store}>
        <Navbar />
        {children}
        <Footer />
        </Provider>
        </body>
    </html>
  );
}
