import React from 'react';
import "./Alert.css";

const Alert = ({ alert }) => {
  if (!alert) {
    return null; 
  }

  const alertClass = alert.typ === "success" ? "alert-success" : "alert-danger";

  return (
    <>
     <div className='main-alert'>
     <div className={`alert ${alertClass}`}>
        {alert.msg} 
      </div>
     </div>
    </>
  );
}

export default Alert;
