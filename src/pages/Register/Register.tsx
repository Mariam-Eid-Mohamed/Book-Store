import type { RegisterInputs } from "@/interfaces/Interfaces";
import {
  Box,
  Typography,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Button,
} from "@mui/material";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<RegisterInputs>();
  const Regsubmit = async (data: RegisterInputs) => {
    try {
      await axios.post(
        "https://upskilling-egypt.com:3007/api/auth/register",
        data
      );
      toast.success("Registered succesfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Register failed!");
      console.log(data);
    }
  };
  return (
    <>
      <div className="text-start mb-4">
        <Typography color="textSecondary" variant="body1">
          Create new acccount
        </Typography>
        <h3 className="fw-bold">Register</h3>
      </div>
      <Box component="form" onSubmit={handleSubmit(Regsubmit)}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
            gap: "20px",
          }}
        >
          <TextField
            id="firstName"
            label="First Name *"
            variant="outlined"
            type="string"
            autoComplete="firstName"
            {...register("first_name", { required: "first name  is required" })}
            error={!!errors?.first_name}
            helperText={errors?.first_name?.message}
          />
          <TextField
            id="lastName"
            label="Last Name *"
            variant="outlined"
            type="string"
            autoComplete="firstName"
            {...register("last_name", { required: "last name  is required" })}
            error={!!errors?.last_name}
            helperText={errors?.last_name?.message}
          />
        </Grid>
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
          sx={{ width: "100%", marginBottom: "30px" }}
          {...register("password", { required: "password is required" })}
          error={!!errors?.password}
          helperText={errors?.password?.message}
        />

        <Controller
          name="role"
          defaultValue=""
          control={control}
          rules={{ required: "role is required !" }}
          render={({ field }) => (
            <FormControl fullWidth error={!!errors.role}>
              <InputLabel>Role *</InputLabel>
              <Select {...field} label="Role *" defaultValue="">
                <MenuItem disabled value={"Admin"}>
                  Admin
                </MenuItem>
                <MenuItem value={"Customer"}>Customer</MenuItem>
              </Select>
              {errors.role && (
                <Typography variant="caption" color="error">
                  {errors.role.message}
                </Typography>
              )}
            </FormControl>
          )}
        />
        <Stack className="d-flex flex-column" marginY={"20px"}>
          <Button
            type="submit"
            variant="contained"
            className="mb-3 p-2 fs-6 orange-bg"
          >
            Register
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

export default Register;
