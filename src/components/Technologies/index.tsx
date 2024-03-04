import { technologiesSections } from '@/constants'
import React from 'react'
import TechnologyItem from './TechnologyItem'

const Technologies = () => {
  return (
    <div className='mt-6 grid md:grid-cols-2 gap-8 mx-auto'>
      {
        technologiesSections.map(({ title, techs, doubleSpan }) => (
          <TechnologyItem key={title} title={title} techs={techs} doubleSpan={doubleSpan} />
        ))
      }
    </div>
  )
}

export default Technologies
