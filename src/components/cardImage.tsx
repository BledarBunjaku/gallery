import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Logo from "../logo512.png"
import {Box} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  card: {
    margin: 3,
    maxWidth: 220
  },
  cardDescription:{
    fontSize: 12
  }
  
});

export default function CardIMage() {
  const classes = useStyles();

  return (
   <>  <Box component="div" className={classes.card} border={3}  position="relative" borderRadius="borderRadius"> 
      <Box component="div" width="100%" boxSizing="border-box"> 
          <img width="100%" height="100%" src={Logo}></img>
          <Box display="flex" justifyContent="space-between" alignItems="center" position="absolute" width="100%" top={5}>
            <VisibilityIcon color="primary" />
            <DeleteIcon color="secondary"/>
          </Box>
      </Box>
      <Box component="div" width="100%" bgcolor="yellow"> 
            <Typography className={classes.cardDescription} variant="h5" component="p" align="center" >
              Set as cover
            </Typography>
      </Box>
    </Box></> 
  );
}