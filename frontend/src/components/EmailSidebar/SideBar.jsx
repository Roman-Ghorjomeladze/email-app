import { Box, TextField, Typography, List } from "@mui/material";
import { SidebarItem } from "./SideBarItem";
import { Pagination } from "./Pagination";

export const EmailSidebar = (props) => {
	const {
		emails,
		selectedId,
		onSelect,
		onSearch,
		onDeleteEmail,
		onNextPage,
		onPrevPage,
		currentPage,
		totalPages,
		hasNextPage,
		hasPrevPage,
		loading,
	} = props;

	return (
		<Box
			sx={{
				width: 320,
				bgcolor: "grey.100",
				p: 2,
				display: "flex",
				flexDirection: "column",
				borderRight: 1,
				borderColor: "divider",
			}}
		>
			<TextField
				variant="outlined"
				placeholder="Search..."
				size="small"
				fullWidth
				onChange={(e) => onSearch(e.target.value)}
				sx={{ mb: 2 }}
			/>

			<Box sx={{ flex: 1, overflowY: "auto" }}>
				<List disablePadding>
					{emails?.length === 0 && !loading && (
						<Typography
							variant="body2"
							color="text.secondary"
							align="center"
							sx={{ fontStyle: "italic", py: 2 }}
						>
							No Emails
						</Typography>
					)}
					{emails?.map((email) => (
						<SidebarItem
							key={email.id}
							onDeleteEmail={onDeleteEmail}
							email={email}
							selectedId={selectedId}
							onSelect={onSelect}
						/>
					))}
				</List>
			</Box>

			<Pagination
				onPrevPage={onPrevPage}
				hasPrevPage={hasPrevPage}
				loading={loading}
				currentPage={currentPage}
				totalPages={totalPages}
				hasNextPage={hasNextPage}
				onNextPage={onNextPage}
			/>
		</Box>
	);
};
