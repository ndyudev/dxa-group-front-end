import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/common/BackToTop";
import ThemeRegistry from "@/theme/ThemeRegistry";
import { AppProviders } from "./providers";
import ProgressIndicator from "@/components/common/ProgressIndicator";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import FloatingActionButton from "@/components/common/FloatingActionButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DXA Group - Digital Experience Agency",
  description: "We help businesses grow online with cutting-edge digital marketing strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AppProviders>
          <ThemeRegistry>
            <ProgressIndicator />
            <Navbar />
            <Breadcrumbs />
            <main>{children}</main>
            <Footer />
            <FloatingActionButton />
          </ThemeRegistry>
        </AppProviders>
      </body>
    </html>
  );
}