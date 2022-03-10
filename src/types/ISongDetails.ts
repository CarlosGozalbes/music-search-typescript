interface SongDetails {
  id: number;
  title: string;
  link: string;
  duration: number;
  track_position: number;
  disk_number: number;
  rank: number;
  release_date: string;
  contributors: Contributors;

  artist: Artist;
  album: Album;
}
/* interface Contributors {
    [
        {
            id: number;
            name: string;
            link: string;
            picture
        }
    ]
} */


interface Artist {
  id: number;
  name: string;
  picture: string;
  link: string;
}

interface Album {
  id: number;
  title: string;
  cover: string;
  release_date: string;
  link: string
}

export default SongDetails;
