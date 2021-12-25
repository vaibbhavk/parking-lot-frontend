import styles from "../styles/Components.module.css";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  return (
    <div className={styles.main}>
      Login to Parking Lot System&nbsp;
      <Button variant="contained" onClick={() => router.push("/login")}>
        Login
      </Button>
    </div>
  );
};

export default Hero;
