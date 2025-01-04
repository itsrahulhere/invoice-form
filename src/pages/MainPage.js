import React from "react";
import InvoiceForm from "../components/InvoiceForm";
import Logout from "../components/Logout";

function MainPage() {
  return (
    <div>
      <Logout />
      <InvoiceForm />
    </div>
  );
}

export default MainPage;
