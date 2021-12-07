const knex = require('knex');

const USERNAME = 'postgres';
const PASSWORD = 'postgres';
const DB_NAME = 'social';
const HOST = 'postgres';

module.exports = knex({
	client: 'pg',
	connection: {
		host: HOST,
		database: DB_NAME,
		user: USERNAME,
		password: PASSWORD,
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		directory: '../migrations',
	},
});