import { type TechnologyCatalogItem } from '@/types'
import React from 'react'

interface Props {
  techonology: TechnologyCatalogItem
}

const Badge = ({ techonology }: Props) => {
  return (
    <span className='border rounded-lg text-xs px-2 py-1 flex items-center gap-1 [&>svg]:size-4 shadow-xl' style={{ borderColor: techonology.color }}>
      {techonology.icon} {techonology.name}
    </span>
  )
}

export default Badge
