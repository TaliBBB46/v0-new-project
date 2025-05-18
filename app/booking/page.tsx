import { Sparkles } from "lucide-react"
import Link from "next/link"

import { BookingForm } from "@/components/booking/booking-form"

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-pink-500" />
            <span className="text-xl font-bold">BeautyBook</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium text-muted-foreground">
              Services
            </Link>
            <Link href="/booking" className="text-sm font-medium">
              Book Now
            </Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Book Your Appointment</h1>
            <p className="mt-2 text-muted-foreground">Schedule your beauty service in just a few simple steps</p>
          </div>

          <BookingForm />
        </div>
      </main>

      <footer className="border-t py-6 bg-white">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-pink-500" />
            <span className="font-semibold">BeautyBook</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} BeautyBook. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
