"use client"

import { useState } from "react"
import { ArrowLeft, CalendarDays, Check, Clock, CreditCard, User } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import type { BookingData } from "./booking-form"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface BookingConfirmationProps {
  bookingData: BookingData
  onBack: () => void
}

export function BookingConfirmation({ bookingData, onBack }: BookingConfirmationProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [bookingId, setBookingId] = useState("")

  const handleConfirm = async () => {
    setIsSubmitting(true)

    // Simulate API call to create booking
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Generate a random booking ID
    const randomId = Math.floor(100000 + Math.random() * 900000).toString()
    setBookingId(randomId)
    setIsConfirmed(true)
    setIsSubmitting(false)
  }

  if (isConfirmed) {
    return (
      <div className="space-y-6 text-center">
        <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-green-100">
          <Check className="h-8 w-8 text-green-600" />
        </div>

        <h2 className="text-2xl font-bold">Booking Confirmed!</h2>

        <Alert>
          <AlertTitle>Booking ID: #{bookingId}</AlertTitle>
          <AlertDescription>We've sent a confirmation email to {bookingData.customer?.email}</AlertDescription>
        </Alert>

        <div className="space-y-4 mt-6">
          <div className="text-center">
            <p className="text-muted-foreground">Your appointment has been scheduled. We look forward to seeing you!</p>
          </div>

          <Button className="bg-pink-500 hover:bg-pink-600 w-full" asChild>
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Review Your Booking</h2>

      <div className="space-y-4">
        <div className="border rounded-md p-4">
          <div className="flex items-start gap-3">
            <div className="bg-pink-100 p-2 rounded-md">
              <CalendarDays className="h-5 w-5 text-pink-500" />
            </div>
            <div>
              <h3 className="font-medium">Service Details</h3>
              <p>{bookingData.service?.name}</p>
              <p className="text-sm text-muted-foreground">
                {bookingData.service?.duration} • {bookingData.service?.price}
              </p>
              <p className="text-sm text-muted-foreground mt-1">With {bookingData.technician?.name}</p>
            </div>
          </div>
        </div>

        <div className="border rounded-md p-4">
          <div className="flex items-start gap-3">
            <div className="bg-pink-100 p-2 rounded-md">
              <Clock className="h-5 w-5 text-pink-500" />
            </div>
            <div>
              <h3 className="font-medium">Date & Time</h3>
              <p>{bookingData.date ? format(bookingData.date, "EEEE, MMMM d, yyyy") : ""}</p>
              <p className="text-sm text-muted-foreground">{bookingData.time}</p>
            </div>
          </div>
        </div>

        <div className="border rounded-md p-4">
          <div className="flex items-start gap-3">
            <div className="bg-pink-100 p-2 rounded-md">
              <User className="h-5 w-5 text-pink-500" />
            </div>
            <div>
              <h3 className="font-medium">Your Information</h3>
              <p>
                {bookingData.customer?.firstName} {bookingData.customer?.lastName}
              </p>
              <p className="text-sm text-muted-foreground">{bookingData.customer?.email}</p>
              <p className="text-sm text-muted-foreground">{bookingData.customer?.phone}</p>
            </div>
          </div>
        </div>

        {/* Add payment information */}
        <div className="border rounded-md p-4">
          <div className="flex items-start gap-3">
            <div className="bg-pink-100 p-2 rounded-md">
              <CreditCard className="h-5 w-5 text-pink-500" />
            </div>
            <div>
              <h3 className="font-medium">Payment Details</h3>
              <p>
                {bookingData.payment?.type === "deposit" ? "Deposit" : "Full Payment"}: {bookingData.payment?.amount}
              </p>
              <p className="text-sm text-muted-foreground">
                {bookingData.payment?.method === "card" ? "Credit Card" : "Pay at Appointment"}
              </p>
              {bookingData.payment?.type === "deposit" && bookingData.service?.price && (
                <p className="text-sm text-muted-foreground mt-1">
                  Remaining balance: $
                  {(
                    Number.parseFloat(bookingData.service.price.replace("$", "")) -
                    Number.parseFloat(bookingData.payment.amount.replace("$", ""))
                  ).toFixed(2)}
                </p>
              )}
            </div>
          </div>
        </div>

        {bookingData.customer?.notes && (
          <div className="border rounded-md p-4">
            <h3 className="font-medium mb-2">Special Requests</h3>
            <p className="text-sm text-muted-foreground">{bookingData.customer.notes}</p>
          </div>
        )}
      </div>

      <div className="border-t pt-4 mt-6">
        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span>{bookingData.service?.price}</span>
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          {bookingData.payment?.type === "full"
            ? "Payment completed"
            : bookingData.payment?.type === "deposit"
              ? `Deposit of ${bookingData.payment.amount} paid. Remaining balance due at appointment.`
              : "Payment will be collected at the time of service"}
        </p>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={handleConfirm} className="bg-pink-500 hover:bg-pink-600" disabled={isSubmitting}>
          {isSubmitting ? "Processing..." : "Confirm Booking"}
        </Button>
      </div>
    </div>
  )
}
