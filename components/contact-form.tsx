"use client"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "react-toastify"

interface Project {
 name:string,
 email:string,
 message:string
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 1500));

  setFormData({
    name: "",
    email: "",
    message: "",
  });
  toast.success("Message sent succesfully");
  setIsSubmitting(false);
};


  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get In Touch</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind? Let's discuss how I can help bring your vision to life.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-3 mt-12">
          <Card className="border-0 shadow-md animate-fade-in animate-delay-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">
                <a href="tel:+12345678900" className="hover:text-primary transition-colors">
                  +91 9336176865
                </a>
              </p>
              <p className="text-sm text-muted-foreground mt-2">Monday - Sunday, 9am - 5pm EST</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md animate-fade-in animate-delay-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">
                <a href="mailto:contact@designcraft.studio" className="hover:text-primary transition-colors">
                  himanshugautam9697@gmal.com
                </a>
              </p>
              <p className="text-sm text-muted-foreground mt-2">I'll respond to your message within 24 hours</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md animate-fade-in animate-delay-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">123 Design Street, Creative City, State 12345, USA</p>
              <p className="text-sm text-muted-foreground mt-2">Available for remote work worldwide</p>
            </CardContent>
          </Card>
        </div>
        <div className="mx-auto max-w-5xl mt-12 animate-fade-in animate-delay-400">
          <Card className="border-0 shadow-md">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[150px] transition-all duration-300 focus:border-primary focus:ring-primary"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full md:w-auto transition-transform hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
