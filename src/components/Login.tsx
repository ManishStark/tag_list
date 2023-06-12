import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email.." }),
  password: z
    .string()
    .min(5, { message: "Password must be 5 character long." })
    .max(55, { message: "Password must be below 55 character" }),
});
type FormDate = z.infer<typeof schema>;
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDate>({ resolver: zodResolver(schema) });

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <form
          action=""
          className="form"
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email :
            </label>
            <input
              {...register("email")}
              id="email"
              type="text"
              className="form-control "
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password :
            </label>
            <input
              {...register("password")}
              id="password"
              type="text"
              className="form-control "
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </div>
          <button className="btn btn-primary  mt-3">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
