"use client"


import {
  Dialog,
  DialogContent,  
} from "@fakestore/ui/components/dialog"
import { useState } from "react"
import {useRouter} from "next/navigation"
import FormLogin from "@/app/login/_components/login-form"

export default function DialogCloseButton(): JSX.Element {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)
  const handleDialog = (): void => {
    setIsOpen(!isOpen)
    router.back()
  }
  return (
    <Dialog onOpenChange={handleDialog} open={isOpen}>
        
      <DialogContent className="grid place-content-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-5 max-w-lg">

          <FormLogin />
      </DialogContent>
      
    </Dialog>
  )
}
