import React from 'react'

const Sectionizer = (
  { className, id, children }:
  { className?: string, id?: string, children: React.ReactNode }
) => {
  return (
    <section
      id={id}
      className={`mx-auto my-0 max-w-[1200px]
    py-4  ${className}`}
    >
      {children}
    </section>
  )
}

export default Sectionizer
