"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import type { BookingData } from "./booking-form"

interface ServiceSelectionProps {
  selectedService?: BookingData["service"]
  selectedTechnician?: BookingData["technician"]
  onSelect: (data: Partial<BookingData>) => void
  onNext: () => void
}

export function ServiceSelection({ selectedService, selectedTechnician, onSelect, onNext }: ServiceSelectionProps) {
  const [serviceError, setServiceError] = useState(false)
  const [technicianError, setTechnicianError] = useState(false)

  const services = [
    {
      id: 1,
      name: "Haircut & Style",
      duration: "60 min",
      price: "$85.00",
      description: "Includes consultation, shampoo, cut, and style",
    },
    {
      id: 2,
      name: "Beard Trim",
      duration: "30 min",
      price: "$35.00",
      description: "Precision beard trimming and shaping",
    },
    {
      id: 3,
      name: "Full Color",
      duration: "120 min",
      price: "$150.00",
      description: "Full head color application with toner if needed",
    },
    {
      id: 4,
      name: "Balayage",
      duration: "150 min",
      price: "$175.00",
      description: "Hand-painted highlights for a natural, sun-kissed look",
    },
    {
      id: 5,
      name: "Manicure",
      duration: "60 min",
      price: "$45.00",
      description: "Nail shaping, cuticle care, and polish application",
    },
    {
      id: 6,
      name: "Facial Treatment",
      duration: "60 min",
      price: "$95.00",
      description: "Customized facial based on skin type and concerns",
    },
  ]

  const technicians = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Stylist",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Barber",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Aisha Williams",
      role: "Makeup Artist",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Colorist",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const handleServiceSelect = (serviceId: number) => {
    const service = services.find((s) => s.id === serviceId)
    if (service) {
      onSelect({ service })
      setServiceError(false)
    }
  }

  const handleTechnicianSelect = (technicianId: number) => {
    const technician = technicians.find((t) => t.id === technicianId)
    if (technician) {
      onSelect({ technician })
      setTechnicianError(false)
    }
  }

  const handleNext = () => {
    if (!selectedService) {
      setServiceError(true)
      return
    }

    if (!selectedTechnician) {
      setTechnicianError(true)
      return
    }

    onNext()
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Select a Service</h2>
        {serviceError && <p className="text-red-500 mb-2">Please select a service</p>}
        <RadioGroup
          value={selectedService?.id?.toString()}
          onValueChange={(value) => handleServiceSelect(Number.parseInt(value))}
          className="grid gap-4 grid-cols-1 md:grid-cols-2"
        >
          {services.map((service) => (
            <div key={service.id}>
              <RadioGroupItem value={service.id.toString()} id={`service-${service.id}`} className="peer sr-only" />
              <Label
                htmlFor={`service-${service.id}`}
                className="flex flex-col h-full p-4 border rounded-md cursor-pointer peer-data-[state=checked]:border-pink-500 peer-data-[state=checked]:bg-pink-50 hover:bg-slate-50"
              >
                <span className="font-medium">{service.name}</span>
                <span className="text-sm text-muted-foreground mt-1">{service.description}</span>
                <div className="flex justify-between mt-2">
                  <span className="text-sm font-medium">{service.duration}</span>
                  <span className="text-sm font-medium">{service.price}</span>
                </div>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Select a Technician</h2>
        {technicianError && <p className="text-red-500 mb-2">Please select a technician</p>}
        <RadioGroup
          value={selectedTechnician?.id?.toString()}
          onValueChange={(value) => handleTechnicianSelect(Number.parseInt(value))}
          className="grid gap-4 grid-cols-1 md:grid-cols-2"
        >
          {technicians.map((technician) => (
            <div key={technician.id}>
              <RadioGroupItem
                value={technician.id.toString()}
                id={`technician-${technician.id}`}
                className="peer sr-only"
              />
              <Label
                htmlFor={`technician-${technician.id}`}
                className="flex items-center gap-4 p-4 border rounded-md cursor-pointer peer-data-[state=checked]:border-pink-500 peer-data-[state=checked]:bg-pink-50 hover:bg-slate-50"
              >
                <Avatar>
                  <AvatarImage src={technician.avatar || "/placeholder.svg"} alt={technician.name} />
                  <AvatarFallback>{technician.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{technician.name}</div>
                  <div className="text-sm text-muted-foreground">{technician.role}</div>
                </div>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleNext} className="bg-pink-500 hover:bg-pink-600">
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
