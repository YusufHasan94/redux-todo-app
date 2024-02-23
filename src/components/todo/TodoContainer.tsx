import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import Filter from "./Filter";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <div className="my-5">
      <div className="flex justify-between ">
        <AddTodoModal />
        <Filter />
      </div>
      <div className="bg-gray-800 p-2 mt-10 rounded-lg">
        <div className="bg-gray-200 rounded p-2">
          {todos.map((task, index) => (
            <TodoCard key={index} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
