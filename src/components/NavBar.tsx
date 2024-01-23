'use client'

import styles from './NavBar.module.css'
import { THEME } from '@/types.d'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { FaSun } from 'react-icons/fa'
import { FaMoon } from 'react-icons/fa6'
import Logo from './Icons/Logo'

const NavBar = () => {
  const ref = useRef<HTMLDialogElement | null>(null)
  const [theme, setTheme] = useState(THEME.LIGHT)

  useEffect(() => {
    const localTheme = (window.localStorage.getItem('data-theme') ?? document.documentElement.getAttribute('data-theme') ?? THEME.LIGHT) as THEME

    if (localTheme != null && localTheme !== theme) {
      document.documentElement.setAttribute('data-theme', localTheme)
      setTheme(localTheme)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleChangeTheme = () => {
    setTheme(prevState => {
      const newTheme = prevState === THEME.LIGHT ? THEME.DARK : THEME.LIGHT

      document.documentElement.setAttribute('data-theme', newTheme)
      window.localStorage.setItem('data-theme', newTheme)

      return newTheme
    })
  }

  return (
    <>
      <dialog ref={ref} className='modal'>
        <div className='modal-box w-auto flex flex-col'>
          <nav>
            <ul className='flex flex-col gap-2'>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/about'>About</Link>
              </li>
              <li>
                <Link href='/projects'>Projects</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
          </nav>
          <form method='dialog'>
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>✕</button>
          </form>
        </div>
      </dialog>
      <div className={styles.navbar}>
        <div className='flex items-center'>
          <Link href='/' title='Go to home page'>
            <Logo />
          </Link>
          <span className='mx-3'>
            |
          </span>
          <button onClick={() => { ref.current?.showModal() }}>Menu
          </button>
        </div>
        <div className='flex gap-2 items-center'>
          <button onClick={handleChangeTheme} aria-label='Button to change the application theme from dark to light or viceversa'>
            {
              theme === THEME.LIGHT
                ? <FaMoon />
                : <FaSun />
            }
          </button>
          <Link href='mailto:nachoperalta0@gmail.com' className='flex'>
            Reach me
          </Link>
        </div>
      </div>
    </>
  )
}

export default NavBar
