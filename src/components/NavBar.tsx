import './NavBar.css'
import { Link } from 'react-router-dom'
import { BsMailbox } from 'react-icons/bs'
import { useState } from 'react'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(true)
  }

  return (
    <>
      {
        isOpen &&
          <dialog open className='m-auto z-50'>
            <button onClick={() => { setIsOpen(false) }}>Close</button>
            <div className='flex flex-col gap-2'>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/projects'>Projects</Link>
              <Link to='/contact'>Contact</Link>
            </div>
          </dialog>
      }
      <div className='navbar'>
        <div>
          <Link to='/' className='cursor-pointer'>
            Icon
          </Link>
          |
          <button onClick={handleClick}>Menu</button>
        </div>
        <div className='flex items-center gap-2'>
          <BsMailbox />Reach me
        </div>
      </div>
    </>
  )
}

export default NavBar
