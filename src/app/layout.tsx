import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="_nextxxx">{children}</div>

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-GNBEQ7GYCW" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-GNBEQ7GYCW');
        `}
        </Script>
      </body>
    </html>
  );
}
