import Player from '@vimeo/player';
import Player from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VIMEO_KEY_LS = 'videoplayer-current-time';
const setWatchingTime = ({ seconds }) => {
  localStorage.setItem(VIMEO_KEY_LS, seconds);
};
player.on('timeupdate', throttle(setWatchingTime, 1000));
player.setCurrentTime(localStorage.getItem(VIMEO_KEY_LS) || 0);
