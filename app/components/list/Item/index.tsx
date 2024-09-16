import type { ITodoItem } from '~/types'

import styled from './style/style.module.scss'
import { useNavigate } from '@remix-run/react'
import BaseInput from '~/components/base/Input'
import { useCallback } from 'react'

export default function ToDoItem(props: ITodoItem) {
  const { title, done, description, time, id } = props
  
  const navigate = useNavigate()

  const goToId = useCallback(() => {
    navigate(`/list/${id}`)
  }, [id, navigate])

  return (
    <li
      onClick={goToId}
      className={styled['todo-item']}
      aria-hidden
    >
      <div className={styled.left}>
        <BaseInput
          type='checkbox'
          defaultChecked={done}
          style={{ width: '15px', height: '15px' }}
        />
      </div>
      <div className={styled.right}>
        <h4 className={styled.title}>{title}</h4>
        <div>
          {description}
        </div>
        <span className={styled.time}>{time.slice(0, 10)}</span>
      </div>
    </li>
  )
}
