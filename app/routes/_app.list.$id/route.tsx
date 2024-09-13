import { redirect } from "@remix-run/react";
import TodoForm from "~/components/list/Form";
import { FormType } from "~/enums";
import { FAKE_DATA } from "../_app.list/route";
import { ActionFunctionArgs } from "@remix-run/node";
import { TodoRequest } from "~/types";
import { validationForm } from "~/.server/validationTodoForm";

export default function TodoDetail() {
  return (
    <TodoForm
      mode={FormType.MODIFY}
      payload={FAKE_DATA[0]}
    />
  )
}

export const loader = () => {
  return null
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()
  const payload = Object.fromEntries(formData) as unknown as TodoRequest

  try {
    validationForm(payload)    
  } catch (error) {
    return error
  }

  return redirect('..')
}
