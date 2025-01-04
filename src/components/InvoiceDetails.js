import React from "react";
import { useFormData } from "../states/FormDataContext";
import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
} from "@mui/material";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Col, Row } from "antd";
import ExpenseDetails from "./ExpenseDetails";
import InputLabel from "./InputLabel";
import {
  generalInformation,
  invoiceDetails,
} from "../constants/mockInvoiceDetails";

function InvoiceDetails({ setFieldValue, values, errors, touched }) {
  const { formData, updateFormData } = useFormData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFieldValue(name, value);
    updateFormData(name, value);
  };

  const isPurchaseOrderNumberError =
    errors.invoiceDetails?.generalInformation?.purchaseOrderNumber &&
    touched.invoiceDetails?.generalInformation?.purchaseOrderNumber;

  const isInvoiceNumberError =
    errors.invoiceDetails?.invoiceDetails?.invoiceNumber &&
    touched.invoiceDetails?.invoiceDetails?.invoiceNumber;
  const isInvoiceDescription =
    errors.invoiceDetails?.invoiceDetails?.invoiceDescription &&
    touched.invoiceDetails?.invoiceDetails?.invoiceDescription;

  const isInvoiceDateError =
    errors.invoiceDetails?.invoiceDetails?.invoiceDate &&
    touched.invoiceDetails?.invoiceDetails?.invoiceDate;

  const isTotalAmountError =
    errors.invoiceDetails?.invoiceDetails?.totalAmount &&
    touched.invoiceDetails?.invoiceDetails?.totalAmount;

  const isPaymentTermsError =
    errors.invoiceDetails?.invoiceDetails?.paymentTerms &&
    touched.invoiceDetails?.invoiceDetails?.paymentTerms;

  const isInvoiceDueDateError =
    errors.invoiceDetails?.invoiceDetails?.invoiceDueDate &&
    touched.invoiceDetails?.invoiceDetails?.invoiceDueDate;

  const isGlPostDateError =
    errors.invoiceDetails?.invoiceDetails?.glPostDate &&
    touched.invoiceDetails?.invoiceDetails?.glPostDate;

  return (
    <div>
      <Box display="flex" alignItems="center">
        <ReceiptLongOutlinedIcon
          sx={{
            mr: 1,
            backgroundColor: "#E8F3FC",
            color: "#1787E0",
            padding: "1rem",
            borderRadius: "50%",
          }}
        />
        <Typography variant="h5" fontWeight={550} color="#222">
          Invoice Details
        </Typography>
      </Box>

      {/* General Information Section */}
      <Box mt={3} display="flex" flexDirection="column" alignItems="flex-start">
        <Typography mb={3} variant="h6" fontWeight={600} color="#222">
          General Information
        </Typography>
        <InputLabel name="Purchase Order Number" />
        <FormControl sx={{ width: "100%" }} error={isPurchaseOrderNumberError}>
          <Select
            id="po-select"
            value={
              values.invoiceDetails.generalInformation.purchaseOrderNumber || ""
            }
            onChange={handleChange}
            name="invoiceDetails.generalInformation.purchaseOrderNumber"
            displayEmpty
            sx={{
              fontSize: "0.9rem",
              height: "2.5rem",
              backgroundColor: "#fff",
              color:
                !values.invoiceDetails.generalInformation.purchaseOrderNumber &&
                "gray",
              border: isPurchaseOrderNumberError
                ? "1px solid red"
                : "1px solid #777",
              borderRadius: "8px",
              textAlign: "left",
            }}
          >
            <MenuItem value="" disabled>
              Select PO Number
            </MenuItem>
            {generalInformation.purchaseOrderNumber.map(
              (orderNumber, index) => (
                <MenuItem key={index} value={orderNumber}>
                  {orderNumber}
                </MenuItem>
              )
            )}
          </Select>

          {isPurchaseOrderNumberError && (
            <Typography
              variant="body2"
              sx={{
                color: "red",
                marginTop: "4px",
                display: "flex",
              }}
            >
              {errors.invoiceDetails.generalInformation.purchaseOrderNumber}
            </Typography>
          )}
        </FormControl>
      </Box>

      {/* Invoice Details Section */}
      <Box mt={3} display="flex" flexDirection="column" alignItems="flex-start">
        <Typography mb={3} variant="h6" fontWeight={600} color="#222">
          Invoice Details
        </Typography>
      </Box>

      <Row gutter={16} style={{ marginBottom: "12px" }}>
        <Col span={12}>
          <InputLabel name="Invoice Number" />
          <FormControl sx={{ width: "100%" }} error={isInvoiceNumberError}>
            <Select
              id="invoice-number"
              value={values.invoiceDetails.invoiceDetails.invoiceNumber || ""}
              onChange={handleChange}
              name="invoiceDetails.invoiceDetails.invoiceNumber"
              displayEmpty
              sx={{
                fontSize: "0.9rem",
                height: "2.5rem",
                backgroundColor: "#fff",
                color:
                  !values.invoiceDetails.invoiceDetails.invoiceNumber && "gray",
                border: isInvoiceNumberError
                  ? "1px solid red"
                  : "1px solid #777",
                borderRadius: "8px",
                textAlign: "left",
              }}
            >
              <MenuItem value="" disabled>
                Select Invoice Number
              </MenuItem>
              {invoiceDetails.invoiceNumber.map((invoiceNumber, index) => (
                <MenuItem key={index} value={invoiceNumber}>
                  {invoiceNumber}
                </MenuItem>
              ))}
            </Select>
            {isInvoiceNumberError && (
              <Typography
                variant="body2"
                sx={{ color: "red", marginTop: "4px", display: "flex" }}
              >
                {errors.invoiceDetails.invoiceDetails.invoiceNumber}
              </Typography>
            )}
          </FormControl>
        </Col>

        <Col span={12}>
          <InputLabel name="Invoice Date" />
          <TextField
            type="date"
            value={values.invoiceDetails.invoiceDetails.invoiceDate || ""}
            onChange={handleChange}
            name="invoiceDetails.invoiceDetails.invoiceDate"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarMonthIcon />
                </InputAdornment>
              ),
              sx: {
                borderRadius: "8px",
                border: isInvoiceDateError ? "1px solid red" : "1px solid #777",
                height: "2.5rem",
                backgroundColor: "#fff",
              },
            }}
          />
          {isInvoiceDateError && (
            <Typography
              variant="body2"
              sx={{ color: "red", marginTop: "4px", display: "flex" }}
            >
              {errors.invoiceDetails.invoiceDetails.invoiceDate}
            </Typography>
          )}
        </Col>
      </Row>

      <Row gutter={16} style={{ marginBottom: "12px" }}>
        <Col span={12}>
          <InputLabel name="Total Amount" />
          <TextField
            id="total-amount"
            type="text"
            value={values.invoiceDetails.invoiceDetails.totalAmount || ""}
            onChange={handleChange}
            placeholder="0.00"
            name="invoiceDetails.invoiceDetails.totalAmount"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            InputProps={{
              sx: {
                borderRadius: "8px",
                border: isTotalAmountError ? "1px solid red" : "1px solid #777",
                height: "2.5rem",
                backgroundColor: "#fff",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <AttachMoneyIcon />
                </InputAdornment>
              ),
              endAdornment: <p style={{ color: "gray" }}>USD</p>,
            }}
          />
          {isTotalAmountError && (
            <Typography
              variant="body2"
              sx={{
                color: "red",
                marginTop: "4px",
                display: "flex",
              }}
            >
              {errors.invoiceDetails.invoiceDetails.totalAmount}
            </Typography>
          )}
        </Col>

        <Col span={12}>
          <InputLabel name="Payment Terms" />
          <FormControl sx={{ width: "100%" }} error={isPaymentTermsError}>
            <Select
              id="payment-terms"
              value={values.invoiceDetails.invoiceDetails.paymentTerms || ""}
              onChange={handleChange}
              name="invoiceDetails.invoiceDetails.paymentTerms"
              displayEmpty
              sx={{
                fontSize: "0.9rem",
                height: "2.5rem",
                backgroundColor: "#fff",
                color:
                  !values.invoiceDetails.invoiceDetails.paymentTerms && "gray",
                border: isPaymentTermsError
                  ? "1px solid red"
                  : "1px solid #777",
                borderRadius: "8px",
                textAlign: "left",
              }}
            >
              <MenuItem value="" disabled>
                Select Payment Terms
              </MenuItem>
              {invoiceDetails.paymentTerms.map((paymentTerm, index) => (
                <MenuItem key={index} value={paymentTerm}>
                  {paymentTerm}
                </MenuItem>
              ))}
            </Select>
            {isPaymentTermsError && (
              <Typography
                variant="body2"
                sx={{ color: "red", marginTop: "4px", display: "flex" }}
              >
                {errors.invoiceDetails.invoiceDetails.paymentTerms}
              </Typography>
            )}
          </FormControl>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginBottom: "12px" }}>
        <Col span={12}>
          <InputLabel name="Invoice Due Date" />
          <TextField
            type="date"
            value={values.invoiceDetails.invoiceDetails.invoiceDueDate || ""}
            onChange={handleChange}
            name="invoiceDetails.invoiceDetails.invoiceDueDate"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarMonthIcon />
                </InputAdornment>
              ),
              sx: {
                borderRadius: "8px",
                border: isInvoiceDueDateError
                  ? "1px solid red"
                  : "1px solid #777",
                height: "2.5rem",
                backgroundColor: "#fff",
              },
            }}
          />
          {isInvoiceDueDateError && (
            <Typography
              variant="body2"
              sx={{ color: "red", marginTop: "4px", display: "flex" }}
            >
              {errors.invoiceDetails.invoiceDetails.invoiceDueDate}
            </Typography>
          )}
        </Col>

        <Col span={12}>
          <InputLabel name="GL Post Date" />
          <TextField
            type="date"
            value={values.invoiceDetails.invoiceDetails.glPostDate || ""}
            onChange={handleChange}
            name="invoiceDetails.invoiceDetails.glPostDate"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarMonthIcon />
                </InputAdornment>
              ),
              sx: {
                borderRadius: "8px",
                border: isGlPostDateError ? "1px solid red" : "1px solid #777",
                height: "2.5rem",
                backgroundColor: "#fff",
              },
            }}
          />
          {isGlPostDateError && (
            <Typography
              variant="body2"
              sx={{ color: "red", marginTop: "4px", display: "flex" }}
            >
              {errors.invoiceDetails.invoiceDetails.glPostDate}
            </Typography>
          )}
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <InputLabel name="Invoice Description" />
          <TextField
            id="invoice-description"
            value={
              values.invoiceDetails.invoiceDetails.invoiceDescription || ""
            }
            onChange={handleChange}
            name="invoiceDetails.invoiceDetails.invoiceDescription"
            fullWidth
            variant="outlined"
            InputProps={{
              sx: {
                borderRadius: "8px",
                border: isInvoiceDescription
                  ? "1px solid red"
                  : "1px solid #777",
                height: "2.5rem",
                backgroundColor: "#fff",
              },
            }}
          />
          {isInvoiceDescription && (
            <Typography
              variant="body2"
              sx={{ color: "red", marginTop: "4px", display: "flex" }}
            >
              {errors.invoiceDetails.invoiceDetails.invoiceDescription}
            </Typography>
          )}
        </Col>
      </Row>

      <ExpenseDetails
        setFieldValue={setFieldValue}
        values={values}
        errors={errors}
        touched={touched}
      />
    </div>
  );
}

export default InvoiceDetails;
