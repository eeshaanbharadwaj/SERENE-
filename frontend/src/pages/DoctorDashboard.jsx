import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { FaUserMd, FaUsers, FaChartLine, FaComments, FaClipboardList, FaSignOutAlt, FaPlus, FaBell, FaExclamationTriangle } from 'react-icons/fa';
import PatientList from '../components/PatientList';
import PatientDetails from '../components/PatientDetails';
import QuestionnaireBuilder from '../components/QuestionnaireBuilder';
import DoctorMessages from '../components/DoctorMessages';
import Analytics from '../components/Analytics';

const DoctorDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('patients');
  const [selectedPatient, setSelectedPatient] = useState(null);

  const tabs = [
    { id: 'patients', label: 'Patients', icon: FaUsers },
    { id: 'questionnaires', label: 'Questionnaires', icon: FaClipboardList },
    { id: 'messages', label: 'Messages', icon: FaComments },
    { id: 'analytics', label: 'Analytics', icon: FaChartLine },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'patients':
        return selectedPatient ? (
          <PatientDetails patient={selectedPatient} onBack={() => setSelectedPatient(null)} />
        ) : (
          <PatientList onSelectPatient={setSelectedPatient} />
        );
      case 'questionnaires':
        return <QuestionnaireBuilder />;
      case 'messages':
        return <DoctorMessages />;
      case 'analytics':
        return <Analytics />;
      default:
        return <PatientList onSelectPatient={setSelectedPatient} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <FaUserMd className="text-white text-sm" />
              </div>
              <span className="text-xl font-bold text-gray-800">Serene</span>
              <span className="text-sm text-gray-500">Doctor Portal</span>
            </div>

            {/* User Info & Actions */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors relative">
                  <FaBell />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">
                    {user?.name?.charAt(0) || 'D'}
                  </span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">{user?.name || 'Dr. User'}</p>
                  <p className="text-xs text-gray-500">Licensed Therapist</p>
                </div>
              </div>
              
              <button
                onClick={logout}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                title="Logout"
              >
                <FaSignOutAlt />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Dashboard</h2>
              
              {/* Navigation */}
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        if (tab.id !== 'patients') {
                          setSelectedPatient(null);
                        }
                      }}
                      className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="mr-3 text-sm" />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Quick Stats */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Active Patients</span>
                    <span className="text-sm font-semibold text-emerald-600">24</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Pending Messages</span>
                    <span className="text-sm font-semibold text-blue-600">7</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">High Risk Alerts</span>
                    <span className="text-sm font-semibold text-red-600">2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
