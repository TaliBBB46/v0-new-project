import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function ServiceList() {
  const services = [
    {
      id: 1,
      name: "Haircut & Style",
      duration: "60 min",
      price: "$85.00",
      description: "Includes consultation, shampoo, cut, and style",
      active: true,
    },
    {
      id: 2,
      name: "Beard Trim",
      duration: "30 min",
      price: "$35.00",
      description: "Precision beard trimming and shaping",
      active: true,
    },
    {
      id: 3,
      name: "Full Color",
      duration: "120 min",
      price: "$150.00",
      description: "Full head color application with toner if needed",
      active: true,
    },
    {
      id: 4,
      name: "Balayage",
      duration: "150 min",
      price: "$175.00",
      description: "Hand-painted highlights for a natural, sun-kissed look",
      active: true,
    },
    {
      id: 5,
      name: "Manicure",
      duration: "60 min",
      price: "$45.00",
      description: "Nail shaping, cuticle care, and polish application",
      active: true,
    },
    {
      id: 6,
      name: "Facial Treatment",
      duration: "60 min",
      price: "$95.00",
      description: "Customized facial based on skin type and concerns",
      active: true,
    },
    {
      id: 7,
      name: "Hair Extensions",
      duration: "120 min",
      price: "$200.00",
      description: "Application of premium quality hair extensions",
      active: false,
    },
  ]

  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Service</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Active</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((service) => (
              <TableRow key={service.id}>
                <TableCell>
                  <p className="font-medium">{service.name}</p>
                </TableCell>
                <TableCell>{service.duration}</TableCell>
                <TableCell>{service.price}</TableCell>
                <TableCell>
                  <p className="max-w-md truncate">{service.description}</p>
                </TableCell>
                <TableCell>
                  <Switch checked={service.active} />
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                      Delete
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
