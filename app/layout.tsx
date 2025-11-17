import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Darya aur Dastaan | Climate Storytelling Initiative",
  description: "A Lahore-based, women-centred climate storytelling initiative documenting how ordinary people experience floods and water disasters through videos, voice notes, and testimonies.",
  keywords: ["climate change", "Lahore", "flooding", "women", "storytelling", "community", "climate justice"],
  authors: [{ name: "Darya aur Dastaan" }],
  openGraph: {
    title: "Darya aur Dastaan | Climate Storytelling Initiative",
    description: "Documenting the human stories behind floods and water disasters in Lahore",
    type: "website",
  },
};

import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
