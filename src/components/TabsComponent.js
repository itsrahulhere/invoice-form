import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Tabs, Tab } from "@mui/material";
import VendorDetails from "./VendorDetails";
import CommentsDetails from "./CommentsDetails";
import InvoiceDetails from "./InvoiceDetails";

// Forward ref for CustomTabPanel component
const CustomTabPanel = React.forwardRef((props, ref) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      ref={ref}
      role="tabpanel"
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box sx={{ p: 3 }}>{children}</Box>
    </div>
  );
});

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsComponent({
  setFieldValue,
  values,
  errors,
  touched,
}) {
  const [value, setValue] = useState(0);

  // Refs to scroll into view
  const panelRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  useEffect(() => {
    // Scroll to the selected panel after the component mounts
    if (panelRefs.current[value]) {
      panelRefs.current[value].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.scrollBy(0, -10);
    }
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginLeft: "1em" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Vendor Details"
            {...a11yProps(0)}
            sx={{ fontWeight: "bold", textTransform: "none" }}
          />
          <Tab
            label="Invoice Details"
            {...a11yProps(1)}
            sx={{ fontWeight: "bold", textTransform: "none" }}
          />
          <Tab
            label="Comments"
            {...a11yProps(2)}
            sx={{ fontWeight: "bold", textTransform: "none" }}
          />
        </Tabs>
      </Box>

      {/* Container for the scrollable content */}
      <Box
        sx={{
          maxHeight: "80vh",
          overflowY: "scroll",
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none", // For IE and Edge
          "&::-webkit-scrollbar": {
            display: "none", // Hide scrollbar for Webkit browsers (Chrome, Safari)
          },
        }}
      >
        {/* Show all tab panels, but highlight the active one */}
        <CustomTabPanel value={value} index={0} ref={panelRefs.current[0]}>
          <VendorDetails
            setFieldValue={setFieldValue}
            values={values}
            errors={errors}
            touched={touched}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1} ref={panelRefs.current[1]}>
          <InvoiceDetails
            setFieldValue={setFieldValue}
            values={values}
            errors={errors}
            touched={touched}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2} ref={panelRefs.current[2]}>
          <CommentsDetails
            setFieldValue={setFieldValue}
            values={values}
            errors={errors}
            touched={touched}
          />
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
