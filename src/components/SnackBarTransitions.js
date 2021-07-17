import React from 'react';
import { Slide } from "@material-ui/core";


export const TransitionRight = ({...props}) => {
  return <Slide {...props} direction="right" />;
}