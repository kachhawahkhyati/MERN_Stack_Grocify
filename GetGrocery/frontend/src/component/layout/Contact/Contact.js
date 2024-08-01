import React from "react";
import "./Contact.css";
import { Button, Typography, Avatar } from "@mui/material";
import MetaData from "../../layout/MetaData";
import logo from '../../../images/GoGrocery.jpg';

const Contact = () => {
  return (
    <div className="contact">
      <MetaData title="CONTACT US" />
      <div></div>
      <div className="contact1">
        <Typography component="h1">Contact Us</Typography>

        {/* <div> */}
          {/* <br></br><br></br><br></br><br></br><br></br><br></br><br></br> */}
          
          <div>
            {/* <img className="photo" src={logo} alt="Logo" /> */}
            <Typography component="h2">How was your experience? We'd love to hear from you!</Typography>
           </div>
          <div className="contact2">
            <a className="mailBtn" href="mailto:gogrocery@gmail.com">
              Contact: gogrocery@gmail.com
            </a>

          {/* </div> */}

        </div>
      </div>
    </div>

  );
};

export default Contact;