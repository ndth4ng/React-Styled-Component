import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { useLoginMutation } from "../services/user";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.wallpaperup.com/uploads/wallpapers/2013/06/12/101508/1a879ef3a8a568ded06046905e35c693.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthenticated } = useSelector((state) => state.user);

  const [login, { isLoading, error }] = useLoginMutation();

  const location = useLocation();
  const path = location.state;
  console.log(path);

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  useEffect(() => {
    if (isAuthenticated) {
      if (path) {
        navigate(`/${path}`);
      } else {
        navigate("/");
      }
    }
  }, [isAuthenticated, path, navigate]);

  return (
    <Container>
      <div className="w-[90%] md:w-1/3 xl:w-1/4  bg-white p-4">
        <h1 className="mb-4 text-xl">SIGN IN</h1>
        <form className="flex flex-col space-y-3">
          <input
            className="input"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            placeholder="password"
            type="password"
            autoComplete="on"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="w-2/4 px-2 py-3 mx-auto text-white bg-teal-700"
            onClick={handleClick}
            disabled={isLoading}
          >
            LOGIN
          </button>
          {error && <Error>Something went wrong...</Error>}
          <span className="underline">DO NOT REMEMBER YOUR PASSWORD?</span>
          <Link to="/register" className="underline text-inherit">
            CREATE NEW ACCOUNT
          </Link>
        </form>
      </div>
    </Container>
  );
};

export default Login;
