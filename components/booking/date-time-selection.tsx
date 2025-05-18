"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import type { BookingData } from "./booking-form"

interface DateTimeSelectionProps {
  selectedDate?: Date
  selectedTime?: string
  onSelect: (data: Partial<BookingData>) => void
  onNext: () => void
  onBack: () => void
}

export function DateTimeSelection({ selectedDate, selectedTime, onSelect, onNext, onBack }: DateTimeSelectionProps) {
  const [dateError, setDateError] = useState(false)
  const [timeError, setTimeError] = useState(false)

  // Generate available time slots
  const generateTimeSlots = () => {
    // In a real app, these would be fetched from the backend based on technician availability
    return ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]
  }

  const timeSlots = generateTimeSlots()

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      onSelect({ date })
      setDateError(false)
    }
  }

  const handleTimeSelect = (time: string) => {
    onSelect({ time })
    setTimeError(false)
  }

  const handleNext = () => {
    if (!selectedDate) {
      setDateError(true)
      return
    }

    if (!selectedTime) {
      setTimeError(true)
      return
    }

    onNext()
  }

  // Function to disable past dates and weekends
  const disabledDays = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // Disable past dates
    if (date < today) {
      return true
    }

    // Disable Sundays (0 is Sunday)
    return date.getDay() === 0
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Select a Date</h2>
        {dateError && <p className="text-red-500 mb-2">Please select a date</p>}

        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            disabled={disabledDays}
            className="rounded-md border"
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Select a Time</h2>
        {timeError && <p className="text-red-500 mb-2">Please select a time</p>}

        <RadioGroup
          value={selectedTime}
          onValueChange={handleTimeSelect}
          className="grid gap-4 grid-cols-2 md:grid-cols-3"
        >
          {timeSlots.map((time) => (
            <div key={time}>
              <RadioGroupItem value={time} id={`time-${time}`} className="peer sr-only" />
              <Label
                htmlFor={`time-${time}`}
                className="flex justify-center p-3 border rounded-md cursor-pointer peer-data-[state=checked]:border-pink-500 peer-data-[state=checked]:bg-pink-50 hover:bg-slate-50"
              >
                {time}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={handleNext} className="bg-pink-500 hover:bg-pink-600">
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
