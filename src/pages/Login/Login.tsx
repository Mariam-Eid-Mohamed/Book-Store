import {
  Box,
  Checkbox,
  Grid,
  TextField,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import Item from "@mui/material/Grid";
const Login = () => {
  return (
    <>
      <div className="text-start mb-4">
        <Typography variant="body1" color="textSecondary">
          Welcome back!
        </Typography>
        <h3 className="fw-bold">Login to your account</h3>
      </div>
      <Box component="form">
        <TextField
          type="email"
          id="email"
          autoComplete="email"
          label="E-mail"
          variant="outlined"
          sx={{ width: "100%", marginBottom: "30px" }}
        />
        <TextField
          type="password"
          id="email"
          autoComplete="password"
          label="password"
          variant="outlined"
          sx={{ width: "100%" }}
        />
        <Grid container sx={{ justifyContent: "space-between" }}>
          <Item display="flex" alignItems="center">
            <Checkbox color="secondary" />
            <Typography variant="body2" color="secondary">
              Remember me
            </Typography>
          </Item>

          <Item
            // onClick={() => navigate("/forgot")}
            display="flex"
            alignItems="center"
            sx={{ cursor: "pointer" }}
          >
            <Typography variant="body2" color="secondary">
              Forgot password?
            </Typography>
          </Item>
        </Grid>

        <Stack className="d-flex flex-column" marginY={"20px"}>
          <Button
            type="submit"
            variant="contained"
            className="mb-3 p-2 fs-6 orange-bg"
          >
            Login
          </Button>
          <Button variant="outlined" color="secondary" className="p-2 fs-6">
            Register
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Login;
