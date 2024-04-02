'use client';
import React, { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from './ui/button';
import { Pen, Trash } from 'lucide-react';
import { deleteTodoAction } from '@/actions/todoActions';
import Spinner from './Spinner';
import EditTodoForm from './EditTodoForm';
import { ITodo } from '@/interfaces';
import ViewTodo from './ViewTodo';
import { useToast } from './ui/use-toast';
const TodosTableActions = ({ todo }: { todo: ITodo }) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  return (
    <>
      <ViewTodo todo={todo} />
      <EditTodoForm todo={todo} />
      {/* Alert Dialog */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant={'destructive'}>
            {loading ? <Spinner /> : <Trash size={16} />}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete{' '}
              <span className="font-bold">{todo.title}</span> and remove your
              Todo.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                setLoading(true);
                await deleteTodoAction({ id: todo.id });
                setLoading(false);
                toast({
                  description: 'Your To-Do Has Been Deleted Successfully',
                });
              }}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {/* Alert Dialog */}
    </>
  );
};

export default TodosTableActions;
