import React, { useReducer, useState } from 'react';
import Board from './Board';
import "./GameStyle.css";
import { caculatorWinner } from '../../ultils/helpers';

const Game = () => {
    // const [board, setBoard]= useState(Array(9).fill(null));
    // const [xIsNext, setXIsNext]= useState(true);
    // const [state, setState] = useState({
    //     board: Array(9).fill(null),
    //     xIsNext: true,
    // });
    const initialState={
        board: Array(9).fill(null),
            xIsNext: true
    }
    const gameReducer=(state, action)=>{
        switch (action.type) {
            case 'CLICK':{
                const {board, xIsNext}=state;
                const {index, winner} = action.payload;
                if(winner || board[index]) return state;
                const nextState = JSON.parse(JSON.stringify(state));
                nextState.board[index] = xIsNext? "X":"O";
                nextState.xIsNext = !xIsNext; 
                return nextState;
            }
            case 'RESET':{
                const nextState = JSON.parse(JSON.stringify(state));
                    nextState.board= Array(9).fill(null);
                    nextState.xIsNext = true;
                return nextState;
            }
                
              
        
            default:
                break;
        }
        return state;
    }
    const [state, dispatch]= useReducer(gameReducer, initialState);
    const winner = caculatorWinner(state.board);
    const HandleClick =(index)=>{
        dispatch({
            type: 'CLICK',
            payload: {
                index,
                winner
            }

        })
        // const boardCopy = [... state.board];
        // if(winner || boardCopy[index]) return;
        // boardCopy[index]=state.xIsNext? 'X':'O';
        // setState({
        //     ...state,
        //     board: boardCopy,
        //     xIsNext: !state.xIsNext
        // });
        // setBoard(boardCopy);
        // setXIsNext(!xIsNext);
    };
    const HandleResetGame = ()=>{
        dispatch({
            type: 'RESET'
        })
        // setState({
        //    ...state,
        //     board: Array(9).fill(null),
        //     xIsNext: true
        // });
        // setBoard(Array(9).fill(null));
        // setXIsNext(true);
    }
    return (
        <div>
            <Board cells={state.board} onClick={HandleClick}></Board>
            {winner &&<div className='game-winner'>
               Winner is {winner}
               </div>}
            <button className='buton' onClick={HandleResetGame}>Reset Game</button>

        </div>
    );
};

export default Game;