import { ListItemButton, ListItemText, Typography, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const SidebarItem = ({ onSelect, selectedId, email, onDeleteEmail }) => {
	const isSelected = selectedId === email.id;

	return (
		<ListItemButton
			onClick={() => onSelect(email)}
			selected={isSelected}
			sx={{
				mb: 1,
				borderRadius: 1,
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				"&:hover": {
					backgroundColor: isSelected ? "primary.light" : "grey.200",
				},
			}}
		>
			<Box sx={{ flexGrow: 1 }}>
				<ListItemText
					primary={<Typography fontWeight="600">{email?.subject}</Typography>}
					secondary={
						<Typography variant="body2" color="text.secondary">
							To: {email.to}
						</Typography>
					}
				/>
			</Box>

			<IconButton
				size="small"
				edge="end"
				color="error"
				onClick={(e) => {
					e.stopPropagation(); // prevent triggering onSelect
					onDeleteEmail(email.id);
				}}
			>
				<DeleteIcon fontSize="small" />
			</IconButton>
		</ListItemButton>
	);
};
