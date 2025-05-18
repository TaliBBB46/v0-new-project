"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)

  // Load Calendly script when component mounts
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  // Function to open Calendly popup
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/cdanielsrei", // Replace with your actual Calendly link
      })
    }
    setIsCalendlyOpen(true)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-pink-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Streamline Your Beauty Business
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                The all-in-one scheduling platform designed for beauty professionals. Manage appointments, clients, and
                services with ease.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" onClick={openCalendly}>
                Book a Demo
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-xl shadow-2xl bg-gradient-to-br from-pink-50 to-white">
              {/* Logo overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="h-12 w-12 text-pink-500" />
                  <span className="text-4xl font-bold">BeautyBook</span>
                </div>
                <p className="text-center text-muted-foreground max-w-xs">
                  The all-in-one platform for beauty professionals
                </p>
              </div>
              {/* Keep the background image with reduced opacity */}
              <img
                src="/placeholder.svg?height=500&width=800"
                alt="BeautyBook dashboard preview"
                className="object-cover w-full h-full opacity-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
