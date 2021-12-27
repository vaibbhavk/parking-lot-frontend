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
  resetSignupState,
} from "../redux/slices/signupSlice";
import { useRouter } from "next/router";
import { signup } from "../constants/urls";
import axios from "axios";

const Signup = () => {
  const { email, password, name, phone, address, type } =
    useSelector(signupState);
  const router = useRouter();

  const dispatch = useDispatch();

  const signupUser = async (email, password, name, phone, address, type) => {
    console.log(email, password, name, phone, address, type);
    try {
      const res = await axios.post(signup, {
        email: email,
        password: password,
        name: name,
        phone: phone,
        address: address,
        type: parseInt(type),
      });
      return res;
    } catch (error) {
      return error.response;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const result = await signupUser(
      email,
      password,
      name,
      phone,
      address,
      type
    );

    if (result.status == 200) {
      dispatch(resetSignupState(""));
      alert(result.data.message);
      router.push("/login");
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
        </div>
      </Box>
    </div>
  );
};

export default Signup;
