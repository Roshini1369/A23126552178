import {
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

const filters = [
  "All",
  "Placement",
  "Result",
  "Event",
];

export function NotificationFilter({
  value,
  onChange,
}) {
  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={(e, val) =>
        onChange(val)
      }
    >
      {filters.map((item) => (
        <ToggleButton
          key={item}
          value={item}
        >
          {item}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}