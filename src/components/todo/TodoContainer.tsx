import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div className="my-5">
      <div className="flex justify-between text-2xl">
        <button className="bg-gray-600 px-4 py-2 rounded-lg text-white">
          Add Todo
        </button>
        <button className="bg-gray-300 px-4 py-2 rounded-lg text-black">
          Filter
        </button>
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
