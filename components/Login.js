import styles from "../styles/Components.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  changeEmailText,
  changePasswordText,
  loginState,
  resetLoginState,
} from "../redux/slices/loginSlice";
import {
  setToken,
  setId,
  setType,
  loginDetailState,
} from "../redux/slices/loginDetailSlice";
import { useRouter } from "next/router";
import { login } from "../constants/urls";

const Login = () => {
  const router = useRouter();
  const { email } = useSelector(loginState);
  const { password } = useSelector(loginState);
  const dispatch = useDispatch();

  const loginUser = async (email, password) => {
    try {
      const res = await axios.post(login, {
        email: email,
        password: password,
      });
      return res;
    } catch (error) {
      return error.response;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const result = await loginUser(email, password);
    console.log(result);

    if (result.status == 200) {
      dispatch(setId(result.data.body.id));
      dispatch(setType(result.data.body.type));
      dispatch(setToken(result.data.body.token));
      dispatch(resetLoginState(""));
      router.push("/");
    } else {
      alert(result.data.message);
      return;
    }
  };

  return (
    <div className={styles.main}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleLogin}
      >
        <div>
          <TextField
            id="email"
            label="Email"
            variant="standard"
            value={email}
            onChange={(e) => dispatch(changeEmailText(e.target.value))}
          />
          <TextField
            id="password"
            label="Password"
            variant="standard"
            type="password"
            value={password}
            onChange={(e) => dispatch(changePasswordText(e.target.value))}
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Login;
