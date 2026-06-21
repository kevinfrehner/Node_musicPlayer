const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(__dirname, "playlists.json");

let playlists = [];

if (fs.existsSync(DATA_FILE)) {
    playlists = JSON.parse(
        fs.readFileSync(DATA_FILE)
    );
}

function savePlaylists() {
    fs.writeFileSync(
        DATA_FILE,
        JSON.stringify(playlists, null, 2)
    );
}

app.get("/playlists", (req, res) => {
    res.json(playlists);
});

app.post("/playlists", (req, res) => {
    const { name } = req.body;

    if (!name || name.trim() === "") {
        return res.status(400).json({
            error: "Playlist name cannot be empty"
        });
    }

    if (name.trim().length < 3) {
        return res.status(400).json({
            error: "Playlist name must be at least 3 characters"
        });
    }

    const playlist = {
        id: Date.now(),
        name: name.trim()
    };

    playlists.push(playlist);

    savePlaylists();

    res.status(201).json(playlist);
});

app.get("/stream/:song", (req, res) => {
    const filePath = path.join(
        __dirname,
        "music",
        req.params.song
    );

    if (!fs.existsSync(filePath)) {
        return res.status(404).send("File not found");
    }

    const stat = fs.statSync(filePath);

    res.writeHead(200, {
        "Content-Type": "audio/mpeg",
        "Content-Length": stat.size
    });

    fs.createReadStream(filePath).pipe(res);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});