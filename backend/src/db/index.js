import knex from "knex";

const db = knex({
	client: "sqlite3",
	connection: {
		filename: "./db.sqlite",
	},
});

class DB_ {
	table(name) {
		return db(name);
	}

	raw(...args) {
		return db.raw(...args);
	}

	get instance() {
		return db;
	}
}

export const DB = new DB_();
