import React, { useState, useEffect } from 'react';
import '../styles/s.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HealthForm = () => {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("auth")) || "");
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    chol: '',
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    oldpeak: '',
    slope: '',
    ca: '',
    thal: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
      toast.warn("Please login first to access predict");
    }
  }, [token, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/v1/form', formData);
      const prediction = response.data.prediction;
      toast.success('Form submitted successfully!');
      navigate('/result', { state: { prediction,formData } });
    } catch (error) {
      console.error(error);
      toast.error('Error submitting form');
    }
  };

  const inputDescriptions = {
    age: 'Enter your age in years.',
    sex: 'Enter 0 for female and 1 for male.',
    cp: 'Enter chest pain type (0-3): 0 = typical angina, 1 = atypical angina, 2 = non-anginal pain, 3 = asymptomatic.',
    trestbps: 'Enter resting blood pressure in mm Hg.',
    chol: 'Enter serum cholesterol in mg/dl.',
    fbs: 'Enter 1 if fasting blood sugar is > 120 mg/dl, else enter 0.',
    restecg: 'Enter resting electrocardiographic results (0, 1, or 2): 0 = normal, 1 = having ST-T wave abnormality, 2 = showing probable or definite left ventricular hypertrophy.',
    thalach: 'Enter maximum heart rate achieved.',
    exang: 'Enter 1 if exercise induced angina is present, else enter 0.',
    oldpeak: 'Enter ST depression induced by exercise relative to rest.',
    slope: 'Enter slope of the peak exercise ST segment (0-2): 0 = upsloping, 1 = flat, 2 = downsloping.',
    ca: 'Enter number of major vessels colored by fluoroscopy (0-3).',
    thal: 'Enter thalassemia type: 3 = normal, 6 = fixed defect, 7 = reversible defect.'
  };

  return (
    <div className="container mt-5 health-form-container">
      <h2 className="mb-4">Heart Disease Predictor Form</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((field, index) => (
          <div className="form-group" key={index}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1).replace(/[A-Z]/g, ' $&')}:</label>
            <small className="form-text text-muted">{inputDescriptions[field]}</small>
            <input
              type={field === "oldpeak" ? "number" : "text"}
              step={field === "oldpeak" ? "0.1" : "1"}
              className="form-control custom-input"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1).replace(/[A-Z]/g, ' $&')}`}
              required
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default HealthForm;
