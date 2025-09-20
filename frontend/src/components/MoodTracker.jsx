import React, { useState, useEffect } from 'react';
import { FaHeart, FaSmile, FaMeh, FaFrown, FaAngry, FaCalendar, FaChartLine, FaDownload, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const MoodTracker = () => {
  const [moodEntries, setMoodEntries] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedMood, setSelectedMood] = useState(5);
  const [notes, setNotes] = useState('');
  const [symptoms, setSymptoms] = useState({
    sleep: 5,
    anxiety: 5,
    irritability: 5,
    energy: 5,
    concentration: 5
  });

  // Load mock data on component mount
  useEffect(() => {
    const mockEntries = [
      {
        id: 1,
        date: '2024-01-15',
        mood: 8,
        notes: 'Feeling great today! Had a good workout.',
        symptoms: { sleep: 7, anxiety: 3, irritability: 2, energy: 8, concentration: 7 }
      },
      {
        id: 2,
        date: '2024-01-14',
        mood: 6,
        notes: 'Decent day, some stress at work.',
        symptoms: { sleep: 6, anxiety: 5, irritability: 4, energy: 6, concentration: 6 }
      },
      {
        id: 3,
        date: '2024-01-13',
        mood: 4,
        notes: 'Feeling low, had trouble sleeping.',
        symptoms: { sleep: 3, anxiety: 7, irritability: 6, energy: 4, concentration: 5 }
      },
      {
        id: 4,
        date: '2024-01-12',
        mood: 7,
        notes: 'Good day overall.',
        symptoms: { sleep: 7, anxiety: 4, irritability: 3, energy: 7, concentration: 7 }
      },
      {
        id: 5,
        date: '2024-01-11',
        mood: 5,
        notes: 'Average day.',
        symptoms: { sleep: 5, anxiety: 5, irritability: 5, energy: 5, concentration: 5 }
      }
    ];
    setMoodEntries(mockEntries);
  }, []);

  const moodIcons = [
    { icon: FaAngry, color: 'text-red-500', label: 'Very Low' },
    { icon: FaFrown, color: 'text-orange-500', label: 'Low' },
    { icon: FaMeh, color: 'text-yellow-500', label: 'Neutral' },
    { icon: FaSmile, color: 'text-green-500', label: 'Good' },
    { icon: FaHeart, color: 'text-emerald-500', label: 'Excellent' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      id: Date.now(),
      date: selectedDate,
      mood: selectedMood,
      notes,
      symptoms: { ...symptoms }
    };
    
    setMoodEntries([newEntry, ...moodEntries]);
    setShowAddForm(false);
    setNotes('');
    setSelectedMood(5);
    setSymptoms({ sleep: 5, anxiety: 5, irritability: 5, energy: 5, concentration: 5 });
  };

  const deleteEntry = (id) => {
    setMoodEntries(moodEntries.filter(entry => entry.id !== id));
  };

  const getMoodIcon = (mood) => {
    const index = Math.floor((mood - 1) / 2);
    return moodIcons[Math.min(index, moodIcons.length - 1)];
  };

  const getMoodColor = (mood) => {
    if (mood <= 2) return 'bg-red-100 text-red-800';
    if (mood <= 4) return 'bg-orange-100 text-orange-800';
    if (mood <= 6) return 'bg-yellow-100 text-yellow-800';
    if (mood <= 8) return 'bg-green-100 text-green-800';
    return 'bg-emerald-100 text-emerald-800';
  };

  const averageMood = moodEntries.length > 0 
    ? (moodEntries.reduce((sum, entry) => sum + entry.mood, 0) / moodEntries.length).toFixed(1)
    : 0;

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mood Tracker</h1>
          <p className="text-gray-600">Track your daily mood and symptoms</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center"
        >
          <FaPlus className="mr-2" />
          Add Entry
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
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

        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
              <FaCalendar className="text-white text-xl" />
            </div>
            <div>
              <p className="text-sm text-green-600 font-medium">Total Entries</p>
              <p className="text-2xl font-bold text-green-900">{moodEntries.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
              <FaHeart className="text-white text-xl" />
            </div>
            <div>
              <p className="text-sm text-purple-600 font-medium">Current Streak</p>
              <p className="text-2xl font-bold text-purple-900">7 days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Add Entry Form */}
      {showAddForm && (
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Add Mood Entry</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>

            {/* Mood Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mood Rating (1-10)</label>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={selectedMood}
                  onChange={(e) => setSelectedMood(parseInt(e.target.value))}
                  className="flex-1"
                />
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-semibold text-gray-900">{selectedMood}</span>
                  <div className="w-8 h-8 flex items-center justify-center">
                    {React.createElement(getMoodIcon(selectedMood).icon, {
                      className: `text-xl ${getMoodIcon(selectedMood).color}`
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Symptoms */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Symptoms (1-10 scale)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(symptoms).map(([symptom, value]) => (
                  <div key={symptom}>
                    <label className="block text-sm text-gray-600 mb-1 capitalize">{symptom}</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={value}
                        onChange={(e) => setSymptoms({...symptoms, [symptom]: parseInt(e.target.value)})}
                        className="flex-1"
                      />
                      <span className="text-sm font-medium text-gray-900 w-8">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="How are you feeling? Any specific thoughts or events?"
              />
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Save Entry
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Mood Entries List */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Recent Entries</h3>
          <button className="text-emerald-600 hover:text-emerald-700 flex items-center text-sm">
            <FaDownload className="mr-1" />
            Export Data
          </button>
        </div>

        {moodEntries.length === 0 ? (
          <div className="text-center py-12">
            <FaHeart className="text-gray-300 text-4xl mx-auto mb-4" />
            <p className="text-gray-500">No mood entries yet. Start tracking your mood!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {moodEntries.map((entry) => {
              const moodIcon = getMoodIcon(entry.mood);
              return (
                <div key={entry.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex items-center space-x-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getMoodColor(entry.mood)}`}>
                            {entry.mood}/10
                          </span>
                          <div className="w-6 h-6 flex items-center justify-center">
                            {React.createElement(moodIcon.icon, {
                              className: `text-lg ${moodIcon.color}`
                            })}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{entry.date}</span>
                      </div>

                      {entry.notes && (
                        <p className="text-gray-700 mb-3">{entry.notes}</p>
                      )}

                      {/* Symptoms */}
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
                        {Object.entries(entry.symptoms).map(([symptom, value]) => (
                          <div key={symptom} className="flex justify-between">
                            <span className="text-gray-600 capitalize">{symptom}:</span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 ml-4">
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <FaEdit />
                      </button>
                      <button 
                        onClick={() => deleteEntry(entry.id)}
                        className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MoodTracker;
