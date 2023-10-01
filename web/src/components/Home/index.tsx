import './Home.css'
import Presentation from './Presentation'

const Home = () => {
  return (
    <main id="home">
      <Presentation />
      <Presentation />
      <small className="text-gray-400 absolute bottom-1.5 text-xs whitespace-nowrap sm:text-sm left-1/2 -translate-x-1/2">
        &copy; MMXXIII. Ignacio Peralta. All rights reserved.
      </small>
    </main>
  )
}

export default Home
