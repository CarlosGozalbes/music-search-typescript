import Song from "../../types/ISong"
import { Link } from "react-router-dom";
interface SongDetailProps {
  song: Song;
}

const SingleSong = ({ song }: SongDetailProps) => {
  return (
    <>
      <li>
        <Link to={`/songs/${song.id}`}>{song.title}</Link>
      </li>
    </>
  );
};

export default SingleSong