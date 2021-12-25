import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";

const Navbar = () => {
  const router = useRouter();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ background: "#212121" }}>
        <Toolbar>
          <Image
            onClick={() => router.push("/")}
            placeholder="blur"
            blurDataURL="https://firebasestorage.googleapis.com/v0/b/fir-9-a4513.appspot.com/o/logo.png?alt=media&token=d860311e-bd40-4409-844d-53f060e74c16"
            width="100%"
            height={75}
            src="https://firebasestorage.googleapis.com/v0/b/fir-9-a4513.appspot.com/o/logo.png?alt=media&token=d860311e-bd40-4409-844d-53f060e74c16"
          />
          <Typography component="div" sx={{ flexGrow: 1 }}></Typography>

          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
