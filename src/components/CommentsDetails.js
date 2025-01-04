import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { Col, Row } from "antd";
import { useFormData } from "../states/FormDataContext";
import SendIcon from "@mui/icons-material/Send";
import { Field } from "formik"; // For Formik integration

function CommentsDetails({ setFieldValue, values, errors, touched }) {
  const { formData, updateFormData } = useFormData();
  const selectedComment = values.comments.comment || "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFieldValue(name, value);
    updateFormData(name, value);
  };

  // const isError = errors.comments && touched.comments;

  return (
    <div>
      <Box display="flex" alignItems="center" mb={3}>
        <ChatOutlinedIcon
          sx={{
            mr: 1,
            backgroundColor: "#E8F3FC",
            color: "#1787E0",
            padding: "1rem",
            borderRadius: "50%",
          }}
        />
        <Typography variant="h5" fontWeight={550} color="#222">
          Comments
        </Typography>
      </Box>
      <Row gutter={16} style={{ marginBottom: "12px" }}>
        <Col span={24}>
          <TextField
            id="comment-description"
            value={selectedComment || ""}
            onChange={handleChange}
            name="comments.comment"
            fullWidth
            placeholder="Add a comment and use @Name to tag someone"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SendIcon />
                </InputAdornment>
              ),
              sx: {
                borderRadius: "8px",
                border: "1px solid",
                // borderColor: isError ? "red" : "#777", // Apply red border color if error
                borderColor: "#777", // Apply red border color if error
                height: "2.5rem",
                backgroundColor: "#fff",
              },
            }}
          />
          {/* Display error message */}
          {/* {isError && (
            <Typography
              variant="body2"
              sx={{ color: "red", marginTop: "4px", display: "flex" }}
            >
              {errors.comments.comment}
            </Typography>
          )} */}
        </Col>
      </Row>
    </div>
  );
}

export default CommentsDetails;
