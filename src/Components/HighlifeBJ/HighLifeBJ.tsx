import { useState, useReducer } from 'react'
import Input from './Input'

import cardsReducer from './cardsReducer.js'

import Table from './visuals/Table.js'

import './Dashboard.css'
import CardStack from './visuals/CardStack.js'

type Player = 'D' | 'P1' | 'P2' | 'P3' | 'P4'
type Action = 'init1' | 'init2' | 'hit' | 'double' | 'split' | 'splitHit'

export default function HighLifeBJ() {
    const [games, dispatch] = useReducer(cardsReducer, [])
    let gameId = 0
    let cardId = 0

    function handleAddGame() {
        dispatch({
            type: 'addGame',
            gameId: gameId++,
        });
        cardId = 0
        console.log(games)

    }

    function handleAddCard(rank: number, suit: string, player: Player, action: Action) {
        dispatch({
            type: 'addCard',
            cardId: cardId++,
            rank: rank,
            suit: suit,
            player: player,
            action: action
        });
        console.log(games)
    }

    function handleRemoveCard() {
        dispatch({
            type: 'removeCard',
            cardId: cardId
        })
        console.log(games)

    }

    // function handleFinishGame(){
    //     dispatch({
    //         type: 'finishGame',
    //         gameId: gameId
    //     })
    // }

    function handleRemoveGame() {
        dispatch({
            type: 'removeGame',
            gameId: gameId
        })
        console.log(games)

    }



    return (
        <div className="dash-container">
            <div>
                <Input addCard={handleAddCard} addGame={handleAddGame} removeCard={handleRemoveCard} removeGame={handleRemoveGame} />
            </div>
            <div>
                <CardStack/>
                {/* <Table /> */}
                <p>
                    {JSON.stringify(games)}
                </p>
            </div>
        </div>
    )
}