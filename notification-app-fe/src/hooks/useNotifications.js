import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notifications";

export default function useNotifications(page, type) {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadNotifications();
  }, [page, type]);

  async function loadNotifications() {
    try {
      setLoading(true);

      const data = await fetchNotifications(
        page,
        10,
        type
      );

      setNotifications(data.notifications || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return {
    notifications,
    loading,
    error,
  };
}