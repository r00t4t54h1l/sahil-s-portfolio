import type { Metadata } from "next";
import { Caveat, Poppins } from "next/font/google";
import { getSiteUrl } from "@/lib/site-url";
import { site } from "@/data/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const script = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sahil — ECE · IoT + SaaS | NIT Srinagar",
    template: "%s | Sahil",
  },
  description:
    "Portfolio of Sahil, a 4th-year ECE student at NIT Srinagar (2023—2027) who builds SaaS products integrated with IoT.",
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    "Sahil",
    "NIT Srinagar",
    "ECE",
    "IoT",
    "SaaS",
    "Next.js",
    "Portfolio",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: `${site.name} Portfolio`,
    title: "Sahil — ECE · IoT + SaaS | NIT Srinagar",
    description:
      "4th-year ECE student at NIT Srinagar. Quill, this portfolio, and IoT-aware software.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil — ECE · IoT + SaaS | NIT Srinagar",
    description:
      "4th-year ECE student at NIT Srinagar. Quill, this portfolio, and IoT-aware software.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink font-sans text-white">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:rounded-md focus:bg-purple-600 focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
