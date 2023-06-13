import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import apiClient from "../services/apiClient";

const schema = z.object({
  title: z
    .string({ invalid_type_error: "Only string allowed" })
    .min(3, { message: "Title must be 3 atleast character long" })
    .max(30, { message: "Maximum 30 character title allowed." }),
});

type FormData = z.infer<typeof schema>;

const TodoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Add Todo
            </label>
            <input
              {...register("title")}
              id="title"
              type="text"
              className="form-control"
            />
            {errors.title && (
              <p className="text-danger">{errors.title.message}</p>
            )}
          </div>
          <button className="btn btn-primary">Add</button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
