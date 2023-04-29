import React from 'react'
import { match } from 'ts-pattern'
import { ArrowUp, ArrowDown } from './images/Arrow'
import { Carbon } from './images/Carbon'
import { Email } from './images/Email'
import { Facebook } from './images/Facebook'
import { GitHub } from './images/GitHub'
import { Linkedin } from './images/LinkedIn'
import { Map } from './images/Map'
import { Person } from './images/Person'
import { Phone } from './images/Phone'
import { Share } from './images/Share'
import { Star } from './images/Star'
import { Twitter } from './images/Twitter'
import { YouTube } from './images/YouTube'

export type IconName =
  | 'arrow-up'
  | 'arrow-down'
  | 'carbon'
  | 'email'
  | 'facebook'
  | 'github'
  | 'linkedin'
  | 'map'
  | 'person'
  | 'phone'
  | 'share'
  | 'star'
  | 'twitter'
  | 'youtube'

export interface IconProps {
  name: IconName
  width?: string
  height?: string
}

export const Icon: React.FC<IconProps> = (props) => {
  const { name } = props

  return match(name)
    .with('arrow-up', () => <ArrowUp />)
    .with('arrow-down', () => <ArrowDown />)
    .with('carbon', () => <Carbon />)
    .with('email', () => <Email />)
    .with('facebook', () => <Facebook />)
    .with('github', () => <GitHub />)
    .with('linkedin', () => <Linkedin />)
    .with('map', () => <Map />)
    .with('person', () => <Person />)
    .with('phone', () => <Phone />)
    .with('share', () => <Share />)
    .with('star', () => <Star />)
    .with('twitter', () => <Twitter />)
    .with('youtube', () => <YouTube />)
    .exhaustive()
}
