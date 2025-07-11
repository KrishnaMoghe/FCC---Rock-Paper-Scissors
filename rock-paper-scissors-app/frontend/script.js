let lastMove = "";

async function playMove(move) {
  const response = await fetch("http://127.0.0.1:5000/play", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prev_play: lastMove })
  });

  const data = await response.json();
  const aiMove = data.ai_move;

  const result = getResult(move, aiMove);
  document.getElementById("result").innerText =
    `You played ${move}, AI played ${aiMove} → ${result}`;

  lastMove = move;
}

function getResult(player, ai) {
  if (player === ai) return "It's a Tie!";
  if (
    (player === 'R' && ai === 'S') ||
    (player === 'P' && ai === 'R') ||
    (player === 'S' && ai === 'P')
  ) return "You Win!";
  return "You Lose!";
}
