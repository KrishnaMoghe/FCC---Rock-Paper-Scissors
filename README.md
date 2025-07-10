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
