"use client"

import { useState } from "react"

import { Card } from "@/components/ui/card"
import { ServiceSelection } from "@/components/booking/service-selection"
import { DateTimeSelection } from "@/components/booking/date-time-selection"
import { CustomerDetails } from "@/components/booking/customer-details"
import { BookingConfirmation } from "@/components/booking/booking-confirmation"
import { BookingSteps } from "@/components/booking/booking-steps"
import { PaymentCollection } from "@/components/booking/payment-collection"

export type BookingData = {
  service?: {
    id: number
    name: string
    duration: string
    price: string
  }
  technician?: {
    id: number
    name: string
    avatar: string
  }
  date?: Date
  time?: string
  customer?: {
    firstName: string
    lastName: string
    email: string
    phone: string
    notes: string
  }
  payment?: {
    type: "deposit" | "full"
    amount: string
    method: string
    cardDetails?: {
      number: string
      expiry: string
      cvc: string
      name: string
    }
  }
}

export function BookingForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState<BookingData>({})

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 5))
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  return (
    <div className="space-y-6">
      <BookingSteps currentStep={currentStep} />

      <Card className="p-6">
        {currentStep === 1 && (
          <ServiceSelection
            selectedService={bookingData.service}
            selectedTechnician={bookingData.technician}
            onSelect={updateBookingData}
            onNext={nextStep}
          />
        )}

        {currentStep === 2 && (
          <DateTimeSelection
            selectedDate={bookingData.date}
            selectedTime={bookingData.time}
            onSelect={updateBookingData}
            onNext={nextStep}
            onBack={prevStep}
          />
        )}

        {currentStep === 3 && (
          <CustomerDetails
            customerData={bookingData.customer}
            onSubmit={updateBookingData}
            onNext={nextStep}
            onBack={prevStep}
          />
        )}

        {currentStep === 4 && (
          <PaymentCollection
            servicePrice={bookingData.service?.price}
            paymentData={bookingData.payment}
            onSubmit={updateBookingData}
            onNext={nextStep}
            onBack={prevStep}
          />
        )}

        {currentStep === 5 && <BookingConfirmation bookingData={bookingData} onBack={prevStep} />}
      </Card>
    </div>
  )
}
