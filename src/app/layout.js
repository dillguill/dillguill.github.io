import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Explore the Galaxy",
  description: "The safest way to travel beyond Earth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-black text-white`}
      >
        {/* Header */}
        <header className="p-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">EXPLORE THE GALAXY</h1>
          <nav className="space-x-6">
            <a href="#" className="hover:underline">Destinations</a>
            <a href="#" className="hover:underline">Adventures</a>
            <a href="#" className="hover:underline">Technology</a>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="p-4 text-center">
          <p>© 2024 Your Portfolio. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}