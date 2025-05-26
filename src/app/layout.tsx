import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./(component)/nav/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nike. just do it. Nike NG",
  description: "nike store for nigeria",
  openGraph: {
    images: "https://nike.com/images/two.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* navgation bar */}

        <header>
          <Nav />
        </header>

        {/* body */}
        <div className="bg-slate-500">{children}</div>
        {/*footer  */}
        <footer>footer</footer>
      </body>
    </html>
  );
}
