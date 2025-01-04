import React from "react";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("formData");
    localStorage.removeItem("formData");
    localStorage.removeItem("session");

    // Use a setTimeout to guarantee execution order, if needed
    setTimeout(() => {
      navigate("/invoice-form/login");
      window.location.reload();
    }, 0);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "8px 16px 0 0",
      }}
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "12px",
          padding: "8px 16px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#333",
          },
        }}
        onClick={logout}
      >
        Logout
      </Button>
    </Box>
  );
}

export default Logout;
