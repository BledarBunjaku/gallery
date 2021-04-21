import React from "react"
import {Box, Typography} from "@material-ui/core"
import {makeStyles, createStyles, Button} from "@material-ui/core"
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles((Theme) =>  createStyles({

    test: {
        border: "none",
        boxShadow: "0 1px 3px grey"       
    },
    test2: {
        width: "100%",
        boxSizing: "border-box",
        fontSize: "16px",
        border: "none",
        
        "&:focus-visible" : {
          outline: "none",
          border:"none"
        }
    },
    button: {
      border: "none",
      backgroundColor: "transparent",
      cursor: "pointer"
      
    }

    
}))
 
const Test2 = () => {

    const classes = useStyles()

    return<>
    <Box component="span" display="inline-block">Gallery *</Box>
    <Box className={classes.test} component="div" border={2} maxWidth={450} boxSizing="border-box" display="flex" padding={0.5} borderRadius={5}>        
            <input className={classes.test2} type="text" placeholder="Enter Tier Name"/>
            <button className={classes.button}><EditIcon/></button>
     </Box></> 

}

export default Test2















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