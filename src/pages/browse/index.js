import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Browse</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/71EOHEwS4ML._SX355_.jpg"
          alt="Playlist"
        />
        <strong>The Best of 90's</strong>
        <p>Relax Code and Fun</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/71EOHEwS4ML._SX355_.jpg"
          alt="Playlist"
        />
        <strong>The Best of 90's</strong>
        <p>Relax Code and Fun</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/71EOHEwS4ML._SX355_.jpg"
          alt="Playlist"
        />
        <strong>The Best of 90's</strong>
        <p>Relax Code and Fun</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/71EOHEwS4ML._SX355_.jpg"
          alt="Playlist"
        />
        <strong>The Best of 90's</strong>
        <p>Relax Code and Fun</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
