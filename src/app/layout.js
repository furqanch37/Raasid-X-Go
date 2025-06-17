// app/layout.js or app/layout.jsx
"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer/footer";
import Navbar from "./Navbar/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <body>
        {!isAdminRoute && <Navbar />}
        {children}
        {!isAdminRoute && <Footer />}
      </body>
    </html>
  );
}
