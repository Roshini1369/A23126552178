import { useState } from "react";

import {
  Container,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";

import useNotifications from "../hooks/useNotifications";
import { NotificationCard } from "../components/NotificationCard";
import { NotificationFilter } from "../components/NotificationFilter";

export default function NotificationsPage() {
  const [filter, setFilter] = useState("All");

  const {
    notifications,
    loading,
    error,
  } = useNotifications(
    1,
    filter === "All" ? "" : filter
  );

  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        sx={{ mt: 3, mb: 3 }}
      >
        Notifications
      </Typography>

      <NotificationFilter
        value={filter}
        onChange={setFilter}
      />

      {loading && <CircularProgress />}

      {error && (
        <Alert severity="error">
          Failed to load notifications
        </Alert>
      )}

      {!loading &&
        notifications.map((item) => (
          <NotificationCard
            key={item.ID}
            notification={item}
          />
        ))}
    </Container>
  );
}