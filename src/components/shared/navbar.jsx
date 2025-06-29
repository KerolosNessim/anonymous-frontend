import { links } from '@/data/shared'
import Image from 'next/image'
import Link from 'next/link'
import AnalysisLink from './analysis-link'
import NavbarSheet from './navbar-sheet'
import PageDropDown from './pages-dropdown'



const Navbar = () => {
  return (
    <nav className='  py-6 bg-background fixed top-0 start-0 end-0 z-50   font-[family-name:var(--font-fira)]  '>
      <div className='container  flex items-center justify-between  '>
        {/* logo */}
        <Link href='/' className='text-2xl font-bold text-white'>
          <Image src="/logo-nav.png" alt="Logo" width={150} height={100} />
        </Link>
        {/* links */}
        <ul className='xl:flex items-center gap-8 hidden '>
          {links.map((link,idx) => (
            <li key={idx}>
              <Link href={link.href} className='block text-lg font-medium text-white hover:text-primary   transition-all duration-300'>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <PageDropDown/>
          </li>

        </ul>
        {/* get started and mode switch */}
        <div className='xl:flex items-center gap-4 hidden'>
          <AnalysisLink />
        </div>
          <NavbarSheet links={links}/>
      </div>
    </nav>
  )
}

export default Navbar
