import { Inter } from "next/font/google";
import "./globals.css";
import ReactGA from "react-ga4";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  ReactGA.initialize(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "");

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
