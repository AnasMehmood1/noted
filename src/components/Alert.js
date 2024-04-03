import React from 'react';
import "./Alert.css";

const Alert = ({ alert }) => {
  if (!alert) {
    return null; // Do not render if there is no alert
  }

  // Use different classes based on the alert type
  const alertClass = alert.typ === "success" ? "alert-success" : "alert-danger";

  return (
    <>
     <div className='main-alert'>
     <div className={`alert ${alertClass}`}>
        {alert.msg} {/* Display the dynamic message */}
      </div>
     </div>
    </>
  );
}

export default Alert;
