import React from "react";
import { AiOutlinePoweroff } from "react-icons/ai";

import { auth } from '../Config/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from "react-router-dom";

const Footer = () => {
	const navigate =useNavigate()

const handleSignOut = ()=>{
	signOut(auth)
	navigate("/sign-in")
}

  return (
    <footer
      style={{
        position: "absolute",
        width: "100%",
        height: "10vh",
        bottom: "0",
		left:"0",
		marginBottom:"0",
        backgroundColor: "black",
        textAlign: "center",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>2023 @ </div>
      <div
        style={{
          position: "absolute",
          bottom: "50%",
          transform: "translateY(50%)",
          right: "30px",
        }}
      >
        <AiOutlinePoweroff onClick={handleSignOut}
          style={{ fontSize: "1.5rem", cursor: "pointer"}}
          color="red"
        />
      </div>
    </footer>
  );
};

export default Footer;
