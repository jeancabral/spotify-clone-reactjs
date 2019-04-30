import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

/**
|--------------------------------------------------
|  Importando as Action Creators do Duck de Playlist
|--------------------------------------------------
*/
import { Creators as PlaylistsActions } from '../ducks/playlists';

export function* getPlaylists() {
  try {
    /**
    |--------------------------------------------------
    | Call é usado para obter o resultado de
    | 'Promisses' da nossas chamadas 'Assincronas' a API
    |--------------------------------------------------
    */
    const response = yield call(api.get, '/playlists');
    console.log(response);
    /**
    |--------------------------------------------------
    | PUT é utilizado para disparar uma Action e
    | enviar informações para o nosso Reducer
    |--------------------------------------------------
    */
    yield put(PlaylistsActions.getPlaylistsSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}
