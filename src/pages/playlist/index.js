import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';
import { Creators as PlayerActions } from '../../store/ducks/player';

import {
  Container, Header, Songlist, SongItem,
} from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';
import Loading from '../../components/Loading';

class Playlist extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number,
      }),
    }).isRequired,
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    playlistDetails: PropTypes.shape({
      data: PropTypes.shape({
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        songs: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            author: PropTypes.string,
            album: PropTypes.string,
          }),
        ),
      }),
      loading: PropTypes.bool,
    }).isRequired,
    loadSong: PropTypes.func.isRequired,
    currentSong: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  };

  state = {
    selectedSong: null,
  };

  componentDidMount() {
    this.loadPlayListDetails();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadPlayListDetails();
    }
  }

  loadPlayListDetails = () => {
    const { id } = this.props.match.params;
    this.props.getPlaylistDetailsRequest(id);
  };

  renderDetails = () => {
    const playlist = this.props.playlistDetails.data;

    return (
      <Container>
        <Header>
          <img src={playlist.thumbnail} alt={playlist.title} />
          <div>
            <span>PLAYLIST</span>
            <h1>{playlist.title}</h1>
            {!!playlist.songs && (
            <p>
              {' '}
              {playlist.songs.length}
              {' '}
songs
            </p>
            )}
            <button type="button">PLAY</button>
          </div>
        </Header>
        <div>
          <Songlist cellPadding={0} cellSpacing={0}>
            <thead>
              <th />
              <th>Title</th>
              <th>Artist</th>
              <th>Album</th>
              <th>
                <img src={ClockIcon} alt="Duration" />
              </th>
            </thead>

            <tbody>
              {!playlist.songs ? (
                <tr>
                  <td colSpan={5}>Not found songs</td>
                </tr>
              ) : (
                playlist.songs.map(song => (
                  <SongItem
                    key={song.id}
                    onClick={() => this.setState({ selectedSong: song.id })}
                    onDoubleClick={() => this.props.loadSong(song)}
                    selected={this.state.selectedSong === song.id}
                    playing={this.props.currentSong && this.props.currentSong.id === song.id}
                  >
                    <td>
                      <img src={PlusIcon} alt="Add Song" />
                    </td>
                    <td>{song.title}</td>
                    <td>{song.author}</td>
                    <td>{song.album}</td>
                    <td>3:26</td>
                  </SongItem>
                ))
              )}
            </tbody>
          </Songlist>
        </div>
      </Container>
    );
  };

  render() {
    return this.props.playlistDetails.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
  currentSong: state.player.currentSong,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...PlaylistDetailsActions, ...PlayerActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);
