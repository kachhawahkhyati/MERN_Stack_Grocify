import React, { Fragment } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./OrderSuccess.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return <Fragment>
    <div className="orderSuccess">


      <Typography>Your Order has been placed successfully! </Typography>
      <br></br><br></br><br></br><br></br>
      <Link to="/orders">View Orders</Link>
    </div>
  </Fragment>


};

export default OrderSuccess;