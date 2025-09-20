import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaPlay, FaUsers, FaClock, FaCheckCircle } from 'react-icons/fa';

const QuestionnaireBuilder = () => {
  const [questionnaires, setQuestionnaires] = useState([
    {
      id: 1,
      title: 'Daily Mood Assessment',
      description: 'Quick daily check-in to track mood and symptoms',
      questions: 5,
      assignedTo: 12,
      status: 'active',
      createdAt: '2024-01-10'
    },
    {
      id: 2,
      title: 'Weekly Mental Health Review',
      description: 'Comprehensive weekly assessment of mental health progress',
      questions: 15,
      assignedTo: 8,
      status: 'active',
      createdAt: '2024-01-08'
    },
    {
      id: 3,
      title: 'Sleep Quality Survey',
      description: 'Track sleep patterns and quality',
      questions: 8,
      assignedTo: 15,
      status: 'draft',
      createdAt: '2024-01-12'
    }
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newQuestionnaire, setNewQuestionnaire] = useState({
    title: '',
    description: '',
    questions: []
  });

  const addQuestion = () => {
    setNewQuestionnaire({
      ...newQuestionnaire,
      questions: [...newQuestionnaire.questions, {
        id: Date.now(),
        text: '',
        type: 'multiple-choice',
        options: ['Option 1', 'Option 2']
      }]
    });
  };

  const updateQuestion = (questionId, field, value) => {
    setNewQuestionnaire({
      ...newQuestionnaire,
      questions: newQuestionnaire.questions.map(q =>
        q.id === questionId ? { ...q, [field]: value } : q
      )
    });
  };

  const addOption = (questionId) => {
    setNewQuestionnaire({
      ...newQuestionnaire,
      questions: newQuestionnaire.questions.map(q =>
        q.id === questionId 
          ? { ...q, options: [...q.options, `Option ${q.options.length + 1}`] }
          : q
      )
    });
  };

  const removeQuestion = (questionId) => {
    setNewQuestionnaire({
      ...newQuestionnaire,
      questions: newQuestionnaire.questions.filter(q => q.id !== questionId)
    });
  };

  const saveQuestionnaire = () => {
    const questionnaire = {
      id: Date.now(),
      ...newQuestionnaire,
      questions: newQuestionnaire.questions.length,
      assignedTo: 0,
      status: 'draft',
      createdAt: new Date().toISOString().split('T')[0]
    };
    
    setQuestionnaires([questionnaire, ...questionnaires]);
    setShowCreateForm(false);
    setNewQuestionnaire({ title: '', description: '', questions: [] });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Questionnaire Builder</h1>
          <p className="text-gray-600">Create and manage patient assessments</p>
        </div>
        <button
          onClick={() => setShowCreateForm(true)}
          className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center"
        >
          <FaPlus className="mr-2" />
          Create Questionnaire
        </button>
      </div>

      {/* Create Form */}
      {showCreateForm && (
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Questionnaire</h3>
          
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={newQuestionnaire.title}
                  onChange={(e) => setNewQuestionnaire({...newQuestionnaire, title: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter questionnaire title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <input
                  type="text"
                  value={newQuestionnaire.description}
                  onChange={(e) => setNewQuestionnaire({...newQuestionnaire, description: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter description"
                />
              </div>
            </div>

            {/* Questions */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-md font-semibold text-gray-900">Questions</h4>
                <button
                  onClick={addQuestion}
                  className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors flex items-center text-sm"
                >
                  <FaPlus className="mr-1" />
                  Add Question
                </button>
              </div>

              <div className="space-y-4">
                {newQuestionnaire.questions.map((question, index) => (
                  <div key={question.id} className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h5 className="font-medium text-gray-900">Question {index + 1}</h5>
                      <button
                        onClick={() => removeQuestion(question.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Question Text</label>
                        <input
                          type="text"
                          value={question.text}
                          onChange={(e) => updateQuestion(question.id, 'text', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="Enter question text"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Question Type</label>
                        <select
                          value={question.type}
                          onChange={(e) => updateQuestion(question.id, 'type', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        >
                          <option value="multiple-choice">Multiple Choice</option>
                          <option value="rating">Rating Scale</option>
                          <option value="text">Text Input</option>
                          <option value="yes-no">Yes/No</option>
                        </select>
                      </div>

                      {(question.type === 'multiple-choice' || question.type === 'rating') && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Options</label>
                          <div className="space-y-2">
                            {question.options.map((option, optionIndex) => (
                              <div key={optionIndex} className="flex items-center space-x-2">
                                <input
                                  type="text"
                                  value={option}
                                  onChange={(e) => {
                                    const newOptions = [...question.options];
                                    newOptions[optionIndex] = e.target.value;
                                    updateQuestion(question.id, 'options', newOptions);
                                  }}
                                  className="flex-1 px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                />
                              </div>
                            ))}
                            <button
                              onClick={() => addOption(question.id)}
                              className="text-blue-600 hover:text-blue-700 text-sm flex items-center"
                            >
                              <FaPlus className="mr-1" />
                              Add Option
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowCreateForm(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={saveQuestionnaire}
                className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Save Questionnaire
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Questionnaires List */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Existing Questionnaires</h3>
        
        {questionnaires.map((questionnaire) => (
          <div key={questionnaire.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">{questionnaire.title}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(questionnaire.status)}`}>
                    {questionnaire.status}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-3">{questionnaire.description}</p>
                
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <FaUsers className="mr-1" />
                    {questionnaire.assignedTo} patients
                  </div>
                  <div className="flex items-center">
                    <FaCheckCircle className="mr-1" />
                    {questionnaire.questions} questions
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-1" />
                    Created {questionnaire.createdAt}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 ml-4">
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <FaEdit />
                </button>
                <button className="bg-emerald-500 text-white px-3 py-1 rounded-lg hover:bg-emerald-600 transition-colors flex items-center text-sm">
                  <FaPlay className="mr-1" />
                  Assign
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {questionnaires.length === 0 && (
        <div className="text-center py-12">
          <FaCheckCircle className="text-gray-300 text-4xl mx-auto mb-4" />
          <p className="text-gray-500">No questionnaires created yet.</p>
        </div>
      )}
    </div>
  );
};

export default QuestionnaireBuilder;
