interface Song {
  id: number;
  title: string;
  link: string;
  artist: Artist
  album: Album
}

interface Artist {
    id: number;
    name: string;
    picture: string
}

interface Album {
    id: number;
    title: string;
    cover:string
}

export default Song;
