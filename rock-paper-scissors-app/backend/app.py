from flask import Flask, request, jsonify
from flask_cors import CORS
from RPS import player

app = Flask(__name__)
CORS(app)

opponent_history = []

@app.route('/play', methods=['POST'])
def play():
    data = request.get_json()
    prev_play = data.get('prev_play', '')
    ai_move = player(prev_play, opponent_history)
    return jsonify({'ai_move': ai_move})

if __name__ == '__main__':
    app.run(debug=True)
