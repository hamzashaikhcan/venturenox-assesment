
exports.up = function(knex) {
    return knex.schema.createTable('user_profiles', function(table) {
        table.increments();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('department').notNullable();
        table.string('designation').notNullable();
        table.integer('tenant_id').notNullable();
        table.string('image_url').notNullable();
        table.string('city').notNullable();
        table.string('country').notNullable();
        table.string('bio').notNullable();
        table.json('social_links').nullable();
        table.string('employee_id').notNullable();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('user_profiles');
};
