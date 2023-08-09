import { useState, useReducer, useEffect } from 'react'
import Input from './Input'

import cardsReducer from './cardsReducer.js'

import Table from './visuals/Table.js'

import './Dashboard.css'

export default function HighLifeBJ() {
    const [games, dispatch] = useReducer(cardsReducer, [{ gameId: 0, players: 1, actions: [], cardsList: [{ player: 0, cards: [], split: [] }, { player: 1, cards: [], split: [] }] }])
    const [players, setPlayers] = useState(1)
    const [changePlayers, setChangePlayers] = useState(true)

    useEffect(() => {
        handleChangePlayer()
    }, [players])

    let gameId = 0
    let cardId = 0


    // for(let i = 0; i <= players; i++){
    //     const cardsString = currentGame.filter(card => card.player === p ).map(card => card.card)
    //     // const selectedPlayerCards = cardsString.map(key => card[key]);
    //     cardList[i] = cardsString.filter(element => element !== undefined)
    // }


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

    function handleAddCard({ player, action, card }) {
        dispatch({
            type: 'addCard',
            player: player,
            action: action,
            card: card,
        });
        setChangePlayers(false)
    }

    function handleRemoveCard() {
        dispatch({
            type: 'removeCard',
            cardId: cardId
        })
        if (games[games.length - 1].cards.length <= 1) {
            setChangePlayers(true)
        }
    }

    function handleSplit() {
        dispatch({
            type: 'split',
        })
    }

    function handleAddSplit({ player, action, card }) {
        dispatch({
            type: 'addSplit',
            player: player,
            card: card
        })
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
                <Input addCard={handleAddCard} addGame={handleAddGame} removeCard={handleRemoveCard} removeGame={handleRemoveGame} players={players} setPlayers={setPlayers} changePlayers={changePlayers} cards={games[games.length - 1]} split={handleSplit} addSplit={handleAddSplit} />
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