import type React from 'react'
import { type TECH_TAGS } from './constants'

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

export interface TechnologyItemType {
  title: string
  doubleSpan?: boolean
  techs: Array<typeof TECH_TAGS[keyof typeof TECH_TAGS] & { glow?: boolean }>
}
