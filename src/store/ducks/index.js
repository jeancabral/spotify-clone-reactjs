import { combineReducers } from 'redux';

import playlists from './playlists';

const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  playlists,
});

export default reducers;
