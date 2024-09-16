import { redirect, useLoaderData } from "@remix-run/react";
import TodoForm from "~/components/list/Form";
import { FormType } from "~/enums";
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { TodoRequest } from "~/types";
import { validationForm } from "~/.server/validationTodoForm";
import { findTodo, updateTodo } from "~/.server/list";

export default function TodoDetail() {
  const data = useLoaderData<typeof loader>()

  if (!data) return null

  return (
    <TodoForm
      mode={FormType.MODIFY}
      payload={data}
    />
  )
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id as string
  
  return await findTodo(id)
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
