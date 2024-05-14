"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@fakestore/ui/components/button"

export default function LoginButton(): JSX.Element {
  const pathname = usePathname()
  return (
    <Link href={`/login?url=${pathname}`}>
        <Button>
        Login
        </Button>    
    </Link>
  )
}

