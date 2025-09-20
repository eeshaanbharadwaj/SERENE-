import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { FaHeart, FaChartLine, FaComments, FaBookOpen, FaBell, FaUser, FaSignOutAlt, FaPlus, FaCalendar, FaDownload, FaExclamationTriangle, FaShieldAlt } from 'react-icons/fa';
import MoodTracker from '../components/MoodTracker';
import QuestionnaireList from '../components/QuestionnaireList';
import Messages from '../components/Messages';
import Resources from '../components/Resources';
import RiskAlerts from '../components/RiskAlerts';
import DataPrivacy from '../components/DataPrivacy';

const PatientDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('mood');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tabs = [
    { id: 'mood', label: 'Mood Tracker', icon: FaHeart },
    { id: 'questionnaires', label: 'Questionnaires', icon: FaChartLine },
    { id: 'messages', label: 'Messages', icon: FaComments },
    { id: 'resources', label: 'Resources', icon: FaBookOpen },
    { id: 'alerts', label: 'Alerts', icon: FaExclamationTriangle },
    { id: 'privacy', label: 'Privacy', icon: FaShieldAlt },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'mood':
        return <MoodTracker />;
      case 'questionnaires':
        return <QuestionnaireList />;
      case 'messages':
        return <Messages />;
      case 'resources':
        return <Resources />;
      case 'alerts':
        return <RiskAlerts />;
      case 'privacy':
        return <DataPrivacy />;
      default:
        return <MoodTracker />;
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
                <FaHeart className="text-white text-sm" />
              </div>
              <span className="text-xl font-bold text-gray-800">Serene</span>
            </div>

            {/* User Info & Actions */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">
                    {user?.name?.charAt(0) || 'U'}
                  </span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">{user?.name || 'User'}</p>
                  <p className="text-xs text-gray-500">Patient</p>
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
                      onClick={() => setActiveTab(tab.id)}
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
                    <span className="text-sm text-gray-600">Mood Entries</span>
                    <span className="text-sm font-semibold text-emerald-600">24</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Streak</span>
                    <span className="text-sm font-semibold text-blue-600">7 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Avg Mood</span>
                    <span className="text-sm font-semibold text-purple-600">7.2/10</span>
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

export default PatientDashboard;
