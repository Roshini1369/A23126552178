import axios from "axios";

const API_URL =
  "http://localhost:5000/api/notifications";

export async function fetchNotifications(
  page = 1,
  limit = 20,
  type = ""
) {
  const response = await axios.get(
    API_URL,
    {
      params: {
        page,
        limit,
        notification_type:
          type || undefined,
      },
    }
  );

  return response.data;
}