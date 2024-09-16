import { TodoRequest } from "~/types";
import { validationLength } from "~/utils";

export function validationForm(payload: TodoRequest) {
  const { title, time, description } = payload
  const error = {} as { title: string, description: string, time: string }

  if (!validationLength(title ?? '', 10)) {
    error.title = 'title length error'
  }
  if (!validationLength(description ?? '', 100)) {
    error.description = 'description length error'
  }
  if (!time) {
    error.time = 'time is empty'
  }

  if (Object.values(error).length) throw error
}
