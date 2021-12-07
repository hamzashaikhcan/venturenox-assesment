// Update with your config settings.

const USERNAME = 'postgres';
const PASSWORD = 'postgres';
const DB_NAME = 'social';
const HOST = 'postgres';
// const HOST = 'localhost';

const DIRECTORY = 'migrations';

module.exports = {

	development: {
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
			tableName: DIRECTORY
		}
	},

	staging: {
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
			tableName: DIRECTORY
		}
	},

	production: {
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
			tableName: DIRECTORY
		}
	}

};
