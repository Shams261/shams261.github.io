import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://shams261-github-io.vercel.app"),
  title: "Shams Tabrez | Full Stack Software Engineer",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Shams Tabrez | Full Stack Software Engineer",
    description: "Reliable SaaS platforms, backend systems, and applied AI. Explore my experience at 1Visa.io, AdvantageClub.ai, and Accenture.",
    url: "/",
    siteName: "Shams Tabrez",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/social-preview.png", width: 1200, height: 630, alt: "Shams Tabrez — Full Stack Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shams Tabrez | Full Stack Software Engineer",
    description: "Reliable SaaS platforms, backend systems, and applied AI.",
    images: ["/social-preview.png"],
  },
  description:
    "Shams Tabrez is a full-stack software engineer in Toronto building reliable SaaS platforms, backend systems, and AI-powered products. Explore experience, projects, and resume.",
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
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='black'/><rect x='8' y='8' width='84' height='84' fill='none' stroke='%23333' stroke-width='1' rx='8'/><text x='50' y='62' font-family='system-ui,sans-serif' font-size='42' font-weight='bold' text-anchor='middle' fill='white' letter-spacing='-2px'>ST</text></svg>",
        type: "image/svg+xml",
      },
    ],
    shortcut:
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='black'/><rect x='8' y='8' width='84' height='84' fill='none' stroke='%23333' stroke-width='1' rx='8'/><text x='50' y='62' font-family='system-ui,sans-serif' font-size='42' font-weight='bold' text-anchor='middle' fill='white' letter-spacing='-2px'>ST</text></svg>",
    apple:
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='black'/><rect x='8' y='8' width='84' height='84' fill='none' stroke='%23333' stroke-width='1' rx='8'/><text x='50' y='62' font-family='system-ui,sans-serif' font-size='42' font-weight='bold' text-anchor='middle' fill='white' letter-spacing='-2px'>ST</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
