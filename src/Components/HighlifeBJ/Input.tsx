import { useState } from 'react'
import './Input.css'
import Club from '../../Assets/Suits/Clubs.png'
import Diamond from '../../Assets/Suits/Diamond.png'
import Heart from '../../Assets/Suits/Heart.png'
import Spades from '../../Assets/Suits/Spades.png'

import RadioButtonGroup from './RadioButtonGroup'

export default function Input({ addCard, removeCard, addGame, removeGame, players, setPlayers, changePlayers }) {
    const [suit, setSuit] = useState('S')
    const [rank, setRank] = useState('')

    const [stage, setStage] = useState(1)
    const [split, setSplit] = useState([false, false, false, false])

    return (
        <div className='input-main'>

            <div className='input-container '>
                <div>
                    {/* <h2> Number of players: </h2> */}
                    <RadioButtonGroup players={players} setPlayers={setPlayers} changePlayers={changePlayers} />
                </div>
                <div className='input-row'>
                    <button className='button input-btn input-rank' onClick={() => { setRank('A') }}>
                        A
                    </button>
                    <button className='button input-btn input-rank' onClick={() => { setRank('2') }}>
                        2
                    </button>
                    <button className='button input-btn input-rank' onClick={() => { setRank('3') }}>
                        3
                    </button>
                </div>
                <div className='input-row'>

                    <button className='button input-btn input-rank' onClick={() => { setRank('4') }}>
                        4
                    </button>
                    <button className='button input-btn input-rank' onClick={() => { setRank('5') }}>
                        5
                    </button>
                    <button className='button input-btn input-rank' onClick={() => { setRank('6') }}>
                        6
                    </button>
                </div>
                <div className='input-row'>
                    <button className='button input-btn input-rank' onClick={() => { setRank('7') }}>
                        7
                    </button>
                    <button className='button input-btn input-rank' onClick={() => { setRank('8') }}>
                        8
                    </button>
                    <button className='button input-btn input-rank' onClick={() => { setRank('9') }}>
                        9
                    </button>
                </div>
                <div className='input-row'>
                    <button className='button input-btn input-rank' onClick={() => { setRank('T') }}>
                        10
                    </button>
                    <button className='button input-btn input-rank' onClick={() => { setRank('J') }}>
                        J
                    </button>
                    <button className='button input-btn input-rank' onClick={() => { setRank('Q') }}>
                        Q
                    </button>
                    <button className='button input-btn input-rank' onClick={() => { setRank('K') }}>
                        K
                    </button>
                </div>

                <div className='input-row'>
                    <button className='button input-btn' onClick={() => { setSuit('S') }}>
                        <img
                            src={Spades} />
                    </button>
                    <button className='button input-btn' onClick={() => { setSuit('H') }}>
                        <img
                            src={Heart} />
                    </button>
                    <button className='button input-btn' onClick={() => { setSuit('C') }}>
                        <img
                            src={Club} />
                    </button>
                    <button className='button input-btn' onClick={() => { setSuit('D') }}>
                        <img
                            src={Diamond} />
                    </button>
                </div>
                {stage < (4 + (players-1) *2) &&
                    <div className='input-row'>
                        <button className='button input-btn' onClick={() => { addCard({ player: '1', action: 'init', card: `${suit}${rank}` }); setStage(stage => stage + 1) }}>
                            Set card
                        </button>
                    </div>}

                {stage >= (4 + (players-1) *2) &&
                    <div className='input-row'>
                        <button className='button input-btn' onClick={() => { addCard({ player: '1', action: 'hit', card: `${suit}${rank}` }); setStage(stage => stage + 1) }}>
                            Hit
                        </button>
                        <button className='button input-btn' onClick={() => { addCard({ player: '1', action: 'stand' }) }}>
                            Stand
                        </button>
                        <button className='button input-btn' onClick={() => { addCard({ player: '1', action: 'double', card: `${suit}${rank}` }) }}>
                            Double
                        </button>
                        <button className='button input-btn' onClick={() => { addCard({ player: '1', action: 'split' }) }}>
                            Split
                        </button>
                    </div>}

                <div className='input-row'>
                    <button className='button input-btn' onClick={() => { removeCard(); setStage(stage => stage - 1) }}>
                        remove last
                    </button>
                    <button className='button input-btn' onClick={() => { addGame(); setStage(1) }}>
                        New Game
                    </button>
                    <button className='button input-btn' onClick={() => { removeGame(); setStage(1) }}>
                        Remove Game
                    </button>
                </div>

                <div className='card-container'>
                    <h1>
                        {rank}
                    </h1>
                    <div>
                        {suit === 'S' ? <img src={Spades} /> : suit === 'H' ? <img src={Heart} /> : suit === 'C' ? <img src={Club} /> : suit === 'H' ? <img src={Heart} /> : <></>}
                    </div>
                </div>
            </div>
        </div>
    )
}