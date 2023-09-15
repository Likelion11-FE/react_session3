import React, { useState } from 'react';

function NumberGuessGame() {
  // 초기 상태 설정
  const [state, setState] = useState({
    targetNumber: generateRandomNumber(),
    guess: '',
    message: '',
    gameStarted: false,
  });

  // 랜덤 숫자 생성 함수
  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  // 게임 초기화 및 새 게임 시작
  function startGame() {
    setState({
      targetNumber: generateRandomNumber(),
      guess: '',
      message: '',
      gameStarted: true,
    });
  }

  // 숫자 맞추기 확인
  function checkGuess() {
    const { targetNumber, guess } = state;
    if (guess === '') {
      return;
    }

    if (parseInt(guess) === targetNumber) {
      setState({ ...state, message: '정답!' });
    } else if (parseInt(guess) < targetNumber) {
      setState({ ...state, message: '너무 작음' });
    } else {
      setState({ ...state, message: '너무 큼' });
    }
  }

  const { guess, message, gameStarted } = state;

  return (
    <div>
      <h1>숫자 맞추기 게임</h1>
      {gameStarted ? (
        <div>
          <p>{message}</p>
          {message !== '정답!' && (
            <div>
              <input
                type="number"
                value={guess}
                onChange={(e) => setState({ ...state, guess: e.target.value })}
              />
              <button onClick={() => checkGuess()}>확인</button>
            </div>
          )}
          <button onClick={() => startGame()}>새 게임</button>
        </div>
      ) : (
        <button onClick={() => startGame()}>게임 시작</button>
      )}
    </div>
  );
}

export default NumberGuessGame;