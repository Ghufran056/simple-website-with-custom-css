"use client"

import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [notification, setNotification] = useState(""); // State for notification

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Show success notification
    setNotification("Message sent successfully!");
    setTimeout(() => setNotification(""), 3000); // Clear the notification after 3 seconds
  };

  return (
    <div className="contact-container">
      <div className="contact-overlay">
     
        <div className="contact-content">
        <h1 className="contact-us">Contact Us</h1>

          <div className="contact-right">
            <h2>Send Message</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Type your message" required></textarea>
              <button type="submit">Send</button>
            </form>
            {/* Notification */}
            {notification && (
              <div className="notification">
                {notification}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;