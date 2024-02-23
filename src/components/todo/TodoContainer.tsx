import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import Filter from "./Filter";
import TodoCard from "./TodoCard";
import { useGetTodosQuery } from "@/redux/api/api";
import { TTodo } from "@/redux/features/todoSlice";

const TodoContainer = () => {
  //from local state
  // const { todos } = useAppSelector((state) => state.todos);

  //from server
  const { data: todos, isError, isLoading } = useGetTodosQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="my-5">
      <div className="flex justify-between ">
        <AddTodoModal />
        <Filter />
      </div>
      <div className="bg-gray-800 p-2 mt-10 rounded-lg">
        <div className="bg-gray-200 rounded p-2">
          {todos.map((task: TTodo, index: Number) => (
            <TodoCard key={index} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
