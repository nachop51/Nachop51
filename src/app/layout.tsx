import './globals.css'
import MediaIcons from '@/components/Icons/MediaIcons'
import NavBar from '@/components/NavBar'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ignacio Peralta - Web Developer',
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
    title: 'Ignacio Peralta - Web Developer',
    description: 'Ignacio Peralta Porfolio',
    url: 'https://nachop.xyz',
    type: 'website',
    siteName: 'Ignacio Peralta',
    images: [
      {
        url: 'https://nachop.xyz/static/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ignacio Peralta - Web Developer'
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
    <html lang='en' className='scroll-smooth !overflow-auto'>
      <body className='relative'>
        <div className='bg-gradient transition-colors' />
        <NavBar />
        {children}
        <MediaIcons />
        <small className='block text-gray-400 relative text-xs whitespace-nowrap sm:text-sm text-center pb-2'>
          &copy; MMXXIV. Ignacio Peralta.
        </small>
      </body>
    </html>
  )
}
