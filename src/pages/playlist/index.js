import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';
import Loading from '../../components/Loading';

import { Container, Header, Songlist } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

class Playlist extends Component {
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
                  <tr>
                    <td>
                      <img src={PlusIcon} alt="Add Song" />
                    </td>
                    <td>{song.title}</td>
                    <td>{song.author}</td>
                    <td>{song.album}</td>
                    <td>3:26</td>
                  </tr>
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
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);
