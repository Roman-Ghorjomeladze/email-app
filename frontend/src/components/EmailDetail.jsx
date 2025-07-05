import { Box, Typography, Divider } from "@mui/material";

export const EmailDetail = ({ email }) => {
	return (
		<Box p={3}>
			<Typography variant="h5" fontWeight="bold" gutterBottom>
				{email.subject}
			</Typography>

			<Typography variant="body2" color="text.secondary" gutterBottom>
				To: {email.to}
			</Typography>
			<Typography variant="body2" color="text.secondary" gutterBottom>
				CC: {email.cc}
			</Typography>
			<Typography variant="body2" color="text.secondary" gutterBottom>
				BCC: {email.bcc}
			</Typography>

			<Divider sx={{ my: 3 }} />

			<Typography variant="body1">{email.body}</Typography>
		</Box>
	);
};
