'use server';

import { ITodo } from '@/interfaces';
import { TodoFormValues } from '@/schema';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export const getTodoListAction = async ({
  userId,
}: {
  userId: string | null;
}) => {
  return await prisma.todo.findMany({
    where: {
      user_id: userId as string,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const createTodoAction = async ({
  title,
  body,
  completed,
  userId,
}: {
  title: string;
  completed: boolean;
  body?: string | undefined;
  userId: string | null;
}) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      completed,
      user_id: userId as string,
    },
  });
  revalidatePath('/');
};

export const updateTodoAction = async ({
  id,
  completed,
  body,
  title,
}: ITodo) => {
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title,
      body,
      completed,
    },
  });
  revalidatePath('/');
};

export const deleteTodoAction = async ({ id }: { id: string }) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath('/');
};
