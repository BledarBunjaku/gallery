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
        fontSize: 14,
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
    return <FirstButton variant="contained" {...props} >Cancel</FirstButton>
}
export default CancelButton


















// import React from "react"
// import {withStyles, Button, ButtonProps} from "@material-ui/core"


// const FirstButton = withStyles(theme =>({
    
//     root: {
//     background: theme.palette.common.black,
//     color: theme.palette.common.white,
//     borderRadius: "50%",
//     height: "50px",
//     width: "50px",
//     minWidth: "50px",
//     margin: "20px",
//     position: "relative",
//     },

//     label:{
//         fontSize: 16
//     },
// }))(Button)

// export type FirstButtonProps = ButtonProps & {};



// export const CancelButton: React.FC<FirstButtonProps> = (props: FirstButtonProps ) => {

//     return <FirstButton variant="contained" {...props} ></FirstButton>
// }