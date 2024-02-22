import AddTodo from "./AddTodo";
import Filter from "./Filter";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div className="my-5">
      <div className="flex justify-between ">
        <AddTodo />
        <Filter />
      </div>
      <div className="bg-gray-800 p-2 mt-10 rounded-lg">
        <div className="bg-gray-200 rounded p-2">
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
