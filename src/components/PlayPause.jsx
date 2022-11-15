import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ isPlaying, activeSong, song, handlePlay, handlePause }) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className="text-[#3e3e3e]" onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className="text-[#3e3e3e]" onClick={handlePlay} />
  );

export default PlayPause;
