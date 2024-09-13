import TodoForm from '~/components/list/Form'
import { FormType } from '~/enums'

export default function AddPage() {
  return (
    <TodoForm mode={FormType.ADD} />
  )
}

export const action = () => {
  return null
}
