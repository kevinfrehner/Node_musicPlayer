# Music Streaming Player

The Music Streaming Player is a full-stack web application built with React, Vite, Node.js, and Express. The application allows users to create and manage music playlists through a web interface while streaming audio files from a backend server. User input is validated on both the client and server sides to ensure playlist names are valid before they are added. The application demonstrates frontend and backend communication through API requests and page updates.

## Instructions for Build and Use

### Steps to build and/or run the software:

1. Open a terminal and navigate to the `server` folder.
2. Install dependencies by running `npm install`.
3. Start the backend server by running `node server.js`.
4. Open a second terminal and navigate to the `client` folder.
5. Install dependencies by running `npm install`.
6. Start the React application by running `npm run dev`.
7. Open the local URL provided by Vite (typically `http://localhost:5173`) in a web browser.

### Instructions for using the software:

1. Launch both the frontend and backend servers.
2. Enter a playlist name in the text field.
3. Click the **Create Playlist** button to add a new playlist.
4. View created playlists in the playlist section.
5. Use the audio player to stream available music files from the server.
6. Review validation messages if an invalid playlist name is entered.

## Development Environment

To recreate the development environment, you need the following software and/or libraries with the specified versions:

* Node.js v24.x
* React 19.x
* Vite 8.x
* Express 5.x
* CORS 2.8.x
* Visual Studio Code
* Google Chrome or Microsoft Edge

## Useful Websites to Learn More

I found these websites useful in developing this software:

* [React Documentation](https://react.dev/)
* [Vite Documentation](https://vitejs.dev/)
* [Express Documentation](https://expressjs.com/)
* [MDN Web Docs](https://developer.mozilla.org/)
* [Node.js Documentation](https://nodejs.org/en/docs)

## Future Work

The following items I plan to fix, improve, and/or add to this project in the future:

* [ ] Replace JSON file storage with a SQLite database.
* [ ] Add playlist deletion and editing functionality.
* [ ] Allow users to upload their own MP3 files.
* [ ] Implement user accounts and authentication.
* [ ] Add Spotify and YouTube integration.
* [ ] Improve the user interface with additional styling and animations.
* [ ] Display available songs dynamically instead of hardcoding audio files.
