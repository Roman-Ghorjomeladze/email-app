export default {
	development: {
		client: "sqlite3",
		connection: {
			filename: "./db.sqlite",
		},
		migrations: {
			directory: "./migrations",
		},
		seeds: {
			directory: "./seeds",
		},
		useNullAsDefault: true,
	},
};
