"use client"

import Image from "next/image"
import { Linkedin, MessageCircle } from "lucide-react"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative backdrop-blur-sm border-t border-white/10 text-white pt-16 pb-10 overflow-hidden">
      {/* Glow decoration */}
      <div className="absolute left-10 w-96 h-96 bg-purple-500/5 blur-3xl rounded-full animate-pulse z-0" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-blue-500/5 delay-700 blur-2xl rounded-full animate-pulse z-0" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Image
              src="/images/sparkvista-logo.png"
              alt="SparkVista Design Studio"
              width={180}
              height={60}
              className="h-20 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Creating innovative architectural solutions blending functionality, sustainability, and aesthetic
              excellence.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 tracking-wide">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["home", "portfolio", "team", "contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-gray-400 hover:text-white transition-all duration-200 hover:pl-1"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="font-semibold text-white mb-4 tracking-wide">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 SparkVista and Meharjot. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
