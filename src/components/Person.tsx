import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useLocation } from "react-router-dom";

import Female from "../assets/img/female.png";
import Male from "../assets/img/male.png";

import { IResult } from "../dataTypes";

const Person = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const personData = location.state as IResult;

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        width: "50%",
        paddingTop: "2%",
      }}
    >
      <Card sx={{ width: "80%" }} elevation={2}>
        <CardMedia
          component="img"
          height="400px"
          image={personData.gender === "female" ? Female : Male}
          alt="avatar"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {personData.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Mass: {personData.mass}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Height: {personData.height}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Planet: {personData.homeworld}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            onClick={goBack}
            size="small"
          >
            Go Back
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
export default Person;
