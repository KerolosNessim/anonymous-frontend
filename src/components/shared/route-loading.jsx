'use client'

import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'

const RouteLoading = () => {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)
  const isFirstLoad = useRef(true) 

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false
      return
    }
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 200)
    return () => clearTimeout(timer)
  }, [pathname])
  if (!loading) return null
  return (
    <div className='fixed inset-0 z-[999] flex items-center justify-center bg-background'>
      <div className="loader"></div>
    </div>
  )
}

export default RouteLoading
