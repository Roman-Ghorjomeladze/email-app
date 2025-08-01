import { DB } from "../db/index.js";
import { SearchQueryTypes } from "./email.constants.js";
class EmailService_ {
	tableName = "emails";

	/**
	 * Checks search keyword and returns the search type
	 *
	 * @param {string} searchKeyword - The search keyword to look for in emails.
	 * @returns {SearchQueryTypes}
	 */
	getSearchType(searchKeyword) {
		const searchByToRegex = /^to:.+/;
		switch (true) {
			case searchByToRegex.test(searchKeyword): {
				return SearchQueryTypes.SearchByTo;
			}
			default: {
				return SearchQueryTypes.Basic;
			}
		}
	}

	/**
	 * Searches emails by keyword across multiple fields (to, cc, bcc, subject, body),
	 * and returns paginated results.
	 *
	 * @param {string} query - The search keyword to look for in emails.
	 * @param {number} [page=1] - The current page number for pagination.
	 * @param {number} [limit=20] - The number of items to return per page.
	 * @returns {Promise<{ data: object[], pagination: { totalItems: number, totalPages: number, currentPage: number, pageSize: number, hasNextPage: boolean, hasPrevPage: boolean } }>}
	 */
	async search(query, page = 1, limit = 20) {
		const offset = (page - 1) * limit;
		let baseQuery;
		let queryType = this.getSearchType(query);
		switch (queryType) {
			case SearchQueryTypes.Basic: {
				baseQuery = DB.table(this.tableName)
					.whereLike("to", `%${query}%`)
					.orWhereLike("cc", `%${query}%`)
					.orWhereLike("bcc", `%${query}%`)
					.orWhereLike("subject", `%${query}%`)
					.orWhereLike("body", `%${query}%`);
				break;
			}
			case SearchQueryTypes.SearchByTo: {
				const [_, toEmailAddress] = query.split(":");
				baseQuery = DB.table(this.tableName).whereLike("to", `%${toEmailAddress || ""}%`);
				break;
			}
		}

		const totalCountResult = await baseQuery.clone().count("* as count").first();
		const totalItems = totalCountResult ? totalCountResult.count : 0;
		const totalPages = Math.ceil(totalItems / limit);

		const paginatedResults = await baseQuery.orderBy("created_at", "desc").limit(limit).offset(offset);

		return {
			data: paginatedResults,
			pagination: {
				totalItems,
				totalPages,
				currentPage: page,
				pageSize: limit,
				hasNextPage: page < totalPages,
				hasPrevPage: page > 1,
			},
		};
	}

	/**
	 * Sends (inserts) a new email into the database and returns the created email.
	 *
	 * @param {{ to: string, cc?: string, bcc?: string, subject: string, body: string }} emailData
	 *   - The email data to insert. `cc` and `bcc` are optional.
	 * @returns {Promise<object>} The created email record with its ID.
	 */
	async send({ to, cc, bcc, subject, body }) {
		const [id] = await DB.table(this.tableName).insert({ to, cc, bcc, subject, body });
		return this.getById(id);
	}

	/**
	 * Retrieves a single email by its ID.
	 *
	 * @param {number} id - The unique ID of the email to retrieve.
	 * @returns {Promise<object|null>} The email record, or null if not found.
	 */
	async getById(id) {
		return await DB.table(this.tableName).where({ id }).first();
	}

	/**
	 * Deletes a single email by its ID.
	 *
	 * @param {number} id - The unique ID of the email to delete.
	 * @returns {Promise<number>} The count of deleted items.
	 */
	async deleteById(id) {
		return await DB.table(this.tableName).where({ id }).delete();
	}
}

export const EmailService = new EmailService_();
