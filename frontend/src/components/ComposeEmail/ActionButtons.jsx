import { Box, Button } from "@mui/material";

export const ActionButtons = ({ isSubmitting, onClose }) => {
	return (
		<Box display="flex" justifyContent="flex-end" gap={2}>
			<Button color="secondary" variant="outlined" onClick={onClose} disabled={isSubmitting}>
				Cancel
			</Button>
			<Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
				{isSubmitting ? "Sending..." : "Send"}
			</Button>
		</Box>
	);
};
