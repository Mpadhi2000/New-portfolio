import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { personalInfo } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${personalInfo.name} — Software Engineer · Full-Stack · GenAI · SaaS`,
  description:
    "Personal portfolio of Mayank Padhi, a Software Engineer building production-ready SaaS applications across React, Next.js, Node.js, Python, PostgreSQL, and modern AI/LLM technologies.",
  keywords: [
    "Mayank Padhi",
    "Software Engineer",
    "Full-Stack Engineer",
    "AI Engineer",
    "GenAI Engineer",
    "React Developer",
    "Next.js Developer",
    "FastAPI",
    "Node.js Developer",
    "SaaS Engineer",
    "AI Applications",
    "LLM Applications",
    "Multi-Agent AI",
    "RAG",
    "PostgreSQL",
    "Docker",
  ],
  authors: [{ name: "Mayank Padhi", url: "https://mayankpadhi.com" }],
  creator: "Mayank Padhi",
  metadataBase: new URL("https://mayankpadhi.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mayankpadhi.com",
    title: `${personalInfo.name} — Software Engineer · Full-Stack · GenAI · SaaS`,
    description: personalInfo.positioning,
    siteName: "Mayank Padhi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — Software Engineer · Full-Stack · GenAI · SaaS`,
    description: personalInfo.positioning,
    creator: "@mayankpadhi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: "Software Engineer",
    description: personalInfo.positioning,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "India",
    },
    sameAs: [personalInfo.githubUrl, personalInfo.linkedinUrl],
    knowsAbout: [
      "Software Engineering",
      "Full-Stack Web Development",
      "Artificial Intelligence",
      "Generative AI",
      "Multi-Agent Systems",
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Cloud Infrastructure",
    ],
  };

  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon-white.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-white text-[#0A1235] antialiased selection:bg-[#00CFFF]/20 selection:text-[#050A35]`}
      >
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
