import React from 'react'

const Loading = () => {
  return (
    <div className='fixed inset-0 z-[999] flex items-center justify-center bg-background'>
      <div className="loader"></div>
    </div>
  )
}

export default Loading
