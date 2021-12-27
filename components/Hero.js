import styles from "../styles/Components.module.css";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { loginDetailState } from "../redux/slices/loginDetailSlice";
import AdminHome from "./AdminHome";
import AttendantHome from "./AttendantHome";

const Hero = () => {
  const router = useRouter();
  const { token, type } = useSelector(loginDetailState);
  return (
    <div className={styles.main}>
      {!token ? (
        <div>
          <Button variant="contained" onClick={() => router.push("/login")}>
            Login
          </Button>
          &nbsp;to Parking Lot System
        </div>
      ) : (
        <div>{type == 0 ? <AdminHome /> : <AttendantHome />}</div>
      )}
    </div>
  );
};

export default Hero;
