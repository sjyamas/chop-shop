import { useState, useReducer, useEffect } from 'react'
import Input from './Input'

import cardsReducer from './cardsReducer.js'

import Table from './visuals/Table.js'

import './Dashboard.css'

export default function HighLifeBJ() {
    const [games, dispatch] = useReducer(cardsReducer, [{ "gameId": 0, "players": "1", "cards": [], "results": [] }])
    const [players, setPlayers] = useState('1')
    const [changePlayers, setChangePlayers] = useState(true)

    useEffect(() => {
        handleChangePlayer()
    }, [players])

    let gameId = 0
    let cardId = 0

    function handleAddGame() {
        dispatch({
            type: 'addGame',
            gameId: gameId++,
            players: players,
        });
        cardId = 0
        console.log(games)
        setChangePlayers(true)
    }

    function handleChangePlayer() {
        dispatch({
            type: 'player',
            players: players
        })
    }

    function handleAddCard(obj) {
        dispatch({
            type: 'addCard',
            obj: obj,
        });
        setChangePlayers(false)
        console.log(games)
    }

    function handleRemoveCard() {
        dispatch({
            type: 'removeCard',
            cardId: cardId
        })
        if (games[games.length - 1].cards.length <= 1) {
            setChangePlayers(true)
        }
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
        setChangePlayers(true)
    }

    return (
        <div className="dash-container">
            <div>
                <Input addCard={handleAddCard} addGame={handleAddGame} removeCard={handleRemoveCard} removeGame={handleRemoveGame} players={players} setPlayers={setPlayers} changePlayers={changePlayers} cards={games[games.length - 1]} />
            </div>
            <div>
                <Table cards={games[games.length - 1]} players={players} />
                <p>
                    {JSON.stringify(games)}
                </p>
            </div>
        </div>
    )
}