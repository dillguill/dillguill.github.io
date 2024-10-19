import "./globals.css"; 
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Explore the Galaxy",
  description: "The safest way to travel beyond Earth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-beige dark:bg-space-gray transition-colors duration-500">
        <Navbar />
        {/* Main Content */}
        <main className="min-h-screen p-6">
          {children}  {/* This will render the page-specific content */}
        </main>

        {/* Footer */}
        <footer className="p-4 text-center">
          <p>© 2024 Dillon Guillory Portfolio. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}