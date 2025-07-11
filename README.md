This is the solution for the Rock Paper Scissors project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/machine-learning-with-python/machine-learning-with-python-projects/rock-paper-scissors

# 🪨 Rock Paper Scissors AI Bot

This project implements an intelligent **Rock, Paper, Scissors** player designed to beat four different AI bots by learning and adapting to their strategies.

## 🎯 Objective

Create a `player()` function in `RPS.py` that:
- Learns from the opponent's previous moves
- Predicts their next move based on patterns
- Plays the winning counter-move
- Achieves **at least 60% win rate** against:
  - `quincy`
  - `kris`
  - `mrugesh`
  - `abbey`

---

## 🚀 How It Works

The player function uses a **pattern prediction model**:
- Tracks opponent’s move history
- Stores how frequently specific **5-move sequences** occur
- Predicts the opponent's next move based on past behavior
- Plays the **counter-move** to beat the prediction

---

## 🧠 Strategy Breakdown

Here’s a simplified explanation of what happens under the hood:

1. **Initialization**  
   On the first round, there's no data — so it starts with `'R'`.

2. **Tracking History**  
   Each round, the opponent’s last move is saved.

3. **Learning Patterns**  
   Once it has at least 5 opponent moves, it:
   - Creates a string of the last 5 moves
   - Stores this string in a dictionary `play_order` that counts how often this pattern appears

4. **Predicting the Next Move**  
   It checks which move most frequently follows the last 4 moves from the opponent.

5. **Responding with a Counter**  
   Based on this prediction, it chooses the move that would beat the predicted one.

---

## 🗂️ Project Structure

```bash
📁 your-project-folder/
├── RPS.py           # Your player function lives here
├── RPS_game.py      # The game engine & bot definitions (do not modify)
├── main.py          # Run this file to test your bot
└── test_module.py   # Automated tests to check win rate


Thanks for the clarification. Since your main project (`RPS.py`, etc.) lives at the root level, and you've additionally built a **separate fullstack app** in the subdirectory `rock-paper-scissors-app/`, the README should include a **dedicated section** explaining that app’s purpose and setup.

Here’s the **additional section** you can add to the bottom of your existing `README.md`:

---

```markdown
---

## 🌐 Web App Interface (`rock-paper-scissors-app/`)

Alongside the CLI-based AI bot, this project also includes a fullstack Rock Paper Scissors web application located in the `rock-paper-scissors-app/` directory. It lets users play against the AI through a clean, interactive browser interface.

### 🔧 What’s Included

This app uses:
- **Frontend**: HTML, CSS, and JavaScript to create buttons and UI.
- **Backend**: Flask + the same `player()` logic to respond with the AI's move.

### 📁 Folder Structure

```

rock-paper-scissors-app/
├── backend/
│   ├── app.py         # Flask server exposing /play endpoint
│   └── RPS.py         # Reuses the same AI logic from the original project
├── frontend/
│   ├── index.html     # Simple UI with Rock, Paper, Scissors buttons
│   ├── script.js      # Sends moves to the backend and handles responses
│   └── style.css      # Optional styles

````

### 🔄 How It Works

1. The player clicks a move in the browser (Rock, Paper, or Scissors).
2. The frontend sends the previous move to the Flask API at `/play`.
3. The backend returns the AI's next move by running the `player()` logic.
4. The result is shown to the user (win, lose, or tie).

### ⚙️ Local Setup Instructions

#### ✅ Run the Backend

```bash
cd rock-paper-scissors-app/backend
pip install flask flask-cors
python app.py
````

#### ✅ Open the Frontend

Open this file directly in your browser:

```
rock-paper-scissors-app/frontend/index.html
```

Now you can play the game through the web interface!

### 🔗 Example API Call

* **Endpoint**: `POST /play`
* **Request**:

  ```json
  { "prev_play": "R" }
  ```
* **Response**:

  ```json
  { "ai_move": "P" }
  ```

