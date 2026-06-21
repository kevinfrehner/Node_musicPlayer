import { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/music-logo.webp";

function App() {
    const [playlistName, setPlaylistName] = useState("");
    const [playlists, setPlaylists] = useState([]);
    const [message, setMessage] = useState("");


    async function fetchPlaylists() {
        try {
            const response = await fetch(
                "http://localhost:5000/playlists"
            );

            const data = await response.json();

            setPlaylists(data);
        } catch {
            setMessage("Unable to load playlists.");
        }
    }

    useEffect(() => {
        fetchPlaylists();
    }, []);

    const createPlaylist = async (e) => {
        e.preventDefault();

        if (playlistName.trim() === "") {
            setMessage(
                "Playlist name cannot be empty."
            );
            return;
        }

        if (playlistName.trim().length < 3) {
            setMessage(
                "Playlist name must be at least 3 characters."
            );
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:5000/playlists",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json"
                    },
                    body: JSON.stringify({
                        name: playlistName
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setMessage(data.error);
                return;
            }

            setPlaylists((prev) => [
                ...prev,
                data
            ]);

            setPlaylistName("");
            setMessage(
                "Playlist created successfully!"
            );
        } catch {
            setMessage(
                "Server connection error."
            );
        }
    };

    return (
        <div className="container">
            <img
                src={logo}
                alt="Music Logo"
                className="logo"
            />

            <h1>Music Streaming Player</h1>

            {message && (
                <p className="message">
                    {message}
                </p>
            )}

            <form onSubmit={createPlaylist}>
                <input
                    type="text"
                    placeholder="Playlist Name"
                    value={playlistName}
                    onChange={(e) =>
                        setPlaylistName(
                            e.target.value
                        )
                    }
                />

                <button type="submit">
                    Create Playlist
                </button>
            </form>

            <h2>Your Playlists</h2>

            <ul>
                {playlists.map((playlist) => (
                    <li key={playlist.id}>
                        {playlist.name}
                    </li>
                ))}
            </ul>

            <h2>Stream Music</h2>

            <audio controls>
                <source
                    src="http://localhost:5000/stream/song1.mp3"
                    type="audio/mpeg"
                />
                Your browser does not support audio.
            </audio>

            <h2>Streaming Sources</h2>

            <ul>
                <li>Local MP3 Files</li>
                <li>Internet Radio Streams</li>
                <li>SoundHelix Sample Streams</li>
                <li>Future Spotify Integration</li>
                <li>Future YouTube Integration</li>
            </ul>
        </div>
    );
}

export default App;