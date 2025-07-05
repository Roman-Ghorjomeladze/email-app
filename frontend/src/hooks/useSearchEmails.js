import { useCallback, useEffect, useState } from "react";

import { apiUrl } from "@/utils/helpers/urlBuilder";

export const useSearchEmails = () => {
	const [selectedEmail, setSelectedEmail] = useState(null);
	const [isComposeOpen, setComposeOpen] = useState(false);
	const [emails, setEmails] = useState([]);
	const [query, setQuery] = useState("");
	const [page, setPage] = useState(1);
	const [pagination, setPagination] = useState(null);
	const [loading, setLoading] = useState(false);

	const addEmailInSidebar = useCallback((email) => {
		setEmails((prev) => [email, ...prev]);
	}, []);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(true);
			fetch(apiUrl(`emails/search?q=${query}&page=${page}&perPage=25`))
				.then((res) => res.json())
				.then((res) => {
					if (res.data?.length != 0) {
						setEmails(res.data);
						setPagination(res.pagination);
						const initialEmail = res?.data?.[0];
						setSelectedEmail(initialEmail);
					}
				})
				.catch(console.error)
				.finally(() => {
					setLoading(false);
				});
		}, 500);

		return () => clearTimeout(timeout);
	}, [query, page]);

	useEffect(() => {
		setPage(1);
	}, [query]);

	const handleNextPage = () => {
		setPage((p) => {
			const isLastPage = p >= pagination.totalPages;
			return isLastPage ? p : p + 1;
		});
	};

	const handlePrevPage = () => {
		setPage((p) => {
			return p <= 1 ? p : p - 1;
		});
	};

	return {
		handleNextPage,
		handlePrevPage,
		addEmailInSidebar,
		setComposeOpen,
		setSelectedEmail,
		setQuery,
		pagination,
		isComposeOpen,
		selectedEmail,
		emails,
		loading,
	};
};
