import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./themeprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shane Woods",
  description: "Shane Woods's Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-slate-50 dark:bg-slate-900">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
