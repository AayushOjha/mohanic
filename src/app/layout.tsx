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
      <head>
        {/* Google Tag Manager  */}
          <Script id="gtm">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true; j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M9P6LV2K');`}
          </Script>
        {/* End Google Tag Manager  */}
      </head>
      <body className={inter.className}>
        
        {/* Google Tag Manager (noscript)  */}

        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M9P6LV2K"
        height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
        {/* End Google Tag Manager (noscript)  */}

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
