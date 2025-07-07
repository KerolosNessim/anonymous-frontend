import { FileForm } from '@/components/analysis/file-form'
import Image from 'next/image'

const AnalysisPage = () => {
  return (
    <div className=' xl:space-y-24  md:space-y-16 space-y-10  mt-16'>
      <section className='container space-y-6'>
        <Image
          src="/logo.png"
          alt="Hero"
          width={250}
          height={120}
          className="mx-auto"
        />
        <p className="text-center md:max-w-2xl mx-auto font-[family-name:var(--font-fira)] font-semibold text-sm leading-snug text-gray-400  max-w-[600px] ">
          Analyse suspicious files to detect malware and
          other breaches, automatically share them with the security community.
        </p>
        <FileForm />
      </section>

    </div>
  )
}

export default AnalysisPage
