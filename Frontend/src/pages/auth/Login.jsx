import React from 'react';
import { Link } from "react-router-dom";
import { useLogin } from '../../customHooks/useLogin';

const Login = () => {
  const {
    formData,
    errors,
    isLoading,
    handleChange,
    handleLogin,
  } = useLogin();

  return (
    <div className="min-h-screen font-['Inter'] flex flex-col lg:flex-row bg-white overflow-hidden">
      <div className="relative hidden lg:flex lg:w-2/5 bg-[#1E88E5] items-center justify-center p-12 rounded-r-[80px]">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <img
            src="/assets.png"
            alt="Background asset"
            className="w-full h-full object-cover"
          />
        </div>


        <div className="absolute top-8 left-8 p-3 cursor-pointer hover:bg-opacity-30 transition-colors">
          <Link to="/">
            <img src="/back.png" alt="" />
          </Link>
        </div>

        <div className="text-white max-w-sm relative z-10">
          <h2 className="text-3xl mb-7 font-semibold leading-tight">
            Qualified doctors ready to attend to you.
          </h2>
          <img
            src="/rafiki.png"
            alt="Qualified doctors"
            className="mb-8 w-full max-w-[400px] h-auto mx-auto"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/350x350/1E88E5/FFFFFF?text=Doctor";
            }}
          />
        </div>
      </div>

      <div className="w-full lg:w-3/5 flex items-center justify-center px-6 py-12 sm:px-10 bg-white">
        <div className="max-w-md w-full space-y-8 px-4 sm:px-0">

          {/* Logo  */}
          <div className='space-y-4'>
            <div className="flex justify-center items-center gap-2">
              <img className="w-8 h-8" src="/logo.svg" alt="QuickAid Logo" />
              <span className="text-[#1E88E5] font-bold text-3xl">QuickAid</span>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Log in to your account
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Or{' '}
                <Link to="/auth/signup" className="font-medium text-blue-600 hover:text-blue-500">
                  sign up for a new account
                </Link>
              </p>
            </div>
          </div>

          {/* Form */}
          <form className="mt-8 shadow-lg p-10 rounded-lg bg-white space-y-6" onSubmit={(e) => e.preventDefault()}>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 mt-1 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="mt-4">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-2 mt-1 border ${errors.password ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition`}
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm mt-4 gap-2 sm:gap-0">
              <label className="flex items-center text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-xs sm:text-sm">Remember me</span>
              </label>
              <Link to="#" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </Link>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleLogin}
                disabled={isLoading}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isLoading ? 'Logging in...' : 'Log in'}
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/auth/signup" className="font-medium text-blue-600 hover:text-blue-500">
              sign up for a new account
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;