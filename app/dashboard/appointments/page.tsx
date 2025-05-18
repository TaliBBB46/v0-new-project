import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { AppointmentList } from "@/components/appointment-list"
import { AppointmentFilters } from "@/components/appointment-filters"

export default function AppointmentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6 bg-slate-50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold">Appointments</h1>
              <p className="text-muted-foreground">Manage your client appointments</p>
            </div>
            <Button className="bg-pink-500 hover:bg-pink-600">
              <Plus className="mr-2 h-4 w-4" />
              New Appointment
            </Button>
          </div>

          <AppointmentFilters />

          <div className="mt-6">
            <AppointmentList />
          </div>
        </main>
      </div>
    </div>
  )
}
