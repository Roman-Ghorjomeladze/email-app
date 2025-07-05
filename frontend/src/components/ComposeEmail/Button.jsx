import { Button, Box } from "@mui/material";

export const ComposeButton = ({ onClick }) => {
	return (
		<Box position="absolute" bottom={16} right={16}>
			<Button
				variant="contained"
				color="primary"
				onClick={onClick}
				sx={{
					borderRadius: "50px",
					px: 4,
					py: 1.5,
					boxShadow: 3,
					"&:hover": {
						backgroundColor: "primary.dark",
					},
				}}
			>
				Compose
			</Button>
		</Box>
	);
};
