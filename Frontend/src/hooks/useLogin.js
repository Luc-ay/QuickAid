import React, { useState } from 'react';
import axios from 'axios'; 


export const useLogin = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  
  const [errors, setErrors] = useState({});

  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    
    if (errors[name]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Validate form fields
  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
      isValid = false;
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

 
  const handleLogin = async () => {
    if (validateForm()) {
      console.log('Login Form Submitted:', formData);

      try {
   
        const response = await axios.post('http://localhost:8080/auth/login', {
          email: formData.email,
          password: formData.password,
        });

        
        if (response.status === 200) { 
          alert('Login Successful!');
          console.log('Backend response:', response.data);
          setFormData({ 
            email: '', password: '', rememberMe: false,
          });
        } else {
          
          alert('Login completed with an unexpected status.');
          console.log('Backend response:', response.data);
        }

      } catch (error) {
       
        if (error.response) {
          console.error('Login failed:', error.response.data);
          console.error('Status code:', error.response.status);
          alert(`Login failed: ${error.response.data.message || 'Invalid credentials. Please try again.'}`);
        } else if (error.request) {
        
          console.error('No response received:', error.request);
          alert('Network error: Could not connect to the server. Please check your internet connection.');
        } else {
          
          console.error('Error setting up request:', error.message);
          alert('An unexpected error occurred. Please try again.');
        }
      }
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleLogin,
  };
};