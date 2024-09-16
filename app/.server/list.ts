import { TodoRequest } from "~/types";
import { prisma } from "./db";

export async function addTodo(payload: TodoRequest) {
  try {
    return await prisma.todoItem.create({
      data: {
        ...payload,
        time: new Date(payload.time),
        done: !!payload.done
      }
    })
  } catch (error) {
    throw error
  }
}

export async function getList() {
  try {
    const data = await prisma.todoItem.findMany({
      orderBy: { time: 'desc' }
    })
    
    data.sort((a, b) => a.done === b.done ? 0 : (a.done ? -1 : 1))
    return data
  } catch (error) {
    throw error
  }
}

export async function findTodo(id: string) {
  try {
    return await prisma.todoItem.findFirst({ where: { id } })
  } catch (error) {
    throw error
  }
}

export async function updateTodo(payload: TodoRequest, id: string) {
  try {
    return await prisma.todoItem.update({
      where: { id },
      data: {
        ...payload,
        time: new Date(payload.time),
        done: !!payload.done
      }
    })
  } catch (error) {
    throw error
  }
}
