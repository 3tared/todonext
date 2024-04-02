import { getTodoListAction } from '@/actions/todoActions';
import AddTodoForm from '@/components/AddTodoForm';
import TodosTable from '@/components/TodosTable';
import { auth } from '@clerk/nextjs';

export default async function Home() {
  const { userId }: { userId: string | null } = auth();
  const todos = await getTodoListAction({ userId });

  return (
    <main className="container">
      <div className="mx-auto flex w-full lg:w-3/4 flex-col justify-center space-y-4 mt-10">
        <AddTodoForm userId={userId} />
        <TodosTable todos={todos} />
      </div>
    </main>
  );
}
