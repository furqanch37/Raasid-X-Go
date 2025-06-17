'use client';
import React, { useState } from 'react';
import './AdminMessages.css';

const mockMessages = [
  {
    id: 1,
    name: 'Ali Khan',
    email: 'ali@example.com',
    message: 'I had a great experience with your product but there are a few issues that need to be resolved.',
  },
  {
    id: 2,
    name: 'Sara Ahmed',
    email: 'sara@example.com',
    message: 'Can you please help me with my order? I placed it last week and still haven’t received it.',
  },
  {
    id: 3,
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Thank you for the quick support. The issue was resolved very efficiently.',
  },
];

const AdminMessages = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyMessage, setReplyMessage] = useState('');
  const [replyTo, setReplyTo] = useState(null);

  const handleView = (msg) => setSelectedMessage(msg);
  const handleCloseView = () => setSelectedMessage(null);

  const handleReply = (msg) => setReplyTo(msg);
  const handleCloseReply = () => {
    setReplyTo(null);
    setReplyMessage('');
  };

  const handleSendReply = () => {
    console.log(`Reply to ${replyTo.email}: ${replyMessage}`);
    alert(`Reply sent to ${replyTo.name}`);
    handleCloseReply();
  };

  return (
    <div className="admin-container">
      <div className="admin-table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message Preview</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockMessages.map((msg, index) => (
              <tr key={msg.id}>
                <td>{index + 1}</td>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.message.slice(0, 40)}...</td>
                <td>
                  <button className="action-btn view-btn" onClick={() => handleView(msg)}>View</button>
                  <button className="action-btn reply-btn" onClick={() => handleReply(msg)}>Reply</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Popup */}
      {selectedMessage && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="close-btn" onClick={handleCloseView}>×</button>
            <h3>{selectedMessage.name}</h3>
            <p><strong>Email:</strong> {selectedMessage.email}</p>
            <p className="full-msg">{selectedMessage.message}</p>
          </div>
        </div>
      )}

      {/* Reply Popup */}
      {replyTo && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="close-btn" onClick={handleCloseReply}>×</button>
            <h3>Reply to: {replyTo.name}</h3>
            <p><strong>Email:</strong> {replyTo.email}</p>
            <textarea
              className="reply-textarea"
              rows="4"
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
              placeholder="Type your reply here..."
            />
            <button className="send-btn" onClick={handleSendReply}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMessages;
