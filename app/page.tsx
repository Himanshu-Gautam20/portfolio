import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Portfolio } from "@/components/portfolio"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Services } from "@/components/services"
import { Skills } from "@/components/skills"


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <Skills />
        
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
