import menuMusicFile from "../assets/audio/soundtrack/3_main-menu.mp3";
import gameMusicFile from "../assets/audio/soundtrack/3_gameplay.mp3";

const menuMusic = new Audio(menuMusicFile);
menuMusic.loop = true;

const gameMusic = new Audio(gameMusicFile);
gameMusic.loop = true;

const music = {
  menu: menuMusic,
  game: gameMusic,
};

export default music;
