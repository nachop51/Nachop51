import './Home.css'
import MediaIcons from '../../components/MediaIcons.tsx'
import Presentation from './Presentation.tsx'

const Home = () => {
  return (
    <>
      <main className='home-main'>
        <Presentation />
        <h2>What about me?</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit placeat aut voluptates, nesciunt fuga eos expedita esse. Provident incidunt ex at architecto, reprehenderit neque delectus consequatur molestias veritatis? Quaerat, possimus!</p>
      </main>
      <small className='text-gray-400 absolute bottom-1.5 text-xs whitespace-nowrap sm:text-sm left-1/2 -translate-x-1/2'>
        &copy; MMXXIV. Ignacio Peralta. All rights reserved.
      </small>
      <MediaIcons />
    </>
  )
}

export default Home
