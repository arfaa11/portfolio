import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Arfaa Mumtaz — Full-Stack Developer",
  description:
    "Portfolio of Arfaa Mumtaz — Full-Stack Developer building secure, user-focused applications with modern web technologies. Based in Edmonton, AB.",
  openGraph: {
    title: "Arfaa Mumtaz — Full-Stack Developer",
    description:
      "Full-Stack Developer building secure, user-focused applications. CS graduate, NCL top 1%, live product at abautofinder.ca.",
    type: "website",
    url: "https://arfaa.ca",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arfaa Mumtaz — Full-Stack Developer",
    description: "Full-Stack Developer · CS Graduate · Edmonton, AB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme by reading localStorage before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.classList.add(t);}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
