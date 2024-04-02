import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { ITodo } from '@/interfaces';
import { Badge } from './ui/badge';
import TodosTableActions from './TodosTableActions';
import LoadingSpinner from './LoadingSpinner';

export default function TodosTable({ todos }: { todos: ITodo[] }) {
  return (
    <Table>
      <TableCaption>Your To-Dos List</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos &&
          todos.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell className="font-medium">
                {todo.createdAt?.toString().slice(0, 16)}
              </TableCell>
              <TableCell>{todo.title}</TableCell>
              <TableCell>
                {todo.completed ? (
                  <Badge>Completed</Badge>
                ) : (
                  <Badge variant={'secondary'}>UnCompleted</Badge>
                )}
              </TableCell>
              <TableCell className="flex items-center space-x-2 justify-end">
                <TodosTableActions todo={todo} key={todo.id} />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>

      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">
            {todos.length ? todos.length : "YOU DON'T HAVE TODOS YET!"}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
