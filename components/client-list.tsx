import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function ClientList() {
  const clients = [
    {
      id: 1,
      name: "Emma Thompson",
      avatar: "/placeholder.svg?height=40&width=40",
      email: "emma.t@example.com",
      phone: "(555) 123-4567",
      lastVisit: "May 15, 2023",
      totalSpent: "$420.00",
      totalAppointments: 8,
    },
    {
      id: 2,
      name: "James Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      email: "james.w@example.com",
      phone: "(555) 987-6543",
      lastVisit: "June 2, 2023",
      totalSpent: "$185.00",
      totalAppointments: 4,
    },
    {
      id: 3,
      name: "Sophia Garcia",
      avatar: "/placeholder.svg?height=40&width=40",
      email: "sophia.g@example.com",
      phone: "(555) 456-7890",
      lastVisit: "April 28, 2023",
      totalSpent: "$650.00",
      totalAppointments: 12,
    },
    {
      id: 4,
      name: "Oliver Brown",
      avatar: "/placeholder.svg?height=40&width=40",
      email: "oliver.b@example.com",
      phone: "(555) 234-5678",
      lastVisit: "June 10, 2023",
      totalSpent: "$90.00",
      totalAppointments: 2,
    },
    {
      id: 5,
      name: "Ava Martinez",
      avatar: "/placeholder.svg?height=40&width=40",
      email: "ava.m@example.com",
      phone: "(555) 876-5432",
      lastVisit: "May 22, 2023",
      totalSpent: "$380.00",
      totalAppointments: 6,
    },
  ]

  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Last Visit</TableHead>
              <TableHead>Total Spent</TableHead>
              <TableHead>Appointments</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={client.avatar || "/placeholder.svg"} alt={client.name} />
                      <AvatarFallback>{client.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{client.name}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <p className="text-sm">{client.email}</p>
                    <p className="text-sm text-muted-foreground">{client.phone}</p>
                  </div>
                </TableCell>
                <TableCell>{client.lastVisit}</TableCell>
                <TableCell>{client.totalSpent}</TableCell>
                <TableCell>{client.totalAppointments}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      Book
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
