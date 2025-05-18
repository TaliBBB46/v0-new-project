import Link from "next/link"
import { CalendarDays, Clock, Users, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { FeatureCard } from "@/components/feature-card"
import { TestimonialSection } from "@/components/testimonial-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-pink-500" />
            <span className="text-xl font-bold">BeautyBook</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="#features" className="text-sm font-medium text-muted-foreground">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-muted-foreground">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-muted-foreground">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="bg-pink-500 hover:bg-pink-600">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />

        <section id="features" className="container py-12 md:py-24">
          <div className="mx-auto text-center md:max-w-[58rem] mb-12">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
              Features designed for beauty professionals
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Everything you need to manage your beauty business in one place
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<CalendarDays className="h-10 w-10 text-pink-500" />}
              title="Smart Scheduling"
              description="Manage your appointments with an intuitive calendar interface. Set your availability and let clients book when you're free."
            />
            <FeatureCard
              icon={<Clock className="h-10 w-10 text-pink-500" />}
              title="Automated Reminders"
              description="Reduce no-shows with automated SMS and email reminders sent to clients before their appointments."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-pink-500" />}
              title="Client Management"
              description="Keep track of client preferences, history, and notes to provide personalized service every time."
            />
          </div>
        </section>

        <TestimonialSection />

        <section id="pricing" className="container py-12 md:py-24 bg-slate-50">
          <div className="mx-auto text-center md:max-w-[58rem] mb-12">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">Start for free, upgrade when your business grows</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Starter</h3>
              <p className="mt-2 text-muted-foreground">Perfect for individuals just starting out</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Up to 20 appointments/month</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Basic client management</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Email reminders</span>
                </li>
              </ul>
              <Button className="mt-6 w-full bg-pink-500 hover:bg-pink-600">Get Started</Button>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-sm relative">
              <div className="absolute top-0 right-0 bg-pink-500 text-white px-3 py-1 text-xs font-medium rounded-bl-lg rounded-tr-lg">
                Popular
              </div>
              <h3 className="text-xl font-bold">Professional</h3>
              <p className="mt-2 text-muted-foreground">For growing beauty businesses</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Unlimited appointments</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Advanced client management</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>SMS & email reminders</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Online booking page</span>
                </li>
              </ul>
              <Button className="mt-6 w-full bg-pink-500 hover:bg-pink-600">Start Free Trial</Button>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Business</h3>
              <p className="mt-2 text-muted-foreground">For established salons and spas</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">$79</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Everything in Professional</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Multiple staff accounts</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Inventory management</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Advanced analytics</span>
                </li>
              </ul>
              <Button className="mt-6 w-full bg-pink-500 hover:bg-pink-600">Contact Sales</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-10">
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
