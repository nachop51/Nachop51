import React from 'react'

const Sectionizer = (
  { className, children }:
  { className?: string, children: React.ReactNode }
) => {
  return (
    <section
      className={`mx-auto my-0 max-w-[1200px]
    py-4  ${className}`}
    >
      {children}
    </section>
  )
}

export default Sectionizer
