import { Button } from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useSnackbar } from "notistack";
import { useFormData } from "../states/FormDataContext";

function SaveAndSubmit({ submitAndNew }) {
  const { enqueueSnackbar } = useSnackbar();
  const { formData } = useFormData();

  const saveAsDraft = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    enqueueSnackbar("Draft saved successfully!", {
      variant: "success",
      autoHideDuration: 3000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };

  return (
    <div
      style={{
        borderTop: "2px solid #ddd",
        borderLeft: "2px solid #ddd",
        borderRadius: "6px 0 0 0px",
        margin: "0 -1em -1.5em 0",
        padding: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <MoreVertIcon style={{ margin: "10px" }} />

      <Button
        variant="outlined"
        fullWidth
        sx={{
          borderRadius: "8px",
          border: "1px solid #777",
          height: "2.75rem",
          fontSize: "medium",
          margin: "0 10px",
          color: "#333",
          textTransform: "none",
          "&:hover": {
            border: "2px solid #666",
            backgroundColor: "#f0f0f0",
          },
        }}
        onClick={saveAsDraft}
      >
        Save as Draft
      </Button>

      <Button
        variant="contained"
        type="submit"
        fullWidth
        sx={{
          borderRadius: "8px",
          fontSize: "medium",
          margin: "0 10px",
          height: "2.75rem",
          backgroundColor: "#1787E0",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#156ab1", // Add a hover color if needed
          },
        }}
        onClick={submitAndNew}
      >
        Submit & New
      </Button>
    </div>
  );
}

export default SaveAndSubmit;
