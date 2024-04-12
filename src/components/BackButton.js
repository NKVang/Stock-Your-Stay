import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "80px",
        height: "30px",
        display: "flex",
        background: "rgb(0, 123, 255)",
        color: "white",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
        padding: "3px",
        cursor: "pointer",
        position: "fixed",
        top: "76px",
        left: "0px",
        zIndex: "9999",
      }}
      onClick={() => navigate(-1)}
    >
      <ArrowBackIcon />
      <p
        style={{
          fontWeight: "bold",
          marginTop: "2px",
        }}
      >
        Back
      </p>
    </div>
  );
};

export default BackButton;
