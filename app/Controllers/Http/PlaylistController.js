'use strict'

const Playlist = use('App/Models/Playlist')

class PlaylistController {
  async show({ request, response }) {
    const { spotify_id } = request.all()
    const playlist = await Playlist.query().where(`spotify_id`, '=', spotify_id).fetch();
    response.send({playlist: playlist.rows[0]}  )
  }
}

module.exports = PlaylistController
