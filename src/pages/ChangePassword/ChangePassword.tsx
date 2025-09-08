import type { ChangePassInputs } from "@/interfaces/Interfaces";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePassInputs>();
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("token");
  const changePass = async (data: ChangePassInputs) => {
    try {
      await axios.post(
        "https://upskilling-egypt.com:3007/api/auth/change-password",
        data,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );

      toast.success("You successfully  changed your password!");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Change password  failed!");
    }
  };
  return (
    <>
      <div className="text-start mb-4">
        <Typography color="textSecondary" variant="body1">
          Welcome back!
        </Typography>
        <h3 className="fw-bold">Change Your Password Easily</h3>
      </div>
      <Box component="form" onSubmit={handleSubmit(changePass)}>
        <TextField
          type="password"
          id="pass1"
          autoComplete="password"
          label=" Old Password"
          variant="outlined"
          sx={{ width: "100%", marginBottom: "30px" }}
          {...register("password", { required: "password is required" })}
          error={!!errors?.password}
          helperText={errors?.password?.message}
        />

        <TextField
          type="password"
          id="pass2"
          autoComplete="password"
          label="New Password"
          variant="outlined"
          sx={{ width: "100%", marginBottom: "30px" }}
          {...register("password_new", {
            required: "new password is required",
          })}
          error={!!errors?.password_new}
          helperText={errors?.password_new?.message}
        />

        <Stack className="d-flex flex-column" marginY={"20px"}>
          <Button
            type="submit"
            variant="contained"
            className="mb-3 p-2 fs-6 orange-bg"
          >
            Save
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default ChangePassword;
