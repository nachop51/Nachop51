import './NavBar.css'
import { Link } from 'react-router-dom'
import { BsMailbox } from 'react-icons/bs'
import { useRef, useState } from 'react'

const NavBar = () => {
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
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
          </div>
        </nav>
        <button className='btn btn-primary' onClick={() => { setIsOpen(false) }}>Close</button>
      </dialog>
      <div className='navbar'>
        <div>
          <Link to='/' className='cursor-pointer'>
            Icon
          </Link>
          <span className='mx-3'>
            |
          </span>
          <button onClick={handleClick}>Menu</button>
        </div>
        <div className='flex items-center gap-2'>
          <BsMailbox /> Reach me
        </div>
      </div>
    </>
  )
}

export default NavBar
