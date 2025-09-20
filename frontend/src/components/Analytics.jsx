import React, { useState } from 'react';
import { FaChartLine, FaUsers, FaHeart, FaExclamationTriangle, FaCalendar, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('mood');

  const metrics = [
    { id: 'mood', label: 'Mood Trends', icon: FaHeart, color: 'text-blue-500' },
    { id: 'patients', label: 'Patient Activity', icon: FaUsers, color: 'text-green-500' },
    { id: 'alerts', label: 'Risk Alerts', icon: FaExclamationTriangle, color: 'text-red-500' },
    { id: 'appointments', label: 'Appointments', icon: FaCalendar, color: 'text-purple-500' }
  ];

  const mockData = {
    mood: {
      average: 7.2,
      trend: 'up',
      change: '+0.3',
      data: [
        { date: '2024-01-01', value: 6.8 },
        { date: '2024-01-02', value: 7.1 },
        { date: '2024-01-03', value: 6.9 },
        { date: '2024-01-04', value: 7.3 },
        { date: '2024-01-05', value: 7.5 },
        { date: '2024-01-06', value: 7.2 },
        { date: '2024-01-07', value: 7.4 }
      ]
    },
    patients: {
      total: 24,
      active: 20,
      new: 3,
      trend: 'up',
      change: '+2'
    },
    alerts: {
      total: 8,
      high: 2,
      medium: 3,
      low: 3,
      trend: 'down',
      change: '-1'
    },
    appointments: {
      total: 45,
      completed: 42,
      scheduled: 3,
      trend: 'up',
      change: '+5'
    }
  };

  const getTrendIcon = (trend) => {
    return trend === 'up' ? (
      <FaArrowUp className="text-green-500" />
    ) : (
      <FaArrowDown className="text-red-500" />
    );
  };

  const getTrendColor = (trend) => {
    return trend === 'up' ? 'text-green-600' : 'text-red-600';
  };

  const renderChart = () => {
    if (selectedMetric === 'mood') {
      return (
        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Mood Trends (7 days)</h4>
          <div className="h-64 flex items-end justify-between space-x-2">
            {mockData.mood.data.map((point, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="bg-blue-500 rounded-t w-8 mb-2"
                  style={{ height: `${(point.value / 10) * 200}px` }}
                ></div>
                <span className="text-xs text-gray-500">{point.value}</span>
                <span className="text-xs text-gray-400 mt-1">
                  {new Date(point.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">
          {metrics.find(m => m.id === selectedMetric)?.label} Overview
        </h4>
        <div className="text-center py-12">
          <div className="text-gray-400 text-4xl mb-4">
            {React.createElement(metrics.find(m => m.id === selectedMetric)?.icon || FaChartLine)}
          </div>
          <p className="text-gray-500">Chart visualization would be implemented here</p>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600">Monitor patient progress and practice metrics</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
        </div>
      </div>

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          const data = mockData[metric.id];
          
          return (
            <div
              key={metric.id}
              onClick={() => setSelectedMetric(metric.id)}
              className={`bg-white border rounded-lg p-6 cursor-pointer hover:shadow-md transition-shadow ${
                selectedMetric === metric.id ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center`}>
                  <Icon className={`text-xl ${metric.color}`} />
                </div>
                <div className="flex items-center space-x-1">
                  {getTrendIcon(data.trend)}
                  <span className={`text-sm font-medium ${getTrendColor(data.trend)}`}>
                    {data.change}
                  </span>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 font-medium">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-900">
                  {metric.id === 'mood' ? data.average : data.total}
                  {metric.id === 'mood' && '/10'}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        {renderChart()}
      </div>

      {/* Detailed Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Patient Activity */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Patient Activity</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Patients</span>
              <span className="font-semibold text-gray-900">{mockData.patients.total}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Active Patients</span>
              <span className="font-semibold text-green-600">{mockData.patients.active}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">New This Month</span>
              <span className="font-semibold text-blue-600">{mockData.patients.new}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full" 
                style={{ width: `${(mockData.patients.active / mockData.patients.total) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Risk Alerts */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Alerts</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">High Risk</span>
              <span className="font-semibold text-red-600">{mockData.alerts.high}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Medium Risk</span>
              <span className="font-semibold text-yellow-600">{mockData.alerts.medium}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Low Risk</span>
              <span className="font-semibold text-green-600">{mockData.alerts.low}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Alerts</span>
              <span className="font-semibold text-gray-900">{mockData.alerts.total}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <FaHeart className="text-blue-500" />
            <div>
              <p className="text-sm font-medium text-gray-900">Sarah Johnson submitted mood entry</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <FaExclamationTriangle className="text-red-500" />
            <div>
              <p className="text-sm font-medium text-gray-900">High risk alert for Emily Rodriguez</p>
              <p className="text-xs text-gray-500">4 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <FaCalendar className="text-purple-500" />
            <div>
              <p className="text-sm font-medium text-gray-900">Appointment completed with Michael Chen</p>
              <p className="text-xs text-gray-500">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
