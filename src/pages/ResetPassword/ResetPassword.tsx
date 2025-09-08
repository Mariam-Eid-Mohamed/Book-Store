import type { ResetInputs } from "@/interfaces/Interfaces";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Item from "@mui/material/Grid";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetInputs>();
  const navigate = useNavigate();
  const resetPass = async (data: ResetInputs) => {
    try {
      await axios.post(
        "https://upskilling-egypt.com:3007/api/auth/reset-password",
        data
      );
      console.log(data);
      toast.success("You can change your password now!");
      navigate("/change-Password");
    } catch (error) {
      console.log(error);
      toast.error("Reset failed!");
      console.log(data);
    }
  };
  return (
    <>
      <div className="text-start mb-4">
        <Typography color="textSecondary" variant="body1">
          Welcome back!
        </Typography>
        <h3 className="fw-bold">Reset Your Password Now !</h3>
      </div>
      <Box component="form" onSubmit={handleSubmit(resetPass)}>
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
          type="string"
          id="otp"
          autoComplete="otp"
          label="OTP"
          variant="outlined"
          sx={{ width: "100%", marginBottom: "30px" }}
          {...register("otp", { required: "otp is required" })}
          error={!!errors?.otp}
          helperText={errors?.otp?.message}
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
        </Grid>
        <Stack className="d-flex flex-column" marginY={"20px"}>
          <Button
            type="submit"
            variant="contained"
            className="mb-3 p-2 fs-6 orange-bg"
          >
            Send
          </Button>
          <Button
            onClick={() => navigate("/login")}
            variant="outlined"
            color="secondary"
            className="p-2 fs-6"
          >
            Login
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default ResetPassword;
