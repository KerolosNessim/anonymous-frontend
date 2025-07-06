"use client"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import PageDropDown from "./pages-dropdown"
import AuthButtons from "./auth-buttons"
import { useState } from "react"

const NavbarSheet = ({ links }) => {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  return (
    <Sheet open={open} onOpenChange={setOpen} >
      <SheetTrigger className="rounded-md flex items-center justify-center bg-transparent! text-white! size-12 border-2 border-primary hover:bg-primary! transition-all duration-300 xl:hidden">
        <Menu className="size-6" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle />
          {/* links */}
          <ul className=' space-y-4 mt-10  '>
            {links.map((link, idx) => (
              <li key={idx}>
                <Link onClick={handleClose} href={link.href} className='block text-center text-lg font-medium  hover:text-primary  hover:scale-105 transition-all duration-300'>
                  {link.label}
                </Link>
              </li>
            ))}
            <li >
              <div >
              <PageDropDown handleClose={handleClose} />
              </div>
            </li>
          </ul>
          {/* get started and mode switch */}
          <div className='flex items-center justify-center gap-4 mt-6'>
            <div onClick={handleClose}>
            <AuthButtons/>
            </div>
          </div>
        </SheetHeader>

      </SheetContent>
    </Sheet>
  )
}

export default NavbarSheet
