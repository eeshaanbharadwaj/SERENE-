import React, { useState } from 'react';
import { FaPaperPlane, FaUser, FaClock, FaReply, FaPlus, FaSearch } from 'react-icons/fa';

const DoctorMessages = () => {
  const [messages] = useState([
    {
      id: 1,
      from: 'Sarah Johnson',
      to: 'Dr. Smith',
      subject: 'Re: Your recent mood entries',
      content: 'I\'ve reviewed your mood entries from this week. I notice you\'ve been experiencing some fluctuations. Let\'s schedule a follow-up appointment to discuss your treatment plan.',
      timestamp: '2024-01-15 14:30',
      isRead: false,
      type: 'received',
      patientId: 1
    },
    {
      id: 2,
      from: 'Dr. Smith',
      to: 'Michael Chen',
      subject: 'Medication adjustment',
      content: 'Based on your recent reports, I recommend adjusting your medication dosage. Please schedule an appointment to discuss this further.',
      timestamp: '2024-01-14 09:15',
      isRead: true,
      type: 'sent',
      patientId: 2
    },
    {
      id: 3,
      from: 'Emily Rodriguez',
      to: 'Dr. Smith',
      subject: 'Urgent: High risk symptoms',
      content: 'I\'m experiencing severe mood swings and need immediate assistance. Can we schedule an emergency appointment?',
      timestamp: '2024-01-13 16:45',
      isRead: false,
      type: 'received',
      patientId: 3,
      priority: 'high'
    }
  ]);

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [newMessage, setNewMessage] = useState({
    to: '',
    subject: '',
    content: ''
  });
  const [searchTerm, setSearchTerm] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    // In a real app, this would send the message
    alert('Message sent!');
    setNewMessage({ to: '', subject: '', content: '' });
    setSelectedMessage(null);
  };

  const filteredMessages = messages.filter(msg =>
    msg.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const unreadCount = messages.filter(msg => !msg.isRead && msg.type === 'received').length;
  const highPriorityCount = messages.filter(msg => msg.priority === 'high').length;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600">Communicate with your patients</p>
        </div>
        <button
          onClick={() => setSelectedMessage('new')}
          className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center"
        >
          <FaPlus className="mr-2" />
          New Message
        </button>
      </div>

      {/* Alerts */}
      {(unreadCount > 0 || highPriorityCount > 0) && (
        <div className="space-y-3 mb-6">
          {unreadCount > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-semibold">{unreadCount}</span>
                </div>
                <p className="text-blue-800">
                  You have {unreadCount} unread message{unreadCount > 1 ? 's' : ''}
                </p>
              </div>
            </div>
          )}
          
          {highPriorityCount > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-semibold">{highPriorityCount}</span>
                </div>
                <p className="text-red-800">
                  You have {highPriorityCount} high priority message{highPriorityCount > 1 ? 's' : ''}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Messages List */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => setSelectedMessage(message)}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                    !message.isRead && message.type === 'received' ? 'bg-blue-50' : ''
                  } ${message.priority === 'high' ? 'border-l-4 border-l-red-500' : ''}`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaUser className="text-white text-sm" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {message.from}
                        </p>
                        <div className="flex items-center space-x-1">
                          {message.priority === 'high' && (
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          )}
                          <span className="text-xs text-gray-500">{message.timestamp.split(' ')[0]}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 truncate">{message.subject}</p>
                      {!message.isRead && message.type === 'received' && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Message Content */}
        <div className="lg:col-span-2">
          {selectedMessage === 'new' ? (
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Compose Message</h3>
              <form onSubmit={sendMessage} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">To Patient</label>
                  <select
                    value={newMessage.to}
                    onChange={(e) => setNewMessage({...newMessage, to: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  >
                    <option value="">Select a patient</option>
                    <option value="Sarah Johnson">Sarah Johnson</option>
                    <option value="Michael Chen">Michael Chen</option>
                    <option value="Emily Rodriguez">Emily Rodriguez</option>
                    <option value="David Thompson">David Thompson</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    value={newMessage.subject}
                    onChange={(e) => setNewMessage({...newMessage, subject: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    value={newMessage.content}
                    onChange={(e) => setNewMessage({...newMessage, content: e.target.value})}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setSelectedMessage(null)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center"
                  >
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          ) : selectedMessage ? (
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{selectedMessage.subject}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                    <span>From: {selectedMessage.from}</span>
                    <span>To: {selectedMessage.to}</span>
                    <span className="flex items-center">
                      <FaClock className="mr-1" />
                      {selectedMessage.timestamp}
                    </span>
                    {selectedMessage.priority === 'high' && (
                      <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                        High Priority
                      </span>
                    )}
                  </div>
                </div>
                {selectedMessage.type === 'received' && (
                  <button className="text-emerald-600 hover:text-emerald-700 flex items-center text-sm">
                    <FaReply className="mr-1" />
                    Reply
                  </button>
                )}
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-700 leading-relaxed">{selectedMessage.content}</p>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
              <FaUser className="text-gray-300 text-4xl mx-auto mb-4" />
              <p className="text-gray-500">Select a message to view its content</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorMessages;
