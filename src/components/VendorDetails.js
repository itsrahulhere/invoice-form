import React, { useEffect } from "react";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import vendorList from "../constants/vendorList.json";
import { Collapse } from "antd";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import { useFormData } from "../states/FormDataContext";
import InputLabel from "./InputLabel";
import { Field } from "formik"; // For Formik integration

function VendorDetails({ setFieldValue, values, errors, touched }) {
  const { formData, updateFormData } = useFormData();
  const selectedVendorId = values.vendorDetails.vendorInformation.vendor;

  // Find the full vendor object based on selectedVendorId
  const selectedVendor = vendorList.find(
    (vendor) => vendor.vendor === selectedVendorId
  );

  const handleVendorChange = (event) => {
    const { name, value } = event.target;
    updateFormData(name, value);
    setFieldValue("vendorDetails.vendorInformation.vendor", value);
  };

  useEffect(() => {
    // Handle side effects, if any, based on vendor selection change
  }, [values.vendorDetails.vendorInformation.vendor]);

  const isError = errors.vendorDetails && touched.vendorDetails;

  return (
    <div>
      <Box display="flex" alignItems="center">
        <CorporateFareIcon
          sx={{
            mr: 1,
            backgroundColor: "#E8F3FC",
            color: "#1787E0",
            padding: "1rem",
            borderRadius: "50%",
          }}
        />
        <Typography variant="h5" fontWeight={600} color="#222">
          Vendor Details
        </Typography>
      </Box>

      <Box mt={3} display="flex" flexDirection="column" alignItems="flex-start">
        <Typography mb={3} variant="h6" fontWeight={600} color="#222">
          Vendor Information
        </Typography>

        <InputLabel name="Vendor" />
        <FormControl sx={{ width: "100%" }} error={isError}>
          <Select
            id="vendor-select"
            value={selectedVendorId || ""}
            onChange={handleVendorChange}
            name="vendorDetails.vendorInformation.vendor"
            displayEmpty
            sx={{
              fontSize: "0.9rem",
              height: "2.5rem",
              backgroundColor: "#fff",
              color: !selectedVendorId && "gray",
              border: "1px solid",
              borderColor: isError ? "red" : "#777", // Apply red border color if error
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
              Select a Vendor
            </MenuItem>
            {/* Map through vendorList and create MenuItems */}
            {vendorList.map((vendor, index) => (
              <MenuItem key={index} value={vendor.vendor}>
                {vendor.vendor}
              </MenuItem>
            ))}
          </Select>
          {/* Display error message */}
          {isError && (
            <Typography
              variant="body2"
              sx={{ color: "red", marginTop: "4px", display: "flex" }}
            >
              {errors.vendorDetails.vendorInformation?.vendor}
            </Typography>
          )}
        </FormControl>

        <Typography
          variant="body1"
          sx={{
            color: "#666",
            fontWeight: 500,
            marginTop: "4px",
          }}
        >
          {selectedVendor ? selectedVendor.address : ""}
        </Typography>

        <Box display="flex" justifyContent="center" width="100%">
          <Collapse
            defaultActiveKey={[]}
            ghost
            expandIcon={({ isActive }) =>
              isActive ? (
                <DownOutlined style={{ color: "#1787E0" }} />
              ) : (
                <RightOutlined style={{ color: "#1787E0" }} />
              )
            }
            items={[
              {
                key: "1",
                label: (
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#1787E0",
                      cursor: "pointer",
                      fontWeight: 500,
                    }}
                  >
                    View Vendor Details
                  </Typography>
                ),
                children: selectedVendor && (
                  <p>
                    Owner: <strong>{selectedVendor.owner}</strong>
                    <br />
                    Contact: <strong>{selectedVendor.contact}</strong>
                  </p>
                ),
              },
            ]}
          />
        </Box>
      </Box>
    </div>
  );
}

export default VendorDetails;
