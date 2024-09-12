import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

import styled from './style/style.module.scss'

export default function NavBar() {
  return (
    <nav className={styled.nav}>
      <NavLink
        to='/list/add'
        className={
          ({ isActive }) => isActive
            ? clsx([styled.active, styled['nav-btn']])
            : styled['nav-btn']
        }
      >
        +Add
      </NavLink>
      <NavLink
        to='/data'
        className={
          ({ isActive }) => isActive
            ? clsx([styled.active, styled['nav-btn']])
            : styled['nav-btn']
        }
      >
        Data
      </NavLink>
    </nav>
  )
}
