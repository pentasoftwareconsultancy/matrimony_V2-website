import React from "react";
import VendorList from "../../Components/venders/vendorslist/Vendorslist";
import vendors from "../../Components/venders/vendorsdata/Vendorsdata";

function Vendorpages() {
  return (
    <div>
      <VendorList vendors={vendors} />
    </div>
  );
}

export default Vendorpages;
