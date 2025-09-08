import {
  Box,
  Checkbox,
  Grid,
  TextField,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { useForm } from "react-hook-form";
import Item from "@mui/material/Grid";
import type { LoginInputs } from "@/interfaces/Interfaces";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();
  const navigate = useNavigate();
  const profileData = JSON.parse(String(localStorage.getItem("profile")));
  const login = async (data: LoginInputs) => {
    try {
      const response = await axios.post(
        "https://upskilling-egypt.com:3007/api/auth/login",
        data
      );
      console.log(response);
      localStorage.setItem("token", response?.data?.data?.accessToken);
      localStorage.setItem(
        "profile",
        JSON.stringify(response?.data?.data?.profile)
      );
      toast.success(`Welcome to the Book Store , ${profileData?.first_name}`);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Login Failed !");
    }
  };
  return (
    <>
      <div className="text-start mb-4">
        <Typography variant="body1" color="textSecondary">
          Welcome back!
        </Typography>
        <h3 className="fw-bold">Login to your account</h3>
      </div>
      <Box component="form" onSubmit={handleSubmit(login)}>
        <TextField
          type="email"
          id="email"
          autoComplete="email"
          label="E-mail"
          variant="outlined"
          sx={{ width: "100%", marginBottom: "30px" }}
          {...register("email", { required: "email is required" })}
          error={!!errors?.email}
          helperText={errors?.email?.message}
        />

        <TextField
          type="password"
          id="email"
          autoComplete="password"
          label="password"
          variant="outlined"
          sx={{ width: "100%" }}
          {...register("password", { required: "password is required" })}
          error={!!errors?.password}
          helperText={errors?.password?.message}
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
          <Button
            onClick={() => navigate("/register")}
            variant="outlined"
            color="secondary"
            className="p-2 fs-6"
          >
            Register
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Login;
