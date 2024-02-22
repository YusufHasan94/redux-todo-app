const TodoCard = () => {
  return (
    <div className="p-2 my-2 border-[1px] border-gray-500 rounded-md">
      <div className="flex justify-between text-lg">
        <input type="checkbox" name="" id="" />
        <h1>Title</h1>
        <h1>Status</h1>
        <h1>Time</h1>
        <p>Description</p>
        <div className="text-white flex gap-2">
          <button className="bg-red-500 px-4 py-1 rounded">Delete</button>
          <button className="bg-blue-500 px-4 py-1 rounded">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
