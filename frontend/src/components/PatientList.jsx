import React, { useState } from 'react';
import { FaUser, FaExclamationTriangle, FaCheckCircle, FaClock, FaEye, FaComments, FaChartLine } from 'react-icons/fa';

const PatientList = ({ onSelectPatient }) => {
  const [patients] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      age: 28,
      diagnosis: 'Bipolar Disorder',
      lastEntry: '2024-01-15',
      moodTrend: 'improving',
      riskLevel: 'low',
      status: 'active',
      nextAppointment: '2024-01-20'
    },
    {
      id: 2,
      name: 'Michael Chen',
      age: 34,
      diagnosis: 'Borderline Personality Disorder',
      lastEntry: '2024-01-14',
      moodTrend: 'stable',
      riskLevel: 'medium',
      status: 'active',
      nextAppointment: '2024-01-18'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      age: 25,
      diagnosis: 'Bipolar Disorder',
      lastEntry: '2024-01-13',
      moodTrend: 'declining',
      riskLevel: 'high',
      status: 'active',
      nextAppointment: '2024-01-16'
    },
    {
      id: 4,
      name: 'David Thompson',
      age: 42,
      diagnosis: 'Borderline Personality Disorder',
      lastEntry: '2024-01-12',
      moodTrend: 'stable',
      riskLevel: 'low',
      status: 'inactive',
      nextAppointment: '2024-01-25'
    }
  ]);

  const getRiskColor = (riskLevel) => {
    switch (riskLevel) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'improving':
        return <FaCheckCircle className="text-green-500" />;
      case 'declining':
        return <FaExclamationTriangle className="text-red-500" />;
      case 'stable':
        return <FaClock className="text-blue-500" />;
      default:
        return <FaClock className="text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Patients</h1>
          <p className="text-gray-600">Manage your patient roster and monitor their progress</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-500">
            {patients.filter(p => p.status === 'active').length} active patients
          </div>
          <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center">
            <FaUser className="mr-2" />
            Add Patient
          </button>
        </div>
      </div>

      {/* Patient Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patients.map((patient) => (
          <div
            key={patient.id}
            onClick={() => onSelectPatient(patient)}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {patient.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{patient.name}</h3>
                  <p className="text-sm text-gray-500">Age {patient.age}</p>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-1">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(patient.riskLevel)}`}>
                  {patient.riskLevel} risk
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(patient.status)}`}>
                  {patient.status}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Diagnosis</p>
                <p className="font-medium text-gray-900">{patient.diagnosis}</p>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Last Entry</p>
                  <p className="text-sm font-medium text-gray-900">{patient.lastEntry}</p>
                </div>
                <div className="flex items-center space-x-1">
                  {getTrendIcon(patient.moodTrend)}
                  <span className="text-sm text-gray-600 capitalize">{patient.moodTrend}</span>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600">Next Appointment</p>
                <p className="text-sm font-medium text-gray-900">{patient.nextAppointment}</p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between">
              <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center">
                <FaEye className="mr-1" />
                View Details
              </button>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                <FaComments className="mr-1" />
                Message
              </button>
            </div>
          </div>
        ))}
      </div>

      {patients.length === 0 && (
        <div className="text-center py-12">
          <FaUser className="text-gray-300 text-4xl mx-auto mb-4" />
          <p className="text-gray-500">No patients found.</p>
        </div>
      )}
    </div>
  );
};

export default PatientList;
