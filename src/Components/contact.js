import React from "react";
import Info from "./info";

function Contact({ name, photo, mob, email, key }) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{name}</h2>
        <img className="circle-img" src={photo} alt="pic of Contact"></img>
      </div>
      <div className="bottom">
        <Info details={mob} />
        <Info details={email} />
      </div>
    </div>
  );
}
export default Contact;
