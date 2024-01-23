import type React from 'react'

export interface TechnologyCatalogItem {
  name: string
  icon: React.ReactNode
  color: string
}

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark'
}
