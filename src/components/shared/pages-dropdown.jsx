import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { pages } from "@/data/shared";
import Link from "next/link";
import { TiArrowSortedDown } from "react-icons/ti";

const PageDropDown = () => {
  return (

    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 font-[family-name:var(--font-fira)] text-lg font-medium text-white hover:text-primary   transition-all duration-300 mx-auto">
        Pages
        <TiArrowSortedDown size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#152E3A] border border-primary text-white">
        {pages.map((page, idx) => (
          <Link key={idx} href={page.href} className={`block p-2 font-[family-name:var(--font-fira)] font-medium  hover:text-primary transation-all duration-300 ${idx == pages.length - 1 ? "" : 'border-b border-primary'}`}>
            {page.label}
          </Link>
        ))}

      </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default PageDropDown
