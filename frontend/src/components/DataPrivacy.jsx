import React, { useState } from 'react';
import { FaDownload, FaLock, FaShieldAlt, FaEye, FaEyeSlash, FaUserSecret, FaFileExport, FaCog } from 'react-icons/fa';

const DataPrivacy = () => {
  const [privacySettings, setPrivacySettings] = useState({
    shareMoodData: true,
    shareSymptoms: true,
    shareNotes: false,
    allowAnalytics: true,
    dataRetention: '2years'
  });

  const [showExportModal, setShowExportModal] = useState(false);
  const [exportFormat, setExportFormat] = useState('pdf');

  const handleSettingChange = (setting, value) => {
    setPrivacySettings({
      ...privacySettings,
      [setting]: value
    });
  };

  const exportData = () => {
    // In a real app, this would generate and download the data
    alert(`Exporting data in ${exportFormat.toUpperCase()} format...`);
    setShowExportModal(false);
  };

  const deleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      alert('Account deletion requested. You will receive an email confirmation.');
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Data Privacy & Security</h1>
        <p className="text-gray-600">Manage your data privacy settings and export your information</p>
      </div>

      {/* Privacy Overview */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
        <div className="flex items-center mb-4">
          <FaShieldAlt className="text-blue-500 text-2xl mr-3" />
          <h2 className="text-lg font-semibold text-blue-900">Your Privacy is Protected</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center">
            <FaLock className="text-green-500 mr-2" />
            <span className="text-blue-800">End-to-end encryption</span>
          </div>
          <div className="flex items-center">
            <FaShieldAlt className="text-green-500 mr-2" />
            <span className="text-blue-800">HIPAA compliant</span>
          </div>
          <div className="flex items-center">
            <FaUserSecret className="text-green-500 mr-2" />
            <span className="text-blue-800">Your data, your control</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Privacy Settings */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
            <FaCog className="mr-2 text-gray-600" />
            Privacy Settings
          </h3>

          <div className="space-y-6">
            {/* Data Sharing Settings */}
            <div>
              <h4 className="text-md font-medium text-gray-900 mb-4">Data Sharing with Healthcare Provider</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Share Mood Data</p>
                    <p className="text-xs text-gray-500">Allow your doctor to view your mood tracking data</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={privacySettings.shareMoodData}
                      onChange={(e) => handleSettingChange('shareMoodData', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Share Symptoms</p>
                    <p className="text-xs text-gray-500">Allow your doctor to view your symptom tracking</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={privacySettings.shareSymptoms}
                      onChange={(e) => handleSettingChange('shareSymptoms', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Share Personal Notes</p>
                    <p className="text-xs text-gray-500">Allow your doctor to view your journal entries</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={privacySettings.shareNotes}
                      onChange={(e) => handleSettingChange('shareNotes', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Analytics Settings */}
            <div>
              <h4 className="text-md font-medium text-gray-900 mb-4">Analytics & Research</h4>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">Allow Anonymous Analytics</p>
                  <p className="text-xs text-gray-500">Help improve the platform with anonymous usage data</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={privacySettings.allowAnalytics}
                    onChange={(e) => handleSettingChange('allowAnalytics', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                </label>
              </div>
            </div>

            {/* Data Retention */}
            <div>
              <h4 className="text-md font-medium text-gray-900 mb-4">Data Retention</h4>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">How long to keep your data</label>
                <select
                  value={privacySettings.dataRetention}
                  onChange={(e) => handleSettingChange('dataRetention', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="1year">1 year</option>
                  <option value="2years">2 years</option>
                  <option value="5years">5 years</option>
                  <option value="indefinite">Indefinitely</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">You can request data deletion at any time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Export & Management */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
            <FaFileExport className="mr-2 text-gray-600" />
            Data Export & Management
          </h3>

          <div className="space-y-6">
            {/* Export Data */}
            <div>
              <h4 className="text-md font-medium text-gray-900 mb-4">Export Your Data</h4>
              <p className="text-sm text-gray-600 mb-4">
                Download a copy of all your data including mood entries, questionnaires, and messages.
              </p>
              <button
                onClick={() => setShowExportModal(true)}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center"
              >
                <FaDownload className="mr-2" />
                Export Data
              </button>
            </div>

            {/* Data Summary */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="text-sm font-medium text-gray-900 mb-3">Your Data Summary</h5>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Mood Entries:</span>
                  <span className="font-medium">24 entries</span>
                </div>
                <div className="flex justify-between">
                  <span>Questionnaires:</span>
                  <span className="font-medium">8 completed</span>
                </div>
                <div className="flex justify-between">
                  <span>Messages:</span>
                  <span className="font-medium">12 conversations</span>
                </div>
                <div className="flex justify-between">
                  <span>Account Created:</span>
                  <span className="font-medium">Jan 1, 2024</span>
                </div>
              </div>
            </div>

            {/* Account Actions */}
            <div>
              <h4 className="text-md font-medium text-gray-900 mb-4">Account Actions</h4>
              <div className="space-y-3">
                <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <p className="text-sm font-medium text-gray-900">Change Password</p>
                  <p className="text-xs text-gray-500">Update your account password</p>
                </button>
                
                <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <p className="text-sm font-medium text-gray-900">Two-Factor Authentication</p>
                  <p className="text-xs text-gray-500">Add extra security to your account</p>
                </button>
                
                <button 
                  onClick={deleteAccount}
                  className="w-full text-left p-3 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
                >
                  <p className="text-sm font-medium text-red-900">Delete Account</p>
                  <p className="text-xs text-red-500">Permanently delete your account and data</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Export Modal */}
      {showExportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Export Your Data</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Export Format</label>
                <select
                  value={exportFormat}
                  onChange={(e) => setExportFormat(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="pdf">PDF Report</option>
                  <option value="csv">CSV Data</option>
                  <option value="json">JSON Data</option>
                </select>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-sm text-blue-800">
                  Your data will be prepared and sent to your email address. This process may take a few minutes.
                </p>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowExportModal(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={exportData}
                className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Export Data
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataPrivacy;
