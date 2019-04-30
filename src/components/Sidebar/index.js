import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import {
  Container, Nav, MainNav, MainNavItem, NewPlaylist, Cover,
} from './styles';

import AddPlayListIcon from '../../assets/images/add_playlist.svg';
// import HomeIcon from '../../assets/images/home.svg';
import HomeIconSelected from '../../assets/images/home_selected.svg';
import BrowseIcon from '../../assets/images/browse.svg';
import RadioIcon from '../../assets/images/radio.svg';
import Loading from '../Loading';

class Sidebar extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        }),
      ),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
      <Container>
        <div>
          <MainNav>
            <MainNavItem active>
              <img src={HomeIconSelected} alt="Adiconar playlist" />
              <a href="">Home</a>
            </MainNavItem>
            <MainNavItem>
              <img src={BrowseIcon} alt="Adiconar playlist" />
              <Link to="/">Browse</Link>
            </MainNavItem>
            <MainNavItem>
              <img src={RadioIcon} alt="Adiconar playlist" />
              <a href="">Radio</a>
            </MainNavItem>
          </MainNav>
          <Nav>
            <li>
              <span>YOUR LIBRARY</span>
            </li>
            <li>
              <a href="">Made For You</a>
            </li>
            <li>
              <a href="">Recently Played</a>
            </li>
            <li>
              <a href="">Favorite Songs</a>
            </li>
            <li>
              <a href="">Albums</a>
            </li>
            <li>
              <a href="">Artists</a>
            </li>
            <li>
              <a href="">Station</a>
            </li>
            <li>
              <a href="">Local Files</a>
            </li>
            <li>
              <a href="">Videos</a>
            </li>
            <li>
              <a href="">Podcasts</a>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>PLAYLISTS</span>
              {this.props.playlists.loading && <Loading />}
            </li>
            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlayListIcon} alt="Adiconar playlist" />
          New playlist
        </NewPlaylist>
        <Cover>
          <img
            src="https://ichef.bbci.co.uk/news/912/cpsprodpb/5DB7/production/_105319932_arianagrande.png"
            alt="Cover"
          />
        </Cover>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
