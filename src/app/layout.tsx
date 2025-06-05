import type { Metadata } from "next";
import "./globals.css";
import Nav from "./(component)/nav/Nav";

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
      <body className="relative">
        {/* navgation bar */}

        <header>
          <Nav />
        </header>

        {/* body */}
        <div className="bg-slate-500 ">{children}</div>
        {/*footer  */}
        <footer>footer</footer>
      </body>
    </html>
  );
}
