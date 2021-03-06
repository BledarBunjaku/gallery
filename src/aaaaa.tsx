import React from "react"
import {withStyles, Button, ButtonProps} from "@material-ui/core"


const FirstButton = withStyles(theme =>({
    
    root: {
        background: "rgba(255, 99, 71, 0.8)",
        opacity: 0.6,
        borderRadius: 4,
        boxShadow: "none",
        "&:hover":{
            background: "rgba(255, 99, 71, 0.8)",
            boxShadow: "none"
        }
    },     
    label:{
        fontSize: 16,
        color: "red" ,
        textTransform: "capitalize",
        opacity: 1,
        "&:hover":{
        background: "unset",
        boxShadow: "none"
}
    },
}))(Button)

export type FirstButtonProps = ButtonProps & {};


 const CancelButton: React.FC<FirstButtonProps> = (props: FirstButtonProps ) =>
  {
    return <FirstButton variant="contained" {...props} disableRipple >Cancel</FirstButton>
}
export default CancelButton