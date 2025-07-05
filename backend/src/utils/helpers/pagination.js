export const paginationParams = (query = {}) => {
	const page = Number(query?.page) || 1;
	const perPage = Number(query?.perPage) || 20;
	return { page, perPage };
};
