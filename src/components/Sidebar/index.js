import React from 'react';

import { Container, Nav, NewPlaylist } from './styles';

import AddPlayListIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Browse</a>
        </li>
        <li>
          <a href="">Radio</a>
        </li>
      </Nav>
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
          <a href="">Statios</a>
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
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img src={AddPlayListIcon} alt="Adiconar playlist" />
      Nova playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;
