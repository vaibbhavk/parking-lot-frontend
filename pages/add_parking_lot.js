import styles from "../styles/Home.module.css";
import ParkingLotForm from "../components/ParkingLotForm";

export default function add_parking_lot() {
  return (
    <div className={styles.container}>
      <ParkingLotForm />
    </div>
  );
}
