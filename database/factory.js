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
  const username = faker.username()
  return {
    username,
    email: faker.email(),
    password: await Hash.make(username)
  }
})

Factory.blueprint('App/Models/Playlist', async (faker, i, data) => {
  return {
    user_id: data.user_id,
    song_id: data.song_id,
    progress_ms: data.progress_ms,
  }
})