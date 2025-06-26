import Link from 'next/link'
import React from 'react'

const AnalysisLink = ({isSheet=false}) => {
  return (
    <Link href='/analysis' className={`size-12 flex items-center justify-center w-fit  text-lg font-bold font-[family-name:var(--font-fira)]  px-6  border-2 border-primary hover:bg-primary hover:text-white rounded-md transition-all duration-300  ${!isSheet && ' text-white'}`}>
      Get Started
    </Link>
  )
}

export default AnalysisLink
