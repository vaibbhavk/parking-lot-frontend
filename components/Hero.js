import styles from "../styles/Components.module.css";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { tokenState } from "../redux/slices/tokenSlice";

const Hero = () => {
  const router = useRouter();
  const { token } = useSelector(tokenState);
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
        <div>
          <h1>Start working!</h1>
        </div>
      )}
    </div>
  );
};

export default Hero;
