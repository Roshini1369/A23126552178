import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Box
} from "@mui/material";

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 260,
        "& .MuiDrawer-paper": {
          width: 260,
          background:
            "linear-gradient(180deg,#081A4A,#101D63)",
          color: "white"
        }
      }}
    >
      <Toolbar />

      <Box sx={{ p: 3 }}>
        <Typography variant="h5">
          AffordMed
        </Typography>

        <Typography>
          Notification Center
        </Typography>
      </Box>

      <List>
        <ListItemButton>
          <ListItemText primary="All Notifications" />
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary="Priority Inbox" />
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary="Placements" />
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary="Results" />
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary="Events" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}