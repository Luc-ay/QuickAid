import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const {
    formData,
    errors,
    handleChange,
    handleLogin,
  } = useLogin(); 

  return (
    <div className="min-h-screen font-['Inter'] flex flex-col lg:flex-row bg-gray-100">
      <div className="hidden lg:flex lg:w-1/2 bg-[#1E88E5] items-center justify-center p-8 rounded-r-[60px] overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <text x="5" y="15" fill="white" fontSize="8" opacity="0.8">+</text>
            <text x="25" y="30" fill="white" fontSize="10" opacity="0.6">+</text>
            <text x="70" y="5" fill="white" fontSize="6" opacity="0.7">+</text>
            <text x="90" y="25" fill="white" fontSize="9" opacity="0.5">+</text>
            <text x="10" y="70" fill="white" fontSize="7" opacity="0.9">+</text>
            <text x="40" y="85" fill="white" fontSize="11" opacity="0.6">+</text>
            <text x="80" y="95" fill="white" fontSize="8" opacity="0.8">+</text>
          </svg>

          <svg className="absolute w-16 h-16 top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 rotate-12" fill="white" viewBox="0 0 24 24">
            <path d="M19 2H5C3.34 2 2 3.34 2 5v14c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3zm-1 10h-2v2h-2v-2h-2v2h-2v-2H8v2H6v-2H4V5c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v7zM11 7h2v2h-2V7zm0 4h2v2h-2v-2z"/>
          </svg>

          <svg className="absolute w-24 h-24 top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 rotate-[-20deg]" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h3l2-8 4 16 2-8h3" />
          </svg>

          <div className="absolute top-1/3 right-1/4 text-white opacity-90">
            <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <svg className="absolute w-16 h-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h3l2-8 4 16 2-8h3" />
            </svg>
          </div>

          <svg className="absolute w-20 h-20 bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-[-15deg]" fill="white" viewBox="0 0 24 24">
            <path d="M15 1H9c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 19H9V4h6v16zM11 6h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2z"/>
          </svg>
        </div>


        <div className="text-white text-center max-w-md relative z-10">
          <img
            src="/male-doc.webp" 
            alt="Qualified doctors"
            className="mb-6 max-w-full h-auto"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/400x400/87CEEB/FFFFFF?text=Doctor";
            }}
          />
          <h2 className="text-3xl font-semibold">
            Qualified doctors ready to attend to you.
          </h2>
        </div>

        <div className="absolute top-8 left-8 p-3 bg-white bg-opacity-20 rounded-full cursor-pointer">
          <Link to="/">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          </Link>
        </div>
      </div>

      {/* Right side - form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <span className="text-blue-600 font-extrabold text-2xl gap-2 flex items-center">
              <img className="w-4" src="/arrow-logo.png" alt="" />
              QuickAid
            </span>
          </div>
          <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900">
            Log in to your account
          </h2>

          <p className="text-center text-sm text-gray-500 mb-6">
            Or{" "}
            <Link to="/register">
            <a href="#" className="text-blue-600 hover:underline">
              sign up for a new account
            </a>
            </Link>
          </p>

          {/* Form */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full px-4 py-2 mt-1 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`w-full px-4 py-2 mt-1 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Options */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <span className="ml-2 text-gray-700">Remember me</span>
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot your password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
