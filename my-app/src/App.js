import React from 'react';
import './App.css'; // 스타일 파일 또는 다른 리소스 파일을 불러올 수 있음
import BlogPost from './BlogPost'
import Game from './Game'
import NumberGuessGame from './NumberGuessGame';


function App() {
  return (
    // <div>
    //   <h1>내 블로그</h1>
    //   <BlogPost
    //   title="React 소개"
    //   author="서연"
    //   date="2023-09-15"
    //   content="임승빈 생일 축하해"/>
    //   <BlogPost
    //   title="멋쟁이사자처럼"
    //   author="현승"
    //   date="2023-09-20"
    //   content="잘 꾸려 가봅시다"/>
    // </div>
    // <div>
    //   <h1>게임 만들기</h1>
    //   <Game/>
    // </div>
    <div>
      <NumberGuessGame/>
    </div>
  );
}

export default App;

