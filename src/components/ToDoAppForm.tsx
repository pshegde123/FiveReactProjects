import { FormEvent, useRef } from "react";
import { useForm } from "react-hook-form";

interface Props {
  onChange: (e) => void;
  onSubmit: (e: any) => void;
}
const ToDoAppForm = ({ onChange, onSubmit }: Props) => {
  const { register, reset } = useForm();

  return (
    <div>
      <div className="container mt-4">
        <div className="d-flex justify-content-center">
          <form
            onSubmit={(e) => {
              onSubmit(e);
              reset();
            }}
          >
            <input
              {...register("searchbar")}
              type="text"
              className="form-control"
              id="searchbar"
              placeholder="type something here.."
              required={true}
              onChange={(e) => onChange(e)}
            />
            <button type="submit" className="btn btn-primary m-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ToDoAppForm;
