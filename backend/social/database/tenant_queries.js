const knex = require('./knex');

module.exports = {
	getAll() {
		return knex('tenant_profile');
	},
	getOne(id) {
		return knex('tenant_profile').where('id', id).first();
	},
	create(tenant_profile) {
		return knex('tenant_profile').insert(tenant_profile, '*');
	},
	update(id, tenant_profile) {
		return knex('tenant_profile').where('id', id).update(tenant_profile, '*');
	},
	delete(id) {
		return knex('tenant_profile').where('id', id).del();
	},
};
  