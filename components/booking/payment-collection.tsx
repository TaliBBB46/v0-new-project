"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, ArrowRight, CreditCard, DollarSign } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { BookingData } from "./booking-form"

interface PaymentCollectionProps {
  servicePrice?: string
  paymentData?: BookingData["payment"]
  onSubmit: (data: Partial<BookingData>) => void
  onNext: () => void
  onBack: () => void
}

export function PaymentCollection({ servicePrice, paymentData, onSubmit, onNext, onBack }: PaymentCollectionProps) {
  const [paymentType, setPaymentType] = useState<"deposit" | "full">(paymentData?.type || "deposit")
  const [paymentMethod, setPaymentMethod] = useState<string>(paymentData?.method || "card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [errors, setErrors] = useState({
    cardNumber: false,
    cardExpiry: false,
    cardCvc: false,
    cardName: false,
  })

  const [cardDetails, setCardDetails] = useState({
    number: paymentData?.cardDetails?.number || "",
    expiry: paymentData?.cardDetails?.expiry || "",
    cvc: paymentData?.cardDetails?.cvc || "",
    name: paymentData?.cardDetails?.name || "",
  })

  // Calculate prices
  const fullPrice = servicePrice ? Number.parseFloat(servicePrice.replace("$", "")) : 0
  const depositAmount = Math.round(fullPrice * 0.3) // 30% deposit
  const amountToPay = paymentType === "deposit" ? depositAmount : fullPrice

  const handleCardDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCardDetails((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: false }))
    }
  }

  const formatCardNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, "")

    // Format with spaces every 4 digits
    const formatted = digits.replace(/(\d{4})(?=\d)/g, "$1 ")

    // Limit to 19 characters (16 digits + 3 spaces)
    return formatted.slice(0, 19)
  }

  const formatExpiry = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, "")

    // Format as MM/YY
    if (digits.length > 2) {
      return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`
    }

    return digits
  }

  const validateCardDetails = () => {
    const newErrors = {
      cardNumber: cardDetails.number.replace(/\s/g, "").length < 16,
      cardExpiry: !cardDetails.expiry.match(/^\d{2}\/\d{2}$/),
      cardCvc: !cardDetails.cvc.match(/^\d{3,4}$/),
      cardName: cardDetails.name.trim().length < 3,
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some(Boolean)
  }

  const handleSubmit = async () => {
    if (paymentMethod === "card" && !validateCardDetails()) {
      return
    }

    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const paymentData = {
      type: paymentType,
      amount: `$${amountToPay.toFixed(2)}`,
      method: paymentMethod,
      cardDetails: paymentMethod === "card" ? cardDetails : undefined,
    }

    onSubmit({ payment: paymentData })
    setIsProcessing(false)
    onNext()
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Payment</h2>

        <div className="mb-6">
          <h3 className="text-base font-medium mb-2">Payment Options</h3>
          <RadioGroup
            value={paymentType}
            onValueChange={(value) => setPaymentType(value as "deposit" | "full")}
            className="space-y-3"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="deposit" id="deposit" />
              <Label htmlFor="deposit" className="flex flex-col">
                <span>Pay Deposit Now (${depositAmount.toFixed(2)})</span>
                <span className="text-sm text-muted-foreground">
                  30% deposit, remaining ${(fullPrice - depositAmount).toFixed(2)} due at appointment
                </span>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="full" id="full" />
              <Label htmlFor="full" className="flex flex-col">
                <span>Pay Full Amount (${fullPrice.toFixed(2)})</span>
                <span className="text-sm text-muted-foreground">Complete payment now</span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="mb-6">
          <h3 className="text-base font-medium mb-2">Payment Method</h3>
          <Tabs defaultValue="card" value={paymentMethod} onValueChange={setPaymentMethod}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="card" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Credit Card
              </TabsTrigger>
              <TabsTrigger value="cash" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Pay at Appointment
              </TabsTrigger>
            </TabsList>
            <TabsContent value="card" className="mt-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  name="number"
                  placeholder="1234 5678 9012 3456"
                  value={cardDetails.number}
                  onChange={(e) => {
                    e.target.value = formatCardNumber(e.target.value)
                    handleCardDetailsChange(e)
                  }}
                  className={errors.cardNumber ? "border-red-500" : ""}
                  maxLength={19}
                />
                {errors.cardNumber && <p className="text-red-500 text-sm">Please enter a valid card number</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cardExpiry">Expiry Date</Label>
                  <Input
                    id="cardExpiry"
                    name="expiry"
                    placeholder="MM/YY"
                    value={cardDetails.expiry}
                    onChange={(e) => {
                      e.target.value = formatExpiry(e.target.value)
                      handleCardDetailsChange(e)
                    }}
                    className={errors.cardExpiry ? "border-red-500" : ""}
                    maxLength={5}
                  />
                  {errors.cardExpiry && <p className="text-red-500 text-sm">Please enter a valid expiry date</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cardCvc">CVC</Label>
                  <Input
                    id="cardCvc"
                    name="cvc"
                    placeholder="123"
                    value={cardDetails.cvc}
                    onChange={(e) => {
                      e.target.value = e.target.value.replace(/\D/g, "").slice(0, 4)
                      handleCardDetailsChange(e)
                    }}
                    className={errors.cardCvc ? "border-red-500" : ""}
                    maxLength={4}
                  />
                  {errors.cardCvc && <p className="text-red-500 text-sm">Please enter a valid CVC</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardName">Name on Card</Label>
                <Input
                  id="cardName"
                  name="name"
                  placeholder="John Doe"
                  value={cardDetails.name}
                  onChange={handleCardDetailsChange}
                  className={errors.cardName ? "border-red-500" : ""}
                />
                {errors.cardName && <p className="text-red-500 text-sm">Please enter the name on your card</p>}
              </div>
            </TabsContent>
            <TabsContent value="cash" className="mt-4">
              <div className="rounded-md bg-muted p-4">
                <p>You'll pay the {paymentType === "deposit" ? "full amount" : "deposit"} at your appointment.</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Please arrive 10 minutes before your appointment time to complete payment.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="border-t pt-4 mt-6">
          <div className="flex justify-between font-medium">
            <span>Amount to pay now:</span>
            <span>${amountToPay.toFixed(2)}</span>
          </div>
          {paymentType === "deposit" && (
            <div className="flex justify-between text-sm text-muted-foreground mt-1">
              <span>Remaining balance:</span>
              <span>${(fullPrice - depositAmount).toFixed(2)}</span>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={handleSubmit} className="bg-pink-500 hover:bg-pink-600" disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Continue"}
          {!isProcessing && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
      </div>
    </div>
  )
}
