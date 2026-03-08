import React, { useState } from 'react';
import axios from 'axios'; 


export const useRegister = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    bloodType: '',
    allergies: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
  });

  // State for current step (1 for Account, 2 for Medical Info)
  const [currentStep, setCurrentStep] = useState(1);

  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  
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

    if (currentStep === 1) {
    
      if (!formData.fullName.trim()) {
        newErrors.fullName = 'Full Name is required';
        isValid = false;
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email address is required';
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email address is invalid';
        isValid = false;
      }
      if (!formData.phoneNumber.trim()) {
        newErrors.phoneNumber = 'Phone Number is required';
        isValid = false;
      } else if (!/^\d{10,15}$/.test(formData.phoneNumber)) { 
        newErrors.phoneNumber = 'Phone Number is invalid';
        isValid = false;
      }
      if (!formData.password) {
        newErrors.password = 'Password is required';
        isValid = false;
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
        isValid = false;
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
        isValid = false;
      }
      if (!formData.dateOfBirth) { 
        newErrors.dateOfBirth = 'Date of Birth is required';
        isValid = false;
      }
    } else if (currentStep === 2) {

      if (!formData.bloodType) {
        newErrors.bloodType = 'Blood Type is required';
        isValid = false;
      }
      if (!formData.emergencyContactName.trim()) {
        newErrors.emergencyContactName = 'Emergency Contact Name is required';
        isValid = false;
      }
      if (!formData.emergencyContactPhone.trim()) {
        newErrors.emergencyContactPhone = 'Emergency Contact Phone is required';
        isValid = false;
      } else if (!/^\d{10,15}$/.test(formData.emergencyContactPhone)) { 
        newErrors.emergencyContactPhone = 'Phone Number is invalid';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

 
  const handleContinue = () => {
    if (validateForm()) {
      setCurrentStep(2);
    }
  };

  
  const handleBack = () => {
    setCurrentStep(1);
  };


  const handleCreateAccount = async () => { 
    if (validateForm()) {
      console.log('Form Submitted:', formData);

      try {
       
        const response = await axios.post('http://localhost:8080/auth/signup', {
          email: formData.email,
          password: formData.password, 
          fullName: formData.fullName,
          bloodType: formData.bloodType,
          phoneNumber: formData.phoneNumber,
          emergencyName: formData.emergencyContactName, 
          emergencyPhoneNumber: formData.emergencyContactPhone, 
          dateOfBirth: formData.dateOfBirth,
          allergies: formData.allergies,
        });

        // Handle successful registration
        if (response.status === 200 || response.status === 201) { 
          alert('Account Created Successfully!');
          console.log('Backend response:', response.data);
   
          setFormData({ 
            fullName: '', email: '', phoneNumber: '', password: '', confirmPassword: '',
            dateOfBirth: '', bloodType: '', allergies: '', emergencyContactName: '', emergencyContactPhone: '',
          });
          setCurrentStep(1); 
        } else {
         
          alert('Registration completed with an unexpected status.');
          console.log('Backend response:', response.data);
        }

      } catch (error) {
       
        if (error.response) {
          console.error('Registration failed:', error.response.data);
          console.error('Status code:', error.response.status);
          alert(`Registration failed: ${error.response.data.message || 'Please try again.'}`);
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
    currentStep,
    errors,
    handleChange,
    handleContinue,
    handleBack,
    handleCreateAccount,
  };
};