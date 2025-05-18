import Link from "next/link"
import { CalendarDays, Users, Scissors, BarChart, Settings, LogOut } from "lucide-react"

import { Button } from "@/components/ui/button"

export function DashboardNav() {
  return (
    <div className="hidden border-r bg-white md:block md:w-64">
      <div className="flex h-full flex-col px-4 py-6">
        <div className="space-y-1">
          <h3 className="px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Main</h3>
          <Button variant="ghost" asChild className="w-full justify-start">
            <Link href="/dashboard">
              <CalendarDays className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start">
            <Link href="/dashboard/appointments">
              <CalendarDays className="mr-2 h-4 w-4" />
              Appointments
            </Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start">
            <Link href="/dashboard/clients">
              <Users className="mr-2 h-4 w-4" />
              Clients
            </Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start">
            <Link href="/dashboard/services">
              <Scissors className="mr-2 h-4 w-4" />
              Services
            </Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start">
            <Link href="/dashboard/analytics">
              <BarChart className="mr-2 h-4 w-4" />
              Analytics
            </Link>
          </Button>
        </div>
        <div className="mt-auto space-y-1">
          <Button variant="ghost" asChild className="w-full justify-start">
            <Link href="/dashboard/settings">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
          >
            <Link href="/logout">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
