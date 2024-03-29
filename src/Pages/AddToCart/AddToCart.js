import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Footer from "../Home/Shared/Footer/Footer";
import Navegation from "../Home/Shared/Header/Navegation";
import "./AddToCart.css";

const AddToCart = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    axios
      .post("https://assingment-12-mongo.vercel.app/order", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Submit successfully");
          reset();
        }
      });
  };

  const { nameId } = useParams();
  const [single, setSingle] = useState({});

  useEffect(() => {
    fetch(`https://assingment-12-mongo.vercel.app/products/${nameId}`)
      .then((res) => res.json())
      .then((data) => setSingle(data));
  }, [nameId]);
  return (
    <>
      <Navegation></Navegation>
      <Container>
        <Grid sx={{ mt: 2, mb: 5, alignItems: "center" }} container spacing={0}>
          <Grid item xs={12} md={6} sx={{ justifyContent: "center" }}>
            <Card sx={{ maxWidth: "60%", mx: "auto" }}>
              <CardMedia
                sx={{ alignItems: "center" }}
                component="img"
                alt="green iguana"
                height="140"
                image={single.img}
              />
              <CardContent id="btn">
                <Typography gutterBottom variant="h5" component="div">
                  {single.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {single.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography id="btn" sx={{ color: "gray" }}>
              Please Confirmed Your Order
            </Typography>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("watchName", { maxLength: 30 })}
                placeholder="Watch name"
              />
              <input
                value={user?.displayName}
                {...register("name", { maxLength: 20 })}
                placeholder="name"
              />
              <input
                value={user?.email}
                {...register("email")}
                placeholder="email"
              />
              <input {...register("address")} placeholder="address" />
              <input
                type="number"
                {...register("Phone number", { min: 50 })}
                placeholder="Phone number"
              />
              <Button type="submit" variant="contained">
                Add To Cart
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default AddToCart;
