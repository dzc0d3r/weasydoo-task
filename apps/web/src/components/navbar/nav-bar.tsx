
import Link from "next/link"
import { CircleUser, AlignLeft, Package2, Search } from "lucide-react"
import { Button } from "@fakestore/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@fakestore/ui/components/dropdown-menu"
import { Input } from "@fakestore/ui/components/input"
import { Sheet, SheetContent, SheetTrigger } from "@fakestore/ui/components/sheet"
import {auth} from "@/auth"

export default async function NaVBar(): Promise<JSX.Element> {
  const session = await auth()
  return (
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
            href="#"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
                className="text-muted-foreground hover:text-foreground"
                href="/about"
              >
                About
          </Link>
          <Link
            className="text-muted-foreground hover:text-foreground"
            href="privacy"
          >
            Privacy
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="shrink-0 md:hidden"
              size="icon"
              variant="ghost"
            >
              <AlignLeft className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                className="flex items-center gap-2 text-lg font-semibold"
                href="#"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              
              <Link
                className="text-muted-foreground hover:text-foreground"
                href="/about"
              >
                About
              </Link>
              <Link
                className="text-muted-foreground hover:text-foreground"
                href="privacy"
              >
                Privacy
              </Link>
              
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                placeholder="Search products..."
                type="search"
              />
            </div>
          </form>
          {session ? (
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full" size="icon" variant="secondary">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-36 p-5">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              {session.user.role === "admin" && (
                <Link href="/dashboard">
                  <DropdownMenuItem>Admin</DropdownMenuItem>
                </Link>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button>
                Login
              </Button>    
            </Link>
          ) }
          
          
        </div>
      </header>

 
  )
}
