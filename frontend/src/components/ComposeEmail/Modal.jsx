import { Box, Modal, Typography, TextField, Alert, Stack, IconButton, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useCreateEmail } from "@/hooks/useCreateEmail";
import { ActionButtons } from "./ActionButtons";

export const ComposeEmailFormModal = ({ onClose, addEmailInSidebar }) => {
	const { onSubmit, handleSubmit, register, apiErrors, errors, isSubmitting } = useCreateEmail(
		addEmailInSidebar,
		onClose
	);

	return (
		<Modal open={true} onClose={onClose} aria-labelledby="compose-email-title" closeAfterTransition>
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: { xs: "90%", sm: 500 },
					maxHeight: "90vh",
					overflowY: "auto",
					outline: "none",
				}}
			>
				<Paper
					elevation={12}
					sx={{
						borderRadius: 3,
						p: 4,
						position: "relative",
						bgcolor: "background.paper",
						display: "flex",
						flexDirection: "column",
						boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
					}}
				>
					<IconButton
						onClick={onClose}
						sx={{
							position: "absolute",
							top: 8,
							right: 8,
							color: "text.secondary",
							"&:hover": { bgcolor: "action.hover" },
						}}
						aria-label="close"
					>
						<CloseIcon />
					</IconButton>

					<Typography
						id="compose-email-title"
						variant="h5"
						component="h2"
						fontWeight="700"
						gutterBottom
						textAlign="center"
					>
						Compose Email
					</Typography>

					<form onSubmit={handleSubmit(onSubmit)} noValidate>
						<Stack spacing={3}>
							{["to", "cc", "bcc", "subject"].map((field) => (
								<TextField
									key={field}
									label={field.toUpperCase()}
									variant="outlined"
									fullWidth
									size="medium"
									{...register(field)}
									error={!!errors[field]}
									helperText={errors[field]?.message}
									autoComplete="off"
								/>
							))}

							<TextField
								label="Body"
								multiline
								rows={6}
								fullWidth
								variant="outlined"
								{...register("body")}
								error={!!errors.body}
								helperText={errors.body?.message}
								autoComplete="off"
							/>

							{apiErrors && apiErrors.length > 0 && (
								<Alert severity="error" variant="filled" sx={{ borderRadius: 2 }}>
									<ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
										{apiErrors.map((error, idx) => (
											<li key={idx}>{error}</li>
										))}
									</ul>
								</Alert>
							)}

							<ActionButtons isSubmitting={isSubmitting} onClose={onClose} />
						</Stack>
					</form>
				</Paper>
			</Box>
		</Modal>
	);
};
