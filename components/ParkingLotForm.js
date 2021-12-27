import Head from "next/head";
import styles from "../styles/Components.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import axios from "axios";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useRouter } from "next/router";
import {
  changeNameText,
  changeStreetText,
  changeCityText,
  changeStateText,
  changeZipcodeText,
  changeCountryText,
  changeAddressId,
  parkingLotState,
  resetParkingLotState,
} from "../redux/slices/parkingLotSlice";
import { useState, useEffect } from "react";
import {
  get_all_parking_lot_addresses,
  add_parking_lot_address,
  add_parking_lot,
} from "../constants/urls";

const ParkingLotForm = () => {
  const router = useRouter();
  const { name, street, city, state, zipcode, country, addressId } =
    useSelector(parkingLotState);
  const dispatch = useDispatch();
  const [parkingLotAddressList, setParkingLotAddressList] = useState(null);
  const [switched, setSwitched] = useState(false);

  const addParkingLot = async () => {
    console.log(name, addressId);
    try {
      const res = await axios.post(add_parking_lot, {
        name: name,
        parkingLotAddressId: parseInt(addressId),
      });
      return res;
    } catch (error) {
      return error.response;
    }
  };

  const handleAddParkingLot = async (e) => {
    e.preventDefault();
    console.log(name, street, city, state, zipcode, country);
    const result = await addParkingLot();

    if (result.status == 200) {
      alert(result.data.message);
      dispatch(resetParkingLotState(""));
      router.push("/");
      return;
    } else {
      alert(result.data.message);
      return;
    }
  };

  const addParkingLotAddress = async () => {
    try {
      const res = await axios.post(add_parking_lot_address, {
        street: street,
        city: city,
        state: state,
        zipcode: zipcode,
        country: country,
      });
      return res;
    } catch (error) {
      return error.response;
    }
  };

  const handleAddParkingLotAddress = async (e) => {
    e.preventDefault();

    const result = await addParkingLotAddress();
    console.log(result);

    if (result.status == 200) {
      alert(result.data.message);
      executeRequest();
      return;
    } else {
      alert(result.data.message);
      return;
    }
  };

  const getParkingLotAddressList = async () => {
    try {
      const res = await axios.get(get_all_parking_lot_addresses);
      return res;
    } catch (error) {
      return error.response;
    }
  };

  const executeRequest = async () => {
    const result = await getParkingLotAddressList();

    if (result.status == 200) {
      setParkingLotAddressList(result.data.body);
    } else {
      alert(result.data.message);
      return;
    }
  };

  useEffect(() => {
    executeRequest();
  }, []);
  return (
    <div className={styles.main}>
      <Head>
        <title>Admin - Add parking lot</title>
      </Head>
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleAddParkingLot}
          >
            <TextField
              id="name"
              label="Name"
              variant="standard"
              value={name}
              onChange={(e) => dispatch(changeNameText(e.target.value))}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Address</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={addressId}
                label="Address"
                onChange={(e) => dispatch(changeAddressId(e.target.value))}
              >
                {parkingLotAddressList ? (
                  parkingLotAddressList.map((a) => (
                    <MenuItem
                      value={a.id}
                    >{`${a.street}, ${a.city}, ${a.state}, ${a.country} - ${a.zipcode}`}</MenuItem>
                  ))
                ) : (
                  <MenuItem value="">No addresses</MenuItem>
                )}
              </Select>
            </FormControl>
            <Button variant="contained" type="submit">
              Add
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <FormGroup>
            <FormControlLabel
              control={<Switch />}
              label="Add an address"
              onChange={(e) => setSwitched(e.target.checked)}
            />
          </FormGroup>

          {switched && (
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleAddParkingLotAddress}
            >
              <TextField
                id="street"
                label="Street"
                variant="standard"
                value={street}
                onChange={(e) => dispatch(changeStreetText(e.target.value))}
              />
              <TextField
                id="city"
                label="City"
                variant="standard"
                value={city}
                onChange={(e) => dispatch(changeCityText(e.target.value))}
              />
              <TextField
                id="state"
                label="State"
                variant="standard"
                value={state}
                onChange={(e) => dispatch(changeStateText(e.target.value))}
              />
              <TextField
                id="zipcde"
                label="Zipcode"
                variant="standard"
                value={zipcode}
                onChange={(e) => dispatch(changeZipcodeText(e.target.value))}
              />{" "}
              <TextField
                id="country"
                label="Country"
                variant="standard"
                value={country}
                onChange={(e) => dispatch(changeCountryText(e.target.value))}
              />
              <Button variant="contained" type="submit">
                Add Address
              </Button>
            </Box>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default ParkingLotForm;
