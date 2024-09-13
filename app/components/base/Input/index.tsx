import { InputHTMLAttributes, StyleHTMLAttributes } from "react";

import styled from './style/style.module.scss'

interface IPropsType {
  style?: StyleHTMLAttributes<unknown>
  htmlFor?: string
  labelText?: string
}

export default function BaseInput(props: IPropsType & InputHTMLAttributes<unknown>) {
  const { style, htmlFor, labelText, ...elseProps } = props
  
  return (
    <div className={styled['base-input']}>
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
      <input
        className={styled.input}
        {...elseProps}
        style={style}
        id={htmlFor ?? ''}
      />
    </div>
  )
}
