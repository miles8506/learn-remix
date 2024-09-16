export interface ITodoItem<D = string> {
  id: string
  title: string
  time: D
  description: string
  done: boolean
}

export type TodoRequest = Omit<ITodoItem, 'id'>
