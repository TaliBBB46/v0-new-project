import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function UpcomingAppointments() {
  const appointments = [
    {
      id: 1,
      client: {
        name: "Emma Thompson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      service: "Haircut & Style",
      time: "10:00 AM - 11:00 AM",
      status: "confirmed",
    },
    {
      id: 2,
      client: {
        name: "James Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      service: "Beard Trim",
      time: "11:30 AM - 12:00 PM",
      status: "confirmed",
    },
    {
      id: 3,
      client: {
        name: "Sophia Garcia",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      service: "Full Color",
      time: "1:00 PM - 3:00 PM",
      status: "pending",
    },
    {
      id: 4,
      client: {
        name: "Oliver Brown",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      service: "Manicure",
      time: "3:30 PM - 4:30 PM",
      status: "confirmed",
    },
    {
      id: 5,
      client: {
        name: "Ava Martinez",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      service: "Facial Treatment",
      time: "5:00 PM - 6:00 PM",
      status: "confirmed",
    },
  ]

  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <div key={appointment.id} className="flex items-center justify-between border-b pb-4 last:border-0">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={appointment.client.avatar || "/placeholder.svg"} alt={appointment.client.name} />
              <AvatarFallback>{appointment.client.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{appointment.client.name}</p>
              <p className="text-sm text-muted-foreground">{appointment.service}</p>
              <p className="text-xs text-muted-foreground">{appointment.time}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div
              className={`h-2 w-2 rounded-full ${
                appointment.status === "confirmed" ? "bg-green-500" : "bg-yellow-500"
              }`}
            />
            <Button variant="ghost" size="sm">
              Details
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
