import React from 'react'
import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from 'react-router-dom'


export const Register = () => {

    const registerValidationSchema = yup.object({
        username: yup.string().required(),
        email: yup.string().required().email(),
        password: yup.string().required().min(8)
      });
    
      const formik = useFormik({
        initialValues: {
          username: "",
          email: "",
          password: ""
        },
        validationSchema: registerValidationSchema,
        onSubmit: (values) => {
          console.log(values);
        },
      });
  return (
    <form className="Addmovie" onSubmit={formik.handleSubmit}>
    <h1>Register</h1>
    <TextField
      id="outlined-basic"
      label="Username"
      variant="outlined"
      className="text"
      value={formik.values.username}
      onChange={formik.handleChange}
      name="username"
      onBlur={formik.handleBlur}
      error={formik.touched.username && formik.errors.username}
      helperText={
        formik.touched.username && formik.errors.username ? formik.errors.username : null
      }
    />
    <TextField
      id="outlined-basic"
      label="Email id"
      variant="outlined"
      className="text"
      value={formik.values.email}
      onChange={formik.handleChange}
      name="email"
      onBlur={formik.handleBlur}
      error={formik.touched.email && formik.errors.email}
      helperText={
        formik.touched.email && formik.errors.email
          ? formik.errors.email
          : null
      }
    />
    <TextField
      id="outlined-basic"
      label="Password"
      variant="outlined"
      className="text"
      value={formik.values.password}
      onChange={formik.handleChange}
      name="password"
      onBlur={formik.handleBlur}
      error={formik.touched.password && formik.errors.password}
      helperText={
        formik.touched.password && formik.errors.password
          ? formik.errors.password
          : null
      }
    />
    <Button variant="contained" type="submit">
        Register
      </Button>

      <h3>Already have an Account <Link to="/portal/login">Login</Link></h3>
    

    </form>
  );
}
