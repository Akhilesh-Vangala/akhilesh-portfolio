import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akhilesh Vangala | Data Scientist & ML Engineer",
  description:
    "Graduate Student Researcher at NYU | MS Data Science | Machine Learning Engineer | Applied AI",
  openGraph: {
    title: "Akhilesh Vangala | Data Scientist & ML Engineer",
    description:
      "Graduate Student Researcher at NYU | MS Data Science | Machine Learning Engineer | Applied AI",
    url: "https://akhileshvangala.vercel.app",
    siteName: "Akhilesh Vangala Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-gray-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
