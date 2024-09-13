import { InputHTMLAttributes, StyleHTMLAttributes, useCallback } from "react";

import styled from './style/style.module.scss'

interface IPropsType {
  style?: StyleHTMLAttributes<unknown>
  htmlFor?: string
  labelText?: string
  getter?: number 
}

export default function BaseInput(props: IPropsType & InputHTMLAttributes<unknown>) {
  const {
    style,
    htmlFor,
    labelText,
    getter,
    ...elseProps
  } = props

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('click');
    e.stopPropagation()
  }, [])
  
  return (
    <div
      className={styled['base-input']}
      style={{ 'marginBottom': `${getter ?? 0}px` }}
      onClick={(e) => handleClick(e)}
      aria-hidden
    >
      {
        htmlFor &&
        (
          <label
            htmlFor={htmlFor}
            className={styled.label}
          >
            {labelText}
          </label>
        )
      }
      <div className={styled.wrap}>
        <input
          className={styled.input}
          {...elseProps}
          style={style}
          id={htmlFor ?? ''}
        />
      </div>
    </div>
  )
}
