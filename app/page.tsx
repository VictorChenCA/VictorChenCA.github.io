import type { Metadata } from "next"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Research from "@/components/Research"
import Honors from "@/components/Honors"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Victor Chen - Personal Website",
  description: "Stanford CS Student, Researcher, and Developer",
  openGraph: {
    title: "Victor Chen - Personal Website",
    description: "Stanford CS Student, Researcher, and Developer",
    url: "https://www.victorchen.com",
    siteName: "Victor Chen",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Chen - Personal Website",
    description: "Stanford CS Student, Researcher, and Developer",
    creator: "@victorchen",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-prussian_blue-400">
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-12 animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-16">
          <Education />
          <Experience />
          <Skills />
          <Research />
          <Honors />
        </div>
      </div>
      <Footer />
    </main>
  )
}

