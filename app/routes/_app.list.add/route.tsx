import { ActionFunctionArgs, LoaderFunctionArgs, redirect } from '@remix-run/node'
import { addTodo } from '~/.server/list'
import { getUserId, sessionGuard } from '~/.server/session'
import { validationForm } from '~/.server/validationTodoForm'
import TodoForm from '~/components/list/Form'
import { FormType } from '~/enums'
import { TodoRequest } from '~/types'

export default function AddPage() {
  return (
    <TodoForm mode={FormType.ADD} />
  )
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await sessionGuard(request)

  return null
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData) as unknown as TodoRequest

  try {
    validationForm(data)
    const userId = await getUserId(request)
    await addTodo({ ...data, done: !!data.done }, userId)
  } catch (error) {
    return error
  }
  
  return redirect('..')
}
