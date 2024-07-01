import React from "react";

const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "70vh",
    width: "100%",
    border: "1px solid red",
  };
  return (
    <footer className="bg-dark text-light" style={footerStyle}>
      <p className="text-center py-3">
        © 2024 My ToDos List. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
