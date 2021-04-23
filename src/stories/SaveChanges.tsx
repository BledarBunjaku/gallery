import React from "react"
import {withStyles, Button, ButtonProps} from "@material-ui/core"


const FirstButton = withStyles(theme =>({
    
    root: {
        background: "rgba(148, 253, 159, 0.8)",
        opacity: 0.6,
        borderRadius: 4,
        boxShadow: "none",
        "&:hover":{
            background: "rgba(148, 253, 159, 0.8)",
            boxShadow: "none"
        }
    },     
    label:{
        fontSize: 14,
        color: "green" ,
        textTransform: "capitalize",
        opacity: 1,
        "&:hover":{
        background: "unset",
        boxShadow: "none"
}
    },
}))(Button)

export type FirstButtonProps = ButtonProps & {};


 const SaveChangesButton: React.FC<FirstButtonProps> = (props: FirstButtonProps ) =>
  {
    return <FirstButton variant="contained" {...props} >Save Changes</FirstButton>
}
export default SaveChangesButton

