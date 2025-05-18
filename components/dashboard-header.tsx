import Link from "next/link"
import { Bell, Search, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-6">
      <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
        <Sparkles className="h-5 w-5 text-pink-500" />
        <span>BeautyBook</span>
      </Link>

      <div className="flex-1">
        <form className="hidden md:block">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search clients, appointments..."
              className="w-full appearance-none bg-white pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>

      <Button variant="ghost" size="icon" className="relative">
        <Bell className="h-5 w-5" />
        <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-pink-500" />
      </Button>

      <Avatar>
        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </header>
  )
}
