import { useState } from 'react'
import './Input.css'
import Club from '../../Assets/Suits/Clubs.png'
import Diamond from '../../Assets/Suits/Diamond.png'
import Heart from '../../Assets/Suits/Heart.png'
import Spades from '../../Assets/Suits/Spades.png'

import RadioButtonGroup from './RadioButtonGroup'

export default function Input({ addCard, removeCard, addGame, removeGame, players, setPlayers, changePlayers, game, split, addSplit }) {
    const [suit, setSuit] = useState('S')
    const [rank, setRank] = useState('')

    const [stage, setStage] = useState(0)

    const [doubleActive, setDoubleActive] = useState(true)
    const [splitActive, setSplitActive] = useState(true)

    let scards = game.cardsList
    let prevAction = game.actions[game.actions.length - 1]

    const seq = turnOrder(players)

    function turnOrder(num) {
        const sequence = [];
        for (let i = 1; i <= num; i++) {
            sequence.push(i);
        }
        sequence.push(0);
        for (let i = 1; i <= num; i++) {
            sequence.push(i);
        }
        for (let i = 1; i <= num; i++) {
            sequence.push(i);
        }
        sequence.push(0);
        return sequence;
    }

    const undoTurn = () => {
        if (game.cards[game.cards.length - 1].action !== 'hit') {
            setStage(stage => stage - 1)
        }
        setDoubleActive(true)
    }

    function handleHit() {

        addCard({ player: seq[stage], action: 'hit', card: `${suit}${rank}` });
        setDoubleActive(false)
        setSplitActive(false)
    }

    function handleDouble() {
        addCard({ player: seq[stage], action: 'double', card: `${suit}${rank}` });
        setStage(stage => stage + 1);
    }

    function handleStand() {
        addCard({ player: seq[stage], action: 'stand' });
        if ((!['splitInitSplit', 'splitMain'].includes(prevAction.action))) {
            setStage(stage => stage + 1)
        }
    }

    function handleSplit() {
        split({ player: seq[stage], action: 'split' })
    }

    function handleAddSplit() {
        addSplit({ player: seq[stage], action: 'addSplit', card: `${suit}${rank}` })
    }

    function handleAdd() {
        addCard({ player: seq[stage], action: 'init', card: `${suit}${rank}` });
        if ((game.actions.length === 0 || (prevAction.action === 'init'))) {
            setStage(stage => stage + 1)
        }
    }

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

                {((stage < (3 + (players - 1) * 2)) || (prevAction.action === 'split' || prevAction.action === 'splitInitMain')) || (seq[stage] === 0 && stage >= players * 3 + 1) ?
                    <div className='input-row'>
                        <button className='button input-btn' onClick={() => { handleAdd(); }}>
                            Set card
                        </button>
                    </div>
                    :

                    // {stage >= (3 + (players - 1) * 2) && (scards[0].length != 1 || seq[stage] !== 'D') &&
                    <div className='input-row'>
                        <button className='button input-btn' onClick={handleHit}>
                            Hit
                        </button>
                        <button className='button input-btn' onClick={handleStand}>
                            Stand
                        </button>
                        <button className={`button input-btn ${doubleActive ? '' : 'inactive'}`} disabled={!doubleActive} onClick={handleDouble}>
                            Double
                        </button>
                        <button className={`button input-btn ${splitActive ? '' : 'inactive'}`} disabled={!splitActive} onClick={handleSplit}>
                            Split
                        </button>
                        <button className={`button input-btn ${splitActive ? '' : 'inactive'}`} disabled={!splitActive} onClick={handleAddSplit}>
                            Add Split
                        </button>
                    </div>}

                <div className='input-row'>
                    <button className='button input-btn' onClick={() => { removeCard(); undoTurn(); }}>
                        Remove Last
                    </button>
                    <button className='button input-btn' onClick={() => { addGame(); setStage(0); }}>
                        New Game
                    </button>
                    <button className='button input-btn' onClick={() => { removeGame(); setStage(0); }}>
                        Remove Game
                    </button>
                </div>

                <div className='card-container'>
                    <p className='rank-label'>
                        {rank}
                    </p>
                    <div>
                        {suit === 'S' ? <img src={Spades} /> : suit === 'H' ? <img src={Heart} /> : suit === 'C' ? <img src={Club} /> : <img src={Diamond} />}
                    </div>
                </div>
            </div>
        </div>
    )
}