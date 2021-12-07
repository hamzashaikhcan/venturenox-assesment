const knex = require('./knex');

module.exports = {
	getAll() {
		try{
			return knex('tenant_profile');
		}
		catch(err){
			return err;
		}
	},
	getOne(id) {
		try{
			return knex('tenant_profile').where('id', id).first();
		}
		catch(err){
			return err;
		}
	},
	create(tenant_profile) {
		try{
			return knex('tenant_profile').insert(tenant_profile, '*');
		}
		catch(err){
			return err;
		}
	},
	update(id, tenant_profile) {
		try{
			return knex('tenant_profile').where('id', id).update(tenant_profile, '*');
		}
		catch(err){
			return err;
		}
	},
	delete(id) {
		try{
			return knex('tenant_profile').where('id', id).del();
		}
		catch(err){
			return err;
		}
	},
};
  