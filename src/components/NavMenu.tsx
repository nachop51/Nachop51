'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'

export default function NavMenu () {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDialogElement | null>(null)

  const handleClick = () => {
    setIsOpen(true)
  }

  if (isOpen && ref.current != null) {
    ref.current.showModal()
  } if (!isOpen && ref.current != null) {
    ref.current.close()
  }

  return (
    <>
      <dialog ref={ref} className='m-auto bg-transparent'>
        <nav>
          <div className='flex flex-col gap-2'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='/contact'>Contact</Link>
          </div>
        </nav>
        <button className='btn btn-primary' onClick={() => { setIsOpen(false) }}>Close</button>
      </dialog>
      <button onClick={handleClick}>Menu</button>
    </>
  )
}
