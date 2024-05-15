import Link from "next/link"
import { Button } from "@fakestore/ui/components/button"
import { Pencil, Trash2 } from "lucide-react"
import { auth } from "@/auth"

interface AdminActionProps {
    productID: number
}

export default async function AdminActions({ productID }: AdminActionProps): Promise<JSX.Element> {
   const session = await auth()

   return (
    <>
    {session?.user.role === "admin" && (
        <div className="flex flex-row justify-end gap-1 mb-5">
         <Link href={`/dashboard/edit/${productID}`}>
         <Button className="bg-teal-700 hover:scale-105 hover:bg-teal-500  rounded-full text-sm" size="icon">
            <Pencil size="16" />
         </Button>
         </Link>
         <Link href={`/dashboard/delete/${productID}`}>
         <Button className=" rounded-full text-sm" size="icon" variant="destructive">
            <Trash2 size="16" />
         </Button>
         </Link>

        </div>
    )}
    </>
  )
}
