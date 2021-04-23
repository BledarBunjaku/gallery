import React from "react"
import {withStyles, Button, ButtonProps, capitalize} from "@material-ui/core"


const FirstButton = withStyles(theme =>({
    
    root: {
        background: theme.palette.secondary.light,
        opacity: 0.6,
        borderRadius: 4,
        // height: "50px",
        // width: "50px",
        // minWidth: "50px",
        // margin: "20px",
        "&:hover":{
            background: theme.palette.secondary.light,
            boxShadow: "none"
        }
    }, 
    
    label:{
        background: theme.palette.secondary.light,
        fontSize: 16,
        color: theme.palette.secondary.main,
        textTransform: "capitalize",
        opacity: 1,
    "&:hover":{
        background: theme.palette.secondary.light,
        boxShadow: "none"
}


    },
}))(Button)

export type FirstButtonProps = ButtonProps & {};



 const CancelButton: React.FC<FirstButtonProps> = (props: FirstButtonProps ) => {

    return <FirstButton variant="contained" {...props} disableRipple >Name</FirstButton>
}

export default CancelButton