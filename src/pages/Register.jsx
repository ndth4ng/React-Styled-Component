import styled from "styled-components";
import { mobile } from "../responsive";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../utils/validation";
import { registerUser } from "../redux/userRedux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched", resolver: yupResolver(registerSchema) });

  const onSubmit = (formData) => {
    const { confirmPassword, ...registerData } = formData;
    dispatch(registerUser(registerData));
  };
  return (
    <Container>
      <div className="w-[90%] md:w-1/3 xl:w-1/4  bg-white p-4">
        <h1 className="text-xl mb-4">CREATE AN ACCOUNT</h1>
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
          <Agreement>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-base font-semibold text-teal-700 underline"
            >
              LOGIN
            </Link>
          </Agreement>

          <button
            className="bg-teal-700 text-white w-2/4 py-3 px-2 mx-auto"
            type="submit"
          >
            CREATE
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Register;
