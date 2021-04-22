import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Example from "../example.jpg";
import { Box } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  card: {
    margin: 3,
    width: 90,
    height: "max-content",
    backgroundColor: "white",
    boxShadow: "0 1px 3px grey",
    overflow: "hidden",
    position: "relative",
    borderRadius: 5,
  },
  imageWrapper: {
    width: 90,
    height: 90,
    "& span": {
      "& svg": {
        color: "#eaeaea",
      },
    },
    "& img": {
      width: "100%",
      height: "100%",
    },
    "& div": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "absolute",
      width: "100%",
      top: 5,
    },
  },

  cardDescription: {
    height: "max-content",
    width: "100%",
    "& p": {
      fontSize: 10,
    },
  },
});

export default function CardIMage() {
  const classes = useStyles();

  return (
    <>
      <Box component="div" className={classes.card}>
        <Box className={classes.imageWrapper} component="div">
          <img src={Example} />
          <Box>
            <span>
              <VisibilityIcon color="primary" fontSize="small" />
            </span>
            <DeleteIcon color="secondary" fontSize="small" />
          </Box>
        </Box>
        <Box className={classes.cardDescription} component="div">
          <Typography variant="h5" component="p" align="center">
            Set as cover
          </Typography>
        </Box>
      </Box>
    </>
  );
}
