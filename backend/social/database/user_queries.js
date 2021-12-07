const knex = require('./knex');

module.exports = {
	getAll() {
		try{
			return knex('user_profiles').join('tenant_profile', 'tenant_profile.id', 'user_profiles.tenant_id').select('*');
		}
		catch(err){
			return err;
		}
	},
	getUsers() {
		try{
			return knex('user_profiles');
		}
		catch(err){
			return err;
		}
	},
	getOne(id) {
		try{
			return knex('user_profiles').where('id', id).first();
		}
		catch(err){

		}
	},
	create(user_profiles) {
		try{
			return knex('user_profiles').insert(user_profiles, '*');
		}
		catch(err){
			return err;
		}
	},
	update(id, user_profiles) {
		try{
			return knex('user_profiles').where('id', id).update(user_profiles, '*');
		}
		catch(err){
			return err;
		}
	},
	delete(id) {
		try{
			return knex('user_profiles').where('id', id).del();
		}
		catch(err){
			return err;
		}
	},
};
  