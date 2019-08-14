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
    spotify_id: 'nfxna1leqoph7v525cpm3a6cr',
    uri_link: 'spotify:playlist:4Opixibkf4mLxOnREXTq1I',
    position: 2,
    progress_ms: 5000,
    active: true,
  },
  {
    spotify_id: 'kpe4iznisivy0txbbk76m0w46',
    uri_link: 'spotify:playlist:37i9dQZF1DWWBHeXOYZf74',
    position: 4,
    progress_ms: 30000,
    active: true,
  },{
    spotify_id: '22f63oznp4huleaxulv63sjxi',
    uri_link: 'spotify:playlist:48Jk76ryIuXOcOcK2wvDNP',
    position: 5,
    progress_ms: 5000,
    active: true,
  },
  {
    spotify_id: 'e3itsm9xo2go4zn5j2lgmkg5g',
    uri_link: 'spotify:playlist:2WDXgJmHzcJlMMi02NsUaY',
    position: 0,
    progress_ms: 10,
    active: true,
  },
  {
    spotify_id: 'saralouwho',
    uri_link: 'spotify:playlist:62OqyAX5XFoXu0CykxhOyA',
    position: 1,
    progress_ms: 0,
    active: true,
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
