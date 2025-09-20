import React, { useState } from 'react';
import { FaCheckCircle, FaClock, FaExclamationTriangle, FaPlay, FaCalendar } from 'react-icons/fa';

const QuestionnaireList = () => {
  const [questionnaires] = useState([
    {
      id: 1,
      title: 'Daily Mood Assessment',
      description: 'Quick daily check-in to track your mood and symptoms',
      dueDate: '2024-01-16',
      status: 'pending',
      questions: 5,
      estimatedTime: '2 minutes'
    },
    {
      id: 2,
      title: 'Weekly Mental Health Review',
      description: 'Comprehensive weekly assessment of your mental health progress',
      dueDate: '2024-01-20',
      status: 'pending',
      questions: 15,
      estimatedTime: '10 minutes'
    },
    {
      id: 3,
      title: 'Sleep Quality Survey',
      description: 'Track your sleep patterns and quality',
      dueDate: '2024-01-18',
      status: 'completed',
      questions: 8,
      estimatedTime: '5 minutes'
    },
    {
      id: 4,
      title: 'Anxiety Level Check',
      description: 'Monitor anxiety levels and triggers',
      dueDate: '2024-01-17',
      status: 'overdue',
      questions: 6,
      estimatedTime: '3 minutes'
    }
  ]);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <FaCheckCircle className="text-green-500" />;
      case 'overdue':
        return <FaExclamationTriangle className="text-red-500" />;
      default:
        return <FaClock className="text-yellow-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  const startQuestionnaire = (id) => {
    // In a real app, this would navigate to the questionnaire
    alert(`Starting questionnaire ${id}`);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Questionnaires</h1>
          <p className="text-gray-600">Complete your assigned assessments</p>
        </div>
        <div className="text-sm text-gray-500">
          {questionnaires.filter(q => q.status === 'pending').length} pending
        </div>
      </div>

      <div className="space-y-4">
        {questionnaires.map((questionnaire) => (
          <div key={questionnaire.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{questionnaire.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(questionnaire.status)}`}>
                    {questionnaire.status}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-3">{questionnaire.description}</p>
                
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <FaCalendar className="mr-1" />
                    Due: {questionnaire.dueDate}
                  </div>
                  <div>
                    {questionnaire.questions} questions
                  </div>
                  <div>
                    ~{questionnaire.estimatedTime}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 ml-4">
                <div className="flex items-center text-gray-400">
                  {getStatusIcon(questionnaire.status)}
                </div>
                
                {questionnaire.status !== 'completed' && (
                  <button
                    onClick={() => startQuestionnaire(questionnaire.id)}
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center"
                  >
                    <FaPlay className="mr-2" />
                    {questionnaire.status === 'overdue' ? 'Start Now' : 'Start'}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {questionnaires.length === 0 && (
        <div className="text-center py-12">
          <FaCheckCircle className="text-gray-300 text-4xl mx-auto mb-4" />
          <p className="text-gray-500">No questionnaires assigned at the moment.</p>
        </div>
      )}
    </div>
  );
};

export default QuestionnaireList;
