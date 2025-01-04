import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Typography } from "@mui/material";
import { credentials } from "../constants/mockCredentials";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      if (
        values.username === credentials.username &&
        values.password === credentials.password
      ) {
        localStorage.setItem("session", JSON.stringify(values));
        navigate("/invoice-form/main");
      } else {
        setError("Invalid username or password");
      }
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          maxWidth: 300,
          width: "100%",
          padding: 3,
          //   boxShadow: 3,
          //   borderRadius: 2,
          //   backgroundColor: "#fff",
        }}
      >
        <Typography variant="h6" textAlign="center" mb={2}>
          Login to Invoice Form
        </Typography>
        {error && (
          <Typography color="error" textAlign="center" mb={2}>
            {error}
          </Typography>
        )}
        <TextField
          fullWidth
          label="Username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          margin="normal"
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
