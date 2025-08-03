import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useLayoutEffect, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

import { apiUrl } from "@/utils/helpers/urlBuilder";
import { useDebounce } from "@/hooks/useDebounce"; // custom debounce hook you should implement

export const useSearchEmails = () => {
	const [selectedEmail, setSelectedEmail] = useState(null);
	const [isComposeOpen, setComposeOpen] = useState(false);
	const [query, setQuery] = useState("");
	const [page, setPage] = useState(1);
	const router = useRouter();
	const queryClient = useQueryClient();
	const debouncedQuery = useDebounce(query, 500);

	useLayoutEffect(() => {
		const url = new URL(window.location.href);
		setQuery(url.searchParams.get("search") || "");
	}, []);

	useLayoutEffect(() => {
		setPage(1);
	}, [debouncedQuery]);

	const { data, isFetching, isLoading, error } = useQuery({
		queryKey: ["emails", { query: debouncedQuery, page }],
		queryFn: async () => {
			const res = await fetch(apiUrl(`emails/search?q=${debouncedQuery}&page=${page}&perPage=25`));
			if (!res.ok) throw new Error("Failed to fetch emails");
			return res.json();
		},
		keepPreviousData: true,
		refetchOnMount: true,
	});

	useEffect(() => {
		if (data?.data && data.data.length > 0) {
			setSelectedEmail(data.data[0]);
		}
	}, [data?.data]);

	const deleteEmailMutation = useMutation({
		mutationFn: async (id) => {
			const res = await fetch(apiUrl(`emails/${id}`), { method: "DELETE" });
			if (!res.ok) {
				const error = await res.json();
				throw new Error(error.message || "Delete failed");
			}
			return id;
		},
		onSuccess: (deletedId) => {
			queryClient.setQueryData(["emails", { query: debouncedQuery, page }], (oldData) => {
				if (!oldData) return oldData;
				const updated = oldData.data.filter((e) => e.id !== deletedId);
				if (selectedEmail?.id === deletedId) {
					setSelectedEmail(updated?.[0] || null);
				}
				return { ...oldData, data: updated };
			});
		},
		onError: (err) => {
			console.error("Delete email error:", err);
		},
	});

	const handleNextPage = () => {
		if (!data?.pagination) return;
		if (page < data.pagination.totalPages) {
			setPage((p) => p + 1);
		}
	};

	const handlePrevPage = () => {
		if (page > 1) {
			setPage((p) => p - 1);
		}
	};

	const onSearch = (value) => {
		setQuery(value);
		router.replace(`?search=${value}`);
	};

	const addEmailInSidebar = useCallback(
		(email) => {
			queryClient.setQueryData(["emails", { query: debouncedQuery, page }], (oldData) => {
				if (!oldData) return { data: [email], pagination: { currentPage: 1, totalPages: 1 } };
				const updated = [email, ...oldData.data];
				if (oldData.data.length === 0) {
					setSelectedEmail(email);
				}
				return { ...oldData, data: updated };
			});
		},
		[debouncedQuery, page, queryClient]
	);

	return {
		handleNextPage,
		handlePrevPage,
		addEmailInSidebar,
		setComposeOpen,
		setSelectedEmail,
		onSearch,
		setQuery,
		deleteEmailById: deleteEmailMutation.mutateAsync,
		query,
		pagination: data?.pagination || null,
		isComposeOpen,
		selectedEmail,
		emails: data?.data || [],
		loading: isLoading || isFetching,
		error,
	};
};
