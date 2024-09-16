import { TodoRequest } from "~/types";
import { prisma } from "./db";

export async function addTodo(payload: TodoRequest) {
  try {
    return await prisma.todoItem.create({
      data: {
        ...payload,
        time: new Date(payload.time)
      }
    })
  } catch (error) {
    throw error
  }
}
