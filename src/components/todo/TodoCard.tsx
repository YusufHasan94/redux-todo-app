import { useDeleteTodoMutation, useUpdateTodoMutation } from "@/redux/api/api";
// import { TTodo, removeTodo, toggleStatus } from "@/redux/features/todoSlice";
// import { useAppDispatch } from "@/redux/hook";

const TodoCard = ({ task }: any) => {
  // const dispatch = useAppDispatch();
  const [deleteTodo, { isSuccess }] = useDeleteTodoMutation();
  const [updateTodo, { isLoading }] = useUpdateTodoMutation();

  if (isLoading) {
    return <p>is Loading...</p>;
  }
  if (isSuccess) {
    return <p>Data fetched successfully...</p>;
  }

  const toggleState = () => {
    // dispatch(toggleStatus(task.title));

    const options = {
      id: task._id,
      data: {
        title: task.title,
        description: task.description,
        priority: task.priority,
        isCompleted: !task.isCompleted,
      },
    };
    updateTodo(options);
  };

  return (
    <div className="p-2 my-2 border-[1px] border-gray-500 rounded-md">
      <div className="flex justify-between items-center text-lg">
        <input
          type="checkbox"
          name="completed"
          id=""
          checked={task.isCompleted}
          className=" mr-4"
          onChange={toggleState}
        />
        <h1 className="flex-1 text-start">{task.title}</h1>
        <div className="flex flex-1 gap-4 items-center">
          <div
            className={`size-3 rounded-full ${
              task.priority === "high"
                ? "bg-red-700"
                : task.priority === "medium"
                ? "bg-yellow-600"
                : "bg-green-600"
            }`}
          ></div>
          <h1>{task.priority}</h1>
        </div>
        <h1
          className={`flex-1 ${
            task.isCompleted ? "text-green-600" : "text-red-600"
          }`}
        >
          {task.isCompleted ? "complete" : "pending"}
        </h1>
        {/* <h1>Time</h1> */}
        <p className="flex-[2] text-start">{task.description}</p>
        <div className="text-white flex gap-2">
          <button
            className="bg-red-500 px-4 py-1 rounded"
            // onClick={() => dispatch(removeTodo(task.title))}
            onClick={() => deleteTodo(task._id)}
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
