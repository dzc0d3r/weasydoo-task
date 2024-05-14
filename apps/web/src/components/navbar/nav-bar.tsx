import Link from "next/link"
import { 
  CircleUser, AlignLeft, Search,
  Shield , Settings,ShoppingCart,
  LogOut}
from "lucide-react"
import { Button } from "@fakestore/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,

  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@fakestore/ui/components/dropdown-menu"
import { Input } from "@fakestore/ui/components/input"
import { Sheet, SheetContent, SheetTrigger } from "@fakestore/ui/components/sheet"
import Image from "next/image"
import Logo from "../../../public/logo.png"
import LoginButton from "./login-button"
import { auth, signOut } from "@/auth"



export default async function NaVBar(): Promise<JSX.Element> {
 
  
  const session = await auth()
  
  return (
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
            href="/"
          >
            
            <Image
              alt="FakeStore Inc"
              height={95}
              placeholder="blur"
              src={Logo}
              width={95}
            
            />
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
                href="/"
              >
                <Image
                alt="FakeStore Inc"
                height={50}
                placeholder="blur"
                src={Logo}
                width={50}
              />
                <span className="sr-only">Acme Inc</span>
              </Link>
              
              <div className="grid gap-4 mt-5">
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
              </div>
              
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
          <div className="relative flex items-center gap-4 flex-row">
            <ShoppingCart />
            <span className="absolute -top-3 -right-1 bg-red-500 rounded-full w-4 h-4 text-[.7rem] text-white font-medium flex items-center justify-center" >
              1
            </span>
          </div>
          {session ? (
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full" size="icon" variant="secondary">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44 p-5">
              <Button className="relative lg:text-md font- w-full flex flex-row gap-4" type="submit" variant="ghost">
                    <Settings className="absolute left-2" /> Settings
              </Button>
              <DropdownMenuSeparator />
              
              {session.user.role === "admin" && (
                <Link href="/dashboard">
                  <Button className="relative lg:text-md font- w-full flex flex-row gap-4" type="submit" variant="ghost">
                    <Shield className="absolute left-2" /> Admin
                  </Button>
                  
                  
                </Link>
              )}
              <DropdownMenuSeparator />
              <form
              
              action={async (): void =>  {
                    "use server";
                    await signOut();
                 }}
              >
              <Button className="w-full relative" type="submit" variant="destructive">
                <LogOut className="absolute left-3" /> Logout
              </Button>
              </form>
              
            </DropdownMenuContent>
          </DropdownMenu>
          ) : (
            <LoginButton />
          ) }
          
          
          
        </div>
      </header>

 
  )
}
