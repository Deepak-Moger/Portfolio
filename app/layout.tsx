import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Deepak Moger — AI/ML Engineer",
  description:
    "Portfolio of Deepak Narayan Moger — AI/ML engineer building end-to-end machine learning systems, OCR pipelines, and scalable cloud-native applications.",
  keywords: [
    "Deepak Moger",
    "AI Engineer",
    "Machine Learning",
    "Portfolio",
    "Python",
    "TensorFlow",
    "Cloud Computing",
    "OCR",
    "Drift Detection",
  ],
  authors: [{ name: "Deepak Narayan Moger" }],
  creator: "Deepak Narayan Moger",
  openGraph: {
    title: "Deepak Moger — AI/ML Engineer",
    description:
      "Building end-to-end ML applications and scalable AI solutions for real-world problems.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a09",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} bg-background`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
