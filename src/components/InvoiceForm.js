import React from "react";
import { Col, Row } from "antd";
import UploadInvoice from "./UploadInvoice";
import { IconButton, Typography, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TabsComponent from "./TabsComponent"; // Import TabsComponent
import SaveAndSubmit from "./SaveAndSubmit";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { useFormData } from "../states/FormDataContext";
import { Form, Formik } from "formik";
import * as Yup from "yup";

function InvoiceForm() {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormData();

  const handleBack = () => {
    navigate(-1);
  };

  const validationSchema = Yup.object({
    vendorDetails: Yup.object({
      vendorInformation: Yup.object({
        vendor: Yup.string().required("Vendor is required"),
      }),
    }),
    invoiceDetails: Yup.object({
      generalInformation: Yup.object({
        purchaseOrderNumber: Yup.string().required(
          "Purchase Order Number is required"
        ),
      }),
      invoiceDetails: Yup.object({
        invoiceNumber: Yup.string().required("Invoice Number is required"),
        invoiceDate: Yup.string().required("Invoice Date is required"),
        totalAmount: Yup.number()
          .typeError("Total Amount must be a `number` type")
          .required("Total Amount is required"),
        paymentTerms: Yup.string().required("Payment Terms are required"),
        invoiceDueDate: Yup.string().required("Invoice Due Date is required"),
        glPostDate: Yup.string().required("GL Post Date is required"),
        invoiceDescription: Yup.string().required(
          "Invoice Description is required"
        ),
      }),
      expenseDetails: Yup.object({
        lineAmount: Yup.number()
          .typeError("Line Amount must be a `number` type")
          .required("Line Amount is required"),
        department: Yup.string().required("Department is required"),
        account: Yup.string().required("Account is required"),
        location: Yup.string().required("Location is required"),
        description: Yup.string().required("Description is required"),
      }),
    }),
  });

  const submitAndNew = ({ isValid }) => {
    enqueueSnackbar("Form submitted successfully!", {
      variant: "success",
      autoHideDuration: 3000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };

  return (
    <div style={{ margin: "1em" }}>
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={submitAndNew}
      >
        {({
          setFieldValue,
          values,
          handleSubmit,
          errors,
          touched,
          isValid,
          dirty,
        }) => (
          <Form>
            <Row>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Box display="flex" alignItems="center" gap={1} mb={2}>
                  <IconButton sx={{ color: "#444" }} onClick={handleBack}>
                    <ArrowBackIcon />
                  </IconButton>
                  <Typography variant="h6" fontWeight="bold">
                    Create New Invoice
                  </Typography>
                </Box>
                <UploadInvoice />
              </Col>

              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <TabsComponent
                  setFieldValue={setFieldValue}
                  values={values}
                  errors={errors}
                  touched={touched}
                />
                {/* SaveAndSubmit component */}
                <SaveAndSubmit
                  submitAndNew={() => {
                    if (isValid) {
                      // handleSubmit();
                    } else {
                      enqueueSnackbar("Please complete all required fields!", {
                        variant: "error",
                        autoHideDuration: 4000,
                        anchorOrigin: {
                          vertical: "top",
                          horizontal: "right",
                        },
                      });
                    }
                  }}
                />
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default InvoiceForm;
