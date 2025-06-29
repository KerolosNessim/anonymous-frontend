import { FileForm } from '@/components/analysis/file-form'
import Image from 'next/image'

const AnalysisPage = () => {
  return (
    <div className=' xl:space-y-24  md:space-y-16 space-y-10  mt-16'>
      <section className='container space-y-10'>
        <Image
          src="/logo.png"
          alt="Hero"
          width={350}
          height={175}
          className="mx-auto"
        />
        <p className="text-center md:max-w-2xl mx-auto font-[family-name:var(--font-fira)] font-semibold text-sm leading-snug text-gray-500  max-w-[600px] ">
          Analyse suspicious files, domains, IPs and URLs to detect malware and
          other breaches, automatically share them with the security community.
        </p>
        <FileForm/>
      </section>

    </div>
  )
}

export default AnalysisPage
