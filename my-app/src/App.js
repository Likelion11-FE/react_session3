import React from 'react';
import './App.css'; // 스타일 파일 또는 다른 리소스 파일을 불러올 수 있음
import NumberGuessGame from './NumberGuessGame'; // NumberGuessGame 컴포넌트를 가져옴

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* 다른 컴포넌트를 여기에서 사용할 수 있음 */}
        <h1>숫자 맞추기 게임 앱</h1>
        <NumberGuessGame /> {/* NumberGuessGame 컴포넌트를 렌더링 */}
      </header>
    </div>
  );
}

export default App;

