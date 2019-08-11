'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlaylistsSchema extends Schema {
  up () {
    this.create('playlists', (table) => {
      table.increments()
      table.string('user_id', 254).notNullable().unique()
      table.string('song_id', 254).notNullable()
      table.integer('progress_ms').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('playlists')
  }
}

module.exports = PlaylistsSchema
