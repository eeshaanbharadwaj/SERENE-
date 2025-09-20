import React, { useState } from 'react';
import { FaBookOpen, FaHeart, FaBrain, FaSearch, FaBookmark, FaRegBookmark, FaDownload, FaPlay } from 'react-icons/fa';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [bookmarkedResources, setBookmarkedResources] = useState(new Set([1, 3]));

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'articles', label: 'Articles' },
    { id: 'exercises', label: 'Exercises' },
    { id: 'meditations', label: 'Meditations' },
    { id: 'emergency', label: 'Emergency Resources' }
  ];

  const resources = [
    {
      id: 1,
      title: 'Understanding Bipolar Disorder',
      category: 'articles',
      type: 'Article',
      description: 'A comprehensive guide to understanding bipolar disorder, its symptoms, and treatment options.',
      duration: '15 min read',
      icon: FaBrain,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100'
    },
    {
      id: 2,
      title: 'Breathing Exercise for Anxiety',
      category: 'exercises',
      type: 'Exercise',
      description: 'A simple breathing technique to help manage anxiety and stress in the moment.',
      duration: '5 min',
      icon: FaHeart,
      color: 'text-green-500',
      bgColor: 'bg-green-100'
    },
    {
      id: 3,
      title: 'Guided Meditation for Sleep',
      category: 'meditations',
      type: 'Meditation',
      description: 'A calming meditation to help you fall asleep and improve sleep quality.',
      duration: '20 min',
      icon: FaBookOpen,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100'
    },
    {
      id: 4,
      title: 'Crisis Hotline Numbers',
      category: 'emergency',
      type: 'Emergency',
      description: 'Important phone numbers and resources for mental health crises.',
      duration: 'Reference',
      icon: FaHeart,
      color: 'text-red-500',
      bgColor: 'bg-red-100'
    },
    {
      id: 5,
      title: 'DBT Skills for Emotional Regulation',
      category: 'articles',
      type: 'Article',
      description: 'Learn Dialectical Behavior Therapy skills to better manage intense emotions.',
      duration: '12 min read',
      icon: FaBrain,
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-100'
    },
    {
      id: 6,
      title: 'Progressive Muscle Relaxation',
      category: 'exercises',
      type: 'Exercise',
      description: 'A step-by-step guide to progressive muscle relaxation for stress relief.',
      duration: '10 min',
      icon: FaHeart,
      color: 'text-orange-500',
      bgColor: 'bg-orange-100'
    }
  ];

  const toggleBookmark = (id) => {
    const newBookmarks = new Set(bookmarkedResources);
    if (newBookmarks.has(id)) {
      newBookmarks.delete(id);
    } else {
      newBookmarks.add(id);
    }
    setBookmarkedResources(newBookmarks);
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Resources</h1>
          <p className="text-gray-600">Access mental health resources and self-help tools</p>
        </div>
        <div className="text-sm text-gray-500">
          {bookmarkedResources.size} bookmarked
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => {
          const Icon = resource.icon;
          const isBookmarked = bookmarkedResources.has(resource.id);
          
          return (
            <div key={resource.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${resource.bgColor} rounded-lg flex items-center justify-center`}>
                  <Icon className={`text-xl ${resource.color}`} />
                </div>
                <button
                  onClick={() => toggleBookmark(resource.id)}
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  {isBookmarked ? <FaBookmark className="text-yellow-500" /> : <FaRegBookmark />}
                </button>
              </div>

              <div className="mb-3">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded">
                    {resource.type}
                  </span>
                  <span className="text-xs text-gray-500">{resource.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{resource.description}</p>
              </div>

              <div className="flex justify-between items-center">
                <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center">
                  <FaPlay className="mr-1" />
                  {resource.type === 'Article' ? 'Read' : 'Start'}
                </button>
                <button className="text-gray-400 hover:text-gray-600 text-sm">
                  <FaDownload />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <FaBookOpen className="text-gray-300 text-4xl mx-auto mb-4" />
          <p className="text-gray-500">No resources found matching your criteria.</p>
        </div>
      )}

      {/* Emergency Resources Banner */}
      <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
            <FaHeart className="text-white text-sm" />
          </div>
          <h3 className="text-lg font-semibold text-red-900">Emergency Resources</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium text-red-800 mb-2">Crisis Text Line</p>
            <p className="text-red-700">Text HOME to 741741</p>
          </div>
          <div>
            <p className="font-medium text-red-800 mb-2">National Suicide Prevention Lifeline</p>
            <p className="text-red-700">Call 988</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
