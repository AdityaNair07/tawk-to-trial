import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import TawkToChat from "@/components/TawktoChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "900"],
});

export const metadata = {
  title: "Tawk.to trial",
  description: "Implementing Tawk.to in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        {children}
        <TawkToChat />
      </body>
    </html>
  );
}
