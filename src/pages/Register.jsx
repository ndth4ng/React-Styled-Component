import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../utils/validation";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { useRegisterMutation } from "../services/user";

// import { toast } from "react-toastify";
import { registerUser } from "../redux/userRedux";

const Register = () => {
  // hook
  // const [registerApi, { isLoading, isError, error }] = useRegisterMutation();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched", resolver: yupResolver(registerSchema) });

  const onSubmit = (formData) => {
    const { confirmPassword, ...registerData } = formData;
    // registerApi(registerData);
    dispatch(registerUser(registerData));
  };

  // if (isError) {
  //   toast.error(error.data.msg, {
  //     position: "bottom-center",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-teal-700">
      <div className="w-[90%] md:w-1/3 xl:w-1/4  bg-white p-4">
        <h1 className="mb-4 text-xl">CREATE AN ACCOUNT</h1>
        <form
          className="flex flex-col space-y-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <input
              className="input"
              name="firstName"
              type="text"
              placeholder="first name"
              {...register("firstName")}
            />
            <span
              className={`input-error ${errors.firstName ? "block" : "hidden"}`}
            >
              {errors.firstName?.message}
            </span>
          </div>

          <div>
            <input
              className="input"
              name="lastName"
              type="text"
              placeholder="last name"
              {...register("lastName")}
            />
            <span
              className={`input-error ${errors.lastName ? "block" : "hidden"}`}
            >
              {errors.lastName?.message}
            </span>
          </div>

          <div>
            <input
              className="input"
              name="email"
              type="email"
              placeholder="email"
              {...register("email")}
            />
            <span
              className={`input-error ${errors.email ? "block" : "hidden"}`}
            >
              {errors.email?.message}
            </span>
          </div>

          <div>
            <input
              className="input"
              name="password"
              type="password"
              placeholder="password"
              {...register("password")}
            />
            <span
              className={`input-error ${errors.password ? "block" : "hidden"}`}
            >
              {errors.password?.message}
            </span>
          </div>
          <div>
            <input
              className="input"
              name="confirmPassword"
              type="password"
              placeholder="confirm password"
              {...register("confirmPassword")}
            />
            <span
              className={`input-error ${
                errors.confirmPassword ? "block" : "hidden"
              }`}
            >
              {errors.confirmPassword?.message}
            </span>
          </div>
          <div>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-base font-semibold text-teal-700 underline"
            >
              LOGIN
            </Link>
          </div>

          <button
            className="w-2/4 px-2 py-3 mx-auto text-white bg-teal-700"
            type="submit"
          >
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
