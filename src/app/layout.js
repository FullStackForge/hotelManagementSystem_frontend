import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

export const metadata = {
  title: "Hotel Management system",
  description: "Hotel management system build using nextjs and django",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-green-500 relative to-[#08201D]"
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
