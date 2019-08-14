'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Factory = use('Factory')
const Hash = use('Hash')

Factory.blueprint('App/Models/User', async (faker) => {
  const spotify_id = faker.username()
  return {
    spotify_id,
    email: faker.email(),
    display_name: faker.username(),
    premium: faker.bool(),

  }
})

Factory.blueprint('App/Models/Playlist', async (faker, i, data) => {
  return {
    spotify_id: data.spotify_id,
    uri_link: data.uri_link,
    position: data.position,
    progress_ms: data.progress_ms,
    active: data.active
  }
})