const knex = require('./knex');

module.exports = {
	getAll() {
		return knex('user_profiles').join('tenant_profile', 'tenant_profile.id', 'user_profiles.tenant_id').select('*');
	},
	getUsers() {
		return knex('user_profiles');
	},
	getOne(id) {
		return knex('user_profiles').where('id', id).first();
	},
	create(user_profiles) {
		return knex('user_profiles').insert(user_profiles, '*');
	},
	update(id, user_profiles) {
		return knex('user_profiles').where('id', id).update(user_profiles, '*');
	},
	delete(id) {
		return knex('user_profiles').where('id', id).del();
	},
};
  