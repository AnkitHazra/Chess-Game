# Chess Game (Node.js, Express, Socket.IO, Chess.js)

## 📌 Overview

This is a **real-time multiplayer chess game** built using **Node.js, Express.js, Socket.IO, and Chess.js**. Players can join as **White or Black**, while others can **watch the game as spectators**. The game state is synchronized across all connected users.

## 🚀 Features

- **Real-time Chess Gameplay** using WebSockets
- **Automatic Player Assignment** (White, Black, Spectator)
- **Valid Move Enforcement** with Chess.js
- **Game Reset on Disconnection**
- **Responsive UI** with EJS templating and static assets

## 🛠️ Technologies Used

- **Node.js** - Backend runtime
- **Express.js** - Web framework for handling routes
- **Socket.IO** - Real-time WebSocket communication
- **Chess.js** - Chess logic and validation
- **EJS** - Template engine for rendering views
- **HTML, CSS, JavaScript** - Frontend UI

## 📂 Project Structure

```
📦 Chess Game
 ┣ 📂 public        # Static assets (CSS, JS)
 ┣ 📂 views         # EJS templates
 ┣ 📜 app.js        # Main server file
 ┣ 📜 package.json  # Dependencies
 ┗ 📜 README.md     # Project documentation
```

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/yourusername/chess-game.git
cd chess-game
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Run the Server Locally

```sh
node app.js
```

Server will start on **[http://localhost:3000](http://localhost:3000)**

## 🌍 Deployment on Vercel

1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Deploy the project:
   ```sh
   vercel --prod
   ```

## 🎮 How to Play?

1. Open the website.
2. The first player becomes **White**, the second becomes **Black**.
3. Others can **watch as spectators**.
4. Make moves by clicking on pieces.
5. **The game resets if both players disconnect.**

## 📜 License

This project is licensed under the **MIT License**.

## 🤝 Contributing

Feel free to fork and improve the project. PRs are welcome!

## 📧 Contact

For any queries, reach out via email: **[hazraankit668@gmail.com](mailto:hazraankit668@gmail.com)**


