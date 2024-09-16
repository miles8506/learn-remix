import { Prisma } from '@prisma/client'
import { ActionFunctionArgs, redirect } from '@remix-run/node'
import { addTodo } from '~/.server/list'
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

  try {
    validationForm(data)
    await addTodo({ ...data, done: !!data.done })
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return error
    }
  }
  
  return redirect('..')
}
