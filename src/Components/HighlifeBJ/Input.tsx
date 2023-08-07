import { useState } from 'react'
import './Input.css'
import Club from '../../Assets/Suits/Clubs.png'
import Diamond from '../../Assets/Suits/Diamond.png'
import Heart from '../../Assets/Suits/Heart.png'
import Spades from '../../Assets/Suits/Spades.png'

import RadioButtonGroup from './RadioButtonGroup'

export default function Input({ addCard, removeCard, addGame, removeGame, players, setPlayers }) {
    const [suit, setSuit] = useState('')
    const [rank, setRank] = useState('')

    return (
        <div className='input-main'>

            <div className='input-container '>
                <div>
                    {/* <h2> Number of players: </h2> */}
                    <RadioButtonGroup players={players} setPlayers={setPlayers}/>
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
                    <button className='button input-btn input-rank' onClick={() => { setRank('10') }}>
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
                <div className='input-row'>

                    <button className='button input-btn' onClick={() => { addCard(rank, suit, 'D', 'hit') }}>
                        Add Card
                    </button>
                    <button className='button input-btn' onClick={() => { removeCard() }}>
                        Remove Card
                    </button>
                    <button className='button input-btn' onClick={() => { addGame() }}>
                        Add Game
                    </button>
                    <button className='button input-btn' onClick={() => { removeGame() }}>
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
            <div>
                <h2> hello</h2>
            </div>
        </div>
    )
}