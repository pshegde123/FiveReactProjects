interface FormData {
  id: number;
  taskName: string;
}
interface Props {
  taskCollection: FormData[];
  onClick: (number) => void;
}

const TaskList = ({ taskCollection, onClick }: Props) => {
  return (
    <div
      className="container"
      style={{ width: "40%", marginTop: "20px", marginBottom: "20px" }}
    >
      <h3 className="text-center">Task List</h3>
      <div>
        <ul className="list-group ">
          {taskCollection.map((item, index) => (
            <div className="row m-1">
              <div className="col-6">
                <li key={index}>{item.taskName}</li>
              </div>
              <div className="col-6">
                <button
                  className="btn btn-danger btn-sm float-end"
                  onClick={onClick}
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
