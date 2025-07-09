"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

const ProgressCircle = ({ percentage = 75, strokeWidth = 10 ,color="#15ABD9" }) => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  const [size, setSize] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!containerRef.current) return

    const resize = () => {
      const { width, height } = containerRef.current.getBoundingClientRect()
      setSize(Math.min(width, height))
    }

    resize()

    const observer = new ResizeObserver(resize)
    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setProgress(percentage)
      }, 300)
      return () => clearTimeout(timeout)
    }
  }, [isInView, percentage])

  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {size > 0 && (
        <>
          <svg width={size} height={size}>
            <circle
              stroke="#eee"
              fill="transparent"
              strokeWidth={strokeWidth}
              r={radius}
              cx={size / 2}
              cy={size / 2}
            />
            <circle
              stroke={color}
              fill="transparent"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              r={radius}
              cx={size / 2}
              cy={size / 2}
              style={{ transition: "stroke-dashoffset 1s ease-in-out" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center  font-bold text-white">
            {Math.round(progress)}%
          </div>
        </>
      )}
    </div>
  )
}

export default ProgressCircle
