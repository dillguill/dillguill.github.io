
import "./globals.css"; 
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Explore the Galaxy",
  description: "The safest way to travel beyond Earth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-beige dark:bg-space-gray dark:text-white transition-colors duration-500">
        {/* SVG ripple filter */}
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <filter id="ripple">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" />  {/* Reduced scale for less intensity */}
          </filter>
        </svg>

        {/* Oil gradient background with automatic movement */}
        <div className="oil-gradient-bg"></div>  

        <Navbar />
        <main className="min-h-screen p-6">
          {children}
        </main>
        <footer className="p-4 text-center">
          <p>© 2024 Dillon Guillory Portfolio. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
