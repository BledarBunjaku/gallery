import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Button, { ButtonProps } from "@material-ui/core/Button";

const PrimaryStyled = withStyles((theme) => ({
  root: {
    background: theme.palette.common.black,
    color: theme.palette.common.white,
    borderRadius: "50%",
    height: "50px",
    width: "50px",
    minWidth: "50px",
    margin: "20px",
    position: "relative",
  },
  label: {
    color: theme.palette.common.white,
    textTransform: "capitalize",
  },
  endIcon: {
    margin: 0,
    color: theme.palette.common.white,
  },
}))(Button);

export type CircleButtonProps = ButtonProps & {};
/**
 * MMF Circle Button style
 */

export const CircleButton: React.FC<CircleButtonProps> = (
  props: CircleButtonProps
) => {
  return <PrimaryStyled variant="contained" {...props}></PrimaryStyled>;
};

