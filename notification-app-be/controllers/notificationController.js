const axios = require("axios");

const getNotifications = async (req, res) => {
  try {
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ0YXZ2YXJvc2hpbmkuMjMuY3NtQGFuaXRzLmVkdS5pbiIsImV4cCI6MTc4MjIwMDIyNiwiaWF0IjoxNzgyMTk5MzI2LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNjRmNjQyY2UtOTQ3ZC00Mjg5LTg1NGYtM2YzY2JjNTkzZmU0IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicm9zaGluaSB0YXZ2YSIsInN1YiI6ImVjZGIxM2I1LTE1NTAtNDA2ZC1iNDkwLTgwM2ZkMDcxOWYxNiJ9LCJlbWFpbCI6InRhdnZhcm9zaGluaS4yMy5jc21AYW5pdHMuZWR1LmluIiwibmFtZSI6InJvc2hpbmkgdGF2dmEiLCJyb2xsTm8iOiJhMjMxMjY1NTIxNzgiLCJhY2Nlc3NDb2RlIjoiTVRxeGFyIiwiY2xpZW50SUQiOiJlY2RiMTNiNS0xNTUwLTQwNmQtYjQ5MC04MDNmZDA3MTlmMTYiLCJjbGllbnRTZWNyZXQiOiJmbXlZUUtQY0FHS1VXaEJlIn0.kp6h3FPx8NB0vq0uegm62K_v9DLj6yXvfWnaAgDvH5s"
        },
        params: req.query
      }
    );

    res.status(200).json(response.data);

  } catch (error) {
    console.error(error.response?.data);

    res.status(error.response?.status || 500).json({
      message: "Failed to fetch notifications",
      error: error.response?.data || error.message
    });
  }
};

module.exports = {
  getNotifications
};