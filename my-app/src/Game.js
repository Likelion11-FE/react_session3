import React,{useState} from "react";

function Game(){
    const [score,setScore] = useState(0);

    const increaseScore = () =>{
        setScore(score+10);
    }

    return(
        <div>
            <h2>게임 스코어: {score}</h2>
            <button onClick={increaseScore}>
                스코어 증가
            </button>
        </div>
    )
}
export default Game;