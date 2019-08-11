'use strict'

/*
|--------------------------------------------------------------------------
| PlaylistSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const playlistData = [
  {
    user_id: 'a',
    song_id: '',
    progress_ms: 1000
  },
  {
    user_id: 'b',
    song_id: '',
    progress_ms: 1000
  },
  {
    user_id: 'c',
    song_id: '',
    progress_ms: 1000
  }
]

class PlaylistSeeder {
  async run () {
    const savedPlaylists = playlistData.map(async playlist => {
      await Factory.model('App/Models/Playlist').create(playlist)
    })
    await Promise.all(savedPlaylists)
  }
}

module.exports = PlaylistSeeder
