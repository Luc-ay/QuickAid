import { Link } from 'react-router-dom'
import { useRegister } from '../../hooks/useRegister'

const Register = () => {
  const {
    formData,
    currentStep,
    errors,
    handleChange,
    handleContinue,
    handleBack,
    handleCreateAccount,
  } = useRegister()

  ;<div className="min-h-screen font-['Inter'] flex flex-col lg:flex-row bg-gray-100">
    <div className='hidden lg:flex lg:w-1/2 bg-[#1E88E5] p-8 relative items-center justify-center overflow-hidden rounded-r-[60px]'>
      <div className='absolute top-0 left-0 w-full h-full opacity-30'>
        <svg
          className='absolute w-full h-full'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
        >
          <text x='5' y='15' fill='white' fontSize='8' opacity='0.8'>
            +
          </text>
          <text x='25' y='30' fill='white' fontSize='10' opacity='0.6'>
            +
          </text>
          <text x='70' y='5' fill='white' fontSize='6' opacity='0.7'>
            +
          </text>
          <text x='90' y='25' fill='white' fontSize='9' opacity='0.5'>
            +
          </text>
          <text x='10' y='70' fill='white' fontSize='7' opacity='0.9'>
            +
          </text>
          <text x='40' y='85' fill='white' fontSize='11' opacity='0.6'>
            +
          </text>
          <text x='80' y='95' fill='white' fontSize='8' opacity='0.8'>
            +
          </text>
        </svg>

        <svg
          className='absolute w-16 h-16 top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 rotate-12'
          fill='white'
          viewBox='0 0 24 24'
        >
          <path d='M19 2H5C3.34 2 2 3.34 2 5v14c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3zm-1 10h-2v2h-2v-2h-2v2h-2v-2H8v2H6v-2H4V5c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v7zM11 7h2v2h-2V7zm0 4h2v2h-2v-2z' />
        </svg>

        <svg
          className='absolute w-24 h-24 top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 rotate-[-20deg]'
          fill='none'
          stroke='white'
          strokeWidth='2'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4 12h3l2-8 4 16 2-8h3'
          />
        </svg>

        <div className='absolute top-1/3 right-1/4 text-white opacity-90'>
          <svg className='w-20 h-20' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
          </svg>
          <svg
            className='absolute w-16 h-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            fill='none'
            stroke='white'
            strokeWidth='1.5'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4 12h3l2-8 4 16 2-8h3'
            />
          </svg>
        </div>
        <svg
          className='absolute w-20 h-20 bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-[-15deg]'
          fill='white'
          viewBox='0 0 24 24'
        >
          <path d='M15 1H9c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 19H9V4h6v16zM11 6h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2z' />
        </svg>
      </div>

      {currentStep === 1 ? (
        <div className='relative z-10 flex flex-col items-center justify-center p-4'>
          <img
            src='/autobus.png'
            alt='Ambulance for emergency care'
            className='max-w-full h-auto rounded-xl shadow-lg mb-6'
            onError={(e) => {
              e.target.onerror = null
              e.target.src =
                'https://placehold.co/400x400/87CEEB/FFFFFF?text=Ambulance'
            }}
          />
          <h2 className='text-white text-4xl font-bold text-center leading-tight'>
            Access to emergency care from a single click
          </h2>
        </div>
      ) : (
        <div className='relative z-10 flex flex-col items-center justify-center p-4'>
          <img
            src='/nurse.webp'
            alt='Doctor for safe, trusted, and efficient care'
            className='max-w-full h-auto rounded-xl shadow-lg mb-6'
            onError={(e) => {
              e.target.onerror = null
              e.target.src =
                'https://placehold.co/400x400/87CEEB/FFFFFF?text=Doctor'
            }}
          />
          <h2 className='text-white text-4xl font-bold text-center leading-tight'>
            Safe, Trusted and Efficient
          </h2>
        </div>
      )}

      {/* Back arrow icon */}
      <div className='absolute top-8 left-8 p-3 bg-white bg-opacity-20 rounded-full cursor-pointer'>
        <Link to='/'>
          <svg
            className='w-6 h-6 text-white'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M15 19l-7-7 7-7'
            ></path>
          </svg>
        </Link>
      </div>
    </div>

    {/* Right Section (Form) */}
    <div className='w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-16'>
      <div className='bg-white p-8 md:p-12 rounded-3xl shadow-xl w-full max-w-md'>
        <div className='flex justify-center mb-8'>
          <span className='text-blue-600 font-bold text-2xl gap-2 flex items-center'>
            <img className='w-4' src='arrow-logo.png' alt='' />
            QuickAid
          </span>
        </div>

        <h1 className='text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center'>
          Create your emergency profile
        </h1>

        <div className='flex justify-center items-center mb-8'>
          <div className='flex flex-col items-center'>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                currentStep === 1 ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              1
            </div>
            <span className='text-sm mt-2 text-gray-600'>Account</span>
          </div>
          <div className='flex-grow h-0.5 bg-gray-300 mx-4'></div>
          <div className='flex flex-col items-center'>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                currentStep === 2 ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              2
            </div>
            <span className='text-sm mt-2 text-gray-600'>Medical Info</span>
          </div>
        </div>

        {/* Form Fields */}
        <form onSubmit={(e) => e.preventDefault()} className='space-y-6'>
          {currentStep === 1 && (
            <>
              <div>
                <label
                  htmlFor='fullName'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Full Name<span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  id='fullName'
                  name='fullName'
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-2 border ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                  placeholder='Enter your full name'
                  required
                />
                {errors.fullName && (
                  <p className='text-red-500 text-xs mt-1'>{errors.fullName}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Email address<span className='text-red-500'>*</span>
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-2 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                  placeholder='Enter your email address'
                  required
                />
                {errors.email && (
                  <p className='text-red-500 text-xs mt-1'>{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor='phoneNumber'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Phone Number<span className='text-red-500'>*</span>
                </label>
                <input
                  type='tel'
                  id='phoneNumber'
                  name='phoneNumber'
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-2 border ${
                    errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                  placeholder='e.g., 08012345678'
                  required
                />
                {errors.phoneNumber && (
                  <p className='text-red-500 text-xs mt-1'>
                    {errors.phoneNumber}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor='dateOfBirth'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Date of Birth<span className='text-red-500'>*</span>
                </label>
                <input
                  type='date'
                  id='dateOfBirth'
                  name='dateOfBirth'
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-2 border ${
                    errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                  required
                />
                {errors.dateOfBirth && (
                  <p className='text-red-500 text-xs mt-1'>
                    {errors.dateOfBirth}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Password<span className='text-red-500'>*</span>
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-2 border ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                  placeholder='Enter your password'
                  required
                />
                {errors.password && (
                  <p className='text-red-500 text-xs mt-1'>{errors.password}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor='confirmPassword'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Confirm password<span className='text-red-500'>*</span>
                </label>
                <input
                  type='password'
                  id='confirmPassword'
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-2 border ${
                    errors.confirmPassword
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                  placeholder='Confirm your password'
                  required
                />
                {errors.confirmPassword && (
                  <p className='text-red-500 text-xs mt-1'>
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
              <button
                type='button'
                onClick={handleContinue}
                className='w-full bg-blue-600 text-white py-3 px-4 rounded-md font-semibold text-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200'
              >
                Continue
              </button>
            </>
          )}

          {currentStep === 2 && (
            <>
              <div>
                <label
                  htmlFor='bloodType'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Blood Type<span className='text-red-500'>*</span>
                </label>
                <select
                  id='bloodType'
                  name='bloodType'
                  value={formData.bloodType}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-2 border ${
                    errors.bloodType ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white`}
                  required
                >
                  <option value=''>Select blood type</option>
                  <option value='A+'>A+</option>
                  <option value='A-'>A-</option>
                  <option value='B+'>B+</option>
                  <option value='B-'>B-</option>
                  <option value='AB+'>AB+</option>
                  <option value='AB-'>AB-</option>
                  <option value='O+'>O+</option>
                  <option value='O-'>O-</option>
                </select>
                {errors.bloodType && (
                  <p className='text-red-500 text-xs mt-1'>
                    {errors.bloodType}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor='allergies'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Allergies
                </label>
                <textarea
                  id='allergies'
                  name='allergies'
                  value={formData.allergies}
                  onChange={handleChange}
                  rows='3'
                  className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                  placeholder='List any allergies you have'
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor='emergencyContactName'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Emergency Contact Name<span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  id='emergencyContactName'
                  name='emergencyContactName'
                  value={formData.emergencyContactName}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-2 border ${
                    errors.emergencyContactName
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                  placeholder='Name of your emergency contact'
                  required
                />
                {errors.emergencyContactName && (
                  <p className='text-red-500 text-xs mt-1'>
                    {errors.emergencyContactName}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor='emergencyContactPhone'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Emergency Contact Phone<span className='text-red-500'>*</span>
                </label>
                <input
                  type='tel'
                  id='emergencyContactPhone'
                  name='emergencyContactPhone'
                  value={formData.emergencyContactPhone}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-2 border ${
                    errors.emergencyContactPhone
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                  placeholder='e.g., 08012345678'
                  required
                />
                {errors.emergencyContactPhone && (
                  <p className='text-red-500 text-xs mt-1'>
                    {errors.emergencyContactPhone}
                  </p>
                )}
              </div>
              <div className='flex justify-between gap-4 mt-6'>
                <button
                  type='button'
                  onClick={handleBack}
                  className='w-1/2 bg-gray-200 text-gray-800 py-3 px-4 rounded-md font-semibold text-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition duration-200'
                >
                  Back
                </button>
                <button
                  type='button'
                  onClick={handleCreateAccount}
                  className='w-1/2 bg-blue-600 text-white py-3 px-4 rounded-md font-semibold text-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200'
                >
                  Create Account
                </button>
              </div>
            </>
          )}
        </form>

        {/* Login Link */}
        <div className='text-center mt-8'>
          <span className='text-gray-600'>Or </span>
          <Link to='/login'>
            <a href='#' className='text-blue-600 hover:underline'>
              log in to your existing account
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
}

export default Register
