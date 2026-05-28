import menuMusicFile from "../assets/audio/soundtrack/3_main-menu.mp3";
import lowHeatMusicFile from "../assets/audio/soundtrack/low-heat.mp3";
import highHeatMusicFile from "../assets/audio/soundtrack/high-heat.mp3";

const menuMusic = new Audio(menuMusicFile);
menuMusic.loop = true;

const lowHeat = new Audio(lowHeatMusicFile);
lowHeat.loop = true;

const highHeat = new Audio(highHeatMusicFile);
highHeat.loop = true;

const music = {
  menu: menuMusic,
  low: lowHeat,
  high: highHeat,
};

export default music;
