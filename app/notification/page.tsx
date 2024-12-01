"use client";
import React, { useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Thank you for signing up!',
      message: 'We’re excited to have you on board. Explore our amazing products today!',
      timestamp: '2 hours ago',
      read: false,
    },
    {
      id: 2,
      title: 'Track your order',
      message: 'Your order #12345 has been shipped. Click here to track your delivery.',
      timestamp: 'Yesterday',
      read: true,
    },
    {
      id: 3,
      title: 'New Deals Available!',
      message: 'Check out our latest deals on amazing products!',
      timestamp: '3 days ago',
      read: false,
    },
  ]);

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Page Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Notifications</h1>
        <p className="text-gray-600">Stay updated with your latest email notifications.</p>
      </header>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`relative rounded-lg border p-4 shadow-sm transition-shadow ${
              notification.read
                ? 'bg-white border-gray-200 hover:shadow-md'
                : 'bg-indigo-50 border-indigo-300 hover:shadow-lg'
            }`}
          >
            {!notification.read && (
              <span className="absolute top-2 right-2 rounded-full bg-[#ff7500] px-2 py-0.5 text-xs font-medium text-white">
                Unread
              </span>
            )}
            <h2 className="text-lg font-medium text-gray-800">{notification.title}</h2>
            <p className="mt-2 text-gray-600">{notification.message}</p>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
              <p>{notification.timestamp}</p>
              {!notification.read && (
                <button
                  className="text-[#ff7500] hover:underline"
                  onClick={() => markAsRead(notification.id)}
                >
                  Mark as Read
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
