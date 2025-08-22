import React from "react";
import { InlineWidget } from "react-calendly";

const ScheduleCallPage = () => {
  return (
    <div style={{ minHeight: "80vh", padding: "40px", background: "#f9f9f9" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Book a Call with Rajiv Ranjan
      </h1>
      <InlineWidget 
        url="https://calendly.com/rajiv-ranjan/30min"
        styles={{ height: "700px", width: "100%" }}
      />
    </div>
  );
};

export default ScheduleCallPage;
