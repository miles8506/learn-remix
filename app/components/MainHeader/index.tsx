import { Link } from "@remix-run/react";

import styled from './style.module.css'

export default function MainHeader() {
  return (
    <header className={styled.header}>
      <Link
        to='/auth'
        className={styled['auth-btn']}
      >
        Login
      </Link>
    </header>
  )
}
