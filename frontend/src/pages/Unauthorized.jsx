import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaHome, FaArrowLeft } from 'react-icons/fa';

const Unauthorized = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Icon */}
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaExclamationTriangle className="text-red-600 text-3xl" />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Access Denied
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-8 leading-relaxed">
            You don't have permission to access this page. This area is restricted to specific user types.
          </p>

          {/* Actions */}
          <div className="space-y-4">
            <Link
              to="/"
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
            >
              <FaHome className="mr-2" />
              Go Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="w-full border-2 border-gray-300 text-gray-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 flex items-center justify-center"
            >
              <FaArrowLeft className="mr-2" />
              Go Back
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              If you believe this is an error, please contact support or try logging in with a different account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
