import styles from "../styles/Components.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  changeEmailText,
  changePasswordText,
  loginState,
} from "../redux/slices/loginSlice";

const Login = () => {
  const { email } = useSelector(loginState);
  const { password } = useSelector(loginState);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("values: ", email, password);
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
      </Box>
    </div>
  );
};

export default Login;
