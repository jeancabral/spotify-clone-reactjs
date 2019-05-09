import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

/**
|--------------------------------------------------
|  Importando as Action Creators do Duck de Playlist
|--------------------------------------------------
*/
import { Creators as PlaylistDetailsActions } from '../ducks/playlistDetails';
import { Creators as ErrorActions } from '../ducks/error';

export function* getPlaylistDetails(action) {
  try {
    /**
    |--------------------------------------------------
    | Call é usado para obter o resultado de
    | 'Promisses' da nossas chamadas 'Assincronas' a API
    |--------------------------------------------------
    */
    const response = yield call(api.get, `/playlists/${action.payload.id}?_embed=songs`);
    console.log(response);
    /**
    |--------------------------------------------------
    | PUT é utilizado para disparar uma Action e
    | enviar informações para o nosso Reducer
    |--------------------------------------------------
    */
    yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(response.data));
  } catch (error) {
    yield put(ErrorActions.setError('Não foi possível obter os detalhes da Playlist'));
  }
}
