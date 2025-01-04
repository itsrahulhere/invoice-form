import React, { useState } from "react";
import { Button, Typography, Box, Stack } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import scanLogo from "../assets/scanLogo1.png";

function UploadInvoice() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  return (
    <Box
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      sx={{
        border: "2px dashed gray",
        padding: "85px 20px",
        textAlign: "center",
        cursor: "pointer",
        marginBottom: "20px",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h6" mb={1} fontWeight="bold">
        Upload Your Invoice
      </Typography>
      <Typography variant="body2" mb={2}>
        To auto-populate fields and save time
      </Typography>
      <Box mb={2} style={{ textAlign: "center" }}>
        <img
          src={scanLogo}
          alt="Uploading Gif"
          style={{ maxWidth: "100%", maxHeight: "250px" }}
        />
      </Box>
      {/* Upload Button */}
      <Button
        variant="outlined"
        component="label"
        // color="primary"
        size="large"
        sx={{
          mt: 2,
          textTransform: "none",
          color: "#444",
          border: "1px solid #444",
        }}
        endIcon={<FileUploadOutlinedIcon />}
      >
        Upload File
        <input type="file" hidden onChange={handleFileChange} />
      </Button>
      {/* Click to Upload Text (Blue color) */}
      <Stack direction="row" spacing={0.5} justifyContent="center" mt={2}>
        <Typography
          variant="body2"
          sx={{ color: "#1787E0", cursor: "pointer", fontWeight: 600 }}
          onClick={() => document.querySelector('input[type="file"]').click()}
        >
          Click to Upload
        </Typography>
        <Typography variant="body2" sx={{ color: "textSecondary" }}>
          or Drag and drop
        </Typography>
      </Stack>
      {/* Display selected file */}
      {file && (
        <Box mt={2}>
          <Typography variant="body2">Selected file: {file.name}</Typography>
        </Box>
      )}
    </Box>
  );
}

export default UploadInvoice;
