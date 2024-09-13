import { ActionFunctionArgs } from '@remix-run/node'
import { validationForm } from '~/.server/validationTodoForm'
import TodoForm from '~/components/list/Form'
import { FormType } from '~/enums'
import { TodoRequest } from '~/types'

export default function AddPage() {
  return (
    <TodoForm mode={FormType.ADD} />
  )
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData) as unknown as TodoRequest
  console.log(data);
  try {
    validationForm(data)
  } catch (error) {
    return error
  }

  return null
}
