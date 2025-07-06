import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { pages } from "@/data/shared";
import Link from "next/link";
import { TiArrowSortedDown } from "react-icons/ti";

const PageDropDown = ({handleClose}) => {
  return (

    <Popover>
      <PopoverTrigger className="flex items-center gap-1 font-[family-name:var(--font-fira)]  font-medium text-white hover:text-primary   transition-all duration-300 mx-auto">
        Pages
        <TiArrowSortedDown size={16} />
      </PopoverTrigger>
      <PopoverContent className="bg-[#152E3A] border border-primary text-white">
        {pages.map((page, idx) => (
          <Link onClick={handleClose} key={idx} href={page.href} className={`block p-2 font-[family-name:var(--font-fira)] font-medium  hover:text-primary transation-all duration-300 ${idx == pages.length - 1 ? "" : 'border-b border-primary'}`}>
            {page.label}
          </Link>
        ))}

      </PopoverContent>
    </Popover>

  )
}

export default PageDropDown
