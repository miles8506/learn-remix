import TodoForm from "~/components/list/Form";
import { FormType } from "~/enums";

export default function TodoDetail() {
  return (
    <TodoForm mode={FormType.MODIFY} />
  )
}

export const loader = () => {
  return null
}

export const action = () => {
  console.log('action')

  return null
}
