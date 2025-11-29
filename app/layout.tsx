import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Great Me - Special Task Force",
  description: "This app uses the method of special agent tasks to help you record and iterate yourself. Transform your daily tasks into exciting missions with gamification, AI assistance, and beautiful design.",
  keywords: ["task management", "productivity", "gamification", "AI assistant", "habit tracking"],
  authors: [{ name: "The Great Me" }],
  openGraph: {
    title: "The Great Me - Special Task Force",
    description: "Transform your tasks into exciting special agent missions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
