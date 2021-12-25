import styles from "../styles/Components.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  changeEmailText,
  changePasswordText,
  changeNameText,
  changePhoneText,
  changeAddressText,
  changeTypeText,
  signupState,
} from "../redux/slices/signupSlice";

const Signup = () => {
  const { email, password, name, phone, address, type } =
    useSelector(signupState);

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("values: ", email, password, name, phone, address, type);
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
        <TextField
          id="name"
          label="Name"
          variant="standard"
          value={name}
          onChange={(e) => dispatch(changeNameText(e.target.value))}
        />
        <TextField
          id="phone"
          label="Phone"
          variant="standard"
          value={phone}
          onChange={(e) => dispatch(changePhoneText(e.target.value))}
        />
        <TextField
          id="address"
          label="Address"
          variant="standard"
          value={address}
          onChange={(e) => dispatch(changeAddressText(e.target.value))}
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">User type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="User type"
            onChange={(e) => dispatch(changeTypeText(e.target.value))}
          >
            <MenuItem value={0}>Admin</MenuItem>
            <MenuItem value={1}>Attendant</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" type="submit">
          Signup
        </Button>
      </Box>
    </div>
  );
};

export default Signup;
