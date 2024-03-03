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

export interface ProjectsType {
  title: string
  description: string
  images: string | [string, string]
  links: string[]
  repos: string[]
  tags: TechnologyCatalogItem[]
}
