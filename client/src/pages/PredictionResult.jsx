import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/PredictionResult.css'


const Result = () => {
  const { state } = useLocation();
  const { prediction, formData } = state || {};
  const predictionText = prediction || "No prediction available";

  return (
    <div className="height" >
    <div className="result-container">
      <h2>Prediction Results</h2>
      <div className="result-box">
        <h3>Prediction Result</h3>
        <p className="prediction-text">{predictionText}</p>
      </div>
      <div className="user-details">
        <h3>User Details</h3>
        {formData && Object.keys(formData).map((field, index) => (
          <p key={index}><strong>{field.charAt(0).toUpperCase() + field.slice(1).replace(/[A-Z]/g, ' $&')}:</strong> {formData[field]}</p>
        ))}
      </div>
      <button onClick={() => window.location.href = '/predict'} className="btn btn-primary mt-4">Predict Again</button>
    </div>
    </div>
  );
};

export default Result;
