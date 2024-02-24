import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { useAppDispatch } from "@/redux/hook";
import { addTodo } from "@/redux/features/todoSlice";
import { useAddTodoMutation } from "@/redux/api/api";

const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  //for local state
  // const dispatch = useAppDispatch();

  //for server
  const [addTodo, { isLoading, isError, isSuccess }] = useAddTodoMutation();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error...</p>;
  }
  if (isSuccess) {
    return <p>Success...</p>;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const taskDetails = {
      title: task,
      priority: priority,
      description: description,
    };

    //for local state
    // dispatch(addTodo(taskDetails));

    //for server
    addTodo(taskDetails);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-gray-600 px-4 py-2 rounded-lg text-white text-xl"
        >
          Add Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>Add task you want to do.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                className="col-span-3"
                onChange={(e) => setTask(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="priority" className="text-right">
                Priority
              </Label>
              <Input
                id="priority"
                className="col-span-3"
                onChange={(e) => setPriority(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="taskDescription" className="text-right">
                Description
              </Label>
              <Textarea
                id="taskDescription"
                placeholder="Type your message here."
                className="col-span-3"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
