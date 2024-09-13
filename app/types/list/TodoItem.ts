export interface ITodoItem<D = Date> {
  id: string
  title: string
  time: D
  description: string
  isDone: boolean
}

export type TodoRequest = Omit<ITodoItem, 'id'>
