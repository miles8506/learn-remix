import clsx from "clsx"

import styled from './style/style.module.scss'

interface IPropsType {
  text?: string
  children?: React.ReactNode
  handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  variant?: 'primary' | 'large'
}

export default function BaseButton(props: IPropsType) {
  const { text, children, handleClick, variant = 'primary' } = props

  return (
    <button
      onClick={(e) => handleClick && handleClick(e)}
      className={clsx([styled[variant], styled['base-button']])}
    >
      {text ?? children}
    </button>
  )
}
