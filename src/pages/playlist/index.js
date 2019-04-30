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

  loadPlayListDetails = () => {
    const { id } = this.props.match.params;
    this.props.getPlaylistDetailsRequest(id);
  };

  render() {
    return (
      <Container>
        <Header>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/71EOHEwS4ML._SX355_.jpg"
            alt="Playlist"
          />
          <div>
            <span>PLAYLIST</span>
            <h1>The Best of 90's</h1>
            <p>15 songs</p>
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
              <tr>
                <td>
                  <img src={PlusIcon} alt="Add Song" />
                </td>
                <td>Papercut</td>
                <td>Link PArk</td>
                <td>Hibrid Theory</td>
                <td>3:26</td>
              </tr>
              <tr>
                <td>
                  <img src={PlusIcon} alt="Add Song" />
                </td>
                <td>Papercut</td>
                <td>Link PArk</td>
                <td>Hibrid Theory</td>
                <td>3:26</td>
              </tr>
              <tr>
                <td>
                  <img src={PlusIcon} alt="Add Song" />
                </td>
                <td>Papercut</td>
                <td>Link PArk</td>
                <td>Hibrid Theory</td>
                <td>3:26</td>
              </tr>
              <tr>
                <td>
                  <img src={PlusIcon} alt="Add Song" />
                </td>
                <td>Papercut</td>
                <td>Link PArk</td>
                <td>Hibrid Theory</td>
                <td>3:26</td>
              </tr>
              <tr>
                <td>
                  <img src={PlusIcon} alt="Add Song" />
                </td>
                <td>Papercut</td>
                <td>Link PArk</td>
                <td>Hibrid Theory</td>
                <td>3:26</td>
              </tr>
              <tr>
                <td>
                  <img src={PlusIcon} alt="Add Song" />
                </td>
                <td>Papercut</td>
                <td>Link PArk</td>
                <td>Hibrid Theory</td>
                <td>3:26</td>
              </tr>
            </tbody>
          </Songlist>
        </div>
      </Container>
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
