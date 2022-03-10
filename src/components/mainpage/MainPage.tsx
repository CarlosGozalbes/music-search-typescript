import { useEffect, useState } from "react";
import Song from "../../types/ISong";
import SingleSong from "./SingleSong";
const MainPage = () => {
    const [songs, setSongs] = useState<Song[]>([]);
  
    const getSongs = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=whatever"
      );
      if (response.ok) {
        let {data} = await response.json();
        console.log(data);
        setSongs(data);
        console.log('eeeee',songs)
      } else {
        console.log("error fetching songs");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSongs();
  }, []);
  return (
    <>
      <ul>
        {songs && songs.map((song) => <SingleSong song={song} key={song.id} />)}
      </ul>
    </>
  );
};
export default MainPage;
