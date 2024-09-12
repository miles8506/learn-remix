import type { ITodoItem } from '~/types/TodoItem'

import styled from './style/style.module.scss'

export default function ToDoItem(props: ITodoItem) {
  const { title, isDone, description, createTime } = props

  return (
    <li className={styled['todo-item']}>
      <div className={styled.left}>
        <input
          type="checkbox"
          defaultChecked={isDone}
          className={styled.checkbox}
        />
      </div>
      <div className={styled.right}>
        <h4 className={styled.title}>{title}</h4>
        <div>
          {description}
        </div>
        <span className={styled.time}>{createTime.getTime()}</span>
      </div>
    </li>
  )
}
