import Link from "next/link"
import { AtSign, Code, Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone, Trophy } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-12 bg-muted/30">
      <div className="container px-4 md:px-6 container-fluid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">DesignCraft Studio</h3>
            <p className="text-sm text-muted-foreground">
              Transforming ideas into stunning visuals and functional websites. Let's create something amazing together.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="h-4 w-4 text-primary" />
              <span>123 Design Street, Creative City</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Me</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <Link href="tel:+12345678900" className="hover:text-primary transition-colors">
                  +91 9336176865
                </Link>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <Link href="mailto:himanshugautam9697@gmail.com" className="hover:text-primary transition-colors">
                  himanshugautam9697@gmail.com
                </Link>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <AtSign className="h-4 w-4 text-primary" />
                <span>@designcraft_studio</span>
              </div>
            </div>
          </div>

          {/* Coding Profiles */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Coding Profiles</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Code className="h-4 w-4 text-primary" />
                <Link
                  href="https://leetcode.com/u/Himanshu_Gautam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LeetCode
                </Link>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Trophy className="h-4 w-4 text-primary" />
                <Link
                  href="https://codeforces.com/profile/Gautam_Himanshu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  CodeForces
                </Link>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Github className="h-4 w-4 text-primary" />
                <Link
                  href="https://github.com/Himanshu-Gautam20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Connect With Me</h3>
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://www.linkedin.com/in/himanshu-gautam-619038268/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-background border hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/Himanshu-Gautam20"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-background border hover:bg-primary hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-background border hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-background border hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground pt-2">
              Follow me on social media for updates on my latest projects and design inspiration.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} DesignCraft Studio. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
