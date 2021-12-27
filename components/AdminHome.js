import { useSelector } from "react-redux";
import { loginDetailState } from "../redux/slices/loginDetailSlice";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import axios from "axios";
import { get_all_parking_lots_by_admin_user_id } from "../constants/urls";
import Grid from "@mui/material/Grid";
import styles from "../styles/Components.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import Head from "next/head";
import { useRouter } from "next/router";

const AdminHome = () => {
  const { id } = useSelector(loginDetailState);
  const [parkingLotList, setParkingLotList] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const getParkingLotListByAdminId = async () => {
    try {
      const res = await axios.get(
        `${get_all_parking_lots_by_admin_user_id}${id}`
      );
      return res;
    } catch (error) {
      return error.response;
    }
  };

  const executeRequest = async () => {
    setLoading(true);
    const result = await getParkingLotListByAdminId();

    if (result) setLoading(false);

    if (result.status == 200) {
      if (result.data.body.length > 0) {
        setParkingLotList(result.data.body);
      }
    } else {
      alert(result.data.message);
      return;
    }
  };

  useEffect(() => {
    executeRequest();
  }, []);

  const add = (
    <Grid item xs={4}>
      <Card sx={{ minWidth: 275 }} variant="outlined">
        <CardContent>
          <Typography variant="h6">Add a parking lot.</Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            onClick={() => router.push("/add_parking_lot")}
          >
            Add
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );

  return (
    <div className={styles.main}>
      <Head>
        <title>Admin - Home</title>
      </Head>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          {parkingLotList ? (
            <Grid container spacing={4}>
              {parkingLotList.map((parkingLot) => (
                <Grid item xs={4}>
                  <Card sx={{ minWidth: 275 }} variant="outlined">
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Id:&nbsp;{parkingLot.id}
                      </Typography>
                      <Typography variant="h6" component="div">
                        Name:&nbsp;{parkingLot.name}
                      </Typography>
                      <br />
                      <Typography variant="body2">
                        Address:&nbsp;
                        {`${parkingLot.parking_lot_address.street}, ${parkingLot.parking_lot_address.city}, ${parkingLot.parking_lot_address.state}, ${parkingLot.parking_lot_address.country} - ${parkingLot.parking_lot_address.zipcode}`}
                        <br />
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" variant="contained">
                        Manage
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
              {add}
            </Grid>
          ) : (
            <Grid container spacing={4}>
              {add}
            </Grid>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminHome;
