import type { ForgetInputs } from "@/interfaces/Interfaces";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgetInputs>();
  const ForgetPass = async (data: ForgetInputs) => {
    try {
      await axios.post(
        "https://upskilling-egypt.com:3007/api/auth/forgot-password",
        data
      );
      toast.success("we have sent you an OTP");
      navigate("/reset-password");
    } catch (error) {
      console.log(error);
      toast.error("Wrong emil!");
    }
  };
  return (
    <>
      <div className="text-start mb-4">
        <Typography color="textSecondary" variant="body1">
          Welcome back!
        </Typography>
        <h3 className="fw-bold">Forget Password !!</h3>
      </div>
      <Box component="form" onSubmit={handleSubmit(ForgetPass)}>
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

        <Stack className="d-flex flex-column" marginY={"20px"}>
          <Button
            type="submit"
            variant="outlined"
            className="mb-3 p-2 fs-6 "
            color="secondary"
          >
            Send
          </Button>
        </Stack>
      </Box>
    </>
  );
};
export default ForgetPassword;
