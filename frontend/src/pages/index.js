"use client";

import { Box } from "@mui/material";

import { ComposeEmailFormModal } from "@/components/ComposeEmail/Modal";
import { ComposeButton } from "@/components/ComposeEmail/Button";
import { EmailSidebar } from "@/components/EmailSidebar/SideBar";
import { useSearchEmails } from "@/hooks/useSearchEmails";
import { EmailDetail } from "@/components/EmailDetail";

export default function HomePage() {
	const {
		handleNextPage,
		handlePrevPage,
		addEmailInSidebar,
		setComposeOpen,
		onSearch,
		setSelectedEmail,
		deleteEmailById,
		query,
		isComposeOpen,
		selectedEmail,
		emails,
		loading,
		pagination,
	} = useSearchEmails();

	return (
		<Box display="flex" height="100vh">
			<EmailSidebar
				emails={emails}
				selectedId={selectedEmail?.id}
				onSelect={setSelectedEmail}
				onSearch={onSearch}
				onNextPage={handleNextPage}
				onPrevPage={handlePrevPage}
				onDeleteEmail={deleteEmailById}
				currentPage={pagination?.currentPage || 1}
				totalPages={pagination?.totalPages || 1}
				hasNextPage={pagination?.hasNextPage}
				hasPrevPage={pagination?.hasPrevPage}
				loading={loading}
				query={query}
			/>
			<Box flex={1} position="relative" display="flex" flexDirection="column">
				{selectedEmail && <EmailDetail email={selectedEmail} />}

				<ComposeButton onClick={() => setComposeOpen(true)} />
				{isComposeOpen && (
					<ComposeEmailFormModal
						addEmailInSidebar={addEmailInSidebar}
						onClose={() => setComposeOpen(false)}
					/>
				)}
			</Box>
		</Box>
	);
}
