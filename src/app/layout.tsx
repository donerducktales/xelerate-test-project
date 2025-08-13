import type { Metadata } from "next";
import "../styles/_variables.module.scss";
import "../styles/globals.scss";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Xelerate test project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`body`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
