// src/pages/Notifications.jsx

import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { getNotifications } from "../service/api";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications from backend (or use static data for now)
    const fetchData = async () => {
      try {
        const res = await getNotifications();
        if (res?.data) {
          setNotifications(res.data);
        }
      } catch (error) {
        console.error("Failed to fetch notifications", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-success mb-4">🔔 Notifications</h2>

      {notifications.length > 0 ? (
        notifications.map((note, index) => (
          <Alert key={index} variant={note.type === "due" ? "danger" : "info"}>
            <strong>{note.type === "due" ? "Due Date Alert:" : "New Arrival:"}</strong> {note.message}
          </Alert>
        ))
      ) : (
        <p className="text-muted">No notifications at the moment.</p>
      )}
    </div>
  );
};

export default Notifications;
