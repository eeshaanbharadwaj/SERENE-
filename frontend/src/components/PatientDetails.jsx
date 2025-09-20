import React, { useState } from 'react';
import { FaArrowLeft, FaChartLine, FaComments, FaCalendar, FaExclamationTriangle, FaCheckCircle, FaClock, FaUser } from 'react-icons/fa';

const PatientDetails = ({ patient, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FaUser },
    { id: 'mood', label: 'Mood Tracking', icon: FaChartLine },
    { id: 'messages', label: 'Messages', icon: FaComments },
    { id: 'appointments', label: 'Appointments', icon: FaCalendar }
  ];

  const moodEntries = [
    { date: '2024-01-15', mood: 8, notes: 'Feeling great today!', symptoms: { sleep: 7, anxiety: 3, energy: 8 } },
    { date: '2024-01-14', mood: 6, notes: 'Decent day, some stress.', symptoms: { sleep: 6, anxiety: 5, energy: 6 } },
    { date: '2024-01-13', mood: 4, notes: 'Feeling low, trouble sleeping.', symptoms: { sleep: 3, anxiety: 7, energy: 4 } },
    { date: '2024-01-12', mood: 7, notes: 'Good day overall.', symptoms: { sleep: 7, anxiety: 4, energy: 7 } }
  ];

  const messages = [
    { id: 1, from: 'Patient', content: 'I\'ve been feeling better this week.', timestamp: '2024-01-15 10:30', isRead: true },
    { id: 2, from: 'Doctor', content: 'That\'s great to hear! Keep up the good work.', timestamp: '2024-01-15 11:15', isRead: true },
    { id: 3, from: 'Patient', content: 'Should I adjust my medication?', timestamp: '2024-01-14 14:20', isRead: false }
  ];

  const appointments = [
    { id: 1, date: '2024-01-20', time: '2:00 PM', type: 'Follow-up', status: 'scheduled' },
    { id: 2, date: '2024-01-16', time: '10:00 AM', type: 'Emergency', status: 'completed' },
    { id: 3, date: '2024-01-25', time: '3:30 PM', type: 'Regular', status: 'scheduled' }
  ];

  const averageMood = moodEntries.length > 0 
    ? (moodEntries.reduce((sum, entry) => sum + entry.mood, 0) / moodEntries.length).toFixed(1)
    : 0;

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Patient Info */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Patient Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Name</p>
                  <p className="font-medium text-gray-900">{patient.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Age</p>
                  <p className="font-medium text-gray-900">{patient.age} years old</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Diagnosis</p>
                  <p className="font-medium text-gray-900">{patient.diagnosis}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Risk Level</p>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    patient.riskLevel === 'high' ? 'bg-red-100 text-red-800' :
                    patient.riskLevel === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {patient.riskLevel} risk
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <FaChartLine className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-600 font-medium">Average Mood</p>
                    <p className="text-2xl font-bold text-blue-900">{averageMood}/10</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                    <FaCheckCircle className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-green-600 font-medium">Mood Entries</p>
                    <p className="text-2xl font-bold text-green-900">{moodEntries.length}</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <FaCalendar className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-purple-600 font-medium">Next Appointment</p>
                    <p className="text-lg font-bold text-purple-900">{patient.nextAppointment}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <FaChartLine className="text-blue-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Mood entry submitted</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <FaComments className="text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Message received</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <FaCalendar className="text-purple-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Appointment scheduled</p>
                    <p className="text-xs text-gray-500">3 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'mood':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Mood Tracking History</h3>
            <div className="space-y-4">
              {moodEntries.map((entry, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg font-bold text-gray-900">{entry.mood}/10</span>
                      <span className="text-sm text-gray-500">{entry.date}</span>
                    </div>
                    <div className="flex space-x-2">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        Sleep: {entry.symptoms.sleep}
                      </span>
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                        Anxiety: {entry.symptoms.anxiety}
                      </span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        Energy: {entry.symptoms.energy}
                      </span>
                    </div>
                  </div>
                  {entry.notes && (
                    <p className="text-gray-700 text-sm">{entry.notes}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'messages':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">Messages</h3>
              <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
                Send Message
              </button>
            </div>
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`border rounded-lg p-4 ${
                  message.from === 'Doctor' ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-gray-900">{message.from}</span>
                    <span className="text-sm text-gray-500">{message.timestamp}</span>
                  </div>
                  <p className="text-gray-700">{message.content}</p>
                  {!message.isRead && message.from === 'Patient' && (
                    <div className="mt-2">
                      <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Unread</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'appointments':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">Appointments</h3>
              <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
                Schedule Appointment
              </button>
            </div>
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">{appointment.type}</h4>
                      <p className="text-sm text-gray-600">{appointment.date} at {appointment.time}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      appointment.status === 'completed' ? 'bg-green-100 text-green-800' :
                      appointment.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {appointment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaArrowLeft />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{patient.name}</h1>
            <p className="text-gray-600">{patient.diagnosis} • Age {patient.age}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            patient.riskLevel === 'high' ? 'bg-red-100 text-red-800' :
            patient.riskLevel === 'medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-green-100 text-green-800'
          }`}>
            {patient.riskLevel} risk
          </span>
          {patient.riskLevel === 'high' && (
            <FaExclamationTriangle className="text-red-500" />
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-emerald-500 text-emerald-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="mr-2" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Content */}
      {renderContent()}
    </div>
  );
};

export default PatientDetails;
