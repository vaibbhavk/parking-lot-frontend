import styles from "../styles/Components.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  changeEmailText,
  changePasswordText,
  signupState,
} from "../redux/slices/signupSlice";

const Signup = () => {
  const { email } = useSelector(signupState);
  const { password } = useSelector(signupState);
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
          type="email"
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

export default Signup;
