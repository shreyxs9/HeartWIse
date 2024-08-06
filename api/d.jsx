import React, { useState, useEffect } from 'react';
import '../styles/s.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from './api'

const HealthForm = () => {
  const [predict, preDict] = useState([]);
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
  const fetchPrediction = async () => {
    const response = await api.get('/predict/');
    preDict(response.data)
  };

  useEffect(() => {
    HealthForm();
  }, []);


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await api.post('/predict/', formData);
    fetchPrediction();
    setFormData({
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
  };

  return (
    <div>
      <nav className='navbar navbar-dark bg-primary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            Finance App
          </a>
        </div>
      </nav>

    <div className='container'>
      <form onSubmit={handleFormSubmit}>
        <div className='mb-3 mt-3'>
          <label htmlFor='amount' className='form-label'>
            Amount
          </label>
          <input type='text' className='form-control' id='amount' name='amount' onChange={handleInputChange} value={formData.amount}/>
        </div>

        <div className='mb-3 mt-3'>
          <label htmlFor='category' className='form-label'>
            Category
          </label>
          <input type='text' className='form-control' id='category' name='category' onChange={handleInputChange} value={formData.category}/>
        </div>

        <div className='mb-3 mt-3'>
          <label htmlFor='description' className='form-label'>
            Description
          </label>
          <input type='text' className='form-control' id='description' name='description' onChange={handleInputChange} value={formData.description}/>
        </div>

        <div className='mb-3 mt-3'>
          <label htmlFor='is_income' className='form-label'>
            Income?
          </label>
          <input type='checkbox' id='is_income' name='is_income' onChange={handleInputChange} value={formData.is_income}/>
        </div>

        <div className='mb-3 mt-3'>
          <label htmlFor='date' className='form-label'>
            Date
          </label>
          <input type='text' className='form-control' id='date' name='date' onChange={handleInputChange} value={formData.date}/>
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>


      <table className='table table-striped table-bordered table-hover'>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
            <th>Income?</th>
            <th>Date?</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) =>(
            <tr key={transaction.id}>
              <td>{transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.description}</td>
              <td>{transaction.is_income ? 'Yes' : 'No'}</td>
              <td>{transaction.date}</td>
            </tr>
          ))}
        </tbody>

      </table>



    </div>


    </div>
  )

}

export default App;
