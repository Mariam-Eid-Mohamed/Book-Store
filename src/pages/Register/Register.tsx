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

const Register = () => {
  return (
    <>
      <div className="text-start mb-4">
        <Typography color="textSecondary" variant="body1">
          Create new acccount
        </Typography>
        <h3 className="fw-bold">Register</h3>
      </div>
      <Box component="form">
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
          />
          <TextField
            id="lastName"
            label="Last Name *"
            variant="outlined"
            type="string"
            autoComplete="firstName"
          />
        </Grid>
        <TextField
          type="email"
          id="email"
          autoComplete="email"
          label="E-mail"
          variant="outlined"
          sx={{ width: "100%", marginBottom: "30px" }}
          // {...register("email", { required: "email is required" })}
          // error={!!errors?.email}
          // helperText={errors?.email?.message}
        />

        <TextField
          type="password"
          id="email"
          autoComplete="password"
          label="password"
          variant="outlined"
          sx={{ width: "100%", marginBottom: "30px" }}
          // {...register("password", { required: "password is required" })}
          // error={!!errors?.password}
          // helperText={errors?.email?.message}
        />
        <FormControl fullWidth>
          <InputLabel>Role</InputLabel>
          <Select
            // value={role}
            label="Role"
            // onChange={handleChange}
          >
            <MenuItem disabled value={"Admin"}>
              Admin
            </MenuItem>
            <MenuItem value={"Customer"}>Customer</MenuItem>
          </Select>
        </FormControl>
        <Stack className="d-flex flex-column" marginY={"20px"}>
          <Button
            type="submit"
            variant="contained"
            className="mb-3 p-2 fs-6 orange-bg"
          >
            Register
          </Button>
          <Button variant="outlined" color="secondary" className="p-2 fs-6">
            Login
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Register;
