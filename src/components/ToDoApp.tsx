import { useState } from "react";
import { v4 as uuid } from "uuid";
import ToDoAppForm from "./ToDoAppForm";
import TaskList from "./TaskList";

interface FormData {
  id: number;
  taskName: string;
}
const ToDoApp = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaksList] = useState<FormData[]>([]);
  const [isListEmpty, setIsListEmpty] = useState(true);

  const handleChange = (e) => {
    console.log("handle change...");
    setTask(e.target.value);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 8);
    //console.log("Submit");
    //console.log(task);
    setTaksList([...taskList, { id: small_id, taskName: task }]);
    //console.log("event.target.value = ", event.target.value);
    //inputRef.current.value = "";
    setIsListEmpty(false);
  };

  const removeTask = (index) => {
    const newTasks = [...taskList];
    newTasks.splice(index, 1);
    setTaksList(newTasks);
  };

  return (
    <div>
      <h1 className="text-center">ToDo App</h1>
      <ToDoAppForm
        onChange={(e) => handleChange(e)}
        onSubmit={(e) => handleSubmit(e)}
      />
      <div>
        {!isListEmpty && (
          <TaskList taskCollection={taskList} onClick={removeTask} />
        )}
      </div>
    </div>
  );
};

export default ToDoApp;
