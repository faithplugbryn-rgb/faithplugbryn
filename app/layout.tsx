
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BottomNav from "./components/BottomNav";
import ServiceWorkerRegister from "./components/ServiceWorkerRegister";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FaithPlugBryn",
  description:
    "Daily prayer, scripture, and faith resources from FaithPlugBryn.",
  applicationName: "FaithPlugBryn",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "FaithPlugBryn",
  },
};

export const viewport = {
  themeColor: "#080807",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <BottomNav />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
