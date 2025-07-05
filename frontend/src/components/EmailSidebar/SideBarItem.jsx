import { ListItemButton, ListItemText, Typography } from "@mui/material";

export const SidebarItem = ({ onSelect, selectedId, email }) => {
	const isSelected = selectedId === email.id;

	return (
		<ListItemButton
			onClick={() => onSelect(email)}
			selected={isSelected}
			sx={{
				mb: 1,
				borderRadius: 1,
				"&:hover": {
					backgroundColor: isSelected ? "primary.light" : "grey.200",
				},
			}}
		>
			<ListItemText
				primary={<Typography fontWeight="600">{email?.subject}</Typography>}
				secondary={
					<Typography variant="body2" color="text.secondary">
						To: {email.to}
					</Typography>
				}
			/>
		</ListItemButton>
	);
};
