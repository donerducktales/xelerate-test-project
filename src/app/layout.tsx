import type { Metadata } from "next";
import "../styles/_variables.module.scss";
import "../styles/globals.scss";

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
      <body className={`body`}>{children}</body>
    </html>
  );
}
