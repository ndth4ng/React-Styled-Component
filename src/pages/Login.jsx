import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";

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

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;

  ${mobile({
    width: "75%",
  })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;

  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const LinkTo = styled.a`
  margin: 5px 0;
  font-size: 16px;
  text-decoration: underline;
  color: inherit;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuthenticated, isFetching, error } = useSelector(
    (state) => state.user
  );

  const location = useLocation();
  const navigate = useNavigate();

  const path = location.state?.path;

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  useEffect(() => {
    if (isAuthenticated) {
      if (path) {
        navigate(path);
      } else {
        navigate("/");
      }
    }
  }, [isAuthenticated, path, navigate]);
  return (
    <Container>
      <div className="w-[90%] md:w-1/3 xl:w-1/4  bg-white p-4">
        <h1 className="text-xl mb-4">SIGN IN</h1>
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
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="bg-teal-700 text-white w-2/4 py-3 px-2 mx-auto"
            onClick={handleClick}
            disabled={isFetching}
          >
            LOGIN
          </button>
          {error && <Error>Something went wrong...</Error>}
          <span className="underline">DO NOT REMEMBER YOUR PASSWORD?</span>
          <Link to="/register" className="text-inherit underline">
            CREATE NEW ACCOUNT
          </Link>
        </form>
      </div>
    </Container>
  );
};

export default Login;
