import React from "react";
import { Link } from "react-router-dom";
type Props = {
  to: string,
  bg: string,
  text: string,
  textColor: string,
  onClick?: () => Promise<void>,
};
const NavigationLink = (prop:Props) => {
  return <Link to={prop.to}></Link>;
};

export default NavigationLink;
