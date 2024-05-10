import React from 'react'
import { useParams , useNavigate} from 'react-router-dom'
import { useEffect,useState } from 'react';
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@mui/material";

export const EditMovie = () => {
  const {id}=useParams()
  console.log(id)
  const[movie,setMovie]=useState([]);
  const[show,setShow]=useState(false)

  useEffect(()=>{
    fetch(`https://65f16b87034bdbecc76270c5.mockapi.io/movie/${id}`,{
    method: "GET"})
    .then((data)=> data.json())
    .then((mv)=> setMovie(mv))
    .then(()=>setShow(true))
}, [])


  return (
    
      <div>
        {show ? <EditForm movie={movie}/>: "Loading..."}
     </div>
  );
}

function EditForm({movie}){

    const movieValidationSchema = yup.object({
    name: yup.string().required(),
    poster: yup.string().required().min(10).url(),
    trailer: yup.string().required().min(10).url(),
    rating: yup.number().required().min(0).max(10),
    summary: yup.string().required().min(20),
  });
const navigate = useNavigate()


const formik = useFormik({
  initialValues: {
    name: movie.name,
    poster: movie.poster,
    trailer: movie.trailer,
    rating: movie.rating,
    summary: movie.summary,
  },
 

  validationSchema: movieValidationSchema,
  onSubmit: (values) => {
    editmovie(values);
  },
});
 const editmovie =(values)=>{
    fetch(`https://65f16b87034bdbecc76270c5.mockapi.io/movie/${movie.id}`,{
      method:"PUT",
      body: JSON.stringify(values),
      headers: {"Content-type": "application/json"},
    }).then(()=> navigate("/portal/home"));
  }

  return(
    
    <form className="Addmovie" onSubmit={formik.handleSubmit}>
      <h1>Edit movie</h1>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        className="text"
        value={formik.values.name}
        onChange={formik.handleChange}
        name="name"
        onBlur={formik.handleBlur}
        error={formik.touched.name && formik.errors.name}
        helperText={
          formik.touched.name && formik.errors.name ? formik.errors.name : null
        }
      />
      <TextField
        id="outlined-basic"
        label="Poster"
        variant="outlined"
        className="text"
        value={formik.values.poster}
        onChange={formik.handleChange}
        name="poster"
        onBlur={formik.handleBlur}
        error={formik.touched.poster && formik.errors.poster}
        helperText={
          formik.touched.poster && formik.errors.poster
            ? formik.errors.poster
            : null
        }
      />
      <TextField
        id="outlined-basic"
        label="Trailer"
        variant="outlined"
        className="text"
        value={formik.values.trailer}
        onChange={formik.handleChange}
        name="trailer"
        onBlur={formik.handleBlur}
        error={formik.touched.trailer && formik.errors.trailer}
        helperText={
          formik.touched.trailer && formik.errors.trailer
            ? formik.errors.trailer
            : null
        }
      />
      <TextField
        id="outlined-basic"
        label="Rating"
        variant="outlined"
        className="text"
        value={formik.values.rating}
        onChange={formik.handleChange}
        name="rating"
        onBlur={formik.handleBlur}
        error={formik.touched.rating && formik.errors.rating}
        helperText={
          formik.touched.rating && formik.errors.rating
            ? formik.errors.rating
            : null
        }
      />
      <TextField
        id="outlined-basic"
        label="Summary"
        variant="outlined"
        className="text"
        value={formik.values.summary}
        onChange={formik.handleChange}
        name="summary"
        onBlur={formik.handleBlur}
        error={formik.touched.summary && formik.errors.summary}
        helperText={
          formik.touched.summary && formik.errors.summary
            ? formik.errors.summary
            : null
        }
      />

      <Button variant="contained" type="submit">
        Edit movie
      </Button>
    </form>
  
  )
}
