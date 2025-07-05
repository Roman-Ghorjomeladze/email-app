import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { createEmailSchema } from "@/components/ComposeEmail/schema";
import { apiUrl } from "@/utils/helpers/urlBuilder";

export const useCreateEmail = (addEmailInSidebar, closeModal) => {
	const [apiErrors, setApiErrors] = useState([]);
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: zodResolver(createEmailSchema),
	});

	const onSubmit = async (formData) => {
		try {
			setApiErrors([]);
			const res = await fetch(apiUrl("emails"), {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			switch (res.status) {
				case 201: {
					const newEmail = await res.json();
					addEmailInSidebar(newEmail);
					closeModal();
					break;
				}
				case 400: {
					const errors = await res.json();
					setApiErrors(Array.isArray(errors) ? errors : ["Something went wrong"]);
					break;
				}
			}
		} catch (error) {
			console.error(error);
		}
	};

	return {
		onSubmit,
		handleSubmit,
		register,
		apiErrors,
		errors,
		isSubmitting,
	};
};
