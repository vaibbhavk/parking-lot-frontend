import styles from "../styles/Components.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  changeStreetText,
  changeCityText,
  changeStateText,
  changeZipcodeText,
  changeCountryText,
  parkingLotState,
} from "../redux/slices/parkingLotSlice";
import { useState } from "react";

const ParkingAddressForm = () => {
  const { name, street, city, state, zipcode, country, addressId } =
    useSelector(parkingLotState);
  const dispatch = useDispatch();
  const [parkingLotAddressList, setParkingLotAddressList] = useState(null);

  const handleAddParkingLot = (e) => {
    e.preventDefault();
    console.log(name, street, city, state, zipcode, country);
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
        onSubmit={handleAddParkingLot}
      >
        <div>
         
        </div>
      </Box>
    </div>
  );
};

export default ParkingAddressForm;
