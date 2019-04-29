import React from 'react';
import { Container, Header, Songlist } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

function Playlist() {
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
    </Container>
  );
}

export default Playlist;
