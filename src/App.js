import React from "react";
import "./styles.css";
import { useState } from "react";

const musicDB = {
  Rock: [
    {
      name: "Don't Stop Believin'",
      rating: 8,
      link: "https://www.youtube.com/watch?v=1k8craCGpgs"
    },
    {
      name: "Another Brick in the Wall",
      rating: 9,
      link: "https://www.youtube.com/watch?v=YR5ApYxkU-U"
    },
    {
      name: "Rock You Like A Hurricane",
      rating: 7,
      link: "https://www.youtube.com/watch?v=UCxgbOBVSfM"
    }
  ],
  Pop: [
    {
      name: "Moonlight and Muzak",
      rating: 8,
      link: "https://www.youtube.com/watch?v=oSqfW-1e7oQ"
    },
    {
      name: "Party in the U.S.A.",
      rating: 6,
      link: "https://www.youtube.com/watch?v=M11SvDtPBhA"
    },
    {
      name: "Livin’ on a Prayer",
      rating: 9,
      link: "https://www.youtube.com/watch?v=lDK9QqIzhwk"
    }
  ],
  Jazz: [
    {
      name: "Hat And Beard",
      rating: 7,
      link: "https://www.youtube.com/watch?v=7tnPkQufnZY"
    },
    {
      name: "Bouncing With Bud",
      rating: 9,
      link: "https://www.youtube.com/watch?v=0t5gbhk4l7k"
    },
    {
      name: "Take Five",
      rating: 6,
      link: "https://www.youtube.com/watch?v=vmDDOFXSgAs"
    }
  ]
};
export default function App() {
  const [music, setMusic] = useState("Rock");
  function musicGenre(genre) {
    setMusic(genre);
  }
  return (
    <div className="App">
      <nav>
        <h1>Music Recommendation</h1>
      </nav>
      <div>
        {Object.keys(musicDB).map((genre) => (
          <button className="genre" onClick={() => musicGenre(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <div className="recommed">
        <ul className="list">
          {musicDB[music].map((musics) => (
            <li className="items">
              <div>Name: {musics.name}</div>
              <div>Rating: {musics.rating}</div>
              <a href={musics.link} target="_blank" rel="noreferrer">
                Play Song
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
