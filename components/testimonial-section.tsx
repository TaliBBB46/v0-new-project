import { Card, CardContent } from "@/components/ui/card"

export function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "BeautyBook has completely transformed how I run my salon. The scheduling system is intuitive and my clients love the automated reminders.",
      author: "Sarah Johnson",
      role: "Hair Stylist & Salon Owner",
    },
    {
      quote:
        "Since using BeautyBook, I've reduced no-shows by 75% and saved hours each week on administrative tasks. It's been a game-changer.",
      author: "Michael Chen",
      role: "Barber Shop Owner",
    },
    {
      quote:
        "The client management features help me provide personalized service that keeps my customers coming back. Worth every penny!",
      author: "Aisha Williams",
      role: "Makeup Artist",
    },
  ]

  return (
    <section id="testimonials" className="container py-12 md:py-24">
      <div className="mx-auto text-center md:max-w-[58rem] mb-12">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">Loved by beauty professionals</h2>
        <p className="mt-4 text-muted-foreground md:text-xl">
          Don't just take our word for it. Here's what our users have to say.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <blockquote className="mb-4 italic text-muted-foreground">"{testimonial.quote}"</blockquote>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
