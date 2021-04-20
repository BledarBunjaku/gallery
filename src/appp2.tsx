


import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  );
}



















// import React from "react"
// import {Box, Typography} from "@material-ui/core"
// import {makeStyles, createStyles} from "@material-ui/core"


// const useStyles = makeStyles((Theme) =>  createStyles({

//     test: {
//         padding: "5px 10px" ,
//         fontSize: "1.5rem",
//         fontWeight: "bold",
//         color: "#5d5c5c"        
//     },
//     test2: {
//         color: "#5d5c5c"
//     }

    
// }))
 
// const Test2 = () => {

//     const classes = useStyles()

//     return <Box>
//         <Box className={classes.test2} border={3} display="flex" alignItems="center">
//             <Typography className={classes.test} component="h2">Bledar</Typography>
//         </Box>
//     </Box>

// }

// export default Test2