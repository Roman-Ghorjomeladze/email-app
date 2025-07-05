import { Box, Button, Typography } from "@mui/material";

export const Pagination = (props) => {
	const { onPrevPage, hasPrevPage, loading, currentPage, totalPages, hasNextPage, onNextPage } = props;

	return (
		<Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
			<Button variant="outlined" size="small" onClick={onPrevPage} disabled={!hasPrevPage || loading}>
				Prev
			</Button>

			<Typography variant="body2">
				{currentPage} / {totalPages}
			</Typography>

			<Button variant="outlined" size="small" onClick={onNextPage} disabled={!hasNextPage || loading}>
				Next
			</Button>
		</Box>
	);
};
