import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import { Fira_Code, Geist } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/shared/scroll-top-btn";


const geistSans = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  fallback: ["sans-serif"],
});
const firaCode = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  fallback: ["sans-serif"],
})



export const metadata = {
  title: "Anonymous Defenders",
  description: "Analyse suspicious files, domains, IPs and URLs to detect malware and other breaches, automatically share them with the security community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} ${firaCode.variable}  antialiased bg-background text-white  `}
      >
        <ScrollToTop/>
        <Navbar />
        <main className="pt-22">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
