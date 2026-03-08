import { Link } from "react-router-dom";
import {useRegister} from "../../customHooks/useRegister"; // Adjust the path as necessary
const Register = () => {
  const {
    formData,
    currentStep,
    errors,
    isLoading, 
    handleChange,
    handleContinue,
    handleBack,
    handleCreateAccount,
  } = useRegister();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen font-['Inter']">
      <div className="hidden lg:flex w-full lg:w-[40%] bg-[#1E88E5] flex-col items-center p-12 rounded-r-[80px] justify-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <img
            src="/asset-bg.png"
            alt="Background asset"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Back Arrow */}
        <div className="absolute top-6 left-6 p-2 rounded-full cursor-pointer">
          <Link to="/">
            <img src="/back.png" alt="" />
          </Link>
        </div>

        {currentStep === 1 ? (
          <>
            <div className="relative w-full max-w-md mt-10">
              <h2 className="text-white text-2xl md:text-3xl font-bold text-center mt-4 px-4 leading-snug">
                Access to emergency care from a single click
              </h2>
              <img
                src="/hospital.png"
                alt="hospital"
                className="w-full object-contain"
              />
              <img
                src="/Ambulance.png"
                alt="ambulance"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] object-contain"
              />
            </div>
          </>
        ) : (
          <>
            <h2 className="text-white text-2xl md:text-3xl font-bold text-center px-4 leading-snug mt-2">
              Safe, Trusted and Efficient
            </h2>
            <img
              src="/pana.png"
              alt="doctor"
              className="w-[80%] max-w-sm object-contain mt-4"
            />
          </>
        )}
      </div>

      <div className="w-full lg:w-[60%] flex items-center justify-center px-4 py-12 md:px-8 bg-white ">
        <div className="w-full max-w-lg">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <span className="text-blue-600 font-bold text-2xl flex items-center gap-2">
              <img src="/logo.svg" alt="logo" className="w-8" />
              QuickAid
            </span>
          </div>

          <h1 className="text-1xl md:text-2xl font-bold text-center mb-6 text-gray-800">
            Create your emergency profile
          </h1>

          <div className="flex justify-center items-center mb-5">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                  currentStep === 1 ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                1
              </div>
              <span className="text-sm mt-1 text-gray-600">Account</span>
            </div>
            <div className="flex-grow h-0.5 bg-gray-300 mx-4"></div>
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                  currentStep === 2 ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                2
              </div>
              <span className="text-sm mt-1 text-gray-600">Medical Info</span>
            </div>
          </div>

          {/* Form Fields */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            {currentStep === 1 && (
              <div className="w-full max-w-lg">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name<span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-4 py-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="Enter your full name"
                    required
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address<span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="Enter your email address"
                    required
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number<span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-4 py-2 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                    placeholder=""
                    required
                  />
                  {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
                </div>
                <div>
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth<span className="text-red-500">*</span></label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-4 py-2 border ${errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                    required
                  />
                  {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password<span className="text-red-500">*</span></label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="Enter your password"
                    required
                  />
                  {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">Confirm password<span className="text-red-500">*</span></label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`mb-3 block text-sm w-full px-4 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="Confirm your password"
                    required
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                </div>
                  <button
                  type="button"
                  onClick={handleContinue}
                  disabled={isLoading}
                  className={`w-full bg-blue-600 text-white py-3 px-4 rounded-md font-semibold text-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isLoading && currentStep === 1 ? 'Validating...' : 'Continue'} 
                </button>
              </div>
            )}

            {currentStep === 2 && (
              <>
                <div>
                  <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700 mb-1">Blood Type<span className="text-red-500">*</span></label>
                  <select
                    id="bloodType"
                    name="bloodType"
                    value={formData.bloodType}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-4 py-2 border ${errors.bloodType ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white`}
                    required
                  >
                    <option value="">Select blood type</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                  {errors.bloodType && <p className="text-red-500 text-xs mt-1">{errors.bloodType}</p>}
                </div>
                <div>
                  <label htmlFor="allergies" className="block text-sm font-medium text-gray-700 mb-1">Allergies</label>
                  <textarea
                    id="allergies"
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleChange}
                    rows="3"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="List any allergies you have"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="emergencyContactName" className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact Name<span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="emergencyContactName"
                    name="emergencyContactName"
                    value={formData.emergencyContactName}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-4 py-2 border ${errors.emergencyContactName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="Name of your emergency contact"
                    required
                  />
                  {errors.emergencyContactName && <p className="text-red-500 text-xs mt-1">{errors.emergencyContactName}</p>}
                </div>
                <div>
                  <label htmlFor="emergencyContactPhone" className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact Phone<span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    id="emergencyContactPhone"
                    name="emergencyContactPhone"
                    value={formData.emergencyContactPhone}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-4 py-2 border ${errors.emergencyContactPhone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="e.g., 08012345678"
                    required
                  />
                  {errors.emergencyContactPhone && <p className="text-red-500 text-xs mt-1">{errors.emergencyContactPhone}</p>}
                </div>
                <div className="flex justify-between gap-4 mt-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="w-1/2 bg-gray-200 text-gray-800 py-3 px-4 rounded-md font-semibold text-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition duration-200"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleCreateAccount}
                    disabled={isLoading}
                    className={`w-1/2 bg-blue-600 text-white py-3 px-4 rounded-md font-semibold text-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isLoading ? 'Loading...' : 'Create Account'} 
                  </button>
                </div>
              </>
            )}
          </form>

          {/* Login Link */}
          <div className="text-center mt-8">
            <span className="text-gray-600">Or </span>
            <Link to="/auth/login" className="text-blue-600 hover:underline">
              log in to your existing account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;