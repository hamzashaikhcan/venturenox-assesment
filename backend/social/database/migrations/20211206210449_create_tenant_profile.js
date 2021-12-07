
exports.up = function(knex) {
    return knex.schema.createTable('tenant_profile', function(table) {
        table.increments();
        table.string('name').notNullable();
        table.json('address').notNullable();
        table.string('city').notNullable();
        table.string('state').notNullable();
        table.string('country').notNullable();
        table.string('zip_code').notNullable();
        table.string('phone').notNullable();
        table.string('web_url').notNullable();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tenant_profile');
};
