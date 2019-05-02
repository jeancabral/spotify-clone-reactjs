import React, { Fragment } from 'react';
import Slider from 'rc-slider';
import PropTypes from 'prop-types';

import Sound from 'react-sound';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as PlayerActions } from '../../store/ducks/player';

import {
  Container, Current, Progress, Controls, Volume, Time, ProgressSlider,
} from './styles';

import VolumeIcon from '../../assets/images/volume.svg';

import BackwardIcon from '../../assets/images/backward.svg';
import FowardIcon from '../../assets/images/forward.svg';
import PauseIcon from '../../assets/images/pause.svg';
import PlayIcon from '../../assets/images/play.svg';
import RepeatIcon from '../../assets/images/repeat.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';

const Player = ({ player, play, pause }) => (
  <Container>
    {!!player.currentSong && <Sound url={player.currentSong.file} playStatus={player.status} />}

    <Current>
      {!!player.currentSong && (
        <Fragment>
          <div>
            <span>{player.currentSong.title}</span>
            <small>{player.currentSong.author}</small>
          </div>
        </Fragment>
      )}
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button>
          <img src={BackwardIcon} alt="Backward" />
        </button>

        {!!player.currentSong && player.status === Sound.status.PLAYING ? (
          <button type="button" onClick={pause}>
            <img src={PauseIcon} alt="Pause" />
          </button>
        ) : (
          <button type="button" onClick={play}>
            <img src={PlayIcon} alt="Play" />
          </button>
        )}

        <button>
          <img src={FowardIcon} alt="Foward" />
        </button>
        <button>
          <img src={RepeatIcon} alt="Repeat" />
        </button>
      </Controls>
      <Time>
        <span>1:30</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ed760' }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>4:30</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#fff' }}
        handleStyle={{ display: 'none' }}
      />
    </Volume>
  </Container>
);

Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      file: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  player: state.player,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player);
