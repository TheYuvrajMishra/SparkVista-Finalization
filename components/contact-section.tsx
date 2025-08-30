"use client";

import { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import ContactInfoCard from "@/components/efx/HoverCard";
import DecryptText from "./efx/Decrypt";

// ⬇️ Contact info used for map
const contactItems = [
  {
    icon: MapPin,
    title: "Studio Address",
    content: (
      <>
        123 F block <br />
        Wave Estate Sector 85 <br />
        Mohali, Punjab
      </>
    ),
  },
  {
    icon: Mail,
    title: "Email",
    content: <>sparkvista@gmail.com</>,
  },
  {
    icon: Phone,
    title: "Phone",
    content: <>+91 8146003796</>,
  },
  {
    icon: MessageCircle,
    title: "Chat with us",
    content: (
      <>
        Instant replies on WhatsApp
        <br />
        <Button
          size="sm"
          className="mt-2 bg-white text-black hover:bg-gray-200"
          onClick={() => window.open("https://wa.me/1234567890", "_blank")}
        >
          <DecryptText text="Start Chat" trigger="onHover" />
        </Button>
      </>
    ),
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-24 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-left mb-10">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-t from-white via-white/50 to-white">
            Let's Connect
          </h2>
          <p className="text-white/50 text-lg">
            Share your vision. We’re here to help you design something
            remarkable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 border hover:border-white/20 transition-all duration-150 border-white/10 backdrop-blur-md p-3 md:px-8 md:py-14 rounded-2xl shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-white">
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border border-white/10 placeholder:text-gray-400 text-white"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border border-white/10 placeholder:text-gray-400 text-white"
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone (Optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white/5 border border-white/10 placeholder:text-gray-400 text-white"
                  />
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white/5 border border-white/10 placeholder:text-gray-400 text-white"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-white text-black hover:bg-gray-200 transition-all py-3 rounded-lg font-medium"
                  >
                    <DecryptText text="Send Message" trigger="onHover" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {contactItems.map((info, idx) => (
              <ContactInfoCard
                key={idx}
                icon={info.icon}
                title={info.title}
                content={info.content}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
