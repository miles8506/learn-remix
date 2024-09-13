export interface ITodoItem<D = string> {
  id: string
  title: string
  time: D
  description: string
  isDone: boolean
}

export type TodoRequest = Omit<ITodoItem, 'id'>
