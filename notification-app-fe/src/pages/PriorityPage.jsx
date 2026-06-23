import { useMemo } from "react";

import {
  Container,
  Typography,
  Alert,
  CircularProgress
} from "@mui/material";

import useNotifications from "../hooks/useNotifications";
import { NotificationCard } from "../components/NotificationCard";

const priorityMap = {
  Placement: 3,
  Result: 2,
  Event: 1
};

export default function PriorityPage() {
  const {
    notifications,
    loading,
    error
  } = useNotifications(1, "");

  const priorityNotifications = useMemo(() => {
    return [...notifications]
      .sort((a, b) => {
        const priorityDiff =
          priorityMap[b.Type] -
          priorityMap[a.Type];

        if (priorityDiff !== 0) {
          return priorityDiff;
        }

        return (
          new Date(b.Timestamp) -
          new Date(a.Timestamp)
        );
      })
      .slice(0, 10);
  }, [notifications]);

  if (loading) {
    return (
      <Container sx={{ mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 4 }}>
        <Alert severity="error">
          Failed to load notifications
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        sx={{ mb: 3, mt: 3 }}
      >
        Priority Inbox
      </Typography>

      {priorityNotifications.map(
        (notification) => (
          <NotificationCard
            key={notification.ID}
            notification={notification}
          />
        )
      )}
    </Container>
  );
}