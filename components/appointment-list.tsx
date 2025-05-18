import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AppointmentList() {
  const appointments = [
    {
      id: 1,
      client: {
        name: "Emma Thompson",
        avatar: "/placeholder.svg?height=40&width=40",
        phone: "(555) 123-4567",
      },
      service: "Haircut & Style",
      date: "Today",
      time: "10:00 AM - 11:00 AM",
      status: "confirmed",
      price: "$85.00",
    },
    {
      id: 2,
      client: {
        name: "James Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
        phone: "(555) 987-6543",
      },
      service: "Beard Trim",
      date: "Today",
      time: "11:30 AM - 12:00 PM",
      status: "confirmed",
      price: "$35.00",
    },
    {
      id: 3,
      client: {
        name: "Sophia Garcia",
        avatar: "/placeholder.svg?height=40&width=40",
        phone: "(555) 456-7890",
      },
      service: "Full Color",
      date: "Today",
      time: "1:00 PM - 3:00 PM",
      status: "pending",
      price: "$150.00",
    },
    {
      id: 4,
      client: {
        name: "Oliver Brown",
        avatar: "/placeholder.svg?height=40&width=40",
        phone: "(555) 234-5678",
      },
      service: "Manicure",
      date: "Today",
      time: "3:30 PM - 4:30 PM",
      status: "confirmed",
      price: "$45.00",
    },
    {
      id: 5,
      client: {
        name: "Ava Martinez",
        avatar: "/placeholder.svg?height=40&width=40",
        phone: "(555) 876-5432",
      },
      service: "Facial Treatment",
      date: "Today",
      time: "5:00 PM - 6:00 PM",
      status: "confirmed",
      price: "$95.00",
    },
    {
      id: 6,
      client: {
        name: "Liam Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        phone: "(555) 345-6789",
      },
      service: "Hair Extensions",
      date: "Tomorrow",
      time: "9:00 AM - 11:00 AM",
      status: "confirmed",
      price: "$200.00",
    },
    {
      id: 7,
      client: {
        name: "Isabella Smith",
        avatar: "/placeholder.svg?height=40&width=40",
        phone: "(555) 654-3210",
      },
      service: "Balayage",
      date: "Tomorrow",
      time: "12:00 PM - 2:30 PM",
      status: "pending",
      price: "$175.00",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500"
      case "pending":
        return "bg-yellow-500"
      case "cancelled":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <Card key={appointment.id}>
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <CardTitle className="text-base font-medium">{appointment.date}</CardTitle>
              <Badge
                variant={appointment.status === "confirmed" ? "default" : "outline"}
                className={appointment.status === "confirmed" ? "bg-green-500 hover:bg-green-600" : ""}
              >
                {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={appointment.client.avatar || "/placeholder.svg"} alt={appointment.client.name} />
                  <AvatarFallback>{appointment.client.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{appointment.client.name}</p>
                  <p className="text-sm text-muted-foreground">{appointment.client.phone}</p>
                </div>
              </div>

              <div className="flex flex-col md:items-center">
                <p className="font-medium">{appointment.service}</p>
                <p className="text-sm text-muted-foreground">{appointment.time}</p>
              </div>

              <div className="flex flex-col md:items-end">
                <p className="font-medium">{appointment.price}</p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    Reschedule
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
