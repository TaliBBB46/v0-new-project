import { Check } from "lucide-react"

interface BookingStepsProps {
  currentStep: number
}

export function BookingSteps({ currentStep }: BookingStepsProps) {
  const steps = [
    { id: 1, name: "Service" },
    { id: 2, name: "Date & Time" },
    { id: 3, name: "Your Details" },
    { id: 4, name: "Payment" },
    { id: 5, name: "Confirmation" },
  ]

  return (
    <div className="hidden md:block">
      <nav aria-label="Progress">
        <ol role="list" className="flex items-center">
          {steps.map((step, stepIdx) => (
            <li key={step.name} className={`relative ${stepIdx !== steps.length - 1 ? "flex-1" : ""}`}>
              {step.id < currentStep ? (
                <div className="group flex items-center">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-500">
                    <Check className="w-6 h-6 text-white" />
                  </span>
                  <span className="ml-4 text-sm font-medium">{step.name}</span>
                </div>
              ) : step.id === currentStep ? (
                <div className="flex items-center" aria-current="step">
                  <span
                    className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-pink-500"
                    aria-hidden="true"
                  >
                    <span className="text-pink-500 font-bold">{step.id}</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-pink-500">{step.name}</span>
                </div>
              ) : (
                <div className="group flex items-center">
                  <span
                    className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300"
                    aria-hidden="true"
                  >
                    <span className="text-gray-500">{step.id}</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-500">{step.name}</span>
                </div>
              )}

              {stepIdx !== steps.length - 1 ? (
                <div
                  className={`hidden md:block absolute top-5 w-full h-0.5 ${
                    step.id < currentStep ? "bg-pink-500" : "bg-gray-300"
                  }`}
                  aria-hidden="true"
                />
              ) : null}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}
