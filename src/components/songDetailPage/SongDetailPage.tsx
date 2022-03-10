import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SongDetailPage = () => {
    const { songId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [songDetails, setSongDetails] = useState({});

    const fetchSong = async () => {
      try {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/track/${songId}`
        );
        if (response.ok) {
          let details = await response.json();
          console.log(details);
          setSongDetails(details);
          setIsLoading(false);
        } else {
          console.log(`something went wrong`);
        }
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      fetchSong();
    }, []);
    return(
        <>
        </>
    )
}

export default SongDetailPage

