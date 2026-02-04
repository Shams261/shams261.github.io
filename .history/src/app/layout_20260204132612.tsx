import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Shams - ",
  description:
    "Personal portfolio website of Shams Tabrez, a software developer showcasing skills, experience, and projects.",
  keywords: [
    "portfolio",
    "developer",
    "software engineer",
    "web development",
    "Shams Tabrez",
  ],
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='black'/><rect x='8' y='8' width='84' height='84' fill='none' stroke='%23333' stroke-width='1' rx='8'/><text x='50' y='62' font-family='system-ui,sans-serif' font-size='32' font-weight='bold' text-anchor='middle' fill='white' letter-spacing='-2px'>ST</text></svg>",
        type: "image/svg+xml",
      },
    ],
    shortcut:
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='black'/><rect x='8' y='8' width='84' height='84' fill='none' stroke='%23333' stroke-width='1' rx='8'/><text x='50' y='62' font-family='system-ui,sans-serif' font-size='32' font-weight='bold' text-anchor='middle' fill='white' letter-spacing='-2px'>ST</text></svg>",
    apple:
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='black'/><rect x='8' y='8' width='84' height='84' fill='none' stroke='%23333' stroke-width='1' rx='8'/><text x='50' y='62' font-family='system-ui,sans-serif' font-size='32' font-weight='bold' text-anchor='middle' fill='white' letter-spacing='-2px'>ST</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
