import './globals.css'
import Link from 'next/link'
import Head from 'next/head'
import NavMenu from '@/components/NavMenu'
import { type Metadata } from 'next'
import MediaIcons from '@/components/MediaIcons'
import { BsMailbox } from 'react-icons/bs'

export const metadata: Metadata = {
  title: 'Ignacio Peralta - Software Engineer',
  description: 'Ignacio Peralta Porfolio',
  authors: {
    name: 'Ignacio Peralta',
    url: 'https://nachop.xyz'
  },
  keywords: [
    'Portfolio',
    'Ignacio Peralta',
    'Software Engineer',
    'Web Developer',
    'Fullstack Developer',
    'Frontend',
    'Backend',
    'Developer',
    'React',
    'Next.js',
    'Node.js',
    'TypeScript'
  ],
  openGraph: {
    title: 'Ignacio Peralta - Software Engineer',
    description: 'Ignacio Peralta Porfolio',
    url: 'https://nachop.xyz',
    type: 'website',
    siteName: 'Ignacio Peralta',
    images: [
      {
        url: 'https://nachop.xyz/static/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ignacio Peralta - Software Engineer'
      }
    ]
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        media: '(prefers-color-scheme: light)'
      },
      {
        url: '/favicon.ico',
        media: '(prefers-color-scheme: dark)'
      }
    ]
  }
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <Head>
        <link rel='shortcut icon' href='/static/favicon.ico' type='image/x-icon' />
      </Head>
      <body>
        <div className='fixed left-0 w-full px-8 py-6 flex justify-between items-center z-[10] text-xl sm:text-2xl sm:px-16 sm:py-12'>
          <div>
            <Link href='/' className='cursor-pointer'>
              Icon
            </Link>
            <span className='mx-3'>
              |
            </span>
            <NavMenu />
          </div>
          <div className='flex items-center gap-2'>
            <BsMailbox /> Reach me
          </div>
        </div>
        {children}
        <MediaIcons />
        <small className='text-gray-400 absolute bottom-1.5 text-xs whitespace-nowrap sm:text-sm left-1/2 -translate-x-1/2'>
          &copy; MMXXIV. Ignacio Peralta. All rights reserved.
        </small>
      </body>
    </html>
  )
}
