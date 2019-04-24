import React from 'react';

import {
  Container, Nav, MainNav, MainNavItem, NewPlaylist, Cover,
} from './styles';

import AddPlayListIcon from '../../assets/images/add_playlist.svg';
import HomeIcon from '../../assets/images/home.svg';
import HomeIconSelected from '../../assets/images/home_selected.svg';
import BrowseIcon from '../../assets/images/browse.svg';
import RadioIcon from '../../assets/images/radio.svg';

const Sidebar = () => (
  <Container>
    <div>
      <MainNav>
        <MainNavItem active>
          <img src={HomeIconSelected} alt="Adiconar playlist" />
          <a href="">Home</a>
        </MainNavItem>
        <MainNavItem>
          <img src={BrowseIcon} alt="Adiconar playlist" />
          <a href="">Browse</a>
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
        </li>
        <li>
          <a href="">The Best of 90's</a>
        </li>
        <li>
          <a href="">Songs of the Past</a>
        </li>
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

export default Sidebar;
