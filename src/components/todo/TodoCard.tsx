import { removeTodo, toggleStatus } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hook";

const TodoCard = ({ task }: any) => {
  const dispatch = useAppDispatch();
  const toggleState = () => {
    dispatch(toggleStatus(task.title));
  };

  return (
    <div className="p-2 my-2 border-[1px] border-gray-500 rounded-md">
      <div className="flex justify-between text-lg">
        <input type="checkbox" name="completed" id="" onChange={toggleState} />
        <h1>{task.title}</h1>
        <h1
          className={`${task.isCompleted ? "text-green-600" : "text-red-600"}`}
        >
          {task.isCompleted ? "complete" : "pending"}
        </h1>
        <h1>Time</h1>
        <p>{task.description}</p>
        <div className="text-white flex gap-2">
          <button
            className="bg-red-500 px-4 py-1 rounded"
            onClick={() => dispatch(removeTodo(task.title))}
          >
            Delete
          </button>
          <button className="bg-blue-500 px-4 py-1 rounded">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
