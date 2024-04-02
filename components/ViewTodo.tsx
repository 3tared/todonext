'use client';

import { Button } from '@/components/ui/button';
import { View } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { useState } from 'react';
import { ITodo } from '@/interfaces';
import { Badge } from './ui/badge';

const ViewTodo = ({ todo }: { todo: ITodo }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={'outline'}>
          <View size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center font-bold ">
            {todo.title}
          </DialogTitle>
        </DialogHeader>
        <div className="py-4 space-y-4 flex flex-col items-center">
          <DialogDescription>Todo Title</DialogDescription>
          <Badge className="text-[14px]">{todo.title}</Badge>
          <DialogDescription>Todo Short Description</DialogDescription>
          <Badge className="text-[14px]">
            {todo.body ? todo.body : "This Todo Dosen't Have A Description!"}
          </Badge>
          <DialogDescription>Todo Status</DialogDescription>
          {todo.completed ? (
            <Badge className="text-[14px]">Completed</Badge>
          ) : (
            <Badge variant={'secondary'} className="text-[14px]">
              UnCompleted
            </Badge>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewTodo;
