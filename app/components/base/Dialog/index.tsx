import React from "react";

import styled from './style/style.module.scss'

interface IPropsType {
  children: React.ReactNode
  isOpen: boolean
  handleClick: () => void
  title?: string
  clickBackdrop?: boolean
  backdrop?: boolean
}

export default function BaseDialog(props: IPropsType) {
  const { children, isOpen, title, handleClick, clickBackdrop, backdrop = true } = props

  return (
    <>
      {
        (isOpen && backdrop) && <div
          aria-hidden
          className={styled.backdrop}
          onClick={() => clickBackdrop && handleClick()}
        />
      }
      <dialog
        open={isOpen}
        className={styled['base-dialog']}
      >
        <div className={styled.top}>
          {title && <h3 className={styled['add-title']}>{title}</h3>}
          <div
            className={styled['close-icon']}
            onClick={() => handleClick()}
            aria-hidden
          />
        </div>
        {children}
      </dialog>
    </>
  )
}
