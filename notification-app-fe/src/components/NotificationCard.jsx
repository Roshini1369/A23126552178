import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

export function NotificationCard({
  notification,
}) {
  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Stack
          direction="row"
          spacing={1}
          sx={{ mb: 1 }}
        >
          <Chip
            label={notification.Type}
            color={
              notification.Type === "Placement"
                ? "success"
                : notification.Type === "Result"
                ? "primary"
                : "warning"
            }
          />
        </Stack>

        <Typography variant="h6">
          {notification.Message}
        </Typography>

        <Typography color="text.secondary">
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}