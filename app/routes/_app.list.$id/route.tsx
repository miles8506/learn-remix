import { redirect, useMatches, useParams } from "@remix-run/react";
import TodoForm from "~/components/list/Form";
import { FormType } from "~/enums";
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { ITodoItem, TodoRequest } from "~/types";
import { validationForm } from "~/.server/validationTodoForm";
import { findTodo, updateTodo } from "~/.server/list";

export default function TodoDetail() {
  const params = useParams()
  const matches = useMatches()
  const data = (matches.find(match => match.id === 'routes/_app.list')?.data as ITodoItem[]).find(item => item.id === params.id)

  if (!data) return null

  return (
    <TodoForm
      mode={FormType.MODIFY}
      payload={data}
    />
  )
}

export const action = async ({ request, params }: ActionFunctionArgs) => {
  const formData = await request.formData()
  const payload = Object.fromEntries(formData) as unknown as TodoRequest
  const id = params.id

  try {
    validationForm(payload)
    await updateTodo({ ...payload, done: payload.done === 'false' ? false : !!payload.done }, id!)
  } catch (error) {
    return error
  }

  return redirect('..')
}
