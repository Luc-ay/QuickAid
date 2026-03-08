// src/hooks/useLogin.js
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; 
import { useDispatch } from "react-redux";
import { setUser } from '../Redux/userSlice';


const BASE_URL = import.meta.env.VITE_API_BASE_URL; 

export const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
      isValid = false;
    }
    if (!formData.password) {
      newErrors.password = 'Password is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = async () => {
    if (!validateForm()) {
      toast.error("Please correct the highlighted form errors.", {
        position: "bottom-right"
      });
      return;
    }

    setIsLoading(true);
    console.log('Attempting login with data:', formData);

    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200) {
        toast.success('Login Successful!', {
          position: "bottom-right",
          autoClose: 2000, 
        });
        console.log('Backend response:', response.data);

         const userData = response.data.user; 
        dispatch(setUser({
          fullName: userData.fullName, 
          email: userData.email
        }));

        setTimeout(() => {
          navigate('/dashboard'); 
        }, 2500);

        setFormData({
          email: '',
          password: '',
          rememberMe: false,
        });

      } else {
        toast.warn(`Login completed with an unexpected status: ${response.status}`, {
          position: "bottom-right"
        });
        console.log('Backend response with unexpected status:', response.data);
      }

    } catch (error) {
      if (error.response) {
        console.error('Login failed:', error.response.data);
        console.error('Status code:', error.response.status);
        const errorMessage = error.response.data.message || 'Invalid email or password. Please try again.';
        toast.error(`Login failed: ${errorMessage}`, {
          position: "bottom-right"
        });

      } else if (error.request) {
        console.error('No response received:', error.request);
        toast.error('Network error: Could not connect to the server. Please check your internet connection.', {
          position: "bottom-right"
        });
      } else {
        console.error('Error setting up request:', error.message);
        toast.error('An unexpected error occurred. Please try again.', {
          position: "bottom-right"
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    errors,
    isLoading,
    handleChange,
    handleLogin,
  };
};