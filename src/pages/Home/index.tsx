import MediaIcons from '../../components/MediaIcons.tsx'
import './Home.css'
import Presentation from './Presentation.tsx'

const Home = () => {
  return (
    <>
      <main>
        <Presentation />
        <Presentation />
        <small className='text-gray-400 absolute bottom-1.5 text-xs whitespace-nowrap sm:text-sm left-1/2 -translate-x-1/2'>
          &copy; MMXXIV. Ignacio Peralta. All rights reserved.
        </small>
        <MediaIcons />
      </main>
    </>
  )
}

export default Home
