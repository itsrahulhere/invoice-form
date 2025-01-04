import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import InputLabel from "./InputLabel";
import { Col, Row, Switch } from "antd";
import { useFormData } from "../states/FormDataContext";
import { expenseDetails } from "../constants/mockInvoiceDetails";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Field } from "formik"; // For Formik integration

function ExpenseDetails({ setFieldValue, values, errors, touched }) {
  const { formData, updateFormData } = useFormData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFieldValue(name, value);
    updateFormData(name, value);
  };

  const isLineAmountError =
    errors.invoiceDetails?.expenseDetails?.lineAmount &&
    touched.invoiceDetails?.expenseDetails?.lineAmount;
  const isDepartmentError =
    errors.invoiceDetails?.expenseDetails?.department &&
    touched.invoiceDetails?.expenseDetails?.department;
  const isAccountError =
    errors.invoiceDetails?.expenseDetails?.account &&
    touched.invoiceDetails?.expenseDetails?.account;
  const isLocationError =
    errors.invoiceDetails?.expenseDetails?.location &&
    touched.invoiceDetails?.expenseDetails?.location;
  const isDescriptionError =
    errors.invoiceDetails?.expenseDetails?.description &&
    touched.invoiceDetails?.expenseDetails?.description;

  return (
    <div>
      <Box
        mt={3}
        mb={3}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6" fontWeight={600} color="#222">
          Expense Details
        </Typography>
        <p style={{ fontWeight: 500, display: "flex", alignItems: "center" }}>
          $ 0.00 /
          <span style={{ color: "#1677FF", marginRight: "12px" }}>
            &nbsp;$ 0.00
          </span>
          <Switch checkedChildren="$" unCheckedChildren="%" defaultChecked />
        </p>
      </Box>

      <Row gutter={16} style={{ marginBottom: "12px" }}>
        <Col span={12}>
          <InputLabel name="Line Amount" />
          <TextField
            id="date-select"
            type="text"
            value={values.invoiceDetails.expenseDetails.lineAmount || ""}
            onChange={handleChange}
            placeholder="0.00"
            name="invoiceDetails.expenseDetails.lineAmount"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AttachMoneyIcon />
                </InputAdornment>
              ),
              endAdornment: <p style={{ color: "gray" }}>USD</p>,
              sx: {
                borderRadius: "8px",
                border: isLineAmountError ? "1px solid red" : "1px solid #777",
                height: "2.5rem",
                backgroundColor: "#fff",
              },
            }}
          />
          {isLineAmountError && (
            <Typography
              variant="body2"
              sx={{
                color: "red",
                marginTop: "4px",
                display: "flex",
              }}
            >
              {errors.invoiceDetails.expenseDetails.lineAmount}
            </Typography>
          )}
        </Col>
        <Col span={12}>
          <InputLabel name="Department" />
          <FormControl sx={{ width: "100%" }} error={isDepartmentError}>
            <Select
              id="pt-select"
              value={values.invoiceDetails.expenseDetails.department}
              onChange={handleChange}
              name="invoiceDetails.expenseDetails.department"
              displayEmpty
              sx={{
                fontSize: "0.9rem",
                height: "2.5rem",
                backgroundColor: "#fff",
                color:
                  !values.invoiceDetails.expenseDetails.department && "gray",
                border: isDepartmentError ? "1px solid red" : "1px solid #777",
                borderRadius: "8px",
                textAlign: "left",
              }}
              MenuProps={{
                PaperProps: {
                  style: {
                    textAlign: "left",
                  },
                },
              }}
            >
              <MenuItem value="" disabled>
                Select
              </MenuItem>
              {expenseDetails.department.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            {isDepartmentError && (
              <Typography
                variant="body2"
                sx={{ color: "red", marginTop: "4px", display: "flex" }}
              >
                {errors.invoiceDetails.expenseDetails.department}
              </Typography>
            )}
          </FormControl>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginBottom: "12px" }}>
        <Col span={12}>
          <InputLabel name="Account" />
          <FormControl sx={{ width: "100%" }} error={isAccountError}>
            <Select
              id="pt-select"
              value={values.invoiceDetails.expenseDetails.account}
              onChange={handleChange}
              name="invoiceDetails.expenseDetails.account"
              displayEmpty
              sx={{
                fontSize: "0.9rem",
                height: "2.5rem",
                backgroundColor: "#fff",
                color: !values.invoiceDetails.expenseDetails.account && "gray",
                border: isAccountError ? "1px solid red" : "1px solid #777",
                borderRadius: "8px",
                textAlign: "left",
              }}
              MenuProps={{
                PaperProps: {
                  style: {
                    textAlign: "left",
                  },
                },
              }}
            >
              <MenuItem value="" disabled>
                Select
              </MenuItem>
              {expenseDetails.account.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            {isAccountError && (
              <Typography
                variant="body2"
                sx={{ color: "red", marginTop: "4px", display: "flex" }}
              >
                {errors.invoiceDetails.expenseDetails.account}
              </Typography>
            )}
          </FormControl>
        </Col>
        <Col span={12}>
          <InputLabel name="Location" />
          <FormControl sx={{ width: "100%" }} error={isLocationError}>
            <Select
              id="location-select"
              value={values.invoiceDetails.expenseDetails.location}
              onChange={handleChange}
              name="invoiceDetails.expenseDetails.location"
              displayEmpty
              sx={{
                fontSize: "0.9rem",
                height: "2.5rem",
                backgroundColor: "#fff",
                color: !values.invoiceDetails.expenseDetails.location && "gray",
                border: isLocationError ? "1px solid red" : "1px solid #777",
                borderRadius: "8px",
                textAlign: "left",
              }}
              MenuProps={{
                PaperProps: {
                  style: {
                    textAlign: "left",
                  },
                },
              }}
            >
              <MenuItem value="" disabled>
                Select
              </MenuItem>
              {expenseDetails.location.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            {isLocationError && (
              <Typography
                variant="body2"
                sx={{ color: "red", marginTop: "4px", display: "flex" }}
              >
                {errors.invoiceDetails.expenseDetails.location}
              </Typography>
            )}
          </FormControl>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginBottom: "14px" }}>
        <Col span={24}>
          <InputLabel name="Description" />
          <TextField
            id="expense-description"
            value={values.invoiceDetails.expenseDetails.description || ""}
            onChange={handleChange}
            name="invoiceDetails.expenseDetails.description"
            fullWidth
            variant="outlined"
            InputProps={{
              sx: {
                borderRadius: "8px",
                border: isDescriptionError ? "1px solid red" : "1px solid #777",
                height: "2.5rem",
                backgroundColor: "#fff",
              },
            }}
          />
          {isDescriptionError && (
            <Typography
              variant="body2"
              sx={{ color: "red", marginTop: "4px", display: "flex" }}
            >
              {errors.invoiceDetails.expenseDetails.description}
            </Typography>
          )}
        </Col>
      </Row>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "8px",
            border: "2px solid #777",
            height: "2.25rem",
            color: "#777",
            textTransform: "none",
            "&:hover": {
              border: "2px solid #666",
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          + Add Expense Coding
        </Button>
      </div>
    </div>
  );
}

export default ExpenseDetails;
