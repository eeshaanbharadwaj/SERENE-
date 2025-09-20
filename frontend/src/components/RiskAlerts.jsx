import React, { useState } from 'react';
import { FaExclamationTriangle, FaBell, FaCheckCircle, FaTimes, FaEye, FaEyeSlash } from 'react-icons/fa';

const RiskAlerts = () => {
  const [alerts] = useState([
    {
      id: 1,
      type: 'high',
      title: 'High Risk Symptoms Detected',
      message: 'Your recent mood entries indicate potential manic episode symptoms. Please contact your doctor immediately.',
      timestamp: '2024-01-15 10:30',
      isRead: false,
      severity: 'high'
    },
    {
      id: 2,
      type: 'medium',
      title: 'Sleep Pattern Alert',
      message: 'You\'ve reported less than 4 hours of sleep for 3 consecutive days. This may affect your mood stability.',
      timestamp: '2024-01-14 08:15',
      isRead: true,
      severity: 'medium'
    },
    {
      id: 3,
      type: 'low',
      title: 'Medication Reminder',
      message: 'You haven\'t logged taking your medication for 2 days. Please ensure you\'re following your treatment plan.',
      timestamp: '2024-01-13 14:20',
      isRead: true,
      severity: 'low'
    },
    {
      id: 4,
      type: 'high',
      title: 'Suicidal Ideation Detected',
      message: 'Your responses indicate thoughts of self-harm. Please contact emergency services immediately or call 988.',
      timestamp: '2024-01-12 16:45',
      isRead: false,
      severity: 'high'
    }
  ]);

  const [selectedAlert, setSelectedAlert] = useState(null);
  const [showAllAlerts, setShowAllAlerts] = useState(false);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'high':
        return <FaExclamationTriangle className="text-red-500" />;
      case 'medium':
        return <FaBell className="text-yellow-500" />;
      case 'low':
        return <FaCheckCircle className="text-blue-500" />;
      default:
        return <FaBell className="text-gray-500" />;
    }
  };

  const unreadCount = alerts.filter(alert => !alert.isRead).length;
  const highRiskCount = alerts.filter(alert => alert.severity === 'high').length;

  const displayedAlerts = showAllAlerts ? alerts : alerts.slice(0, 3);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Risk Alerts</h1>
          <p className="text-gray-600">Monitor important health alerts and notifications</p>
        </div>
        <div className="flex items-center space-x-4">
          {unreadCount > 0 && (
            <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
              {unreadCount} unread
            </div>
          )}
          <button
            onClick={() => setShowAllAlerts(!showAllAlerts)}
            className="text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center"
          >
            {showAllAlerts ? (
              <>
                <FaEyeSlash className="mr-1" />
                Show Less
              </>
            ) : (
              <>
                <FaEye className="mr-1" />
                Show All
              </>
            )}
          </button>
        </div>
      </div>

      {/* High Risk Banner */}
      {highRiskCount > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <FaExclamationTriangle className="text-red-500 text-xl mr-3" />
            <div>
              <h3 className="text-red-900 font-semibold">High Priority Alert</h3>
              <p className="text-red-700 text-sm">
                You have {highRiskCount} high-risk alert{highRiskCount > 1 ? 's' : ''} that require immediate attention.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Emergency Contact Card */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-6 text-white mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Emergency Contacts</h3>
            <p className="text-red-100 text-sm mb-3">
              If you're experiencing a mental health crisis, contact these resources immediately:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">National Suicide Prevention Lifeline</p>
                <p className="text-red-100">Call 988</p>
              </div>
              <div>
                <p className="font-medium">Crisis Text Line</p>
                <p className="text-red-100">Text HOME to 741741</p>
              </div>
            </div>
          </div>
          <FaExclamationTriangle className="text-red-200 text-4xl" />
        </div>
      </div>

      {/* Alerts List */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Recent Alerts</h3>
        
        {displayedAlerts.map((alert) => (
          <div
            key={alert.id}
            onClick={() => setSelectedAlert(alert)}
            className={`bg-white border rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow ${
              !alert.isRead ? 'border-l-4 border-l-red-500 bg-red-50' : 'border-gray-200'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 flex-1">
                <div className="flex-shrink-0 mt-1">
                  {getSeverityIcon(alert.severity)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-semibold text-gray-900">{alert.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                      {alert.severity}
                    </span>
                    {!alert.isRead && (
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{alert.message}</p>
                  <p className="text-xs text-gray-500">{alert.timestamp}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Alert Detail Modal */}
      {selectedAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                {getSeverityIcon(selectedAlert.severity)}
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(selectedAlert.severity)}`}>
                  {selectedAlert.severity}
                </span>
              </div>
              <button
                onClick={() => setSelectedAlert(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <FaTimes />
              </button>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{selectedAlert.title}</h3>
            <p className="text-gray-600 mb-4">{selectedAlert.message}</p>
            <p className="text-sm text-gray-500 mb-6">{selectedAlert.timestamp}</p>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setSelectedAlert(null)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
              {selectedAlert.severity === 'high' && (
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                  Contact Doctor
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {alerts.length === 0 && (
        <div className="text-center py-12">
          <FaCheckCircle className="text-gray-300 text-4xl mx-auto mb-4" />
          <p className="text-gray-500">No alerts at this time. Keep up the great work!</p>
        </div>
      )}
    </div>
  );
};

export default RiskAlerts;
