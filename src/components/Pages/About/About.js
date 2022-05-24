import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about-page">
        <h1>About Project</h1>
      </div>
      <div className="detail-section">
        <p>
          This is a manufacturing product app. Based on React, Node, MongoDB,
          Express. This is a full stack app. This project has an admin panel.
          Where an admin can add product, make other user as an admin. An admin
          can able to change the status of a placed order. This app also used
          firebase authentication. Email/password login, Google login, facebook
          login has been implemented here. For the UI, Daisy UI has been used.
        </p>
      </div>
    </div>
  );
};

export default About;
