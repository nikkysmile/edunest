import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import site from "@/config/site";

export const metadata = {
  title: {
    default: "EduNest",
    template: "%s | EduNest",
  },
  description:
    "Website resmi EduNest.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

          {children}

        <Footer />
      </body>
    </html>
  );
}