const express = require("express");
const socket = require("socket.io");
const http = require("http");
const { Chess } = require("chess.js");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socket(server);

let chess = new Chess();
let players = { white: null, black: null };
let spectators = new Set();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index", { title: "Chess Game" });
});

io.on("connection", (uniquesocket) => {
    console.log("A user connected:", uniquesocket.id);

    if (!players.white) {
        players.white = uniquesocket.id;
        uniquesocket.emit("playerRole", "w");
    } else if (!players.black) {
        players.black = uniquesocket.id;
        uniquesocket.emit("playerRole", "b");
    } else {
        spectators.add(uniquesocket.id);
        uniquesocket.emit("spectatorRole");
    }

    uniquesocket.emit("boardState", chess.fen());

    uniquesocket.on("disconnect", () => {
        console.log("A user disconnected:", uniquesocket.id);

        if (uniquesocket.id === players.white) {
            players.white = null;
        } else if (uniquesocket.id === players.black) {
            players.black = null;
        } else {
            spectators.delete(uniquesocket.id);
        }

        if (!players.white && !players.black) {
            chess = new Chess();
            io.emit("boardState", chess.fen());
        }
    });

    uniquesocket.on("move", (move) => {
        try {
            if (chess.isGameOver()) {
                uniquesocket.emit("invalidMove", { error: "Game Over" });
                return;
            }

            if (chess.turn() === "w" && uniquesocket.id !== players.white) return;
            if (chess.turn() === "b" && uniquesocket.id !== players.black) return;

            const result = chess.move(move);
            if (result) {
                io.emit("move", move);
                io.emit("boardState", chess.fen());
            } else {
                uniquesocket.emit("invalidMove", move);
            }
        } catch (err) {
            console.error("Invalid move:", move, err);
            uniquesocket.emit("invalidMove", { error: "Invalid move" });
        }
    });
});

server.listen(3000, function () {
    console.log("Listening on port 3000...");
});
