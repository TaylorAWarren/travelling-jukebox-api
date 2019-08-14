'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('spotify_id', 80).notNullable().unique()
      table.string('display_name', 254).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('profile_pic', 254)
      table.boolean('premium').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
