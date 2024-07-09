import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Framer Motion Infinite Scroll Carousel",
  description: "This project contains the implementation of auto infinite scrolling carousel in next js using framer motion and tailwind css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
