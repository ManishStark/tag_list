import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const schema = z.object({
  name: z
    .string()
    .min(5, { message: "Name must be 5 characters long" })
    .max(20, { message: "Name must be less than 55 characters" }),
  email: z.string().email({ message: "Please enter valid Email" }),
  password: z
    .string()
    .min(5, { message: "Password must be 5 character long" })
    .max(55, { message: "Password must be less than 55 character" }),
  rePassword: z
    .string()
    .min(5, { message: "Re-Password must be 5 character long" })
    .max(55, { message: "Re-Password must be less than 55 character" }),
});
type FormData = z.infer<typeof schema>;
const onSubmit = (data: FormData) => {
  console.log(data);
};
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center">
        <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              {...register("name")}
              id="name"
              type="text"
              className="form-control"
            />
            {errors.name && (
              <p className="text-danger border border-1">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              {...register("email")}
              id="email"
              type="email"
              className="form-control"
            />
            {errors.email && (
              <p className="text-danger ">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              {...register("password")}
              id="password"
              type="password"
              className="form-control"
            />
            {errors.password && (
              <p className="text-danger ">{errors.password.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="rePassword" className="form-label">
              Re-Password
            </label>
            <input
              {...register("rePassword")}
              id="rePassword"
              type="password"
              className="form-control"
            />
            {errors.rePassword && (
              <p className="text-danger ">{errors.rePassword.message}</p>
            )}
          </div>
          <button className="btn btn-info text-white">SignUp</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
