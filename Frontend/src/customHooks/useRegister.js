
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"; 
import { setUser } from '../Redux/userSlice';


const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useRegister = () => {
  const navigate = useNavigate();
   const dispatch = useDispatch();

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

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (currentStep === 1) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = 'Full Name is required.';
        isValid = false;
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email address is required.';
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email address is invalid.';
        isValid = false;
      }
      if (!formData.phoneNumber.trim()) {
        newErrors.phoneNumber = 'Phone Number is required.';
        isValid = false;
      } else if (!/^\d{10,15}$/.test(formData.phoneNumber)) {
        newErrors.phoneNumber = 'Phone Number is invalid (10–15 digits).';
        isValid = false;
      }
      if (!formData.password) {
        newErrors.password = 'Password is required.';
        isValid = false;
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters.';
        isValid = false;
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match.';
        isValid = false;
      }
      if (!formData.dateOfBirth) {
        newErrors.dateOfBirth = 'Date of Birth is required.';
        isValid = false;
      }
    } else if (currentStep === 2) {
      if (!formData.bloodType) {
        newErrors.bloodType = 'Blood Type is required.';
        isValid = false;
      }
      if (!formData.emergencyContactName.trim()) {
        newErrors.emergencyContactName = 'Emergency Contact Name is required.';
        isValid = false;
      }
      if (!formData.emergencyContactPhone.trim()) {
        newErrors.emergencyContactPhone = 'Emergency Contact Phone is required.';
        isValid = false;
      } else if (!/^\d{10,15}$/.test(formData.emergencyContactPhone)) {
        newErrors.emergencyContactPhone = 'Phone Number is invalid (10–15 digits).';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleContinue = () => {
    if (validateForm()) {
      setCurrentStep(2);
    } else {
      toast.error("Please correct the highlighted errors before continuing.", {
        position: "bottom-right",
      });
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
    setErrors({});
  };

  const handleCreateAccount = async () => {
    if (!validateForm()) {
      toast.error("Please correct the highlighted errors before creating your account.", {
        position: "bottom-right",
      });
      return;
    }

    setIsLoading(true);
    console.log('Attempting registration with data:', formData);

    try {
      const response = await axios.post(`${BASE_URL}/auth/signup`, {
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

      if (response.status === 200 || response.status === 201) {
        toast.success('Account Created Successfully! Redirecting to dashboard...', {
          position: "bottom-right",
          autoClose: 2500,
        });

        dispatch(setUser({
          fullName: formData.fullName,
          email: formData.email
        }));

        setTimeout(() => {
          navigate('/dashboard');
        }, 3000);

        setFormData({
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
        setCurrentStep(1);
      } else {
        toast.warn(`Unexpected status: ${response.status}`, {
          position: "bottom-right",
        });
      }

    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.message || 'Registration failed.';
        toast.error(`Error: ${errorMessage}`, {
          position: "bottom-right",
        });
      } else if (error.request) {
        toast.error('No server response. Check your internet.', {
          position: "bottom-right",
        });
      } else {
        toast.error('Unexpected error occurred.', {
          position: "bottom-right",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    currentStep,
    errors,
    isLoading,
    handleChange,
    handleContinue,
    handleBack,
    handleCreateAccount,
  };
};
